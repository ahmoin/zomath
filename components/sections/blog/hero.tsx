"use client";

import { Search01Icon, SparklesIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

interface HeroProps {
	searchQuery: string;
	onSearchChange: (value: string) => void;
}

export function Hero({ searchQuery, onSearchChange }: HeroProps) {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-3xl">
					<div className="flex items-center gap-2 mb-6">
						<HugeiconsIcon icon={SparklesIcon} className="size-5 text-primary" strokeWidth={1.5} />
						<span className="text-sm font-medium text-primary">Zomath Blog</span>
					</div>
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]">
						Learn better, think deeper
					</h1>
					<p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
						Insights on math learning, AI-powered education, competition prep,
						and the ideas shaping how students understand mathematics.
					</p>
				</div>
				<div className="mt-10 max-w-xl">
					<div className="relative">
						<HugeiconsIcon
							icon={Search01Icon}
							className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground"
							strokeWidth={1.5}
						/>
						<input
							type="text"
							placeholder="Search articles..."
							value={searchQuery}
							onChange={(e) => onSearchChange(e.target.value)}
							className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
