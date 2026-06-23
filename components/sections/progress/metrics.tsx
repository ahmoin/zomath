"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { metrics } from "@/components/sections/progress/data";

function StatCard({
	icon,
	label,
	description,
}: {
	icon: React.ReactNode;
	label: string;
	description: string;
}) {
	return (
		<div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-muted/50 p-6 text-center">
			<div className="text-primary">{icon}</div>
			<p className="text-sm font-medium text-foreground">{label}</p>
			<p className="text-xs text-muted-foreground">{description}</p>
		</div>
	);
}

export function Metrics() {
	return (
		<section className="py-24 lg:py-32">
			<div className="mx-auto max-w-7xl px-4 lg:px-12">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						Everything you need to know about your learning
					</h2>
					<p className="mt-4 text-muted-foreground leading-relaxed">
						No more guessing whether you&apos;re improving. Zomath gives you
						clear, honest metrics that reflect real understanding, not just time
						spent or problems attempted.
					</p>
				</div>
				<div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{metrics.map((item) => (
						<StatCard
							key={item.label}
							icon={
								<HugeiconsIcon
									icon={item.icon}
									className="size-6"
									strokeWidth={1.5}
								/>
							}
							label={item.label}
							description={item.description}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
