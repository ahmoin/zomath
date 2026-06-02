"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { features } from "@/components/sections/community/data";

export function Features() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-2xl mb-16">
					<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
						Everything you need to learn together
					</h2>
					<p className="text-lg text-muted-foreground leading-relaxed">
						From casual homework help to intense competition prep, the Zomath
						community has a place for every kind of learner.
					</p>
				</div>
				<div className="grid md:grid-cols-2 gap-6">
					{features.map((feature) => (
						<div
							key={feature.title}
							className="rounded-xl border bg-card p-8 hover:shadow-md transition-shadow"
						>
							<div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
								<HugeiconsIcon
									icon={feature.icon}
									className="size-5 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<h3 className="text-xl font-semibold text-foreground mb-2">
								{feature.title}
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
