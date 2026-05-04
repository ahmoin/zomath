"use client";

import {
	BookOpen01Icon,
	BrainIcon,
	Camera01Icon,
	ChartLineData02Icon,
	PathIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { NativeTabs } from "@/components/uitripled/native-tabs-shadcnui";
import { cn } from "@/lib/utils";

const FEATURES = [
	{
		id: "photo",
		label: "Photo to Insight",
		icon: Camera01Icon,
		color: "bg-emerald-500",
		textColor: "text-emerald-950",
		tagColor: "bg-emerald-200 text-emerald-800",
		tag: "Snap & understand",
		heading: "Point. Snap. Understand.",
		description:
			"Photograph any math problem and Newton doesn't just solve it. He explains the underlying concept, shows multiple approaches, and pinpoints exactly where you got stuck.",
		ui: (
			<div className="flex flex-col gap-3 rounded-xl border border-emerald-300/40 bg-white/20 p-4 text-emerald-950 text-sm backdrop-blur-sm">
				<div className="flex items-center gap-2 font-medium text-xs uppercase tracking-widest text-emerald-700">
					<span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
					Newton is analysing
				</div>
				<div className="h-24 rounded-lg bg-white/30 border border-emerald-200/50 flex items-center justify-center text-2xl font-serif text-emerald-800">
					∫ x² dx = x³/3 + C
				</div>
				<div className="rounded-lg bg-white/30 border border-emerald-200/50 p-3 text-xs leading-relaxed">
					<span className="font-semibold">Why this works: </span>The power rule
					says raise the exponent by one, then divide by the new exponent. Every
					polynomial term follows this pattern.
				</div>
			</div>
		),
	},
	{
		id: "connections",
		label: "Concept Connections",
		icon: PathIcon,
		color: "bg-violet-500",
		textColor: "text-violet-950",
		tagColor: "bg-violet-200 text-violet-800",
		tag: "See the big picture",
		heading: "Math is one big map.",
		description:
			"The Concept Connection Engine visualises how topics relate to each other and to the real world, so you always know why you're learning something and where it leads next.",
		ui: (
			<div className="flex flex-col gap-3 rounded-xl border border-violet-300/40 bg-white/20 p-4 text-violet-950 text-sm backdrop-blur-sm">
				<div className="text-xs font-semibold uppercase tracking-widest text-violet-600">
					Your math map
				</div>
				{[
					{ from: "Algebra", to: "Pre-Calculus", pct: 90 },
					{ from: "Trigonometry", to: "Physics", pct: 68 },
					{ from: "Quadratics", to: "Parabolas in architecture", pct: 45 },
				].map((row) => (
					<div key={row.from} className="flex flex-col gap-1">
						<div className="flex justify-between text-xs">
							<span>
								{row.from} to {row.to}
							</span>
							<span className="text-violet-600">{row.pct}%</span>
						</div>
						<div className="h-1.5 rounded-full bg-white/30">
							<div
								className="h-full rounded-full bg-violet-500"
								style={{ width: `${row.pct}%` }}
							/>
						</div>
					</div>
				))}
			</div>
		),
	},
	{
		id: "patterns",
		label: "Mistake Patterns",
		icon: BrainIcon,
		color: "bg-rose-500",
		textColor: "text-rose-950",
		tagColor: "bg-rose-200 text-rose-800",
		tag: "Break bad habits",
		heading: "Your mistakes have patterns. Newton finds them.",
		description:
			"The Mistake Pattern Detector analyses your work over time to surface recurring errors and builds targeted practice to fix them for good, before they become habits.",
		ui: (
			<div className="flex flex-col gap-3 rounded-xl border border-rose-300/40 bg-white/20 p-4 text-rose-950 text-sm backdrop-blur-sm">
				<div className="text-xs font-semibold uppercase tracking-widest text-rose-600">
					Patterns detected
				</div>
				{[
					{ label: "Forgetting to flip inequality sign", count: 7 },
					{ label: "Sign error when distributing negatives", count: 5 },
					{ label: "Dropping the constant of integration", count: 3 },
				].map((p) => (
					<div
						key={p.label}
						className="flex items-center justify-between rounded-lg bg-white/30 border border-rose-200/50 px-3 py-2 text-xs"
					>
						<span>{p.label}</span>
						<span className="ml-2 shrink-0 rounded-full bg-rose-500 px-2 py-0.5 text-white font-semibold">
							{p.count}x
						</span>
					</div>
				))}
			</div>
		),
	},
	{
		id: "paths",
		label: "Learning Paths",
		icon: BookOpen01Icon,
		color: "bg-amber-400",
		textColor: "text-amber-950",
		tagColor: "bg-amber-200 text-amber-800",
		tag: "Built for you",
		heading: "A curriculum that learns you.",
		description:
			"Newton builds a profile of your strengths, weaknesses, and learning style. Every explanation adapts to how you learn best: visual, step-by-step, conceptual, or practical.",
		ui: (
			<div className="flex flex-col gap-3 rounded-xl border border-amber-300/40 bg-white/20 p-4 text-amber-950 text-sm backdrop-blur-sm">
				<div className="text-xs font-semibold uppercase tracking-widest text-amber-700">
					Today's path
				</div>
				{[
					{ label: "Limits review", done: true, active: false },
					{ label: "Derivative rules", done: true, active: false },
					{ label: "Chain rule practice", done: false, active: true },
					{ label: "Related rates intro", done: false, active: false },
				].map((step) => (
					<div
						key={step.label}
						className={cn(
							"flex items-center gap-2 rounded-lg border px-3 py-2 text-xs",
							step.active
								? "border-amber-400 bg-amber-100/60 font-semibold"
								: "border-amber-200/40 bg-white/20",
						)}
					>
						<span
							className={cn(
								"size-2 shrink-0 rounded-full",
								step.done
									? "bg-amber-500"
									: step.active
										? "bg-amber-400 animate-pulse"
										: "bg-amber-200",
							)}
						/>
						{step.label}
					</div>
				))}
			</div>
		),
	},
	{
		id: "progress",
		label: "Progress Dashboard",
		icon: ChartLineData02Icon,
		color: "bg-sky-500",
		textColor: "text-sky-950",
		tagColor: "bg-sky-200 text-sky-800",
		tag: "Watch yourself grow",
		heading: "See the growth you can't always feel.",
		description:
			"Track mastery across every topic, watch your confidence climb, and celebrate milestones. Newton keeps score so you can focus on learning.",
		ui: (
			<div className="flex flex-col gap-3 rounded-xl border border-sky-300/40 bg-white/20 p-4 text-sky-950 text-sm backdrop-blur-sm">
				<div className="text-xs font-semibold uppercase tracking-widest text-sky-600">
					Mastery overview
				</div>
				<div className="grid grid-cols-3 gap-2">
					{[
						{ label: "Algebra", pct: 92 },
						{ label: "Geometry", pct: 78 },
						{ label: "Calculus", pct: 54 },
					].map((s) => (
						<div
							key={s.label}
							className="flex flex-col items-center gap-1 rounded-lg border border-sky-200/50 bg-white/30 p-2"
						>
							<span className="text-lg font-bold text-sky-700">{s.pct}%</span>
							<span className="text-xs text-sky-600">{s.label}</span>
						</div>
					))}
				</div>
				<div className="rounded-lg border border-sky-200/50 bg-white/30 px-3 py-2 text-xs">
					You mastered <strong>Chain Rule</strong> this week. 3-day streak!
				</div>
			</div>
		),
	},
];

export function FeaturesSection() {
	return (
		<section className="w-full py-24 lg:py-32">
			<div className="mx-auto max-w-7xl px-4 lg:px-12">
				<div className="mb-12 text-center">
					<h2 className="text-balance text-4xl font-medium lg:text-5xl">
						The tools that close the gap
					</h2>
				</div>

				<NativeTabs
					className="max-w-none"
					items={FEATURES.map((f) => ({
						id: f.id,
						label: f.label,
						content: (
							<div className={cn("overflow-hidden rounded-3xl", f.color)}>
								<div className="grid items-center gap-8 p-8 lg:grid-cols-2 lg:gap-16 lg:p-12">
									<div className={cn("flex flex-col gap-5", f.textColor)}>
										<span
											className={cn(
												"w-fit rounded-full px-3 py-1 text-xs font-semibold",
												f.tagColor,
											)}
										>
											{f.tag}
										</span>
										<h3 className="text-balance text-3xl font-medium lg:text-4xl">
											{f.heading}
										</h3>
										<p className="text-pretty text-base/relaxed opacity-80">
											{f.description}
										</p>
									</div>
									<div>{f.ui}</div>
								</div>
							</div>
						),
					}))}
				/>
			</div>
		</section>
	);
}
