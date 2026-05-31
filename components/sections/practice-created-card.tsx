"use client";

import { BookOpen01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PracticeCreatedCard({
	id,
	title,
}: {
	id: string;
	title: string;
}) {
	return (
		<div className="mt-2 flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
			<div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
				<HugeiconsIcon
					icon={BookOpen01Icon}
					className="size-4 text-primary"
					strokeWidth={2}
				/>
			</div>
			<div className="min-w-0 flex-1">
				<p className="truncate text-sm font-medium">{title}</p>
				<p className="text-xs text-muted-foreground">Practice created</p>
			</div>
			<Button asChild size="sm" variant="outline" className="shrink-0">
				<Link href={`/practice/saved/${id}`}>
					Open
					<ArrowRightIcon className="size-3" />
				</Link>
			</Button>
		</div>
	);
}
