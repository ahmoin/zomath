"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { personas } from "@/components/sections/about/data";

function PersonaCard({
	icon,
	title,
	subtitle,
	description,
}: {
	icon: React.ReactNode;
	title: string;
	subtitle: string;
	description: string;
}) {
	return (
		<div className="flex flex-col rounded-2xl border bg-background p-8">
			<div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-muted text-foreground">
				{icon}
			</div>
			<h3 className="text-lg font-semibold text-foreground">{title}</h3>
			<p className="mb-3 text-sm font-medium text-primary">{subtitle}</p>
			<p className="text-muted-foreground leading-relaxed">{description}</p>
		</div>
	);
}

export function Personas() {
	return (
		<section className="py-24 lg:py-32">
			<div className="mx-auto max-w-7xl px-4 lg:px-12">
				<div className="mx-auto max-w-2xl text-center">
					<p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
						Built for
					</p>
					<h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						Students who learn differently
					</h2>
					<p className="text-muted-foreground leading-relaxed">
						Whether you are catching up, keeping pace, or pushing ahead,
						Zomath adapts to your goals and your pace. Here are some of the
						learners we had in mind.
					</p>
				</div>

				<div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{personas.map((persona) => (
						<PersonaCard
							key={persona.title}
							icon={
								<HugeiconsIcon
									icon={persona.icon}
									className="size-5"
									strokeWidth={1.5}
								/>
							}
							title={persona.title}
							subtitle={persona.subtitle}
							description={persona.description}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
