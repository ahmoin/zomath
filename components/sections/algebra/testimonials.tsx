"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { testimonials } from "@/components/sections/algebra/data";

export function Testimonials() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-2xl mb-16">
					<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
						Students who used to dread algebra
					</h2>
					<p className="text-muted-foreground text-lg leading-relaxed">
						Real stories from students who went from confused to confident.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-6">
					{testimonials.map((t) => (
						<div
							key={t.name}
							className="rounded-xl border bg-card p-8 flex flex-col"
						>
							<div className="mb-4">
								<HugeiconsIcon
									icon={t.icon}
									className="size-5 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<p className="text-foreground leading-relaxed mb-6 flex-1">
								&ldquo;{t.quote}&rdquo;
							</p>
							<div>
								<div className="font-semibold text-foreground text-sm">
									{t.name}
								</div>
								<div className="text-xs text-muted-foreground">{t.detail}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
