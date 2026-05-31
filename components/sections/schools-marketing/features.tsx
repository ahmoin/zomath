"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { features } from "@/components/sections/schools-marketing/data";

export function Features() {
	return (
		<section className="py-24 lg:py-32 bg-muted/50">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="mx-auto max-w-2xl text-center mb-16">
					<h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						Why Schools Choose Zomath
					</h2>
					<p className="text-lg text-muted-foreground">
						We built Zomath to solve the real challenges math teachers face
						every day: too many students, too little time, and no easy way to
						give everyone what they need.
					</p>
				</div>
				<div className="grid gap-8 md:grid-cols-2">
					{features.map((feature) => (
						<div
							key={feature.title}
							className="rounded-xl border bg-background p-6 transition-shadow hover:shadow-lg"
						>
							<div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3">
								<HugeiconsIcon
									icon={feature.icon}
									className="size-6 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<h3 className="mb-2 text-xl font-semibold text-foreground">
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
