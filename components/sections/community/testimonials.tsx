"use client";

import { FiveStars } from "@/components/five-stars";
import { testimonials } from "@/components/sections/community/data";

export function Testimonials() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="text-center max-w-2xl mx-auto mb-16">
					<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
						Hear from our community
					</h2>
					<p className="text-lg text-muted-foreground leading-relaxed">
						Real stories from learners who found their math people here.
					</p>
				</div>
				<div className="grid md:grid-cols-3 gap-6">
					{testimonials.map((testimonial) => (
						<div
							key={testimonial.name}
							className="rounded-xl border bg-card p-8"
						>
							<div className="flex items-center gap-1 mb-5">
								<FiveStars className="size-4 text-primary" strokeWidth={1.5} />
							</div>
							<p className="text-foreground leading-relaxed mb-6">
								&ldquo;{testimonial.quote}&rdquo;
							</p>
							<div className="flex items-center gap-3">
								<div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
									{testimonial.initials}
								</div>
								<div>
									<p className="text-sm font-medium text-foreground">
										{testimonial.name}
									</p>
									<p className="text-xs text-muted-foreground">
										{testimonial.role}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
