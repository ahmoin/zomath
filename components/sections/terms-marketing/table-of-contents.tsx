"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { tocSections } from "@/components/sections/terms-marketing/data";

export function TableOfContents({ activeId }: { activeId?: string }) {
	return (
		<nav className="space-y-0.5">
			{tocSections.map((section) => (
				<a
					key={section.id}
					href={`#${section.id}`}
					className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
						activeId === section.id
							? "bg-primary/10 text-primary font-medium"
							: "text-muted-foreground hover:bg-muted hover:text-foreground"
					}`}
				>
					<HugeiconsIcon
						icon={section.icon}
						className="size-4 shrink-0"
						strokeWidth={1.5}
					/>
					{section.label}
				</a>
			))}
		</nav>
	);
}
