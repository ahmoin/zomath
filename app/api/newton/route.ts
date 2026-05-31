import { jsonSchema, stepCountIs, streamText, tool } from "ai";
import { headers } from "next/headers";
import type { z } from "zod";
import { postRequestBodySchema } from "@/app/api/newton/schema";
import { newtonPrompt } from "@/lib/ai/prompts";
import { chatModels } from "@/lib/ai/models";
import { getLanguageModel } from "@/lib/ai/providers";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { journal, practice, project } from "@/lib/schema";
import { ChatbotError } from "@/lib/errors";
import { checkAndIncrementUsage } from "@/lib/usage";
import { createHeadlessEditor } from "@lexical/headless";
import { $convertFromMarkdownString, TRANSFORMERS } from "@lexical/markdown";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { ListNode, ListItemNode } from "@lexical/list";
import { CodeNode, CodeHighlightNode } from "@lexical/code";
import { LinkNode } from "@lexical/link";

type LexicalJsonNode = {
	type: string;
	text?: string;
	version: number;
	children?: LexicalJsonNode[];
	[key: string]: unknown;
};

function injectEquationNodes(node: LexicalJsonNode): LexicalJsonNode {
	if (!node.children) return node;
	return {
		...node,
		children: node.children.flatMap((child) => {
			if (child.type !== "text" || typeof child.text !== "string") {
				return [injectEquationNodes(child)];
			}
			const text = child.text;
			const segments: LexicalJsonNode[] = [];
			const regex = /\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g;
			let lastIndex = 0;
			let match: RegExpExecArray | null;
			// biome-ignore lint/suspicious/noAssignInExpressions: loop idiom
			while ((match = regex.exec(text)) !== null) {
				if (match.index > lastIndex) {
					segments.push({ ...child, text: text.slice(lastIndex, match.index) });
				}
				const isBlock = match[1] !== undefined;
				const latex = (match[1] ?? match[2] ?? "").trim();
				segments.push({
					type: "equation",
					equation: latex,
					inline: !isBlock,
					version: 1,
				});
				lastIndex = regex.lastIndex;
			}
			if (segments.length === 0) return [child];
			if (lastIndex < text.length) {
				segments.push({ ...child, text: text.slice(lastIndex) });
			}
			return segments;
		}),
	};
}

function markdownToLexicalJson(markdown: string): string {
	const editor = createHeadlessEditor({
		nodes: [
			HeadingNode,
			QuoteNode,
			ListNode,
			ListItemNode,
			CodeNode,
			CodeHighlightNode,
			LinkNode,
		],
		onError: () => {},
	});
	editor.update(
		() => {
			$convertFromMarkdownString(markdown, TRANSFORMERS);
		},
		{ discrete: true },
	);
	const state = editor.getEditorState().toJSON() as { root: LexicalJsonNode };
	const patched = injectEquationNodes(state.root);
	return JSON.stringify({ ...state, root: patched });
}

