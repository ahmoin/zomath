"use client";

import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { featureBlocks } from "@/components/sections/progress/data";

function FeatureBlock({
	icon,
	title,
	description,
	points,
}: {
	icon: React.ReactNode;
	title: string;
	description: string;
	points: string[];
}) {
	return (
		<div className="flex flex-col gap-4 rounded-2xl border border-border bg-muted/30 p-8 lg:p-10">
			<div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
				{icon}
			</div>
			<h3 className="text-xl font-semibold text-foreground">{title}</h3>
			<p className="text-muted-foreground leading-relaxed">{description}</p>
			<ul className="flex flex-col gap-2">
				{points.map((point) => (
					<li
						key={point}
						className="flex items-start gap-2 text-sm text-foreground"
					>
						<HugeiconsIcon
							icon={CheckmarkCircle02Icon}
							className="mt-0.5 size-4 shrink-0 text-primary"
							strokeWidth={1.5}
						/>
						<span>{point}</span>
					</li>
				))}
			</ul>
		</div>
	);
}

export function Features() {
	return (
		<section className="py-24 lg:py-32 bg-muted/30">
			<div className="mx-auto max-w-7xl px-4 lg:px-12">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						The progress features that matter
					</h2>
					<p className="mt-4 text-muted-foreground leading-relaxed">
						Detailed, thoughtful tools designed around how real learning
						happens, not how to inflate engagement metrics.
					</p>
				</div>
				<div className="mt-16 grid gap-6 md:grid-cols-2">
					{featureBlocks.map((block) => (
						<FeatureBlock
							key={block.title}
							icon={
								<HugeiconsIcon
									icon={block.icon}
									className="size-6"
									strokeWidth={1.5}
								/>
							}
							title={block.title}
							description={block.description}
							points={block.points}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
