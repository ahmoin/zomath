"use client";

import {
	ArrowDown01Icon,
	Delete02Icon,
	FolderLibraryIcon,
	GridIcon,
	LayoutList,
	MoreHorizontalIcon,
	PlusSignIcon,
	Tick02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { EditorPreview } from "@/components/sections/editor-preview";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Item,
	ItemActions,
	ItemContent,
	ItemDescription,
	ItemGroup,
	ItemMedia,
	ItemTitle,
} from "@/components/ui/item";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

interface Project {
	id: string;
	title: string;
	createdAt: Date;
	updatedAt: Date;
}

interface Journal {
	id: string;
	title: string;
	content: string;
	createdAt: Date;
	updatedAt: Date;
}

interface DashboardLibraryProps {
	projects?: Project[];
	journals?: Journal[];
}

type ViewMode = "grid" | "list";
type SortMode =
	| "edited-newest"
	| "edited-oldest"
	| "created-newest"
	| "created-oldest"
	| "alpha-az"
	| "alpha-za";

const SORT_LABELS: Record<SortMode, string> = {
	"edited-newest": "Last edited (newest)",
	"edited-oldest": "Last edited (oldest)",
	"created-newest": "Created (newest)",
	"created-oldest": "Created (oldest)",
	"alpha-az": "Alphabetical (A-Z)",
	"alpha-za": "Alphabetical (Z-A)",
};

function formatDate(date: Date | string) {
	return new Date(date).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
	});
}

