"use client";

import { proofStats } from "@/components/sections/progress/data";

export function ProofStats() {
	return (
		<section className="py-24 lg:py-32">
			<div className="mx-auto max-w-7xl px-4 lg:px-12">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						Understanding you can measure
					</h2>
					<p className="mt-4 text-muted-foreground leading-relaxed">
						Most platforms count correct answers and call it progress. Zomath
						measures whether you actually understand the math, and shows you
						the proof.
					</p>
				</div>
				<div className="mt-16 grid gap-6 md:grid-cols-3">
					{proofStats.map((stat) => (
						<div
							key={stat.label}
							className="flex flex-col gap-4 rounded-2xl border border-border bg-muted/30 p-8"
						>
							<div className="text-4xl font-bold text-primary">{stat.value}</div>
							<p className="text-sm font-medium text-foreground">{stat.label}</p>
							<p className="text-xs text-muted-foreground leading-relaxed">
								{stat.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
