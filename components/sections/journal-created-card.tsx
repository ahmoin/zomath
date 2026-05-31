"use client";

import { BookOpenIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function JournalCreatedCard({
	id,
	title,
	updated = false,
}: {
	id: string;
	title: string;
	updated?: boolean;
}) {
	return (
		<div className="mt-2 flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
			<div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
				<BookOpenIcon className="size-4 text-primary" />
			</div>
			<div className="min-w-0 flex-1">
				<p className="truncate text-sm font-medium">{title}</p>
				<p className="text-xs text-muted-foreground">
					{updated ? "Journal updated" : "Journal created"}
				</p>
			</div>
			<Button asChild size="sm" variant="outline" className="shrink-0">
				<Link href={`/journals/${id}`}>
					Open
					<ArrowRightIcon className="size-3" />
				</Link>
			</Button>
		</div>
	);
}
