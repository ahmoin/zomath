"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { features } from "@/components/sections/students/data";

export function Features() {
	return (
		<section className="py-24 lg:py-32 bg-muted/50">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="text-center max-w-2xl mx-auto mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
						Everything you need, nothing you don&apos;t
					</h2>
					<p className="mt-4 text-muted-foreground text-lg">
						Five tools that work together to take you from confused to
						confident.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
					{features.map((feature, i) => (
						<div
							key={feature.title}
							className={`relative rounded-2xl border bg-background p-6 lg:p-8 flex flex-col ${
								i === 0 ? "md:col-span-2 lg:col-span-2" : ""
							}`}
						>
							<div
								className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.accent} opacity-50 pointer-events-none`}
							/>
							<div className="relative flex flex-col flex-1">
								<div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
									<HugeiconsIcon
										icon={feature.icon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="text-xl font-semibold text-foreground">
									{feature.title}
								</h3>
								<p className="mt-2 text-muted-foreground leading-relaxed flex-1">
									{feature.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
