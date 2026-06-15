"use client";

import {
	EyeIcon,
	LightbulbOffIcon,
	RouterIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const steps = [
	{
		icon: EyeIcon,
		step: "01",
		title: "See the structure",
		description:
			"Zoom out to see entire branches of mathematics and how they relate. Zoom in to explore individual concepts and their immediate neighbors. The map adapts to your level of detail, from broad subject areas down to specific theorems and techniques.",
	},
	{
		icon: RouterIcon,
		step: "02",
		title: "Find your path",
		description:
			"Click any concept you want to learn and Newton traces the shortest path from your current knowledge. Prerequisites light up so you know exactly what to strengthen first. No more guessing why a topic feels out of reach.",
	},
	{
		icon: LightbulbOffIcon,
		step: "03",
		title: "Connect the dots",
		description:
			"As you master concepts, the map fills in with your progress. You start seeing patterns across topics, like how completing the square and the quadratic formula are really the same idea in two forms. That is when math starts making sense.",
	},
];

export function HowItWorks() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
						How the Concept Map works
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Three layers of understanding that transform how you navigate
						mathematics.
					</p>
				</div>
				<div className="grid md:grid-cols-3 gap-8">
					{steps.map((item) => (
						<div
							key={item.step}
							className="relative p-6 lg:p-8 rounded-2xl border bg-background"
						>
							<span className="text-5xl font-bold text-muted-foreground/20 absolute top-4 right-6">
								{item.step}
							</span>
							<div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
								<HugeiconsIcon
									icon={item.icon}
									className="size-6 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<h3 className="text-xl font-semibold text-foreground mb-3">
								{item.title}
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								{item.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
