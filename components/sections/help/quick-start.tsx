"use client";

import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { quickStartSteps } from "@/components/sections/help/data";

export function QuickStart() {
	return (
		<section className="py-24 lg:py-32 bg-muted/50">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="text-center mb-16">
					<p className="text-sm font-medium text-primary mb-2">
						Getting started
					</p>
					<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
						Learn Zomath in three steps
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						From your first problem to genuine understanding, here is how
						Zomath fits into your learning routine.
					</p>
				</div>
				<div className="grid md:grid-cols-3 gap-8">
					{quickStartSteps.map((step, index) => (
						<div
							key={step.step}
							className="relative p-8 rounded-2xl border bg-card hover:border-primary/30 transition-colors group"
						>
							<span className="text-6xl font-bold text-primary/8 absolute top-4 right-6 select-none">
								{step.step}
							</span>
							<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
								<HugeiconsIcon
									icon={step.icon}
									className="size-6 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<h3 className="text-xl font-semibold text-foreground mb-3">
								{step.title}
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								{step.description}
							</p>
							{index < quickStartSteps.length - 1 && (
								<div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-8 text-muted-foreground/30"
										strokeWidth={1.5}
									/>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