export function DashboardLibrary({
	projects = [],
	journals = [],
}: DashboardLibraryProps) {
	const router = useRouter();
	const [view, setView] = useState<ViewMode>("grid");
	const [creatingProject, setCreatingProject] = useState(false);
	const [creatingJournal, setCreatingJournal] = useState(false);
	const [deletingProjectIds, setDeletingProjectIds] = useState<Set<string>>(
		new Set(),
	);
	const [journalSort, setJournalSort] = useState<SortMode>("edited-newest");

	const sortedJournals = [...journals].sort((a, b) => {
		if (journalSort === "alpha-az") return a.title.localeCompare(b.title);
		if (journalSort === "alpha-za") return b.title.localeCompare(a.title);
		if (journalSort === "edited-newest")
			return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
		if (journalSort === "edited-oldest")
			return new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime();
		if (journalSort === "created-newest")
			return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
		return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
	});

	async function deleteProject(id: string) {
		setDeletingProjectIds((prev) => new Set(prev).add(id));
		await fetch(`/api/projects/${id}`, { method: "DELETE" });
		router.refresh();
	}

	async function createProject() {
		setCreatingProject(true);
		try {
			const res = await fetch("/api/projects", { method: "POST" });
			if (!res.ok) return;
			const data = (await res.json()) as { id: string };
			router.push(`/projects/${data.id}`);
		} finally {
			setCreatingProject(false);
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
			<div className="flex items-center justify-end gap-1">
				<Button
					variant={view === "grid" ? "outline" : "ghost"}
					size="sm"
					onClick={() => setView("grid")}
				>
					<HugeiconsIcon icon={GridIcon} className="size-4" strokeWidth={2} />
					Grid
				</Button>
				<Button
					variant={view === "list" ? "outline" : "ghost"}
					size="sm"
					onClick={() => setView("list")}
				>
					<HugeiconsIcon icon={LayoutList} className="size-4" strokeWidth={2} />
					List
				</Button>
			</div>

			<section className="flex flex-col gap-4">
				<div className="flex items-center gap-2">
					<h2 className="text-base font-semibold tracking-tight">Projects</h2>
					{projects.length > 0 && (
						<span className="flex size-5 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground">
							{projects.length}
						</span>
					)}
				</div>

				{view === "list" ? (
					<ItemGroup>
						<Item
							variant="outline"
							className="cursor-pointer [border-style:dashed] border-2 hover:border-primary/40 hover:bg-muted/40"
							onClick={createProject}
						>
							<ItemMedia>
								<HugeiconsIcon
									icon={PlusSignIcon}
									className="size-4 text-muted-foreground"
									strokeWidth={2}
								/>
							</ItemMedia>
							<ItemContent>
								<ItemTitle className="text-muted-foreground font-normal">
									{creatingProject ? "Creating..." : "Create project"}
								</ItemTitle>
							</ItemContent>
						</Item>
						{projects.map((p) => (
							<Item key={p.id} variant="outline" asChild>
								<Link href={`/projects/${p.id}`}>
									<ItemContent>
										<ItemTitle>{p.title}</ItemTitle>
										<ItemDescription>
											{formatDate(p.createdAt)} &bull; Last edited{" "}
											{formatDate(p.updatedAt)}
										</ItemDescription>
									</ItemContent>
									<ItemActions>
										<Button
											variant="ghost"
											size="icon-sm"
											onClick={(e) => e.preventDefault()}
										>
											<HugeiconsIcon
												icon={MoreHorizontalIcon}
												className="size-4"
												strokeWidth={2}
											/>
										</Button>
									</ItemActions>
								</Link>
							</Item>
						))}
					</ItemGroup>
				) : (
					<div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
						<button
							onClick={createProject}
							disabled={creatingProject}
							className="group flex h-32 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-muted-foreground/40 bg-transparent transition-colors hover:border-primary/40 hover:bg-muted/40 disabled:opacity-50"
						>
							<HugeiconsIcon
								icon={PlusSignIcon}
								className="size-5 text-muted-foreground group-hover:text-primary transition-colors"
								strokeWidth={2}
							/>
						</button>
						{projects
							.filter((p) => !deletingProjectIds.has(p.id))
							.map((p) => (
								<div key={p.id} className="group relative">
									<Link
										href={`/projects/${p.id}`}
										className="flex h-32 flex-col gap-2 rounded-2xl border border-border bg-card p-3 text-left transition-colors hover:border-primary/30 hover:bg-accent/50"
									>
										<HugeiconsIcon
											icon={FolderLibraryIcon}
											className="size-5 text-muted-foreground"
											strokeWidth={1.5}
										/>
										<div className="mt-auto flex flex-col gap-0.5">
											<span className="line-clamp-2 text-xs font-medium text-foreground leading-snug">
												{p.title}
											</span>
											<span className="text-[11px] text-muted-foreground">
												{formatDate(p.updatedAt)}
											</span>
										</div>
									</Link>
									<TooltipProvider>
										<Tooltip>
											<TooltipTrigger asChild>
												<Button
													variant="destructive"
													size="icon-sm"
													className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
													onClick={(e) => {
														e.preventDefault();
														deleteProject(p.id);
													}}
												>
													<HugeiconsIcon
														icon={Delete02Icon}
														className="size-4"
														strokeWidth={1.5}
													/>
												</Button>
											</TooltipTrigger>
											<TooltipContent>Delete project</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</div>
							))}
					</div>
				)}
			</section>

			<section className="flex flex-col gap-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<h2 className="text-base font-semibold tracking-tight">Journals</h2>
						{journals.length > 0 && (
							<span className="flex size-5 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground">
								{journals.length}
							</span>
						)}
					</div>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors outline-none">
								Sort by: {SORT_LABELS[journalSort]}
								<HugeiconsIcon
									icon={ArrowDown01Icon}
									className="size-3"
									strokeWidth={2}
								/>
							</button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							{(Object.keys(SORT_LABELS) as SortMode[]).map((mode) => (
								<DropdownMenuItem
									key={mode}
									onClick={() => setJournalSort(mode)}
								>
									{SORT_LABELS[mode]}
									{journalSort === mode && (
										<HugeiconsIcon
											icon={Tick02Icon}
											className="ml-auto size-3.5 text-primary"
											strokeWidth={2}
										/>
									)}
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>

				{view === "list" ? (
					<ItemGroup>
						<Item
							variant="outline"
							className="cursor-pointer [border-style:dashed] border-2 hover:border-primary/40 hover:bg-muted/40"
							onClick={createJournal}
						>
							<ItemMedia>
								<HugeiconsIcon
									icon={PlusSignIcon}
									className="size-4 text-muted-foreground"
									strokeWidth={2}
								/>
							</ItemMedia>
							<ItemContent>
								<ItemTitle className="text-muted-foreground font-normal">
									{creatingJournal ? "Creating..." : "Create journal"}
								</ItemTitle>
							</ItemContent>
						</Item>
						{sortedJournals.map((j) => (
							<Item key={j.id} variant="outline" asChild>
								<Link href={`/journals/${j.id}`}>
									<ItemContent>
										<ItemTitle>{j.title}</ItemTitle>
										<ItemDescription>
											{formatDate(j.createdAt)} &bull; Last edited{" "}
											{formatDate(j.updatedAt)}
										</ItemDescription>
									</ItemContent>
									<ItemActions>
										<Button
											variant="ghost"
											size="icon-sm"
											onClick={(e) => e.preventDefault()}
										>
											<HugeiconsIcon
												icon={MoreHorizontalIcon}
												className="size-4"
												strokeWidth={2}
											/>
										</Button>
									</ItemActions>
								</Link>
							</Item>
						))}
					</ItemGroup>
				) : (
					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						<button
							onClick={createJournal}
							disabled={creatingJournal}
							className="group flex min-h-[200px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-muted-foreground/40 bg-transparent transition-colors hover:border-primary/40 hover:bg-muted/40 disabled:opacity-50"
						>
							<HugeiconsIcon
								icon={PlusSignIcon}
								className="size-6 text-muted-foreground group-hover:text-primary transition-colors"
								strokeWidth={2}
							/>
						</button>
						{sortedJournals.map((j) => (
							<Link
								key={j.id}
								href={`/journals/${j.id}`}
								className="group flex flex-col rounded-2xl border border-border bg-card text-left transition-colors hover:border-primary/30 hover:bg-accent/50 overflow-hidden h-64"
							>
								<div className="flex-1 p-4 overflow-hidden relative">
									<div className="pointer-events-none select-none opacity-70 group-hover:opacity-100 transition-opacity">
										{j.content ? <EditorPreview content={j.content} /> : null}
									</div>

									<div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-card to-transparent" />
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
									<Button
										variant="ghost"
										size="icon-sm"
										onClick={(e) => e.preventDefault()}
									>
										<HugeiconsIcon
											icon={MoreHorizontalIcon}
											className="size-4"
											strokeWidth={2}
										/>
									</Button>
								</div>
							</Link>
						))}
					</div>
				)}
			</section>
		</div>
	);
}
