import { stepCountIs, streamText } from "ai";
import { headers } from "next/headers";
import type { z } from "zod";
import { postRequestBodySchema } from "@/app/api/newton/schema";
import { chatModels } from "@/lib/ai/models";
import { newtonPrompt } from "@/lib/ai/prompts";
import { getLanguageModel } from "@/lib/ai/providers";
import {
	addJournalToProject,
	createJournal,
	createPractice,
	createProject,
	listJournals,
	listProjects,
	updateJournal,
} from "@/lib/ai/tools";
import { auth } from "@/lib/auth";
import { ChatbotError } from "@/lib/errors";
import { checkAndIncrementUsage } from "@/lib/usage";

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

	let body: z.infer<typeof postRequestBodySchema>;
	try {
		body = postRequestBodySchema.parse(await request.json());
	} catch (_) {
		return new ChatbotError("bad_request:api").toResponse();
	}

	const modelConfig = chatModels.find((m) => m.id === body.selectedChatModel);
	const providerOptions = modelConfig?.reasoningEffort
		? { openai: { reasoningEffort: modelConfig.reasoningEffort } }
		: undefined;

	const aiMessages = (body.messages ?? []).map(
		(m: { id: string; role: string; parts: Record<string, unknown>[] }) => {
			const parts = m.parts as {
				type: string;
				text?: string;
				mediaType?: string;
				data?: string;
			}[];
			const textContent = parts
				.filter((p) => p.type === "text")
				.map((p) => p.text ?? "")
				.join("");
			const fileParts = parts
				.filter((p) => p.type === "file" && p.data && p.mediaType)
				.map((p) => {
					const buf = Buffer.from(p.data ?? "", "base64");
					if (p.mediaType?.startsWith("image/")) {
						return {
							type: "image" as const,
							image: buf,
							mimeType: p.mediaType ?? "",
						};
					}
					return {
						type: "file" as const,
						data: buf,
						mediaType: p.mediaType ?? "",
					};
				});
			const content =
				fileParts.length > 0
					? [{ type: "text" as const, text: textContent }, ...fileParts]
					: textContent;
			// biome-ignore lint/suspicious/noExplicitAny: multimodal content union
			return { role: m.role as "user" | "assistant", content } as any;
		},
	);

	const userId = session.user.id;
	const tools = {
		createJournal: createJournal({ userId }),
		updateJournal: updateJournal({ userId }),
		createPractice: createPractice({ userId }),
		listJournals: listJournals({ userId }),
		listProjects: listProjects({ userId }),
		createProject: createProject({ userId }),
		addJournalToProject: addJournalToProject({ userId }),
	};

	const encoder = new TextEncoder();

	async function processStream(controller: ReadableStreamDefaultController) {
		const result = streamText({
			model: getLanguageModel(body.selectedChatModel),
			system: newtonPrompt,
			providerOptions,
			stopWhen: stepCountIs(5),
			tools,
			messages: aiMessages,
		});
		for await (const part of result.fullStream) {
			if (part.type === "text-delta") {
				controller.enqueue(encoder.encode(`0:${JSON.stringify(part.text)}\n`));
			} else if (part.type === "reasoning-delta") {
				controller.enqueue(encoder.encode(`g:${JSON.stringify(part.text)}\n`));
			} else if (part.type === "tool-call") {
				const p = part as unknown as { toolName: string };
				controller.enqueue(
					encoder.encode(
						`s:${JSON.stringify({ name: p.toolName, status: "running" })}\n`,
					),
				);
			} else if (part.type === "tool-result") {
				const p = part as unknown as { toolName: string; output: unknown };
				controller.enqueue(
					encoder.encode(
						`s:${JSON.stringify({ name: p.toolName, status: "done" })}\n`,
					),
				);
				if (p.toolName === "createJournal") {
					const r = p.output as { journalId: string; title: string };
					controller.enqueue(
						encoder.encode(
							`j:${JSON.stringify({ id: r.journalId, title: r.title, updated: false })}\n`,
						),
					);
				} else if (p.toolName === "updateJournal") {
					const r = p.output as {
						journalId: string;
						title: string;
						updated: boolean;
					};
					controller.enqueue(
						encoder.encode(
							`j:${JSON.stringify({ id: r.journalId, title: r.title, updated: true })}\n`,
						),
					);
				} else if (p.toolName === "createPractice") {
					const r = p.output as { practiceId: string; title: string };
					controller.enqueue(
						encoder.encode(
							`p:${JSON.stringify({ id: r.practiceId, title: r.title })}\n`,
						),
					);
				} else if (p.toolName === "createProject") {
					const r = p.output as { projectId: string; title: string };
					controller.enqueue(
						encoder.encode(
							`r:${JSON.stringify({ id: r.projectId, title: r.title })}\n`,
						),
					);
				}
			}
		}
	}

	const stream = new ReadableStream({
		async start(controller) {
			const maxRetries = 3;
			let attempt = 0;
			while (attempt <= maxRetries) {
				try {
					await processStream(controller);
					break;
				} catch (err) {
					const status = (err as { statusCode?: number }).statusCode;
					if (status === 429 && attempt < maxRetries) {
						const waitSeconds = 2 ** attempt * 5;
						controller.enqueue(
							encoder.encode(`w:${JSON.stringify({ seconds: waitSeconds })}\n`),
						);
						await new Promise((r) => setTimeout(r, waitSeconds * 1000));
						attempt++;
					} else {
						controller.enqueue(
							encoder.encode(
								`e:${JSON.stringify({ message: status === 429 ? "Rate limit reached. Please try again later." : "Something went wrong. Please try again." })}\n`,
							),
						);
						break;
					}
				}
			}
			controller.close();
		},
	});

	return new Response(stream, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
