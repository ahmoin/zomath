"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { principles } from "@/components/sections/privacy/data";

export function Principles() {
	return (
		<section className="py-24 lg:py-32 bg-muted/30">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-2xl mb-12">
					<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
						Our privacy principles
					</h2>
					<p className="text-muted-foreground leading-relaxed">
						These are not just words on a page. They are the foundation of every
						product decision we make at Zomath.
					</p>
				</div>
				<div className="grid md:grid-cols-2 gap-6">
					{principles.map((principle) => (
						<div
							key={principle.title}
							className="rounded-2xl border bg-background p-8 flex flex-col gap-4"
						>
							<div className="flex items-center justify-center size-12 rounded-xl bg-primary/10">
								<HugeiconsIcon
									icon={principle.icon}
									className="size-6 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<h3 className="text-lg font-semibold text-foreground">
								{principle.title}
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								{principle.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
