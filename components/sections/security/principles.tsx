"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { principles } from "@/components/sections/security/data";

export function Principles() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="text-center mb-16">
					<p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
						Our Principles
					</p>
					<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
						Security is not an afterthought
					</h2>
					<p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
						These core principles guide every decision we make about how your
						data is collected, stored, and used. They are non-negotiable.
					</p>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{principles.map((principle) => (
						<div
							key={principle.title}
							className="rounded-xl border bg-card p-6 hover:border-primary/30 transition-colors"
						>
							<div className="inline-flex items-center justify-center rounded-lg bg-primary/10 p-3 mb-4">
								<HugeiconsIcon
									icon={principle.icon}
									className="size-6 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<h3 className="text-lg font-semibold text-foreground mb-2">
								{principle.title}
							</h3>
							<p className="text-sm text-muted-foreground leading-relaxed">
								{principle.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
