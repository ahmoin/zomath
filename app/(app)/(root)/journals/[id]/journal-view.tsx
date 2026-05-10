"use client";

import {
	Alert01Icon,
	ArrowLeft01Icon,
	CloudSavingDone01Icon,
	Loading01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { SerializedEditorState } from "lexical";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BlockViewerProvider } from "@/components/block-viewer-provider";
import { useDebounce } from "@/components/editor/editor-hooks/use-debounce";
import { Editor } from "@/components/sections/editor-x";
import { localDb } from "@/lib/local-db";

interface Journal {
	id: string;
	title: string;
	content: string;
	updatedAt: Date;
}

interface JournalViewProps {
	journal: Journal;
	parentProject: { id: string; title: string } | null;
}

export function JournalView({ journal, parentProject }: JournalViewProps) {
	const [title, setTitle] = useState(journal.title);
	const [syncStatus, setSyncStatus] = useState<"saved" | "syncing" | "error">(
		"saved",
	);
	const [initialState, setInitialState] = useState<
		SerializedEditorState | undefined
	>(undefined);
	const [isReady, setIsReady] = useState(false);

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
	}, [journal.id]);

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
		<div className="flex flex-1 flex-col">
			<header className="flex items-center justify-between border-b border-border px-4 lg:px-6 py-4">
				<div className="flex items-center gap-3">
					{parentProject ? (
						<Link
							href={`/projects/${parentProject.id}`}
							className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
						>
							<HugeiconsIcon
								icon={ArrowLeft01Icon}
								className="size-3.5"
								strokeWidth={2}
							/>
							{parentProject.title}
						</Link>
					) : (
						<Link
							href="/"
							className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
						>
							<HugeiconsIcon
								icon={ArrowLeft01Icon}
								className="size-3.5"
								strokeWidth={2}
							/>
							Dashboard
						</Link>
					)}
				</div>
			</header>

			<div className="flex flex-1 flex-col gap-2 px-4 lg:px-6 py-6 max-w-3xl w-full mx-auto">
				<input
					type="text"
					value={title}
					onChange={(e) => {
						setTitle(e.target.value);
						setSyncStatus("syncing");
					}}
					className="text-4xl font-bold bg-transparent border-none outline-none focus:ring-0 p-0 mb-4 placeholder:opacity-20"
					placeholder="Untitled Journal"
				/>

				<BlockViewerProvider>
					<Editor
						key={journal.id}
						editorSerializedState={initialState}
						onSerializedChange={handleContentChange}
					/>
				</BlockViewerProvider>
			</div>
		</div>
	);
}
