"use client";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getRoot } from "lexical";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
	$createLexicalNodeFromBlock,
	$isSuggestionNode,
	type SuggestionNode,
} from "@/components/editor/nodes/suggestion-node";

export function SuggestionPlugin() {
	const [editor] = useLexicalComposerContext();
	const [count, setCount] = useState(0);

	useEffect(() => {
		return editor.registerUpdateListener(({ editorState }) => {
			editorState.read(() => {
				const root = $getRoot();
				const n = root.getChildren().filter($isSuggestionNode).length;
				setCount(n);
			});
		});
	}, [editor]);

	if (count === 0) return null;

	function acceptAll() {
		editor.update(() => {
			const root = $getRoot();
			const nodes = root
				.getChildren()
				.filter($isSuggestionNode) as SuggestionNode[];
			for (const node of nodes) {
				const replacement = $createLexicalNodeFromBlock(node.__block);
				node.insertBefore(replacement);
				node.remove();
			}
		});
	}

	function denyAll() {
		editor.update(() => {
			const root = $getRoot();
			for (const node of root.getChildren().filter($isSuggestionNode)) {
				node.remove();
			}
		});
	}

	return (
		<div className="fixed bottom-6 right-6 z-50 flex gap-2">
			<Button variant="destructive" onClick={denyAll}>
				Deny All
			</Button>
			<Button
				className="bg-green-600 hover:bg-green-700 text-white"
				onClick={acceptAll}
			>
				Accept All
			</Button>
		</div>
	);
}
