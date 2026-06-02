"use client";

import { BrainIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { newtonBullets } from "@/components/sections/features/data";

export function Newton() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					<div>
						<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Newton makes the difference
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed mb-8">
							Most math apps give you answers. Newton gives you understanding.
							It is the AI tutor built specifically for mathematics, trained
							on proven pedagogy, and designed to adapt to how you think.
						</p>
						<div className="space-y-6">
							{newtonBullets.map((bullet) => (
								<div key={bullet.title} className="flex items-start gap-4">
									<div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 shrink-0">
										<HugeiconsIcon
											icon={bullet.icon}
											className="size-5 text-primary"
											strokeWidth={1.5}
										/>
									</div>
									<div>
										<h4 className="font-semibold text-foreground mb-1">
											{bullet.title}
										</h4>
										<p className="text-muted-foreground text-sm leading-relaxed">
											{bullet.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="bg-muted/50 border border-border rounded-2xl p-8 lg:p-10">
						<div className="flex items-center gap-3 mb-6">
							<div className="flex items-center justify-center size-10 rounded-full bg-primary/10">
								<HugeiconsIcon
									icon={BrainIcon}
									className="size-5 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<div>
								<p className="font-semibold text-foreground">Newton</p>
								<p className="text-xs text-muted-foreground">AI Math Tutor</p>
							</div>
						</div>
						<div className="space-y-4">
							<div className="bg-background rounded-xl rounded-tl-sm p-4 border border-border">
								<p className="text-sm text-foreground">
									I keep getting the chain rule wrong. Can you help?
								</p>
							</div>
							<div className="bg-primary/10 rounded-xl rounded-tr-sm p-4 border border-primary/20">
								<p className="text-sm text-foreground">
									Of course! Before I explain, let me ask: when you apply the
									chain rule, what do you think the &quot;inner function&quot; and
									&quot;outer function&quot; are in a problem like sin(x²)?
								</p>
							</div>
							<div className="bg-background rounded-xl rounded-tl-sm p-4 border border-border">
								<p className="text-sm text-foreground">
									The inner would be x² and the outer is sin of that?
								</p>
							</div>
							<div className="bg-primary/10 rounded-xl rounded-tr-sm p-4 border border-primary/20">
								<p className="text-sm text-foreground">
									Exactly right! So the chain rule says: take the derivative
									of the outer, evaluated at the inner, then multiply by the
									derivative of the inner. You already identified the pieces.
									So what would that look like for sin(x²)?
								</p>
							</div>
						</div>
						<p className="text-xs text-muted-foreground mt-4 text-center">
							Newton guides you to the answer. It does not just give it to
							you.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
