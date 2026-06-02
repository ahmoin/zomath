"use client";

import { testimonials } from "@/components/sections/students/data";

export function Testimonials() {
	return (
		<section className="py-24 lg:py-32 bg-muted/50">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="text-center max-w-2xl mx-auto mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
						What students are saying
					</h2>
					<p className="mt-4 text-muted-foreground text-lg">
						Real feedback from real learners.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-6">
					{testimonials.map((testimonial) => (
						<div
							key={testimonial.name}
							className="rounded-2xl border bg-background p-6 lg:p-8 flex flex-col"
						>
							<p className="text-foreground leading-relaxed flex-1">
								&ldquo;{testimonial.quote}&rdquo;
							</p>
							<div className="mt-6 pt-4 border-t">
								<p className="font-semibold text-foreground">
									{testimonial.name}
								</p>
								<p className="text-sm text-muted-foreground">
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
