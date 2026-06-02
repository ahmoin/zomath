"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { steps } from "@/components/sections/students/data";

export function Steps() {
	return (
		<section className="py-24 lg:py-32 bg-muted/50">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="text-center max-w-2xl mx-auto mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
						From stuck to confident in three steps
					</h2>
					<p className="mt-4 text-muted-foreground text-lg">
						A learning loop that actually builds lasting understanding.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{steps.map((step) => (
						<div key={step.step} className="relative text-center">
							<div className="size-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
								<HugeiconsIcon
									icon={step.icon}
									className="size-6 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<p className="text-xs font-semibold text-primary tracking-widest uppercase mb-2">
								Step {step.step}
							</p>
							<h3 className="text-xl font-semibold text-foreground mb-2">
								{step.title}
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								{step.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
