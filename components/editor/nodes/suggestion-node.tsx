"use client";

import {
	$createListItemNode,
	$createListNode,
} from "@lexical/list";
import { $createHeadingNode, $createQuoteNode } from "@lexical/rich-text";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
	$createParagraphNode,
	$createTextNode,
	$getNodeByKey,
	type DOMExportOutput,
	DecoratorNode,
	type EditorConfig,
	type LexicalEditor,
	type LexicalNode,
	type NodeKey,
	type SerializedLexicalNode,
	type Spread,
} from "lexical";
import React from "react";
import { Button } from "@/components/ui/button";
import type { SuggestionBlock } from "@/lib/types";

export type SerializedSuggestionNode = Spread<
	{ block: SuggestionBlock },
	SerializedLexicalNode
>;

function clean(text: string): string {
	return text
		.replace(/\[\d+(?:,\s*\d+)*\]/g, "")
		.replace(/\*\*(.+?)\*\*/g, "$1")
		.replace(/\*(.+?)\*/g, "$1")
		.replace(/`(.+?)`/g, "$1")
		.replace(/\[(.+?)\]\(.*?\)/g, "$1")
		.replace(/\s{2,}/g, " ")
		.trim();
}

export function $createLexicalNodeFromBlock(block: SuggestionBlock): LexicalNode {
	switch (block.type) {
		case "h1":
		case "h2":
		case "h3": {
			const node = $createHeadingNode(block.type);
			node.append($createTextNode(clean(block.lines[0])));
			return node;
		}
		case "blockquote": {
			const node = $createQuoteNode();
			node.append($createTextNode(clean(block.lines.join(" "))));
			return node;
		}
		case "bullet": {
			const list = $createListNode("bullet");
			for (const line of block.lines) {
				const item = $createListItemNode();
				item.append($createTextNode(clean(line)));
				list.append(item);
			}
			return list;
		}
		case "numbered": {
			const list = $createListNode("number");
			for (const line of block.lines) {
				const item = $createListItemNode();
				item.append($createTextNode(clean(line)));
				list.append(item);
			}
			return list;
		}
		default: {
			const node = $createParagraphNode();
			node.append($createTextNode(clean(block.lines.join(" "))));
			return node;
		}
	}
}

function SuggestionPreview({ block }: { block: SuggestionBlock }) {
	switch (block.type) {
		case "h1":
			return <p className="text-xl font-bold">{block.lines[0]}</p>;
		case "h2":
			return <p className="text-lg font-bold">{block.lines[0]}</p>;
		case "h3":
			return <p className="text-base font-semibold">{block.lines[0]}</p>;
		case "blockquote":
			return (
				<blockquote className="border-l-2 border-green-400 pl-3 italic text-sm text-foreground/80">
					{block.lines.map((l, i) => <p key={i}>{l}</p>)}
				</blockquote>
			);
		case "bullet":
			return (
				<ul className="list-disc pl-4 space-y-0.5">
					{block.lines.map((l, i) => <li key={i} className="text-sm">{l}</li>)}
				</ul>
			);
		case "numbered":
			return (
				<ol className="list-decimal pl-4 space-y-0.5">
					{block.lines.map((l, i) => <li key={i} className="text-sm">{l}</li>)}
				</ol>
			);
		default:
			return <p className="text-sm leading-relaxed">{block.lines[0]}</p>;
	}
}

function SuggestionDecorator({
	nodeKey,
	block,
}: {
	nodeKey: NodeKey;
	block: SuggestionBlock;
}) {
	const [editor] = useLexicalComposerContext();

	function accept() {
		editor.update(() => {
			const node = $getNodeByKey(nodeKey);
			if (!node) return;
			const replacement = $createLexicalNodeFromBlock(block);
			node.insertBefore(replacement);
			node.remove();
		});
	}

	function deny() {
		editor.update(() => {
			$getNodeByKey(nodeKey)?.remove();
		});
	}

	return (
		<div
			className="rounded-lg border border-green-200 dark:border-green-800/50 bg-green-50/80 dark:bg-green-950/20 p-4 my-2"
			contentEditable={false}
		>
			<SuggestionPreview block={block} />
			<div className="mt-3 flex gap-2 justify-end">
				<Button
					size="sm"
					variant="outline"
					className="text-red-600 border-red-200 hover:bg-red-50 dark:text-red-400 dark:border-red-800 dark:hover:bg-red-950/40"
					onMouseDown={(e) => {
						e.preventDefault();
						deny();
					}}
				>
					Deny
				</Button>
				<Button
					size="sm"
					className="bg-green-600 hover:bg-green-700 text-white"
					onMouseDown={(e) => {
						e.preventDefault();
						accept();
					}}
				>
					Accept
				</Button>
			</div>
		</div>
	);
}

export class SuggestionNode extends DecoratorNode<React.ReactNode> {
	__block: SuggestionBlock;

	static getType(): string {
		return "suggestion";
	}

	static clone(node: SuggestionNode): SuggestionNode {
		return new SuggestionNode(node.__block, node.__key);
	}

	constructor(block: SuggestionBlock, key?: NodeKey) {
		super(key);
		this.__block = block;
	}

	createDOM(_config: EditorConfig): HTMLElement {
		const div = document.createElement("div");
		return div;
	}

	updateDOM(): false {
		return false;
	}

	exportDOM(): DOMExportOutput {
		return { element: document.createElement("div") };
	}

	static importJSON(serialized: SerializedSuggestionNode): SuggestionNode {
		return new SuggestionNode(serialized.block);
	}

	exportJSON(): SerializedSuggestionNode {
		return {
			...super.exportJSON(),
			block: this.__block,
			type: "suggestion",
			version: 1,
		};
	}

	decorate(_editor: LexicalEditor, _config: EditorConfig): React.ReactNode {
		return (
			<SuggestionDecorator nodeKey={this.__key} block={this.__block} />
		);
	}
}

export function $createSuggestionNode(block: SuggestionBlock): SuggestionNode {
	return new SuggestionNode(block);
}

export function $isSuggestionNode(node: LexicalNode | null | undefined): node is SuggestionNode {
	return node instanceof SuggestionNode;
}
