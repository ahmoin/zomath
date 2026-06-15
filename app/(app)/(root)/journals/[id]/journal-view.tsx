"use client";

import { Loading01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { LexicalEditor, SerializedEditorState } from "lexical";
import { $getRoot } from "lexical";
import { useEffect, useRef, useState } from "react";
import { BlockViewerProvider } from "@/components/block-viewer-provider";
import { useDebounce } from "@/components/editor/editor-hooks/use-debounce";
import { $createSuggestionNode } from "@/components/editor/nodes/suggestion-node";
import { Editor } from "@/components/sections/editor-x";
import { JournalAiInput } from "@/components/sections/journal-ai-input";
import { localDb } from "@/lib/local-db";
import type { Journal, SuggestionBlock } from "@/lib/types";

function parseMarkdownToBlocks(markdown: string): SuggestionBlock[] {
	const blocks: SuggestionBlock[] = [];
	const paragraphs = markdown.split(/\n{2,}/);

	for (const para of paragraphs) {
		const trimmed = para
			.trim()
			.replace(/\[\d+(?:,\s*\d+)*\]/g, "")
			.replace(/\s{2,}/g, " ")
			.trim();
		if (!trimmed) continue;

		const id = crypto.randomUUID();
		const rawLines = trimmed.split("\n");

		if (trimmed.startsWith("### ")) {
			blocks.push({ id, raw: trimmed, type: "h3", lines: [trimmed.slice(4)] });
		} else if (trimmed.startsWith("## ")) {
			blocks.push({ id, raw: trimmed, type: "h2", lines: [trimmed.slice(3)] });
		} else if (trimmed.startsWith("# ")) {
			blocks.push({ id, raw: trimmed, type: "h1", lines: [trimmed.slice(2)] });
		} else if (rawLines.every((l) => l.startsWith("> "))) {
			blocks.push({
				id,
				raw: trimmed,
				type: "blockquote",
				lines: rawLines.map((l) => l.slice(2)),
			});
		} else if (rawLines.every((l) => /^[-*]\s/.test(l))) {
			blocks.push({
				id,
				raw: trimmed,
				type: "bullet",
				lines: rawLines.map((l) => l.replace(/^[-*]\s/, "")),
			});
		} else if (rawLines.every((l) => /^\d+\.\s/.test(l))) {
			blocks.push({
				id,
				raw: trimmed,
				type: "numbered",
				lines: rawLines.map((l) => l.replace(/^\d+\.\s/, "")),
			});
		} else {
			blocks.push({ id, raw: trimmed, type: "paragraph", lines: [trimmed] });
		}
	}

	return blocks;
}

export function JournalView({
	journal,
	parentProject,
}: {
	journal: Journal;
	parentProject: { id: string; title: string } | null;
}) {
	const [title, setTitle] = useState(journal.title);
	const [_syncStatus, setSyncStatus] = useState<"saved" | "syncing" | "error">(
		"saved",
	);
	const [initialState, setInitialState] = useState<
		SerializedEditorState | undefined
	>(undefined);
	const [isReady, setIsReady] = useState(false);
	const [newtonOpen, setNewtonOpen] = useState(false);
	const editorRef = useRef<LexicalEditor | null>(null);

	const syncToCloud = async (
		updatedTitle: string,
		state: SerializedEditorState,
	) => {
		try {
			const response = await fetch(`/api/journals/${journal.id}`, {
				method: "PATCH",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					title: updatedTitle,
					content: JSON.stringify(state),
				}),
			});
			if (!response.ok) throw new Error("Sync failed");
			setSyncStatus("saved");
		} catch (error) {
			console.error("Cloud sync error:", error);
			setSyncStatus("error");
		}
	};

	const debouncedCloudSync = useDebounce(syncToCloud, 400);

	useEffect(() => {
		async function loadData() {
			const cached = await localDb.journals.get(journal.id);
			if (cached) {
				setInitialState(cached.content);
			} else if (journal.content && journal.content.trim() !== "") {
				try {
					setInitialState(JSON.parse(journal.content));
				} catch (error) {
					console.error("Failed to parse server content", error);
				}
			}
			setIsReady(true);
		}
		loadData();
	}, [journal.id, journal.content.trim, journal.content]);

	const handleContentChange = (state: SerializedEditorState) => {
		localDb.journals.put({
			id: journal.id,
			title,
			content: state,
			updatedAt: Date.now(),
		});
		setSyncStatus("syncing");
		debouncedCloudSync(title, state);
	};

	function handleSuggestion(text: string) {
		const editor = editorRef.current;
		if (!editor) return;
		const blocks = parseMarkdownToBlocks(text);
		if (blocks.length === 0) return;
		editor.update(() => {
			const root = $getRoot();
			for (const block of blocks) {
				root.append($createSuggestionNode(block));
			}
		});
	}

	if (!isReady) {
		return (
			<div className="flex flex-1 items-center justify-center">
				<HugeiconsIcon
					icon={Loading01Icon}
					className="size-6 animate-spin text-muted-foreground"
				/>
			</div>
		);
	}

	return (
		<div
			className="flex flex-1 flex-col overflow-hidden"
			onKeyDown={(e) => e.key === "Escape" && setNewtonOpen(false)}
		>
			<JournalAiInput
				centered={newtonOpen}
				onClose={() => setNewtonOpen(false)}
				journalId={journal.id}
				onSuggestion={handleSuggestion}
			/>
			<header className="flex items-center gap-3 border-b border-border px-4 lg:px-6 py-4">
				<input
					type="text"
					value={title}
					onChange={(e) => {
						setTitle(e.target.value);
						setSyncStatus("syncing");
					}}
					className="text-sm font-semibold bg-transparent border-none outline-none focus:ring-0 p-0 placeholder:opacity-30 min-w-0 flex-1"
					placeholder="Untitled Journal"
				/>
			</header>

			<div className="flex flex-1 flex-col gap-2 px-2 py-2 w-full overflow-hidden min-h-0">
				<BlockViewerProvider>
					<Editor
						key={journal.id}
						editorSerializedState={initialState}
						onSerializedChange={handleContentChange}
						onAskNewton={() => setNewtonOpen(true)}
						onEditorReady={(editor) => {
							editorRef.current = editor;
						}}
					/>
				</BlockViewerProvider>
			</div>
		</div>
	);
}
