"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { differentiators } from "@/components/sections/features/data";

export function Differentiators() {
	return (
		<section className="py-24 lg:py-32 bg-muted/50">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="text-center max-w-2xl mx-auto mb-16">
					<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
						Why Zomath is different
					</h2>
					<p className="text-lg text-muted-foreground">
						We built Zomath because we were frustrated with math tools that
						optimize for shortcuts. Here is what sets us apart.
					</p>
				</div>
				<div className="grid md:grid-cols-3 gap-8">
					{differentiators.map((item) => (
						<div
							key={item.title}
							className="bg-background border border-border rounded-2xl p-8"
						>
							<div className="flex items-center justify-center size-12 rounded-xl bg-primary/10 mb-5">
								<HugeiconsIcon
									icon={item.icon}
									className="size-6 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<h3 className="text-xl font-semibold text-foreground mb-3">
								{item.title}
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								{item.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
