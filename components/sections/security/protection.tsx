"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { protectionItems } from "@/components/sections/security/data";

export function Protection() {
	return (
		<section className="py-24 lg:py-32 bg-muted/30">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="grid lg:grid-cols-2 gap-16 items-start">
					<div>
						<p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
							How We Protect You
						</p>
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
							Built for the classroom and beyond
						</h2>
						<p className="mt-4 text-muted-foreground leading-relaxed">
							Zomath is used by students as young as 13, and many features are
							designed with younger learners in mind. That responsibility shapes
							every technical and policy decision we make, from how Newton
							processes your questions to how we store your uploaded photos.
						</p>
						<p className="mt-4 text-muted-foreground leading-relaxed">
							We treat every user as if they are our most vulnerable one. If a
							feature is not safe for a 13-year-old working through algebra at
							their kitchen table, it is not safe for anyone.
						</p>
					</div>
					<div className="space-y-6">
						{protectionItems.map((item) => (
							<div key={item.title} className="flex gap-4">
								<div className="flex-shrink-0 inline-flex items-center justify-center rounded-lg bg-primary/10 p-2.5 h-fit">
									<HugeiconsIcon
										icon={item.icon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<div>
									<h3 className="font-semibold text-foreground mb-1">
										{item.title}
									</h3>
									<p className="text-sm text-muted-foreground leading-relaxed">
										{item.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
