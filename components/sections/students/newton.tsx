"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { newtonBullets } from "@/components/sections/students/data";

export function Newton() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					<div>
						<p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">
							Meet Newton
						</p>
						<h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
							A tutor that actually gets you
						</h2>
						<p className="mt-4 text-muted-foreground text-lg leading-relaxed">
							Newton is not a search bar that spits out answers. It is an AI
							tutor that adapts to how you think. Ask it to explain something
							differently. Ask why a step works. Ask what would happen if the
							problem changed. Newton meets you where you are.
						</p>
						<div className="mt-8 space-y-4">
							{newtonBullets.map((item) => (
								<div key={item.text} className="flex gap-3 items-start">
									<div className="size-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
										<HugeiconsIcon
											icon={item.icon}
											className="size-3.5 text-primary"
											strokeWidth={1.5}
										/>
									</div>
									<p className="text-foreground leading-relaxed">
										{item.text}
									</p>
								</div>
							))}
						</div>
					</div>
					<div className="rounded-2xl border bg-muted/30 p-6 lg:p-8">
						<div className="space-y-4">
							<div className="rounded-xl bg-background border p-4">
								<p className="text-sm text-muted-foreground mb-1">
									You asked:
								</p>
								<p className="text-foreground">
									Why does the derivative of sin(x) give cos(x)? My teacher
									just said &quot;memorize it.&quot;
								</p>
							</div>
							<div className="rounded-xl bg-primary/5 border border-primary/20 p-4">
								<p className="text-sm font-medium text-primary mb-2">
									Newton:
								</p>
								<p className="text-foreground leading-relaxed">
									Great question. Let&apos;s derive it from the limit definition.
									Think of sin(x) on the unit circle. When you nudge x by a
									tiny amount, the y-coordinate changes horizontally by
									cos(x). Want me to walk through the algebra, or would the
									geometric intuition help more?
								</p>
							</div>
							<div className="rounded-xl bg-background border p-4">
								<p className="text-sm text-muted-foreground mb-1">
									You replied:
								</p>
								<p className="text-foreground">Geometric intuition please!</p>
							</div>
							<div className="rounded-xl bg-primary/5 border border-primary/20 p-4">
								<p className="text-sm font-medium text-primary mb-2">
									Newton:
								</p>
								<p className="text-foreground leading-relaxed">
									Picture the unit circle. sin(x) is the height. Move a tiny
									arc along the circle from angle x. The height changes by
									approximately cos(x) times that arc length. That is the
									derivative. Let me draw it out for you...
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
