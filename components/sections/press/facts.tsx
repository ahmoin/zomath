"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { keyFacts } from "@/components/sections/press/data";

export function Facts() {
	return (
		<section className="py-24 lg:py-32 bg-muted/50">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-12">
					Zomath at a glance
				</h2>
				<div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
					{keyFacts.map((fact) => (
						<div
							key={fact.label}
							className="flex flex-col gap-3 p-6 rounded-xl border border-border bg-background"
						>
							<div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
								<HugeiconsIcon
									icon={fact.icon}
									className="size-5"
									strokeWidth={1.5}
								/>
							</div>
							<p className="text-sm text-muted-foreground">{fact.label}</p>
							<p className="text-lg font-semibold text-foreground">
								{fact.value}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
