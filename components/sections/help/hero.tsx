"use client";

import { HelpCircleIcon, Search01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

interface HeroProps {
	searchQuery: string;
	setSearchQuery: (value: string) => void;
}

export function Hero({ searchQuery, setSearchQuery }: HeroProps) {
	return (
		<section className="py-24 lg:py-32 bg-muted/50">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-2xl mx-auto text-center">
					<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
						<HugeiconsIcon
							icon={HelpCircleIcon}
							className="size-4"
							strokeWidth={1.5}
						/>
						Help Center
					</div>
					<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-4">
						How can we help?
					</h1>
					<p className="text-lg text-muted-foreground mb-8">
						Everything you need to get the most out of Zomath, from your first
						photo to mastering new concepts.
					</p>
					<div className="relative max-w-md mx-auto">
						<HugeiconsIcon
							icon={Search01Icon}
							className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-muted-foreground"
							strokeWidth={1.5}
						/>
						<input
							type="text"
							placeholder="Search for a topic or question..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="w-full pl-10 pr-4 py-3 rounded-xl border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
