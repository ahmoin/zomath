"use client";

import { ArrowRight02Icon, AbacusIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { learningPath } from "@/components/sections/algebra/data";

export function LearningPath() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-2xl mb-16">
					<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
						A clear path from confusion to mastery
					</h2>
					<p className="text-muted-foreground text-lg leading-relaxed">
						Algebra builds on itself. If your foundation is shaky, everything
						above it wobbles. This path makes sure you are solid at every step
						before moving forward.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
					{learningPath.map((step) => (
						<div
							key={step.step}
							className="relative rounded-xl border bg-card p-6"
						>
							<div className="flex items-center gap-3 mb-3">
								<span className="flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
									{step.step}
								</span>
								<h3 className="font-semibold text-foreground">{step.title}</h3>
							</div>
							<p className="text-sm text-muted-foreground mb-2">
								{step.topics}
							</p>
							<div className="flex items-center gap-1.5 text-xs text-muted-foreground">
								<HugeiconsIcon
									icon={AbacusIcon}
									className="size-3.5"
									strokeWidth={1.5}
								/>
								{step.duration}
							</div>
						</div>
					))}
				</div>

				<div className="mt-8 text-center">
					<p className="text-sm text-muted-foreground mb-4">
						Your path may vary based on your starting level. Newton personalizes
						the sequence for you.
					</p>
					<Button variant="outline" asChild>
						<Link href="/concept-map?subject=algebra">
							View your concept map
							<HugeiconsIcon
								icon={ArrowRight02Icon}
								className="size-4 ml-1"
								strokeWidth={1.5}
							/>
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
