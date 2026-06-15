"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { troubleshootItems } from "@/components/sections/help/data";

export function Troubleshooting() {
	return (
		<section className="py-24 lg:py-32 bg-muted/50">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="text-center mb-16">
					<p className="text-sm font-medium text-primary mb-2">
						Troubleshooting
					</p>
					<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
						Common issues and fixes
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Running into something unexpected? Here are step-by-step solutions
						for the issues students encounter most.
					</p>
				</div>
				<div className="grid md:grid-cols-2 gap-6">
					{troubleshootItems.map((item) => (
						<div key={item.title} className="p-6 rounded-2xl border bg-card">
							<div className="flex items-start gap-3 mb-4">
								<div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
									<HugeiconsIcon
										icon={item.icon}
										className="size-4.5 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="text-base font-semibold text-foreground pt-1">
									{item.title}
								</h3>
							</div>
							<ol className="space-y-2.5 ml-1">
								{item.steps.map((step, stepIndex) => (
									<li
										key={step}
										className="text-sm text-muted-foreground pl-7 relative leading-relaxed"
									>
										<span className="absolute left-0 top-0 text-xs font-semibold text-primary/60 tabular-nums">
											{String(stepIndex + 1).padStart(2, "0")}
										</span>
										{step}
									</li>
								))}
							</ol>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
