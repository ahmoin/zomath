"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { features } from "@/components/sections/statistics/data";

export function Features() {
	return (
		<section className="py-24 lg:py-32 bg-muted">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="mb-12">
					<p className="text-sm font-medium text-primary mb-3">
						The Zomath Advantage
					</p>
					<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
						Stop memorizing. Start analyzing.
					</h2>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
					{features.map((feature) => (
						<div
							key={feature.title}
							className="rounded-xl border border-border bg-background p-6 lg:p-8"
						>
							<div className="flex size-10 items-center justify-center rounded-lg bg-muted mb-4">
								<HugeiconsIcon
									icon={feature.icon}
									className="size-5 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
							<p className="text-muted-foreground text-sm leading-relaxed">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
