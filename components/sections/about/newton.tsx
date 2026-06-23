"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { valuePillars } from "@/components/sections/about/data";

function FeaturePillar({
	icon,
	title,
	description,
}: {
	icon: React.ReactNode;
	title: string;
	description: string;
}) {
	return (
		<div className="flex gap-5">
			<div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
				{icon}
			</div>
			<div>
				<h3 className="mb-1 text-base font-semibold text-foreground">
					{title}
				</h3>
				<p className="text-sm text-muted-foreground leading-relaxed">
					{description}
				</p>
			</div>
		</div>
	);
}

export function Newton() {
	return (
		<section className="py-24 lg:py-32">
			<div className="mx-auto max-w-7xl px-4 lg:px-12">
				<div className="mx-auto max-w-2xl text-center">
					<p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
						Meet Newton
					</p>
					<h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						An AI tutor that actually teaches
					</h2>
					<p className="text-muted-foreground leading-relaxed">
						Newton is not a search engine. It is not a calculator with a chat
						window. It is a patient, adaptive tutor that meets you where you are
						and guides you toward real understanding, one question at a time.
					</p>
				</div>

				<div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{valuePillars.map((pillar) => (
						<FeaturePillar
							key={pillar.title}
							icon={
								<HugeiconsIcon
									icon={pillar.icon}
									className="size-5"
									strokeWidth={1.5}
								/>
							}
							title={pillar.title}
							description={pillar.description}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
