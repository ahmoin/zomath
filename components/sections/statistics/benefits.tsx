"use client";

import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { benefits } from "@/components/sections/statistics/data";

export function Benefits() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
					<div>
						<p className="text-sm font-medium text-primary mb-3">
							Why Learn Statistics?
						</p>
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-6">
							The most applicable math you will ever learn.
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							Statistics is unique. It requires less algebra and more critical
							reading. It is the backbone of modern science, business, and
							medicine. When you master statistics, you learn how to evaluate
							the truth in a data-driven world.
						</p>
					</div>
					<div>
						<ul className="space-y-4">
							{benefits.map((benefit) => (
								<li key={benefit} className="flex items-start gap-3">
									<HugeiconsIcon
										icon={CheckmarkCircle02Icon}
										className="size-5 text-primary mt-0.5 shrink-0"
										strokeWidth={1.5}
									/>
									<span className="text-foreground">{benefit}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
