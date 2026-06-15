"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { learnerTypes } from "@/components/sections/progress/data";

export function ForLearners() {
	return (
		<section className="py-24 lg:py-32 bg-muted/30">
			<div className="mx-auto max-w-7xl px-4 lg:px-12">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						Built for real learners
					</h2>
					<p className="mt-4 text-muted-foreground leading-relaxed">
						Whether you&apos;re catching up, keeping up, or pulling ahead,
						progress tracking adapts to your goals and your pace.
					</p>
				</div>
				<div className="mt-16 grid gap-8 sm:grid-cols-3">
					{learnerTypes.map((type) => (
						<div
							key={type.title}
							className="flex flex-col gap-3 rounded-2xl border border-border bg-background p-8"
						>
							<HugeiconsIcon
								icon={type.icon}
								className="size-8 text-primary"
								strokeWidth={1.5}
							/>
							<h3 className="text-lg font-semibold text-foreground">
								{type.title}
							</h3>
							<p className="text-sm leading-relaxed text-muted-foreground">
								{type.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
