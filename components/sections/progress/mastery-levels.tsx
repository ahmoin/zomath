"use client";

import { ApronIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { masteryLevels } from "@/components/sections/progress/data";

export function MasteryLevels() {
	return (
		<section className="py-24 lg:py-32">
			<div className="mx-auto max-w-7xl px-4 lg:px-12">
				<div className="mx-auto max-w-2xl text-center">
					<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm text-muted-foreground">
						<HugeiconsIcon
							icon={ApronIcon}
							className="size-4 text-primary"
							strokeWidth={1.5}
						/>
						Deep dive
					</div>
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						What mastery actually means
					</h2>
					<p className="mt-4 text-muted-foreground leading-relaxed">
						Zomath doesn&apos;t give you a percentage and move on. Mastery has
						layers, and each one represents a deeper kind of understanding.
						Here is what each level looks like in practice.
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-3xl flex flex-col gap-6">
					{masteryLevels.map((level) => (
						<div key={level.title} className="flex gap-6 items-start">
							<div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
								<HugeiconsIcon
									icon={level.icon}
									className="size-6"
									strokeWidth={1.5}
								/>
							</div>
							<div className="flex flex-col gap-2">
								<h3 className="text-lg font-semibold text-foreground">
									{level.title}
								</h3>
								<p className="text-sm leading-relaxed text-muted-foreground">
									{level.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
