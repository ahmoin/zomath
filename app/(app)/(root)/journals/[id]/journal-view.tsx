"use client";

import { ArrowLeft02Icon, NoteEditIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

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
	return (
		<div className="flex flex-1 flex-col">
			<header className="flex items-center gap-3 border-b border-border px-4 lg:px-6 py-4">
				{parentProject ? (
					<Link
						href={`/projects/${parentProject.id}`}
						className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
					>
						<HugeiconsIcon
							icon={ArrowLeft02Icon}
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
							icon={ArrowLeft02Icon}
							className="size-3.5"
							strokeWidth={2}
						/>
						Dashboard
					</Link>
				)}
			</header>

			<div className="flex flex-1 flex-col gap-2 px-4 lg:px-6 py-6 max-w-3xl w-full mx-auto">
				<div className="flex items-center gap-2 text-muted-foreground">
					<HugeiconsIcon
						icon={NoteEditIcon}
						className="size-4"
						strokeWidth={1.5}
					/>
					<span className="text-xs">Journal</span>
				</div>
				<h1 className="text-2xl font-semibold tracking-tight">
					{journal.title}
				</h1>
				<div className="mt-2 text-sm text-foreground/80 leading-relaxed whitespace-pre-wrap">
					{journal.content || (
						<span className="text-muted-foreground italic">
							Start writing...
						</span>
					)}
				</div>
			</div>
		</div>
	);
}
