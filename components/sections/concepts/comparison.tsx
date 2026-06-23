"use client";

import { FlowIcon, ListXIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function Comparison() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					<div>
						<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
							A map, not a table of contents
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed mb-8">
							Most math resources present topics in a straight line. Chapter 1,
							then Chapter 2, then Chapter 3. But real understanding does not
							work that way. Ideas loop back. Concepts in geometry illuminate
							algebra. Trigonometry unlocks calculus. When you only see a list,
							you miss the connections that make math click.
						</p>
						<p className="text-lg text-muted-foreground leading-relaxed mb-8">
							The Concept Map replaces that flat list with a living, navigable
							graph of mathematical relationships. You can see the whole terrain
							at once, or zoom into a single neighborhood. Every connection is
							visible, every prerequisite accounted for, every shortcut
							revealed.
						</p>
					</div>
					<div className="space-y-6">
						<div className="rounded-2xl border bg-muted/30 p-6">
							<div className="flex items-center gap-3 mb-4">
								<div className="size-10 rounded-lg bg-destructive/10 flex items-center justify-center">
									<HugeiconsIcon
										icon={ListXIcon}
										className="size-5 text-destructive"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="font-semibold text-foreground">
									Traditional linear curriculum
								</h3>
							</div>
							<ul className="space-y-2 text-sm text-muted-foreground">
								<li className="flex items-start gap-2">
									<span className="text-destructive mt-1">&#x2717;</span>
									Topics ordered by convention, not by dependency
								</li>
								<li className="flex items-start gap-2">
									<span className="text-destructive mt-1">&#x2717;</span>
									No way to see what a new concept requires
								</li>
								<li className="flex items-start gap-2">
									<span className="text-destructive mt-1">&#x2717;</span>
									Connections between subjects remain hidden
								</li>
								<li className="flex items-start gap-2">
									<span className="text-destructive mt-1">&#x2717;</span>
									Students memorize without understanding context
								</li>
							</ul>
						</div>
						<div className="rounded-2xl border bg-primary/5 p-6">
							<div className="flex items-center gap-3 mb-4">
								<div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
									<HugeiconsIcon
										icon={FlowIcon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="font-semibold text-foreground">
									Zomath Concept Map
								</h3>
							</div>
							<ul className="space-y-2 text-sm text-foreground">
								<li className="flex items-start gap-2">
									<span className="text-primary mt-1">&#x2713;</span>
									Concepts arranged by how they actually depend on each other
								</li>
								<li className="flex items-start gap-2">
									<span className="text-primary mt-1">&#x2713;</span>
									Prerequisites and consequences visible at a glance
								</li>
								<li className="flex items-start gap-2">
									<span className="text-primary mt-1">&#x2713;</span>
									Cross-subject connections revealed naturally
								</li>
								<li className="flex items-start gap-2">
									<span className="text-primary mt-1">&#x2713;</span>
									Students build genuine, connected understanding
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
