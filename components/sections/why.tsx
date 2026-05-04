import {
	BrainIcon,
	CompassIcon,
	Mortarboard01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const PILLARS = [
	{
		icon: BrainIcon,
		heading: "Knows where you're stuck",
		description:
			"Newton reads your work, spots the exact misconception, and targets it directly. No re-explaining what you already know.",
	},
	{
		icon: CompassIcon,
		heading: "Guides as you go",
		description:
			"Clarifies confusing steps, suggests what to explore next, and keeps you moving without just handing you the answer.",
	},
	{
		icon: Mortarboard01Icon,
		heading: "Explains until it clicks",
		description:
			"Practice problems, visual breakdowns, and step-by-step walkthroughs, in whatever style finally makes it land.",
	},
];

export function WhySection() {
	return (
		<section className="w-full py-24 lg:py-32">
			<div className="mx-auto max-w-2xl px-4 text-center">
				<h2 className="text-balance text-4xl font-medium lg:text-5xl mb-20">
					AI that helps you understand, not just answer
				</h2>
				<div className="flex flex-col gap-20">
					{PILLARS.map((p) => (
						<div key={p.heading} className="flex flex-col items-center gap-5">
							<div className="flex size-24 items-center justify-center rounded-2xl bg-muted">
								<HugeiconsIcon icon={p.icon} size={48} strokeWidth={1.5} />
							</div>
							<h3 className="text-xl font-semibold">{p.heading}</h3>
							<p className="text-base text-muted-foreground max-w-xs leading-relaxed">
								{p.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
