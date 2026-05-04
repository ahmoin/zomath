import {
	BookOpen01Icon,
	BrainIcon,
	Camera01Icon,
	ChartLineData02Icon,
	PathIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const CARDS = [
	{
		title: "Solve",
		description: "Snap any problem. Newton solves it and explains every step.",
		icon: Camera01Icon,
		bg: "bg-sky-200",
		text: "text-sky-900",
		rotate: "-rotate-6",
	},
	{
		title: "Ask Newton",
		description:
			"Ask anything. Get clear, patient explanations, not just answers.",
		icon: BrainIcon,
		bg: "bg-amber-300",
		text: "text-amber-900",
		rotate: "rotate-2",
	},
	{
		title: "Concept Map",
		description: "See how topics connect and why each one matters.",
		icon: PathIcon,
		bg: "bg-violet-300",
		text: "text-violet-900",
		rotate: "rotate-6",
	},
	{
		title: "Practice",
		description: "Targeted drills that fix the exact mistakes you keep making.",
		icon: BookOpen01Icon,
		bg: "bg-rose-300",
		text: "text-rose-900",
		rotate: "-rotate-3",
	},
	{
		title: "Progress",
		description: "Track mastery across every topic and watch yourself grow.",
		icon: ChartLineData02Icon,
		bg: "bg-emerald-300",
		text: "text-emerald-900",
		rotate: "rotate-4",
	},
];

export function StackSection() {
	return (
		<section className="w-full py-24 lg:py-32">
			<div className="mx-auto max-w-sm px-4">
				<h2 className="text-4xl font-medium lg:text-5xl mb-16 text-center text-balance">
					Everything in one place
				</h2>
				<div className="flex flex-col gap-6">
					{CARDS.map((card, i) => (
						<div
							key={card.title}
							className={`sticky top-28 lg:top-36 ${card.bg} ${card.text} ${card.rotate} rounded-2xl p-8 min-h-72 flex flex-col justify-between`}
							style={{ zIndex: i + 1 }}
						>
							<div className="flex justify-center items-center grow">
								<HugeiconsIcon icon={card.icon} size={80} strokeWidth={1} />
							</div>
							<div className="flex flex-col gap-2">
								<h3 className="text-2xl font-medium">{card.title}</h3>
								<p className="text-sm opacity-80 leading-relaxed">
									{card.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
