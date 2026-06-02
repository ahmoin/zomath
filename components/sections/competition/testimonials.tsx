"use client";

import { FiveStars } from "@/components/five-stars";
import { testimonials } from "@/components/sections/competition/data";

export function Testimonials() {
	return (
		<section className="py-24 lg:py-32 bg-muted">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="mb-12">
					<p className="text-sm font-medium text-primary mb-3">
						What Students Say
					</p>
					<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
						Results that speak for themselves.
					</h2>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{testimonials.map((testimonial) => (
						<div
							key={testimonial.name}
							className="rounded-xl border border-border bg-background p-6 lg:p-8"
						>
							<div className="flex gap-0.5 mb-4">
								<FiveStars
									className="size-4 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<p className="text-foreground text-sm leading-relaxed mb-4">
								{testimonial.quote}
							</p>
							<div>
								<p className="font-semibold text-sm">{testimonial.name}</p>
								<p className="text-muted-foreground text-xs">
									{testimonial.detail}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
