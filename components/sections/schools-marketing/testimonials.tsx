"use client";

import { FiveStars } from "@/components/five-stars";
import { testimonials } from "@/components/sections/schools-marketing/data";

export function Testimonials() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="mx-auto max-w-2xl text-center mb-16">
					<h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						Trusted by Educators Across the Country
					</h2>
					<p className="text-lg text-muted-foreground">
						Real stories from schools using Zomath to transform their math
						programs.
					</p>
				</div>
				<div className="grid gap-8 lg:grid-cols-3">
					{testimonials.map((testimonial) => (
						<div
							key={testimonial.author}
							className="flex flex-col rounded-xl border bg-background p-6"
						>
							<div className="mb-4 flex gap-1">
								<FiveStars className="size-4 text-primary fill-current" />
							</div>
							<blockquote className="mb-6 flex-1 text-muted-foreground italic leading-relaxed">
								&ldquo;{testimonial.quote}&rdquo;
							</blockquote>
							<div className="border-t pt-4">
								<div className="font-semibold text-foreground">
									{testimonial.author}
								</div>
								<div className="text-sm text-muted-foreground">
									{testimonial.role}
								</div>
								<div className="text-sm text-muted-foreground">
									{testimonial.school}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
