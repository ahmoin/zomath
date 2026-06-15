"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { quickStats } from "@/components/sections/privacy/data";

export function AtAGlance() {
	return (
		<section className="py-16 lg:py-20">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-2xl mb-10">
					<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
						At a glance
					</h2>
					<p className="text-muted-foreground leading-relaxed">
						The most important things to know about how Zomath handles your
						data, summarized.
					</p>
				</div>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{quickStats.map((stat) => (
						<div
							key={stat.label}
							className="flex items-start gap-4 rounded-xl border bg-background p-5"
						>
							<div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 shrink-0">
								<HugeiconsIcon
									icon={stat.icon}
									className="size-5 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<div className="min-w-0">
								<p className="text-sm font-medium text-foreground">
									{stat.label}
								</p>
								<p className="text-sm text-muted-foreground mt-0.5">
									{stat.detail}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
