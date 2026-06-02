"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { values } from "@/components/sections/about/data";

function ValueCard({
	icon,
	title,
	description,
}: {
	icon: React.ReactNode;
	title: string;
	description: string;
}) {
	return (
		<div className="rounded-2xl border bg-background p-8 transition-shadow hover:shadow-md">
			<div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
				{icon}
			</div>
			<h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>
			<p className="text-muted-foreground leading-relaxed">{description}</p>
		</div>
	);
}

export function Values() {
	return (
		<section className="bg-muted py-24 lg:py-32">
			<div className="mx-auto max-w-7xl px-4 lg:px-12">
				<div className="mx-auto max-w-2xl text-center">
					<p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
						Our values
					</p>
					<h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						What we believe
					</h2>
					<p className="text-muted-foreground leading-relaxed">
						These principles shape every feature we build, every explanation
						Newton gives, and every decision we make as a team.
					</p>
				</div>

				<div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{values.map((value) => (
						<ValueCard
							key={value.title}
							icon={
								<HugeiconsIcon
									icon={value.icon}
									className="size-6"
									strokeWidth={1.5}
								/>
							}
							title={value.title}
							description={value.description}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
