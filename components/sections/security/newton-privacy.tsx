"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { newtonPrivacyItems } from "@/components/sections/security/data";

export function NewtonPrivacy() {
	return (
		<section className="py-24 lg:py-32 bg-muted/30">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="grid lg:grid-cols-2 gap-16 items-start">
					<div>
						<p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
							Newton and AI Privacy
						</p>
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
							Your AI tutor respects your boundaries
						</h2>
						<p className="mt-4 text-muted-foreground leading-relaxed">
							Newton is the heart of Zomath. It is also the feature that handles
							your most personal learning moments: the questions you are
							embarrassed to ask in class, the mistakes you make when nobody is
							watching, the concepts that just will not click. We take that
							trust seriously.
						</p>
						<p className="mt-4 text-muted-foreground leading-relaxed">
							Newton processes your questions in real time and responds without
							human oversight of your individual conversations. The AI model
							that powers Newton is not trained on your personal chats. Any
							model improvement uses only aggregated, anonymized patterns that
							cannot be traced back to you.
						</p>
					</div>
					<div className="space-y-4">
						{newtonPrivacyItems.map((item) => (
							<div
								key={item.title}
								className="rounded-xl border bg-card p-5 hover:border-primary/30 transition-colors"
							>
								<div className="flex items-start gap-3">
									<div className="flex-shrink-0 inline-flex items-center justify-center rounded-lg bg-primary/10 p-2">
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
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
