import { tavily } from "@tavily/core";
import { stepCountIs, streamText, tool } from "ai";
import { and, eq } from "drizzle-orm";
import { headers } from "next/headers";
import { z } from "zod";
import { DEFAULT_CHAT_MODEL } from "@/lib/ai/models";
import { researchNewtonPrompt } from "@/lib/ai/prompts";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { ChatbotError } from "@/lib/errors";
import { journal, project } from "@/lib/schema";
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

	const collectedSources: {
		number: string;
		title: string;
		url: string;
		type: "web" | "journal";
	}[] = [];
	let sourceCounter = 0;

	const result = streamText({
		model: DEFAULT_CHAT_MODEL,
		system: researchNewtonPrompt + currentJournalContext,
		// biome-ignore lint/suspicious/noExplicitAny: AI SDK union type
		messages: [{ role: "user", content: messageContent as any }],
		stopWhen: stepCountIs(8),
		tools: {
			listJournals: tool({
				description:
					"List all journals belonging to the user with their titles. Use this to find relevant journals before reading them.",
				inputSchema: z.object({}),
				execute: async () => {
					const entries = await db.query.journal.findMany({
						where: eq(journal.userId, userId),
						columns: {
							id: true,
							title: true,
							projectId: true,
							updatedAt: true,
						},
					});
					return entries;
				},
			}),
			readJournal: tool({
				description: "Read the full content of a specific journal by ID.",
				inputSchema: z.object({
					journalId: z.string().describe("The ID of the journal to read"),
				}),
				execute: async ({ journalId: jid }) => {
					const entry = await db.query.journal.findFirst({
						where: and(eq(journal.id, jid), eq(journal.userId, userId)),
					});
					if (!entry) return { error: "Journal not found." };
					sourceCounter++;
					collectedSources.push({
						number: String(sourceCounter),
						title: entry.title,
						url: `/journals/${entry.id}`,
						type: "journal",
					});
					return {
						sourceNumber: sourceCounter,
						title: entry.title,
						content: parseJournalContent(entry.content),
					};
				},
			}),
			listProjects: tool({
				description: "List all projects belonging to the user.",
				inputSchema: z.object({}),
				execute: async () => {
					const entries = await db.query.project.findMany({
						where: eq(project.userId, userId),
						columns: { id: true, title: true, updatedAt: true },
					});
					return entries;
				},
			}),
			readProject: tool({
				description: "Read a project and all its journals.",
				inputSchema: z.object({
					projectId: z.string().describe("The ID of the project to read"),
				}),
				execute: async ({ projectId }) => {
					const entry = await db.query.project.findFirst({
						where: and(eq(project.id, projectId), eq(project.userId, userId)),
						with: {
							journals: { columns: { id: true, title: true, updatedAt: true } },
						},
					});
					if (!entry) return { error: "Project not found." };
					return entry;
				},
			}),
			searchWeb: tool({
				description:
					"Search the web for up-to-date information on a topic using Tavily.",
				inputSchema: z.object({
					query: z.string().describe("The search query"),
				}),
				execute: async ({ query: searchQuery }) => {
					const tv = tavily({ apiKey: process.env.TAVILY_API_KEY ?? "" });
					const searchResult = await tv.search(searchQuery, { maxResults: 8 });
					const results = searchResult.results.map((r) => {
						sourceCounter++;
						collectedSources.push({
							number: String(sourceCounter),
							title: r.title,
							url: r.url,
							type: "web",
						});
						return {
							sourceNumber: sourceCounter,
							title: r.title,
							url: r.url,
							content: r.content,
						};
					});
					return results;
				},
			}),
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
				if (!sourcesSent && collectedSources.length > 0) {
					controller.enqueue(
						encoder.encode(
							`data:sources:${JSON.stringify(collectedSources)}\n\n`,
						),
					);
					sourcesSent = true;
				}
				controller.enqueue(encoder.encode(chunk));
			}
			if (!sourcesSent && collectedSources.length > 0) {
				controller.enqueue(
					encoder.encode(
						`data:sources:${JSON.stringify(collectedSources)}\n\n`,
					),
				);
			}
			controller.close();
		},
	});

	return new Response(stream, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
