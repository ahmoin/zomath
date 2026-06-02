"use client";

import { AbacusIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { stats } from "@/components/sections/algebra/data";

export function Stats() {
	return (
		<section className="py-24 lg:py-32 bg-muted/30">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="text-center max-w-2xl mx-auto mb-16">
					<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
						Algebra students are getting it
					</h2>
					<p className="text-muted-foreground text-lg leading-relaxed">
						Thousands of students use Zomath to finally make algebra click.
					</p>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{stats.map((stat) => (
						<div key={stat.label} className="rounded-xl border bg-card p-8 text-center">
							<HugeiconsIcon icon={AbacusIcon} className="size-6 text-primary mx-auto mb-3" strokeWidth={1.5} />
							<div className="text-3xl font-semibold text-foreground mb-1">{stat.value}</div>
							<div className="text-sm text-muted-foreground">{stat.label}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
