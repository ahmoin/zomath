"use client";

import { BrainIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { studentFeatures } from "@/components/sections/schools-marketing/data";

export function Newton() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="mx-auto max-w-2xl text-center mb-16">
					<div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">
						<HugeiconsIcon
							icon={BrainIcon}
							className="size-4"
							strokeWidth={1.5}
						/>
						Meet Newton
					</div>
					<h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						An AI Tutor That Teaches, Not Just Tells
					</h2>
					<p className="text-lg text-muted-foreground">
						Newton is the heart of Zomath. Unlike tools that hand out answers,
						Newton helps students build genuine understanding through guided
						questioning and personalized explanations.
					</p>
				</div>
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{studentFeatures.map((feature) => (
						<div key={feature.title} className="text-center">
							<div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-primary/10">
								<HugeiconsIcon
									icon={feature.icon}
									className="size-7 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<h3 className="mb-2 text-lg font-semibold text-foreground">
								{feature.title}
							</h3>
							<p className="text-sm text-muted-foreground leading-relaxed">
								{feature.description}
							</p>
						</div>
					))}
				</div>
				<div className="mt-12 rounded-xl border bg-muted/30 p-6 text-center">
					<p className="text-muted-foreground">
						<span className="font-medium text-foreground">
							Teachers see every interaction.
						</span>{" "}
						Full transparency into how Newton works with each student, including
						questions asked, concepts reviewed, and areas of struggle. No black
						boxes.
					</p>
				</div>
			</div>
		</section>
	);
}
