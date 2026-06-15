"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { useCases } from "@/components/sections/concepts/data";

export function UseCases() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
						Built for your goals
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						However you use math, the Concept Map adapts to your purpose and
						shows you the way forward.
					</p>
				</div>
				<div className="grid md:grid-cols-2 gap-6">
					{useCases.map((useCase) => (
						<div
							key={useCase.title}
							className="p-6 lg:p-8 rounded-2xl border bg-background"
						>
							<div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
								<HugeiconsIcon
									icon={useCase.icon}
									className="size-6 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<h3 className="text-xl font-semibold text-foreground mb-2">
								{useCase.title}
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								{useCase.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
