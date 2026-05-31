"use client";

import { Loading01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { SerializedEditorState } from "lexical";
import { useEffect, useState } from "react";
import { BlockViewerProvider } from "@/components/block-viewer-provider";
import { useDebounce } from "@/components/editor/editor-hooks/use-debounce";
import { Editor } from "@/components/sections/editor-x";
import { JournalAiInput } from "@/components/sections/journal-ai-input";
import { localDb } from "@/lib/local-db";
import type { Journal } from "@/lib/types";

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
			title: title,
			content: state,
			updatedAt: Date.now(),
		});

		setSyncStatus("syncing");
		debouncedCloudSync(title, state);
	};

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
					/>
				</BlockViewerProvider>
			</div>
		</div>
	);
}
