"use client";

import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { milestones } from "@/components/sections/press/data";

export function About() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="grid lg:grid-cols-2 gap-16">
					<div>
						<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-6">
							About Zomath
						</h2>
						<div className="space-y-4 text-muted-foreground leading-relaxed">
							<p>
								Zomath was founded in 2026 by Ahsan Moin who believed that the
								way most students learn math is fundamentally broken. Too many
								tools focus on getting to the answer fast. Zomath focuses on
								understanding why the answer works.
							</p>
							<p>
								Our AI tutor, Newton, guides students through problems step by
								step, asking questions instead of giving solutions. The Concept
								Map feature lets learners visualize how ideas connect, so
								algebra feels like a natural extension of arithmetic, and
								calculus grows logically from the foundations they have already
								built.
							</p>
							<p>
								Zomath serves over 120,000 active learners across high school
								math, self-directed study, and competition preparation. We are
								backed by Reach Capital, GSV Ventures, and angel investors who
								share our conviction that real understanding is the only
								shortcut that matters.
							</p>
						</div>
					</div>
					<div>
						<h3 className="text-lg font-semibold text-foreground mb-6">
							Company milestones
						</h3>
						<div className="space-y-8">
							{milestones.map((milestone) => (
								<div key={milestone.year}>
									<p className="text-sm font-semibold text-primary mb-3">
										{milestone.year}
									</p>
									<ul className="space-y-3">
										{milestone.items.map((item) => (
											<li
												key={item}
												className="flex items-start gap-3 text-muted-foreground"
											>
												<HugeiconsIcon
													icon={CheckmarkCircle02Icon}
													className="size-5 text-primary shrink-0 mt-0.5"
													strokeWidth={1.5}
												/>
												<span>{item}</span>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
