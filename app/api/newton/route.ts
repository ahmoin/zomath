import { jsonSchema, stepCountIs, streamText, tool } from "ai";
import { headers } from "next/headers";
import type { z } from "zod";
import { postRequestBodySchema } from "@/app/api/newton/schema";
import { newtonPrompt } from "@/lib/ai/prompts";
import { chatModels } from "@/lib/ai/models";
import { getLanguageModel } from "@/lib/ai/providers";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { journal } from "@/lib/schema";
import { ChatbotError } from "@/lib/errors";
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

	const result = streamText({
		model: getLanguageModel(body.selectedChatModel),
		system: newtonPrompt,
		providerOptions,
		stopWhen: stepCountIs(2),
		tools: {
			createJournal: tool({
				description:
					"Create a new study notes journal document for the user in Zomath. A journal is a markdown document for study notes, summaries, explanations, or any written content — not a diary. Call this whenever the user asks to 'make a journal', 'create notes', 'write a document', or similar.",
				inputSchema: jsonSchema<{ title: string; content: string }>({
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
					},
					required: ["title", "content"],
				}),
				execute: async ({
					title,
					content,
				}: {
					title: string;
					content: string;
				}): Promise<{ journalId: string; title: string }> => {
					const id = crypto.randomUUID();
					await db.insert(journal).values({
						id,
						userId: session.user.id,
						title,
						content: markdownToLexicalJson(content),
					});
					return { journalId: id, title };
				},
			}),
		},
		messages: (body.messages ?? []).map(
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
						return {
							type: "file" as const,
							data: buf,
							mediaType: p.mediaType!,
						};
					});
				const content =
					fileParts.length > 0
						? [{ type: "text" as const, text: textContent }, ...fileParts]
						: textContent;
				// biome-ignore lint/suspicious/noExplicitAny: multimodal content union
				return { role: m.role as "user" | "assistant", content } as any;
			},
		),
	});

	const stream = new ReadableStream({
		async start(controller) {
			const encoder = new TextEncoder();
			for await (const part of result.fullStream) {
				if (part.type === "text-delta") {
					controller.enqueue(
						encoder.encode(`0:${JSON.stringify(part.text)}\n`),
					);
				} else if (part.type === "reasoning-delta") {
					controller.enqueue(
						encoder.encode(`g:${JSON.stringify(part.text)}\n`),
					);
				} else if (
					part.type === "tool-result" &&
					part.toolName === "createJournal"
				) {
					const r = part.output as { journalId: string; title: string };
					controller.enqueue(
						encoder.encode(
							`j:${JSON.stringify({ id: r.journalId, title: r.title })}\n`,
						),
					);
				}
			}
			controller.close();
		},
	});

	return new Response(stream, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
