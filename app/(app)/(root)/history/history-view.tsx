"use client";

import {
	BookOpen01Icon,
	BubbleChatIcon,
	Delete02Icon,
	FolderLibraryIcon,
	MoreVerticalIcon,
	NoteIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { HistoryItem } from "@/lib/types";
import { cn, timeAgo } from "@/lib/utils";

function ItemIcon({ type }: { type: HistoryItem["type"] }) {
	if (type === "chat")
		return (
			<HugeiconsIcon
				icon={BubbleChatIcon}
				className="size-4 shrink-0 text-muted-foreground"
				strokeWidth={1.5}
			/>
		);
	if (type === "journal")
		return (
			<HugeiconsIcon
				icon={NoteIcon}
				className="size-4 shrink-0 text-muted-foreground"
				strokeWidth={1.5}
			/>
		);
	if (type === "practice")
		return (
			<HugeiconsIcon
				icon={BookOpen01Icon}
				className="size-4 shrink-0 text-muted-foreground"
				strokeWidth={1.5}
			/>
		);
	return (
		<HugeiconsIcon
			icon={FolderLibraryIcon}
			className="size-4 shrink-0 text-muted-foreground"
			strokeWidth={1.5}
		/>
	);
}

function itemHref(item: HistoryItem) {
	if (item.type === "chat") return `/newton/${item.id}`;
	if (item.type === "journal") return `/journals/${item.id}`;
	if (item.type === "practice") return `/practice/saved/${item.id}`;
	return `/projects/${item.id}`;
}

function HistoryRow({ item }: { item: HistoryItem }) {
	return (
		<div className="group flex items-center gap-4 border-b border-border px-4 py-3 transition-colors hover:bg-muted/40">
			<ItemIcon type={item.type} />
			<div className="min-w-0 flex-1">
				<Link
					href={itemHref(item)}
					className="block truncate text-sm font-medium hover:underline"
				>
					{item.title}
				</Link>
				<p className="text-xs capitalize text-muted-foreground">{item.type}</p>
			</div>
			<span className="shrink-0 text-xs text-muted-foreground">
				{timeAgo(new Date(item.updatedAt))}
			</span>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant="ghost"
						size="icon"
						className="size-7 opacity-0 transition-opacity group-hover:opacity-100"
					>
						<HugeiconsIcon
							icon={MoreVerticalIcon}
							className="size-4"
							strokeWidth={2}
						/>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuItem asChild>
						<Link href={itemHref(item)}>Open</Link>
					</DropdownMenuItem>
					<DropdownMenuItem className="text-destructive focus:text-destructive">
						<HugeiconsIcon
							icon={Delete02Icon}
							className="size-4"
							strokeWidth={2}
						/>
						Delete
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}

function EmptyState({ label }: { label: string }) {
	return (
		<div className="flex flex-col items-center justify-center py-20 text-center">
			<p className="text-sm text-muted-foreground">No {label} yet</p>
		</div>
	);
}

function ItemList({
	items,
	emptyLabel,
}: {
	items: HistoryItem[];
	emptyLabel: string;
}) {
	if (items.length === 0) return <EmptyState label={emptyLabel} />;
	return (
		<div>
			{items.map((item) => (
				<HistoryRow key={`${item.type}-${item.id}`} item={item} />
			))}
		</div>
	);
}

export function HistoryView({
	chats,
	journals,
	practices,
	projects,
}: {
	chats: { id: string; title: string; updatedAt: Date }[];
	journals: { id: string; title: string; updatedAt: Date }[];
	practices: { id: string; title: string; updatedAt: Date }[];
	projects: { id: string; title: string; updatedAt: Date }[];
}) {
	const [search, setSearch] = useState("");

	const allItems: HistoryItem[] = [
		...chats.map((c) => ({ ...c, type: "chat" as const })),
		...journals.map((j) => ({ ...j, type: "journal" as const })),
		...practices.map((p) => ({ ...p, type: "practice" as const })),
		...projects.map((p) => ({ ...p, type: "project" as const })),
	].sort(
		(a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
	);

	const filter = (items: HistoryItem[]) =>
		search.trim()
			? items.filter((i) =>
					i.title.toLowerCase().includes(search.toLowerCase()),
				)
			: items;

	return (
		<div className="flex flex-1 flex-col overflow-hidden">
			<div className="flex items-center gap-4 border-b border-border px-6 py-4">
				<h1 className="text-xl font-semibold">History</h1>
				<div className="ml-auto flex items-center gap-3">
					<input
						type="search"
						placeholder="Search..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className={cn(
							"h-8 w-52 rounded-md border border-border bg-transparent px-3 text-sm",
							"placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
						)}
					/>
				</div>
			</div>

			<Tabs defaultValue="all" className="flex flex-1 flex-col overflow-hidden">
				<div className="border-b border-border px-6">
					<TabsList className="h-10 bg-transparent p-0 gap-1">
						{(
							["all", "chats", "journals", "practices", "projects"] as const
						).map((tab) => (
							<TabsTrigger
								key={tab}
								value={tab}
								className={cn(
									"h-10 rounded-none border-b-2 border-transparent px-3 text-sm capitalize",
									"data-[state=active]:border-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none",
								)}
							>
								{tab}
							</TabsTrigger>
						))}
					</TabsList>
				</div>

				<div className="flex-1 overflow-y-auto">
					<div className="grid grid-cols-[1fr_auto] items-center border-b border-border px-4 py-2 text-xs text-muted-foreground">
						<span>Name</span>
						<span className="pr-10">Updated</span>
					</div>

					<TabsContent value="all" className="mt-0">
						<ItemList items={filter(allItems)} emptyLabel="history" />
					</TabsContent>
					<TabsContent value="chats" className="mt-0">
						<ItemList
							items={filter(
								chats.map((c) => ({ ...c, type: "chat" as const })),
							)}
							emptyLabel="chats"
						/>
					</TabsContent>
					<TabsContent value="journals" className="mt-0">
						<ItemList
							items={filter(
								journals.map((j) => ({ ...j, type: "journal" as const })),
							)}
							emptyLabel="journals"
						/>
					</TabsContent>
					<TabsContent value="practices" className="mt-0">
						<ItemList
							items={filter(
								practices.map((p) => ({ ...p, type: "practice" as const })),
							)}
							emptyLabel="practices"
						/>
					</TabsContent>
					<TabsContent value="projects" className="mt-0">
						<ItemList
							items={filter(
								projects.map((p) => ({ ...p, type: "project" as const })),
							)}
							emptyLabel="projects"
						/>
					</TabsContent>
				</div>
			</Tabs>
		</div>
	);
}
