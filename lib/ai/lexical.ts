import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { createHeadlessEditor } from "@lexical/headless";
import { LinkNode } from "@lexical/link";
import { ListItemNode, ListNode } from "@lexical/list";
import { $convertFromMarkdownString, TRANSFORMERS } from "@lexical/markdown";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import type { LexicalJsonNode } from "@/lib/types";

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

export function markdownToLexicalJson(markdown: string): string {
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
