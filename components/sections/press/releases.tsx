"use client";

import { Calendar03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { pressReleases } from "@/components/sections/press/data";

export function Releases() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
					Press releases
				</h2>
				<p className="text-muted-foreground mb-12">
					Official announcements from the Zomath team.
				</p>
				<div className="divide-y divide-border">
					{pressReleases.map((release) => (
						<article
							key={release.title}
							className="py-8 first:pt-0 last:pb-0 group"
						>
							<div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
								<div className="flex items-center gap-1.5">
									<HugeiconsIcon
										icon={Calendar03Icon}
										className="size-4"
										strokeWidth={1.5}
									/>
									{release.date}
								</div>
								<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-primary/10 text-primary text-xs font-medium">
									{release.tag}
								</span>
							</div>
							<h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors mb-2">
								{release.title}
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								{release.excerpt}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
