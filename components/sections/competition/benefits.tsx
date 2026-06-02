"use client";

import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { benefits } from "@/components/sections/competition/data";

export function Benefits() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
					<div>
						<p className="text-sm font-medium text-primary mb-3">
							Why Competition Math?
						</p>
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-6">
							Because how you think matters more than what you know.
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							Competition math is not about memorizing formulas. It is about
							learning to approach unfamiliar problems with creativity and
							persistence. Those skills last far beyond any contest.
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
