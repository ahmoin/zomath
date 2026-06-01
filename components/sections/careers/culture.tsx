"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { values } from "@/components/sections/careers/data";

export function Culture() {
	return (
		<section id="culture" className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-2xl mb-16">
					<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-4">
						How we work
					</h2>
					<p className="text-lg text-muted-foreground">
						We're a small team doing ambitious work. Here's what guides us.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8 lg:gap-12">
					{values.map((value) => (
						<div key={value.title} className="space-y-4">
							<div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
								<HugeiconsIcon
									icon={value.icon}
									className="size-6 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<h3 className="text-xl font-medium">{value.title}</h3>
							<p className="text-muted-foreground leading-relaxed">
								{value.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
