"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { features } from "@/components/sections/competition/data";

export function Features() {
	return (
		<section className="py-24 lg:py-32 bg-muted">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="mb-12">
					<p className="text-sm font-medium text-primary mb-3">
						Built for Competition
					</p>
					<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
						Everything you need to prepare, and nothing you don&apos;t.
					</h2>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{features.map((feat) => (
						<div
							key={feat.title}
							className="rounded-xl border border-border bg-background p-6"
						>
							<HugeiconsIcon
								icon={feat.icon}
								className="size-6 text-primary mb-4"
								strokeWidth={1.5}
							/>
							<h3 className="font-semibold mb-2">{feat.title}</h3>
							<p className="text-muted-foreground text-sm leading-relaxed">
								{feat.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
