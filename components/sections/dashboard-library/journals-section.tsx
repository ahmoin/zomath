"use client";

import {
	ArrowDown01Icon,
	Copy01Icon,
	Delete02Icon,
	Loading03Icon,
	MoreHorizontalIcon,
	PlusSignIcon,
	Tick02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { type MouseEvent, useState } from "react";
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
import { SORT_LABELS } from "@/lib/sort-labels";
import type { Journal, SortMode, ViewMode } from "@/lib/types";
import { cn, formatDate } from "@/lib/utils";

export function JournalsSection({
	journals,
	view,
}: {
	journals: Journal[];
	view: ViewMode;
}) {
	const router = useRouter();
	const [creating, setCreating] = useState(false);
	const [sort, setSort] = useState<SortMode>("edited-newest");

	async function cloneJournal(j: Journal, e: MouseEvent) {
		e.preventDefault();
		const created = await fetch("/api/journals", { method: "POST" }).then((r) =>
			r.json(),
		);
		await fetch(`/api/journals/${created.id}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ title: `${j.title} (copy)`, content: j.content }),
		});
		router.refresh();
	}

	async function deleteJournal(id: string, e: MouseEvent) {
		e.preventDefault();
		await fetch(`/api/journals/${id}`, { method: "DELETE" });
		router.refresh();
	}

	const sorted = [...journals].sort((a, b) => {
		if (sort === "alpha-az") return a.title.localeCompare(b.title);
		if (sort === "alpha-za") return b.title.localeCompare(a.title);
		if (sort === "edited-newest")
			return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
		if (sort === "edited-oldest")
			return new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime();
		if (sort === "created-newest")
			return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
		return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
	});

	async function createJournal() {
		if (creating) return;
		setCreating(true);
		try {
			const res = await fetch("/api/journals", { method: "POST" });
			if (!res.ok) {
				setCreating(false);
				return;
			}
			const data = (await res.json()) as { id: string };
			router.push(`/journals/${data.id}`);
		} catch {
			setCreating(false);
		}
	}

	return (
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
							Sort by: {SORT_LABELS[sort]}
							<HugeiconsIcon
								icon={ArrowDown01Icon}
								className="size-3"
								strokeWidth={2}
							/>
						</button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						{(Object.keys(SORT_LABELS) as SortMode[]).map((mode) => (
							<DropdownMenuItem key={mode} onClick={() => setSort(mode)}>
								{SORT_LABELS[mode]}
								{sort === mode && (
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
						className={cn(
							"cursor-pointer [border-style:dashed] border-2 hover:border-primary/40 hover:bg-muted/40",
							creating && "opacity-50 pointer-events-none",
						)}
						onClick={createJournal}
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
								{creating ? "Creating journal..." : "Create journal"}
							</ItemTitle>
						</ItemContent>
					</Item>
					{sorted.map((j) => (
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
					<Item
						variant="outline"
						onClick={createJournal}
						className={cn(
							"cursor-pointer [border-style:dashed] border-2 hover:border-primary/40 hover:bg-muted/40 flex-col items-center justify-center h-64 p-6 text-center transition-all",
							creating && "opacity-50 pointer-events-none",
						)}
					>
						<ItemMedia className="mb-2">
							<HugeiconsIcon
								icon={creating ? Loading03Icon : PlusSignIcon}
								className={cn(
									"size-12 text-muted-foreground group-hover:text-primary transition-colors",
									creating && "animate-spin",
								)}
								strokeWidth={3}
							/>
						</ItemMedia>
						<ItemContent className="flex-none">
							<ItemTitle className="text-muted-foreground font-normal text-base">
								{creating ? "Creating Journal..." : "New Journal"}
							</ItemTitle>
						</ItemContent>
					</Item>
					{sorted.map((j) => (
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
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
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
									</DropdownMenuTrigger>
									<DropdownMenuContent align="end">
										<DropdownMenuItem onClick={(e) => cloneJournal(j, e)}>
											<HugeiconsIcon
												icon={Copy01Icon}
												className="size-4"
												strokeWidth={2}
											/>
											Clone
										</DropdownMenuItem>
										<DropdownMenuItem
											className="text-destructive focus:text-destructive"
											onClick={(e) => deleteJournal(j.id, e)}
										>
											<HugeiconsIcon
												icon={Delete02Icon}
												className="size-4"
												strokeWidth={2}
											/>
											Move to trash
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</div>
						</Link>
					))}
				</div>
			)}
		</section>
	);
}
