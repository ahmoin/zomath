"use client";

import {
	BookOpen01Icon,
	BrainIcon,
	BubbleChatIcon,
	ChartLineData02Icon,
	FolderLibraryIcon,
	PlusSignIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Journal {
	id: string;
	title: string;
	content: string;
	updatedAt: Date;
}

interface Project {
	id: string;
	title: string;
	updatedAt: Date;
}

interface ProjectViewProps {
	project: Project;
	journals: Journal[];
}

function formatDate(date: Date | string) {
	return new Date(date).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
	});
}

export function ProjectView({ project, journals }: ProjectViewProps) {
	const router = useRouter();
	const [creatingJournal, setCreatingJournal] = useState(false);

	async function createJournal() {
		setCreatingJournal(true);
		try {
			const res = await fetch("/api/journals", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ projectId: project.id }),
			});
			if (!res.ok) return;
			const data = (await res.json()) as { id: string };
			router.push(`/journals/${data.id}`);
		} finally {
			setCreatingJournal(false);
		}
	}

	return (
		<div className="flex flex-1 flex-col">
			<header className="flex items-center gap-3 border-b border-border px-4 lg:px-6 py-4">
				<HugeiconsIcon
					icon={FolderLibraryIcon}
					className="size-5 text-muted-foreground"
					strokeWidth={1.5}
				/>
				<h1 className="text-lg font-semibold tracking-tight">
					{project.title}
				</h1>
			</header>

			<div className="flex flex-1 flex-col gap-8 px-4 lg:px-6 py-6">
				<section className="flex flex-col gap-3">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-2">
							<HugeiconsIcon
								icon={BookOpen01Icon}
								className="size-4 text-muted-foreground"
								strokeWidth={2}
							/>
							<h2 className="text-sm font-semibold tracking-tight">Journals</h2>
							{journals.length > 0 && (
								<span className="flex size-5 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground">
									{journals.length}
								</span>
							)}
						</div>
						<Button
							size="sm"
							variant="outline"
							onClick={createJournal}
							disabled={creatingJournal}
						>
							<HugeiconsIcon
								icon={PlusSignIcon}
								className="size-3.5"
								strokeWidth={2}
							/>
							{creatingJournal ? "Creating..." : "New journal"}
						</Button>
					</div>

					{journals.length === 0 ? (
						<button
							onClick={createJournal}
							disabled={creatingJournal}
							className="group flex min-h-[120px] flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-muted-foreground/30 bg-transparent transition-colors hover:border-primary/40 hover:bg-muted/40 disabled:opacity-50"
						>
							<HugeiconsIcon
								icon={PlusSignIcon}
								className="size-5 text-muted-foreground group-hover:text-primary transition-colors"
								strokeWidth={2}
							/>
							<span className="text-xs text-muted-foreground">
								Add the first journal to this project
							</span>
						</button>
					) : (
						<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
							{journals.map((j) => (
								<Link
									key={j.id}
									href={`/journals/${j.id}`}
									className="flex flex-col rounded-xl border border-border bg-card p-4 text-left transition-colors hover:border-primary/30 hover:bg-accent/50"
								>
									<p className="line-clamp-3 text-xs text-muted-foreground leading-relaxed">
										{j.content || "Empty journal"}
									</p>
									<div className="mt-3 flex items-center justify-between">
										<span className="text-sm font-medium text-foreground">
											{j.title}
										</span>
										<span className="text-xs text-muted-foreground">
											{formatDate(j.updatedAt)}
										</span>
									</div>
								</Link>
							))}
						</div>
					)}
				</section>

				<div className="grid gap-4 sm:grid-cols-3">
					<PlaceholderPanel
						icon={BubbleChatIcon}
						label="Chat"
						description="Ask questions about journals in this project"
					/>
					<PlaceholderPanel
						icon={BrainIcon}
						label="Equations"
						description="Equations and expressions referenced across journals"
					/>
					<PlaceholderPanel
						icon={ChartLineData02Icon}
						label="Visualizations"
						description="Graphs and figures linked to this project"
					/>
				</div>
			</div>
		</div>
	);
}

function PlaceholderPanel({
	icon,
	label,
	description,
}: {
	icon: React.ComponentProps<typeof HugeiconsIcon>["icon"];
	label: string;
	description: string;
}) {
	return (
		<div className="flex flex-col gap-2 rounded-2xl border border-dashed border-muted-foreground/30 p-5 opacity-60">
			<div className="flex items-center gap-2">
				<HugeiconsIcon
					icon={icon}
					className="size-4 text-muted-foreground"
					strokeWidth={1.5}
				/>
				<span className="text-sm font-medium">{label}</span>
				<span className="ml-auto rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
					soon
				</span>
			</div>
			<p className="text-xs text-muted-foreground leading-relaxed">
				{description}
			</p>
		</div>
	);
}
