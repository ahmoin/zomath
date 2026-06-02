"use client";

import { ArrowRight02Icon, CheckmarkCircle02Icon, Link02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function ConceptMap() {
	return (
		<section className="py-24 lg:py-32 bg-muted/30">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					<div className="rounded-xl border bg-background p-8 flex flex-col gap-4">
						<div className="flex items-center gap-3 mb-2">
							<div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
								<HugeiconsIcon
									icon={Link02Icon}
									className="size-5 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<h3 className="text-lg font-semibold text-foreground">
								Your Calculus Concept Map
							</h3>
						</div>
						<div className="flex flex-col gap-3 text-sm">
							<div className="flex items-center gap-3 rounded-lg border px-4 py-3 bg-muted/50">
								<span className="font-medium text-foreground">Limits</span>
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-3.5 text-muted-foreground"
									strokeWidth={1.5}
								/>
								<span className="text-muted-foreground">Continuity</span>
							</div>
							<div className="flex items-center gap-3 rounded-lg border px-4 py-3 bg-muted/50">
								<span className="font-medium text-foreground">
									Derivatives
								</span>
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-3.5 text-muted-foreground"
									strokeWidth={1.5}
								/>
								<span className="text-muted-foreground">Rates of Change</span>
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-3.5 text-muted-foreground"
									strokeWidth={1.5}
								/>
								<span className="text-muted-foreground">Optimization</span>
							</div>
							<div className="flex items-center gap-3 rounded-lg border px-4 py-3 bg-muted/50">
								<span className="font-medium text-foreground">Integrals</span>
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-3.5 text-muted-foreground"
									strokeWidth={1.5}
								/>
								<span className="text-muted-foreground">Area</span>
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-3.5 text-muted-foreground"
									strokeWidth={1.5}
								/>
								<span className="text-muted-foreground">Volume</span>
							</div>
							<div className="flex items-center gap-3 rounded-lg border px-4 py-3 bg-muted/50">
								<span className="font-medium text-foreground">Series</span>
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-3.5 text-muted-foreground"
									strokeWidth={1.5}
								/>
								<span className="text-muted-foreground">Convergence</span>
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-3.5 text-muted-foreground"
									strokeWidth={1.5}
								/>
								<span className="text-muted-foreground">
									Taylor Polynomials
								</span>
							</div>
						</div>
						<p className="text-xs text-muted-foreground mt-2">
							This is a simplified view. Your actual Concept Map shows every
							connection and your mastery level for each node.
						</p>
					</div>
					<div>
						<p className="text-sm font-medium text-primary mb-3">
							Concept Map
						</p>
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
							See the whole picture, not just the next problem
						</h2>
						<p className="text-muted-foreground text-lg leading-relaxed mb-6">
							The Concept Map is your personal knowledge graph for calculus.
							It shows how every topic connects, highlights where you are
							strong in green, flags gaps in red, and recommends the most
							efficient path forward. No more studying blindly.
						</p>
						<ul className="flex flex-col gap-3">
							{[
								"Visualize prerequisites and dependencies at a glance",
								"Track mastery as you progress through each skill",
								"Get personalized recommendations for what to study next",
								"See how calculus connects to linear algebra, physics, and beyond",
							].map((item) => (
								<li
									key={item}
									className="flex items-start gap-2 text-muted-foreground"
								>
									<HugeiconsIcon
										icon={CheckmarkCircle02Icon}
										className="size-4 text-primary mt-0.5 shrink-0"
										strokeWidth={1.5}
									/>
									<span>{item}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
