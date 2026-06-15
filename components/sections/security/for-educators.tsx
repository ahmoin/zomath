"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { educatorFeatures } from "@/components/sections/security/data";

export function ForEducators() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="text-center mb-16">
					<p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
						For Educators
					</p>
					<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
						Safe for classrooms, trusted by schools
					</h2>
					<p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
						Zomath meets the requirements school districts need, from data
						processing agreements to administrative controls that respect both
						teacher oversight and student privacy.
					</p>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{educatorFeatures.map((feature) => (
						<div
							key={feature.title}
							className="rounded-xl border bg-card p-6 hover:border-primary/30 transition-colors"
						>
							<div className="inline-flex items-center justify-center rounded-lg bg-primary/10 p-2.5 mb-4">
								<HugeiconsIcon
									icon={feature.icon}
									className="size-5 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<h3 className="font-semibold text-foreground mb-2">
								{feature.title}
							</h3>
							<p className="text-sm text-muted-foreground leading-relaxed">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
