"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { benefits } from "@/components/sections/careers/data";

export function Benefits() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-2xl mb-16">
					<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-4">
						What we offer
					</h2>
					<p className="text-lg text-muted-foreground">
						Great work requires support. Here's how we take care of our team.
					</p>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{benefits.map((benefit) => (
						<div
							key={benefit.title}
							className="p-6 rounded-xl border bg-card hover:bg-muted/50 transition-colors"
						>
							<HugeiconsIcon
								icon={benefit.icon}
								className="size-6 text-primary mb-4"
								strokeWidth={1.5}
							/>
							<h3 className="font-medium mb-2">{benefit.title}</h3>
							<p className="text-sm text-muted-foreground">
								{benefit.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
