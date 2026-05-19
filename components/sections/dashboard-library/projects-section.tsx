"use client";

import {
	Delete02Icon,
	FolderLibraryIcon,
	Loading03Icon,
	MoreHorizontalIcon,
	PlusSignIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
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
import type { Project, ViewMode } from "@/lib/types";
import { cn, formatDate } from "@/lib/utils";

export function ProjectsSection({
	projects,
	view,
}: {
	projects: Project[];
	view: ViewMode;
}) {
	const router = useRouter();
	const [creating, setCreating] = useState(false);
	const [deletingIds, setDeletingIds] = useState<Set<string>>(new Set());

	async function deleteProject(id: string) {
		setDeletingIds((prev) => new Set(prev).add(id));
		await fetch(`/api/projects/${id}`, { method: "DELETE" });
		router.refresh();
	}

	async function createProject() {
		if (creating) return;
		setCreating(true);
		try {
			const res = await fetch("/api/projects", { method: "POST" });
			if (!res.ok) {
				setCreating(false);
				return;
			}
			const data = (await res.json()) as { id: string };
			router.push(`/projects/${data.id}`);
		} catch {
			setCreating(false);
		}
	}

	return (
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
						className={cn(
							"cursor-pointer [border-style:dashed] border-2 hover:border-primary/40 hover:bg-muted/40",
							creating && "opacity-50 pointer-events-none",
						)}
						onClick={createProject}
					>
						<ItemMedia>
							<HugeiconsIcon
								icon={creating ? Loading03Icon : PlusSignIcon}
								className={cn(
									"size-6 text-muted-foreground",
									creating && "animate-spin",
								)}
								strokeWidth={3}
							/>
						</ItemMedia>
						<ItemContent>
							<ItemTitle className="text-muted-foreground font-normal">
								{creating ? "Creating project..." : "Create project"}
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
					<Item
						variant="outline"
						onClick={createProject}
						className={cn(
							"cursor-pointer [border-style:dashed] border-2 hover:border-primary/40 hover:bg-muted/40 flex-col items-center justify-center h-32 p-2 text-center",
							creating && "opacity-50 pointer-events-none",
						)}
					>
						<ItemMedia className="group-hover:text-primary transition-colors">
							<HugeiconsIcon
								icon={creating ? Loading03Icon : PlusSignIcon}
								className={cn(
									"size-8 text-muted-foreground",
									creating && "animate-spin",
								)}
								strokeWidth={3}
							/>
						</ItemMedia>
						<ItemTitle className="text-[11px] text-muted-foreground font-normal mt-1">
							{creating ? "Creating..." : "New Project"}
						</ItemTitle>
					</Item>
					{projects
						.filter((p) => !deletingIds.has(p.id))
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
	);
}
