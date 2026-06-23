"use client";

import { problemStats } from "@/components/sections/about/data";

export function Problem() {
	return (
		<section className="bg-muted py-24 lg:py-32">
			<div className="mx-auto max-w-7xl px-4 lg:px-12">
				<div className="grid gap-16 lg:grid-cols-2 lg:items-center">
					<div>
						<p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
							The problem we saw
						</p>
						<h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
							Math education is broken, and students are paying the price
						</h2>
						<div className="space-y-4 text-muted-foreground leading-relaxed">
							<p>
								Too many students learn math as a set of disconnected rules.
								Memorize this formula. Apply that procedure. Get the right
								answer. Move on. The result is fragile understanding that
								crumbles the moment a problem looks slightly different from the
								textbook example.
							</p>
							<p>
								We watched friends, siblings, and classmates struggle not
								because they were incapable, but because they never had someone
								who could explain the &quot;why&quot; behind the
								&quot;what.&quot; A tutor costs $80 per hour. A textbook can not
								answer follow-up questions. And a calculator certainly can not
								teach you how to think.
							</p>
							<p>
								Zomath exists to change that. We built an AI tutor, Newton, who
								is patient, available around the clock, and genuinely invested
								in helping you understand, not just arrive at the correct
								answer.
							</p>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-4">
						{problemStats.map((stat) => (
							<div
								key={stat.value}
								className="rounded-2xl border bg-background p-6"
							>
								<p className="mb-1 text-3xl font-bold text-primary">
									{stat.value}
								</p>
								<p className="text-sm text-muted-foreground">
									{stat.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
