"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { howItWorksFeatures } from "@/components/sections/calculus/data";

export function HowItWorks() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-2xl mb-16">
					<p className="text-sm font-medium text-primary mb-3">How it works</p>
					<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
						Newton learns how you learn
					</h2>
					<p className="text-muted-foreground text-lg leading-relaxed">
						Newton is not a solution engine. It is a patient, adaptive tutor
						that meets you where you are, whether you are stuck on your first
						limit or wrestling with a triple integral.
					</p>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{howItWorksFeatures.map((feature) => (
						<div key={feature.title} className="flex flex-col gap-4">
							<div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
								<HugeiconsIcon
									icon={feature.icon}
									className="size-5 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<h3 className="text-lg font-semibold text-foreground">
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
