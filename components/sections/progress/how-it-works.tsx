"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { steps } from "@/components/sections/progress/data";

function StepCard({
	step,
	icon,
	title,
	description,
	isLast,
}: {
	step: number;
	icon: React.ReactNode;
	title: string;
	description: string;
	isLast: boolean;
}) {
	return (
		<div className="flex gap-4">
			<div className="flex flex-col items-center gap-2">
				<div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
					{step}
				</div>
				{!isLast && <div className="w-px flex-1 bg-border" />}
			</div>
			<div className="flex flex-col gap-2 pb-8">
				<div className="text-primary">{icon}</div>
				<h3 className="text-lg font-semibold text-foreground">{title}</h3>
				<p className="text-sm leading-relaxed text-muted-foreground">
					{description}
				</p>
			</div>
		</div>
	);
}

export function HowItWorks() {
	return (
		<section className="py-24 lg:py-32">
			<div className="mx-auto max-w-7xl px-4 lg:px-12">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						How progress tracking works
					</h2>
					<p className="mt-4 text-muted-foreground leading-relaxed">
						Zomath doesn&apos;t just count right answers. It measures genuine
						understanding through layered, AI-powered assessment that evolves
						with you.
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-xl">
					{steps.map((item, idx) => (
						<StepCard
							key={item.step}
							step={item.step}
							icon={
								<HugeiconsIcon
									icon={item.icon}
									className="size-5"
									strokeWidth={1.5}
								/>
							}
							title={item.title}
							description={item.description}
							isLast={idx === steps.length - 1}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