export async function POST(request: Request) {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) return new ChatbotError("unauthorized:auth").toResponse();

	if ((session.user as { plan?: string }).plan !== "plus") {
		const { allowed } = await checkAndIncrementUsage(session.user.id, "newton");
		if (!allowed) {
			return Response.json(
				{ error: "rate_limit", message: "You've reached your daily Newton limit (10/day). Upgrade to Plus for unlimited access." },
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
					const buf = Buffer.from(p.data!, "base64");
					if (p.mediaType!.startsWith("image/")) {
						return {
							type: "image" as const,
							image: buf,
							mimeType: p.mediaType!,
						};
					}
					return { type: "file" as const, data: buf, mediaType: p.mediaType! };
				});
			const content =
				fileParts.length > 0
					? [{ type: "text" as const, text: textContent }, ...fileParts]
					: textContent;
			// biome-ignore lint/suspicious/noExplicitAny: multimodal content union
			return { role: m.role as "user" | "assistant", content } as any;
		},
	);

	const tools = {
		createJournal: tool({
			description:
				"Create a new study notes journal document for the user in Zomath. A journal is a markdown document for study notes, summaries, explanations, or any written content — not a diary. Call this whenever the user asks to 'make a journal', 'create notes', 'write a document', or similar. Pass projectId to immediately associate the journal with a project.",
			inputSchema: jsonSchema<{
				title: string;
				content: string;
				projectId?: string;
			}>({
				type: "object",
				properties: {
					title: {
						type: "string",
						description: "A short descriptive title for the journal",
					},
					content: {
						type: "string",
						description: "The full markdown content of the journal",
					},
					projectId: {
						type: "string",
						description:
							"Optional project ID to add this journal to immediately",
					},
				},
				required: ["title", "content"],
			}),
			execute: async ({
				title,
				content,
				projectId,
			}: {
				title: string;
				content: string;
				projectId?: string;
			}): Promise<{ journalId: string; title: string }> => {
				const id = crypto.randomUUID();
				await db.insert(journal).values({
					id,
					userId: session.user.id,
					title,
					content: markdownToLexicalJson(content),
					projectId: projectId ?? null,
				});
				return { journalId: id, title };
			},
		}),
		createPractice: tool({
			description:
				"Create a practice quiz for the user in Zomath. Call this when the user asks to 'make a practice', 'create a quiz', 'test me on', or similar. Generate multiple-choice questions with 4 options each, one correct answer, an explanation per option, and a hint per question.",
			inputSchema: jsonSchema<{
				title: string;
				topic: string;
				format: string;
				questions: {
					question: string;
					hint: string;
					options: {
						label: string;
						text: string;
						correct: boolean;
						explanation: string;
					}[];
				}[];
			}>({
				type: "object",
				properties: {
					title: { type: "string", description: "Short descriptive title" },
					topic: { type: "string", description: "The subject being practiced" },
					format: {
						type: "string",
						enum: ["quiz", "flashcard"],
						description: "Practice format",
					},
					questions: {
						type: "array",
						description: "6-10 questions",
						items: {
							type: "object",
							properties: {
								question: { type: "string" },
								hint: { type: "string" },
								options: {
									type: "array",
									items: {
										type: "object",
										properties: {
											label: { type: "string" },
											text: { type: "string" },
											correct: { type: "boolean" },
											explanation: { type: "string" },
										},
										required: ["label", "text", "correct", "explanation"],
									},
								},
							},
							required: ["question", "hint", "options"],
						},
					},
				},
				required: ["title", "topic", "format", "questions"],
			}),
			execute: async ({
				title,
				topic,
				format,
				questions,
			}: {
				title: string;
				topic: string;
				format: string;
				questions: object[];
			}): Promise<{ practiceId: string; title: string }> => {
				const id = crypto.randomUUID();
				await db.insert(practice).values({
					id,
					userId: session.user.id,
					title,
					topic,
					format,
					questions: JSON.stringify(questions),
				});
				return { practiceId: id, title };
			},
		}),
		updateJournal: tool({
			description:
				"Update the content (and optionally title) of an existing journal. Use this when the user asks to edit, modify, add to, or fix an existing journal. Call listJournals first to find the journal ID if you don't have it.",
			inputSchema: jsonSchema<{
				journalId: string;
				content: string;
				title?: string;
			}>({
				type: "object",
				properties: {
					journalId: {
						type: "string",
						description: "The ID of the journal to update",
					},
					content: {
						type: "string",
						description: "The full new markdown content of the journal",
					},
					title: { type: "string", description: "Optional new title" },
				},
				required: ["journalId", "content"],
			}),
			execute: async ({
				journalId,
				content,
				title,
			}: {
				journalId: string;
				content: string;
				title?: string;
			}): Promise<{ journalId: string; title: string; updated: boolean }> => {
				const existing = await db
					.select({ title: journal.title })
					.from(journal)
					.where(eq(journal.id, journalId))
					.then((r) => r[0] ?? null);
				if (!existing)
					return { journalId, title: title ?? "Unknown", updated: false };
				await db
					.update(journal)
					.set({
						content: markdownToLexicalJson(content),
						...(title ? { title } : {}),
					})
					.where(eq(journal.id, journalId));
				return { journalId, title: title ?? existing.title, updated: true };
			},
		}),
		listJournals: tool({
			description:
				"List the user's journals with their IDs and titles. Use this to find a journal ID before calling addJournalToProject.",
			inputSchema: jsonSchema<Record<string, never>>({
				type: "object",
				properties: {},
			}),
			execute: async () => {
				const entries = await db
					.select({
						id: journal.id,
						title: journal.title,
						projectId: journal.projectId,
					})
					.from(journal)
					.where(eq(journal.userId, session.user.id));
				return entries;
			},
		}),
		listProjects: tool({
			description:
				"List the user's projects with their IDs and titles. Use this to find a project ID before calling addJournalToProject.",
			inputSchema: jsonSchema<Record<string, never>>({
				type: "object",
				properties: {},
			}),
			execute: async () => {
				const entries = await db
					.select({ id: project.id, title: project.title })
					.from(project)
					.where(eq(project.userId, session.user.id));
				return entries;
			},
		}),
		createProject: tool({
			description:
				"Create a new project (folder) in Zomath. A project groups journals together. Call this when the user asks to 'create a project', 'make a folder', or similar.",
			inputSchema: jsonSchema<{ title: string }>({
				type: "object",
				properties: {
					title: {
						type: "string",
						description: "Short descriptive project name",
					},
				},
				required: ["title"],
			}),
			execute: async ({
				title,
			}: {
				title: string;
			}): Promise<{ projectId: string; title: string }> => {
				const id = crypto.randomUUID();
				await db.insert(project).values({ id, userId: session.user.id, title });
				return { projectId: id, title };
			},
		}),
		addJournalToProject: tool({
			description:
				"Add an existing journal to an existing project by setting its projectId. Use this after createProject or when the user asks to move a journal into a project.",
			inputSchema: jsonSchema<{ journalId: string; projectId: string }>({
				type: "object",
				properties: {
					journalId: { type: "string", description: "The journal ID to add" },
					projectId: {
						type: "string",
						description: "The project ID to add it to",
					},
				},
				required: ["journalId", "projectId"],
			}),
			execute: async ({
				journalId,
				projectId,
			}: {
				journalId: string;
				projectId: string;
			}) => {
				await db
					.update(journal)
					.set({ projectId })
					.where(eq(journal.id, journalId));
				return { ok: true };
			},
		}),
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
