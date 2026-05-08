"use client";

import { FileTextIcon, PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Paper {
	id: string;
	title: string;
	updatedAt: Date;
}

interface Journal {
	id: string;
	title: string;
	content: string;
	updatedAt: Date;
}

interface DashboardLibraryProps {
	papers?: Paper[];
	journals?: Journal[];
}

function formatDate(date: Date | string) {
	return new Date(date).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
	});
}

export function DashboardLibrary({
	papers = [],
	journals = [],
}: DashboardLibraryProps) {
	const router = useRouter();
	const [creatingPaper, setCreatingPaper] = useState(false);
	const [creatingJournal, setCreatingJournal] = useState(false);

	async function createPaper() {
		setCreatingPaper(true);
		try {
			const res = await fetch("/api/papers", { method: "POST" });
			if (!res.ok) return;
			const data = (await res.json()) as { id: string };
			router.push(`/papers/${data.id}`);
		} finally {
			setCreatingPaper(false);
		}
	}

	async function createJournal() {
		setCreatingJournal(true);
		try {
			const res = await fetch("/api/journals", { method: "POST" });
			if (!res.ok) return;
			const data = (await res.json()) as { id: string };
			router.push(`/journals/${data.id}`);
		} finally {
			setCreatingJournal(false);
		}
	}

	return (
		<div className="flex flex-col gap-10 px-4 lg:px-6 pb-8">
			<section className="flex flex-col gap-4">
				<div className="flex items-center gap-2">
					<h2 className="text-base font-semibold tracking-tight">Papers</h2>
					{papers.length > 0 && (
						<span className="flex size-5 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground">
							{papers.length}
						</span>
					)}
				</div>

				<div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
					<button
						onClick={createPaper}
						disabled={creatingPaper}
						className="group flex aspect-[3/4] flex-col items-center justify-center rounded-xl border border-dashed border-border bg-transparent transition-colors hover:border-primary/40 hover:bg-muted/40 disabled:opacity-50"
					>
						<PlusIcon className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
					</button>

					{papers.map((p) => (
						<button
							key={p.id}
							onClick={() => router.push(`/papers/${p.id}`)}
							className="group flex aspect-[3/4] flex-col gap-2 rounded-xl border border-border bg-card p-3 text-left transition-colors hover:border-primary/30 hover:bg-accent/50"
						>
							<FileTextIcon className="size-5 text-muted-foreground" />
							<div className="mt-auto flex flex-col gap-0.5">
								<span className="line-clamp-2 text-xs font-medium text-foreground leading-snug">
									{p.title}
								</span>
								<span className="text-[11px] text-muted-foreground">
									{formatDate(p.updatedAt)}
								</span>
							</div>
						</button>
					))}
				</div>
			</section>

			<section className="flex flex-col gap-4">
				<div className="flex items-center gap-2">
					<h2 className="text-base font-semibold tracking-tight">Journals</h2>
					{journals.length > 0 && (
						<span className="flex size-5 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground">
							{journals.length}
						</span>
					)}
				</div>

				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					<button
						onClick={createJournal}
						disabled={creatingJournal}
						className="group flex min-h-[200px] flex-col items-center justify-center rounded-xl border border-dashed border-border bg-transparent transition-colors hover:border-primary/40 hover:bg-muted/40 disabled:opacity-50"
					>
						<PlusIcon className="size-6 text-muted-foreground group-hover:text-primary transition-colors" />
					</button>

					{journals.map((j) => (
						<button
							key={j.id}
							onClick={() => router.push(`/journals/${j.id}`)}
							className="group flex flex-col rounded-xl border border-border bg-card text-left transition-colors hover:border-primary/30 hover:bg-accent/50 overflow-hidden"
						>
							<div className="flex-1 p-4">
								<p className="line-clamp-6 text-xs text-muted-foreground leading-relaxed whitespace-pre-line">
									{j.content || "Empty journal"}
								</p>
							</div>
							<div className="border-t border-border px-4 py-3 flex items-center justify-between">
								<div className="flex flex-col gap-0.5">
									<span className="text-sm font-medium text-foreground">
										{j.title}
									</span>
									<span className="text-xs text-muted-foreground">
										{formatDate(j.updatedAt)}
									</span>
								</div>
							</div>
						</button>
					))}
				</div>
			</section>
		</div>
	);
}
