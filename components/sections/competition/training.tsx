"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { trainingSteps } from "@/components/sections/competition/data";

export function Training() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="mb-12">
					<p className="text-sm font-medium text-primary mb-3">How It Works</p>
					<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
						Newton trains you like a competitor, not a textbook.
					</h2>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{trainingSteps.map((step) => (
						<div
							key={step.step}
							className="rounded-xl border border-border p-6 lg:p-8"
						>
							<div className="text-4xl font-bold text-muted-foreground/20 mb-4">
								{step.step}
							</div>
							<HugeiconsIcon
								icon={step.icon}
								className="size-6 text-primary mb-3"
								strokeWidth={1.5}
							/>
							<h3 className="text-lg font-semibold mb-2">{step.title}</h3>
							<p className="text-muted-foreground text-sm leading-relaxed">
								{step.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
