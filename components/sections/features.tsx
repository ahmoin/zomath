"use client";

import {
	Calculator01Icon,
	Camera01Icon,
	ChartLineData02Icon,
	File01Icon,
	FlashIcon,
	Layers01Icon,
	Link01Icon,
	ScanIcon,
	TestTube01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type HugeiconsProps } from "@hugeicons/react";
import "katex/dist/katex.min.css";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

const MATH_SUBJECTS = [
	{
		name: "Algebra",
		icon: Icons.xSquared,
		scale: "group-hover:scale-80 group-hover:opacity-80",
		iconSize: "size-8",
	},
	{
		name: "Trig",
		icon: Icons.sinTheta,
		scale: "group-hover:scale-90 group-hover:opacity-90",
		iconSize: "size-11",
	},
	{
		name: "Calculus",
		icon: Icons.integral,
		scale: "group-hover:scale-110",
		featured: true,
		iconSize: "size-12",
	},
	{
		name: "Stats",
		icon: Icons.mu,
		scale: "group-hover:scale-90 group-hover:opacity-90",
		iconSize: "size-6",
	},
	{
		name: "Geometry",
		icon: Icons.congruent,
		scale: "group-hover:scale-80 group-hover:opacity-80",
		iconSize: "size-8",
	},
];

const STUDY_MATERIALS = [
	{
		icon: File01Icon,
		label: "Calculus_Textbook.pdf",
		bg: "bg-background",
		gradient:
			"bg-[radial-gradient(80%_80%_at_10%_0%,color-mix(in_oklab,var(--foreground)_8%,transparent),transparent)]",
		initialOffset: "translate-x-1/2",
	},
	{
		icon: File01Icon,
		label: "class_notes_week3.pdf",
		bg: "bg-background",
		gradient:
			"bg-[radial-gradient(25%_80%_at_10%_0%,color-mix(in_oklab,var(--foreground)_8%,transparent),transparent)]",
		initialOffset: "translate-x-1/3",
	},
	{
		icon: Link01Icon,
		label: "khanacademy.org/calculus",
		bg: "bg-card",
		gradient: "",
		initialOffset: "translate-x-1/4",
	},
	{
		icon: Link01Icon,
		label: "youtube.com/watch?v=...",
		bg: "bg-primary text-primary-foreground",
		gradient: "",
		initialOffset: "translate-x-1/5",
	},
];

const TOOL_ROWS = [
	[
		{
			icon: Camera01Icon,
			label: "Snap a problem",
			gradient:
				"bg-[radial-gradient(80%_100%_at_20%_0%,color-mix(in_oklab,var(--foreground)_10%,transparent),transparent)]",
		},
		{ icon: null, label: "", gradient: "" },
	],
	[
		{ icon: null, label: "", gradient: "" },
		{
			icon: Calculator01Icon,
			label: "Step-by-step solver",
			gradient:
				"bg-[radial-gradient(80%_100%_at_50%_0%,color-mix(in_oklab,var(--foreground)_10%,transparent),transparent)]",
		},
		{ icon: null, label: "", gradient: "" },
	],
	[
		{
			icon: FlashIcon,
			label: "Flashcard drill",
			gradient:
				"bg-[radial-gradient(80%_100%_at_50%_0%,color-mix(in_oklab,var(--foreground)_10%,transparent),transparent)]",
		},
		{ icon: TestTube01Icon, label: "Practice test", gradient: "", dim: true },
		{ icon: null, label: "", gradient: "" },
	],
	[
		{ icon: null, label: "", gradient: "" },
		{
			icon: ChartLineData02Icon,
			label: "Progress report",
			gradient:
				"bg-[radial-gradient(50%_80%_at_20%_10%,color-mix(in_oklab,var(--foreground)_10%,transparent),transparent)]",
		},
		{ icon: Layers01Icon, label: "Concept map", gradient: "", dim: true },
		{ icon: null, label: "", gradient: "" },
	],
	[
		{ icon: null, label: "", gradient: "" },
		{ icon: null, label: "", gradient: "" },
		{ icon: null, label: "", gradient: "" },
	],
];

