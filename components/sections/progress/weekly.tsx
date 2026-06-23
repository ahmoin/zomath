"use client";

import { CalendarCheckIn01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { weeklyCards } from "@/components/sections/progress/data";

export function Weekly() {
	return (
		<section className="py-24 lg:py-32">
			<div className="mx-auto max-w-7xl px-4 lg:px-12">
				<div className="mx-auto max-w-2xl text-center">
					<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm text-muted-foreground">
						<HugeiconsIcon
							icon={CalendarCheckIn01Icon}
							className="size-4 text-primary"
							strokeWidth={1.5}
						/>
						Consistency wins
					</div>
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						Small steps, big results
					</h2>
					<p className="mt-4 text-muted-foreground leading-relaxed">
						You do not need to study for hours to make progress. Zomath is built
						for daily, focused practice that compounds over time. Here is what a
						typical week looks like.
					</p>
				</div>
				<div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{weeklyCards.map((card) => (
						<div
							key={card.label}
							className="flex flex-col gap-4 rounded-2xl border border-border bg-muted/30 p-6"
						>
							<div className="flex items-center gap-3">
								<div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
									{card.day}
								</div>
								<h3 className="font-semibold text-foreground">{card.label}</h3>
							</div>
							<p className="text-sm text-muted-foreground leading-relaxed">
								{card.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
