"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { features } from "@/components/sections/algebra/data";

export function Features() {
	return (
		<section className="py-24 lg:py-32 bg-muted/30">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-2xl mb-16">
					<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
						Built for how you actually learn algebra
					</h2>
					<p className="text-muted-foreground text-lg leading-relaxed">
						Algebra requires practice, feedback, and connecting ideas together.
						Zomath gives you all three, powered by Newton, an AI tutor that
						actually understands math.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8">
					{features.map((feature) => (
						<div key={feature.title} className="rounded-xl border bg-card p-8">
							<div className="rounded-lg bg-muted p-2.5 w-fit mb-4">
								<HugeiconsIcon icon={feature.icon} className="size-5 text-primary" strokeWidth={1.5} />
							</div>
							<div className="flex items-baseline gap-2 mb-2">
								<h3 className="font-semibold text-foreground text-lg">{feature.title}</h3>
								<span className="text-sm text-muted-foreground">{feature.subtitle}</span>
							</div>
							<p className="text-muted-foreground leading-relaxed">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