const cardBase = "group relative rounded-2xl border";

function MathSubjectsCard() {
	return (
		<div
			className={cn(
				cardBase,
				"md:col-span-5 bg-background bg-[radial-gradient(50%_50%_at_45%_0%,color-mix(in_oklab,var(--foreground)_5%,transparent),transparent)]",
			)}
		>
			<div className="p-6">
				<h3 className="font-medium text-base leading-tight md:text-lg">
					<span>Every subject covered.</span>{" "}
					<span className="text-muted-foreground">
						From Algebra to Calculus, Newton has you.
					</span>
				</h3>
			</div>
			<div className="relative flex h-64 items-center justify-center overflow-hidden">
				<div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] relative flex size-full flex-col items-center justify-center">
					<div className="flex w-full items-center justify-center gap-3 px-4">
						{MATH_SUBJECTS.map((subject) =>
							subject.featured ? (
								<div key={subject.name} className="relative">
									<div
										className={cn(
											"flex size-18 shrink-0 items-center justify-center rounded-2xl border bg-background shadow-xs md:size-24",
											"inset-shadow-2xs inset-shadow-foreground/10 dark:inset-shadow-foreground/60",
											"transition-all duration-600 ease-in-out",
											"bg-[radial-gradient(75%_75%_at_0%_0%,color-mix(in_oklab,var(--foreground)_10%,transparent),transparent)]",
											subject.scale,
										)}
									>
										<span className="pointer-events-none select-none text-xl">
											<subject.icon className={subject.iconSize} />
										</span>
									</div>
									<div className="mt-1 text-center font-medium text-muted-foreground text-sm group-hover:-mt-5 transition-all duration-600 ease-in-out">
										{subject.name}
									</div>
									<div className="absolute inset-0 -z-10 rounded-2xl bg-primary/8 blur-xl" />
								</div>
							) : (
								<div
									key={subject.name}
									className={cn(
										"flex size-18 shrink-0 items-center justify-center rounded-2xl border bg-background shadow-xs md:size-24",
										"inset-shadow-2xs inset-shadow-foreground/10 dark:inset-shadow-foreground/60",
										"transition-all duration-600 ease-in-out",
										subject.scale,
									)}
								>
									<span className="pointer-events-none select-none text-xl">
										<subject.icon className={subject.iconSize} />
									</span>
								</div>
							),
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

function StudyMaterialsCard() {
	return (
		<div className={cn(cardBase, "bg-card dark:bg-card/50 md:col-span-3")}>
			<div className="relative flex h-64 items-center justify-center overflow-hidden">
				<div className="relative size-full -space-y-2 p-4 group-hover:space-y-2">
					{STUDY_MATERIALS.map((source) => {
						const Icon = source.icon;
						return (
							<div
								key={source.label}
								className={cn(
									"flex h-16 items-center rounded-xl border px-4 pt-3 shadow-xs",
									"group-hover:h-12 group-hover:translate-x-0 group-hover:rounded-lg group-hover:pt-0",
									"transition-all duration-600 ease-in-out",
									source.initialOffset,
									source.bg,
									source.gradient,
								)}
							>
								<div className="flex items-center gap-2">
									<HugeiconsIcon
										icon={source.icon}
										className="size-4 shrink-0"
										strokeWidth={1.5}
										aria-hidden="true"
									/>
									<span className="font-medium text-sm">{source.label}</span>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className="p-6">
				<h3 className="font-medium text-base leading-tight md:text-lg">
					<span>Bring your materials.</span>{" "}
					<span className="text-muted-foreground">
						Upload notes, textbooks, or links and Newton learns from them.
					</span>
				</h3>
			</div>
		</div>
	);
}

function MemoryCard() {
	return (
		<div className={cn(cardBase, "bg-card dark:bg-card/50 md:col-span-4")}>
			<div className="relative flex h-64 items-center justify-center overflow-hidden">
				<div className="flex size-full items-center justify-center p-6">
					<div className="[mask-image:linear-gradient(to_bottom,black_50%,transparent)] h-50 w-full max-w-50 space-y-3 group-hover:max-w-72 group-hover:scale-[1.08] transition-all duration-600 ease-in-out">
						<div className="flex size-12 items-center justify-center rounded-md border bg-background shadow-xs">
							<HugeiconsIcon
								icon={ScanIcon}
								className="size-5"
								strokeWidth={2.5}
								aria-hidden="true"
							/>
						</div>
						<div className="flex items-center gap-2 font-mono text-sm">
							Newton [12:21]
						</div>
						<p className="text-muted-foreground text-sm leading-relaxed">
							Welcome back.
							<br />
							Last time we worked through chain rule and you kept missing the
							inner derivative. Want to pick up where we left off?
						</p>
					</div>
				</div>
			</div>
			<div className="p-6">
				<h3 className="font-medium text-base leading-tight md:text-lg">
					<span>Newton remembers.</span>{" "}
					<span className="text-muted-foreground">
						Every mistake, every win, every session picked up right where you
						left off.
					</span>
				</h3>
			</div>
		</div>
	);
}

function ToolItem({
	icon,
	label,
	gradient,
	dim,
}: {
	icon: HugeiconsProps["icon"] | null;
	label: string;
	gradient: string;
	dim?: boolean;
}) {
	return (
		<div
			className={cn(
				"flex h-12 flex-1 items-center gap-2 rounded-lg border bg-background px-4 shadow-xs",
				gradient,
				dim && "opacity-60",
			)}
		>
			{icon && (
				<>
					<HugeiconsIcon
						icon={icon}
						className="size-4 shrink-0"
						strokeWidth={1.5}
						aria-hidden="true"
					/>
					<span className="whitespace-nowrap font-medium text-xs">{label}</span>
				</>
			)}
		</div>
	);
}

function ToolsCard() {
	return (
		<div className={cn(cardBase, "bg-card dark:bg-card/50 md:col-span-4")}>
			<div className="p-10">
				<h3 className="font-medium text-base leading-tight md:text-lg">
					<span>Every study mode.</span>{" "}
					<span className="text-muted-foreground">
						Snap, solve, drill, and test, all in one place.
					</span>
				</h3>
			</div>
			<div className="relative flex h-64 items-center justify-center overflow-hidden">
				<div
					className={cn(
						"grid size-full translate-x-1/6 grid-cols-1 gap-1 pt-2",
						"group-hover:-mt-1 group-hover:translate-x-0 group-hover:scale-[0.98] group-hover:px-4 group-hover:pt-0",
						"transition-all duration-600 ease-in-out",
						"[&>div]:flex [&>div]:w-full [&>div]:gap-1",
					)}
				>
					{TOOL_ROWS.map((row, rowIdx) => (
						<div key={rowIdx}>
							{row.map((tool, colIdx) => (
								<ToolItem
									key={colIdx}
									icon={tool.icon}
									label={tool.label}
									gradient={tool.gradient}
									dim={tool.dim}
								/>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export function FeaturesSection() {
	return (
		<section className="w-full py-24 lg:py-32">
			<div className="mx-auto max-w-7xl px-4 lg:px-12">
				<div className="mb-12 text-center">
					<h2 className="text-balance text-4xl font-medium lg:text-5xl">
						The tools that close the gap
					</h2>
				</div>

				<div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 px-4 md:grid-cols-8">
					<MathSubjectsCard />
					<StudyMaterialsCard />
					<MemoryCard />
					<ToolsCard />
				</div>
			</div>
		</section>
	);
}
