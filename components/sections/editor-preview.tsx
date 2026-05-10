"use client";

import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { OverflowNode } from "@lexical/overflow";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { AutocompleteNode } from "@/components/editor/nodes/autocomplete-node";
import { TweetNode } from "@/components/editor/nodes/embeds/tweet-node";
import { YouTubeNode } from "@/components/editor/nodes/embeds/youtube-node";
import { EmojiNode } from "@/components/editor/nodes/emoji-node";
import { LayoutContainerNode } from "@/components/editor/nodes/layout-container-node";
import { LayoutItemNode } from "@/components/editor/nodes/layout-item-node";
import { MentionNode } from "@/components/editor/nodes/mention-node";
import { SpecialTextNode } from "@/components/editor/nodes/special-text-node";
import { editorTheme } from "@/components/editor/themes/editor-theme";

export function EditorPreview({ content }: { content: string }) {
	const initialConfig = {
		namespace: "Preview",
		theme: editorTheme,
		editable: false,
		nodes: [
			OverflowNode,
			TableNode,
			TableCellNode,
			TableRowNode,
			CodeNode,
			CodeHighlightNode,
			MentionNode,
			EmojiNode,
			LayoutContainerNode,
			LayoutItemNode,
			TweetNode,
			YouTubeNode,
			AutocompleteNode,
			SpecialTextNode,
		],
		onError: (error: Error) => console.error(error),
		editorState: content,
	};

	return (
		<LexicalComposer initialConfig={initialConfig}>
			<RichTextPlugin
				contentEditable={
					<ContentEditable className="outline-none text-[10px] sm:text-xs" />
				}
				placeholder={null}
				ErrorBoundary={LexicalErrorBoundary}
			/>
		</LexicalComposer>
	);
}
