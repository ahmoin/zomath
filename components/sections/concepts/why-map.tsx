"use client";

import {
	GraduateFemaleIcon,
	Link02Icon,
	Search01Icon,
	ZoomIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const features = [
	{
		icon: Link02Icon,
		title: "Prerequisites made visible",
		description:
			"No more guessing why a topic feels hard. The map shows you exactly which foundational concepts support what you are trying to learn, so you can shore up weaknesses before they cascade into frustration.",
	},
	{
		icon: ZoomIcon,
		title: "Zoom in, zoom out",
		description:
			"Start with the big picture of all mathematics, then drill down into a single topic cluster. The Concept Map is fully navigable at every scale, from broad subject areas to individual theorems and lemmas.",
	},
	{
		icon: Search01Icon,
		title: "Search and discover",
		description:
			"Look up any concept and instantly see its neighborhood. What leads into it, what it enables, and what surprising connections exist that your textbook never bothered to mention.",
	},
	{
		icon: GraduateFemaleIcon,
		title: "Personalized progress",
		description:
			"Your map is colored by your mastery. Concepts you have practiced glow brighter. Gaps are immediately obvious. You always know where to invest your time next for maximum growth.",
	},
];

export function WhyMap() {
	return (
		<section className="py-24 lg:py-32 bg-muted/30">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
						Why a map beats a list
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Traditional curricula force you into a linear path. Math is not
						linear. The Concept Map reflects how understanding actually grows.
					</p>
				</div>
				<div className="grid md:grid-cols-2 gap-6">
					{features.map((item) => (
						<div
							key={item.title}
							className="flex gap-5 p-6 lg:p-8 rounded-2xl border bg-background"
						>
							<div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
								<HugeiconsIcon
									icon={item.icon}
									className="size-6 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<div>
								<h3 className="text-xl font-semibold text-foreground mb-2">
									{item.title}
								</h3>
								<p className="text-muted-foreground leading-relaxed">
									{item.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
