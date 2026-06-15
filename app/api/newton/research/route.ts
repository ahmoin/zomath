import { generateText, stepCountIs, streamText } from "ai";
import { and, eq } from "drizzle-orm";
import { headers } from "next/headers";
import { DEFAULT_CHAT_MODEL } from "@/lib/ai/models";
import { researchNewtonPrompt } from "@/lib/ai/prompts";
import type { SourceTracker } from "@/lib/ai/tools";
import {
	listJournals,
	listProjects,
	readJournal,
	readProject,
	searchWeb,
} from "@/lib/ai/tools";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { ChatbotError } from "@/lib/errors";
import { journal } from "@/lib/schema";
import { checkAndIncrementUsage } from "@/lib/usage";
import { parseJournalContent } from "@/lib/utils";

export const maxDuration = 60;

export async function POST(request: Request) {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) return new ChatbotError("unauthorized:auth").toResponse();

	if ((session.user as { plan?: string }).plan !== "plus") {
		const { allowed } = await checkAndIncrementUsage(session.user.id, "newton");
		if (!allowed) {
			return Response.json(
				{
					error: "rate_limit",
					message:
						"You've reached your daily Newton limit (10/day). Upgrade to Plus for unlimited access.",
				},
				{ status: 429 },
			);
		}
	}

	const { query, journalId, files } = await request.json();
	if (!query?.trim()) return new ChatbotError("bad_request:api").toResponse();

	type FileAttachment = { name: string; url: string };

	async function buildMessageContent(
		text: string,
		attachments: FileAttachment[],
	) {
		if (!attachments?.length) return text;

		const parts: object[] = [{ type: "text", text }];

		await Promise.all(
			attachments.map(async (f) => {
				const ext = f.name.split(".").pop()?.toLowerCase() ?? "";
				const mimeMap: Record<string, string> = {
					pdf: "application/pdf",
					png: "image/png",
					jpg: "image/jpeg",
					jpeg: "image/jpeg",
					txt: "text/plain",
					md: "text/plain",
					csv: "text/csv",
					json: "application/json",
				};
				const mimeType = mimeMap[ext] ?? "application/octet-stream";
				const res = await fetch(f.url);
				const buffer = await res.arrayBuffer();
				const base64 = Buffer.from(buffer).toString("base64");

				if (mimeType.startsWith("image/")) {
					parts.push({
						type: "image",
						image: `data:${mimeType};base64,${base64}`,
					});
				} else {
					parts.push({
						type: "file",
						data: `data:${mimeType};base64,${base64}`,
						mimeType,
					});
				}
			}),
		);

		return parts;
	}

	const messageContent = await buildMessageContent(query, files ?? []);

	const userId = session.user.id;

	let currentJournalContext = "";
	if (journalId) {
		const entry = await db.query.journal.findFirst({
			where: and(eq(journal.id, journalId), eq(journal.userId, userId)),
		});
		if (entry) {
			currentJournalContext = `\n\n## Current Journal: "${entry.title}"\n${parseJournalContent(entry.content)}`;
		}
	}

	const tracker: SourceTracker = { sources: [], count: 0 };

	const classifyPromise = journalId
		? generateText({
				model: DEFAULT_CHAT_MODEL,
				maxTokens: 3,
				prompt: `A user has a journal open and sent this message to an AI assistant: "${query}"\n\nShould the AI's response be offered as journal content to add or apply to the journal? Answer only "yes" or "no".\n\nExamples that should be yes: "add notes about X", "replace Y with Z", "rewrite this", "summarize into notes", "write an intro", "fix the grammar".\nExamples that should be no: "what does this mean?", "is this correct?", "explain this to me", "what is this journal about?", "review my notes".`,
			}).catch(() => null)
		: Promise.resolve(null);

	const result = streamText({
		model: DEFAULT_CHAT_MODEL,
		system: researchNewtonPrompt + currentJournalContext,
		// biome-ignore lint/suspicious/noExplicitAny: AI SDK union type
		messages: [{ role: "user", content: messageContent as any }],
		stopWhen: stepCountIs(8),
		tools: {
			listJournals: listJournals({ userId }),
			readJournal: readJournal({ userId, tracker }),
			listProjects: listProjects({ userId }),
			readProject: readProject({ userId }),
			searchWeb: searchWeb({ tracker }),
		},
	});

	const encoder = new TextEncoder();
	let sourcesSent = false;

	const stream = new ReadableStream({
		async start(controller) {
			for await (const part of result.fullStream) {
				if (part.type === "tool-call") {
					const p = part as unknown as { toolName: string };
					controller.enqueue(
						encoder.encode(
							`data:step:${JSON.stringify({ name: p.toolName, status: "running" })}\n\n`,
						),
					);
					continue;
				}
				if (part.type === "tool-result") {
					const p = part as unknown as { toolName: string };
					controller.enqueue(
						encoder.encode(
							`data:step:${JSON.stringify({ name: p.toolName, status: "done" })}\n\n`,
						),
					);
					continue;
				}
				if (part.type !== "text-delta") continue;
				const chunk = (part as unknown as { text: string }).text;
				if (!sourcesSent && tracker.sources.length > 0) {
					controller.enqueue(
						encoder.encode(
							`data:sources:${JSON.stringify(tracker.sources)}\n\n`,
						),
					);
					sourcesSent = true;
				}
				controller.enqueue(encoder.encode(chunk));
			}
			if (!sourcesSent && tracker.sources.length > 0) {
				controller.enqueue(
					encoder.encode(`data:sources:${JSON.stringify(tracker.sources)}\n\n`),
				);
			}
			const classification = await classifyPromise;
			if (classification?.text.trim().toLowerCase().startsWith("y")) {
				controller.enqueue(encoder.encode("\ndata:suggest:true\n\n"));
			}
			controller.close();
		},
	});

	return new Response(stream, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
