"use client";

import {
	ArrowLeft01Icon,
	CloudSavingDone01Icon,
	Loading01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { SerializedEditorState } from "lexical";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { BlockViewerProvider } from "@/components/block-viewer-provider";
import { useDebounce } from "@/components/editor/editor-hooks/use-debounce";
import { Editor } from "@/components/sections/editor-x";

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
	const [isSaving, setIsSaving] = useState(false);
	const [isDirty, setIsDirty] = useState(false);

	useEffect(() => {
		const handleBeforeUnload = (e: BeforeUnloadEvent) => {
			if (isDirty || isSaving) {
				e.preventDefault();
				e.returnValue = "";
				return "";
			}
		};

		window.addEventListener("beforeunload", handleBeforeUnload);
		return () => window.removeEventListener("beforeunload", handleBeforeUnload);
	}, [isDirty, isSaving]);

	const initialEditorState = useMemo(() => {
		if (!journal.content || journal.content.trim() === "") {
			return undefined;
		}
		try {
			return typeof journal.content === "string"
				? JSON.parse(journal.content)
				: journal.content;
		} catch (error) {
			console.error("Critical: Failed to parse initial editor state", error);
			return undefined;
		}
	}, [journal.id]);
	const saveChanges = async (
		updatedTitle: string,
		serializedState: SerializedEditorState,
	) => {
		setIsSaving(true);
		try {
			const response = await fetch(`/api/journals/${journal.id}`, {
				method: "PATCH",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					title: updatedTitle,
					content: JSON.stringify(serializedState),
				}),
			});

			if (response.ok) {
				setIsDirty(false);
			} else {
				throw new Error("Failed to save");
			}
		} catch (error) {
			console.error("Save error:", error);
		} finally {
			setTimeout(() => setIsSaving(false), 500);
		}
	};

	const debouncedSave = useDebounce(saveChanges, 1000);

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

				<div className="flex items-center gap-2 text-xs font-medium">
					{isDirty || isSaving ? (
						<span className="flex items-center gap-1.5 text-orange-600">
							<HugeiconsIcon
								icon={Loading01Icon}
								className="size-4 animate-spin"
							/>
							Unsaved changes...
						</span>
					) : (
						<span className="flex items-center gap-1.5 text-emerald-600">
							<HugeiconsIcon icon={CloudSavingDone01Icon} className="size-4" />
							Syncing complete
						</span>
					)}
				</div>
			</header>

			<div className="flex flex-1 flex-col gap-2 px-4 lg:px-6 py-6 max-w-3xl w-full mx-auto">
				<input
					type="text"
					value={title}
					onChange={(e) => {
						setTitle(e.target.value);
						setIsDirty(true);
					}}
					className="text-4xl font-bold bg-transparent border-none outline-none focus:ring-0 p-0 mb-4 placeholder:opacity-20"
					placeholder="Untitled Journal"
				/>

				<BlockViewerProvider>
					<Editor
						key={journal.id}
						editorSerializedState={initialEditorState}
						onSerializedChange={(state) => {
							setIsDirty(true);
							debouncedSave(title, state);
						}}
					/>
				</BlockViewerProvider>
			</div>
		</div>
	);
}
