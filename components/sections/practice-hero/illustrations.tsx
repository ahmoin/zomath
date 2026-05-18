"use client";

import {
	Cancel01Icon,
	CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@/lib/utils";

export function QuizIllustration() {
	return (
		<div className="flex flex-col justify-center gap-1.5 w-full px-4 py-3">
			{["A", "B", "C"].map((l, i) => (
				<div
					key={l}
					className={cn(
						"flex items-center gap-2 rounded-md px-2 py-1.5 border transition-all duration-600 ease-in-out",
						i === 1
							? "bg-primary/20 border-primary/40 group-hover:bg-primary/30 group-hover:border-primary/60 group-hover:translate-x-1"
							: "bg-primary/8 border-primary/15 group-hover:opacity-60",
					)}
				>
					<span className="text-[9px] font-bold text-primary w-2.5">{l}</span>
					<div
						className={cn(
							"flex-1 h-1 rounded-full transition-all duration-600",
							i === 1
								? "bg-primary/60 group-hover:bg-primary/80"
								: "bg-primary/20",
						)}
					/>
					{i === 1 && (
						<HugeiconsIcon
							icon={CheckmarkCircle02Icon}
							className="size-2.5 text-primary"
							strokeWidth={2}
						/>
					)}
				</div>
			))}
		</div>
	);
}

export function MatchUpIllustration() {
	return (
		<div className="flex items-center justify-center gap-1.5 w-full px-3">
			<div className="flex flex-col gap-1.5">
				{[0, 1, 2].map((i) => (
					<div
						key={i}
						className={cn(
							"w-9 h-4 rounded bg-primary/15 border border-primary/20 transition-all duration-600 ease-in-out",
							i === 1 &&
								"group-hover:bg-primary/25 group-hover:border-primary/35",
						)}
					/>
				))}
			</div>
			<div className="flex flex-col gap-3.5 px-0.5">
				{[0, 1, 2].map((i) => (
					<div
						key={i}
						className={cn(
							"h-px transition-all duration-600 ease-in-out",
							i === 1
								? "w-5 bg-primary/60 group-hover:w-7 group-hover:bg-primary/80"
								: "w-5 bg-primary/25 group-hover:opacity-40",
						)}
					/>
				))}
			</div>
			<div className="flex flex-col gap-1.5">
				{[2, 0, 1].map((i) => (
					<div
						key={i}
						className={cn(
							"w-9 h-4 rounded border transition-all duration-600 ease-in-out",
							i === 1
								? "bg-primary/25 border-primary/40 group-hover:bg-primary/35 group-hover:border-primary/55"
								: "bg-primary/10 border-primary/20 group-hover:opacity-50",
						)}
					/>
				))}
			</div>
		</div>
	);
}

export function FlashCardsIllustration() {
	return (
		<div className="relative flex items-center justify-center w-full h-full">
			<div className="absolute w-14 h-10 rounded-lg border border-primary/15 bg-primary/5 transition-all duration-600 ease-in-out rotate-6 translate-x-2 group-hover:rotate-12 group-hover:translate-x-4 group-hover:opacity-50" />
			<div className="absolute w-14 h-10 rounded-lg border border-primary/20 bg-primary/8 transition-all duration-600 ease-in-out rotate-3 translate-x-1 group-hover:rotate-6 group-hover:translate-x-2 group-hover:opacity-70" />
			<div className="relative w-14 h-10 rounded-lg border border-primary/35 bg-primary/18 flex items-center justify-center transition-all duration-600 ease-in-out group-hover:scale-110 group-hover:bg-primary/25 group-hover:border-primary/50">
				<span className="text-primary text-[11px] font-mono font-semibold">
					f(x)
				</span>
			</div>
		</div>
	);
}

export function GameshowIllustration() {
	return (
		<div className="flex flex-col items-center justify-center gap-2 w-full px-3 py-2">
			<div className="flex gap-1.5">
				{[0, 1, 2].map((i) => (
					<div
						key={i}
						className={cn(
							"size-2 rounded-full transition-all duration-600 ease-in-out",
							i === 1
								? "bg-primary group-hover:scale-125"
								: "bg-primary/25 group-hover:bg-primary/15",
						)}
					/>
				))}
			</div>
			<div className="w-full rounded-md border border-primary/25 bg-primary/10 px-2 py-2 flex flex-col gap-1 transition-all duration-600 ease-in-out group-hover:border-primary/40 group-hover:bg-primary/15">
				<div className="h-1.5 w-3/4 rounded-full bg-primary/40 transition-all duration-600 ease-in-out group-hover:w-full group-hover:bg-primary/60" />
				{["A", "B"].map((l, i) => (
					<div
						key={l}
						className={cn(
							"flex items-center gap-1.5 rounded px-1.5 py-0.5 transition-all duration-600 ease-in-out",
							i === 0
								? "bg-primary/20 group-hover:bg-primary/30"
								: "bg-primary/8 group-hover:opacity-50",
						)}
					>
						<span className="text-[8px] font-bold text-primary">{l}</span>
						<div className="flex-1 h-1 rounded-full bg-primary/25" />
					</div>
				))}
			</div>
		</div>
	);
}

export function TrueOrFalseIllustration() {
	return (
		<div className="flex items-center justify-center gap-3 w-full">
			<div className="flex flex-col items-center gap-1">
				<div className="size-9 rounded-lg border border-primary/30 bg-primary/15 flex items-center justify-center transition-all duration-600 ease-in-out group-hover:scale-110 group-hover:bg-primary/25 group-hover:border-primary/50">
					<HugeiconsIcon
						icon={CheckmarkCircle02Icon}
						className="size-5 text-primary"
						strokeWidth={1.5}
					/>
				</div>
				<span className="text-[8px] text-primary/60 font-medium transition-opacity duration-600 group-hover:opacity-40">
					TRUE
				</span>
			</div>
			<div className="flex flex-col items-center gap-1">
				<div className="size-9 rounded-lg border border-destructive/30 bg-destructive/10 flex items-center justify-center transition-all duration-600 ease-in-out group-hover:opacity-40 group-hover:scale-90">
					<HugeiconsIcon
						icon={Cancel01Icon}
						className="size-5 text-destructive/70"
						strokeWidth={1.5}
					/>
				</div>
				<span className="text-[8px] text-destructive/50 font-medium transition-opacity duration-600 group-hover:opacity-25">
					FALSE
				</span>
			</div>
		</div>
	);
}

export function FillBlankIllustration() {
	return (
		<div className="flex flex-col items-center justify-center gap-2 w-full px-3">
			<div className="font-mono text-xs text-primary/70 tracking-wide transition-all duration-600 ease-in-out group-hover:text-primary/90">
				x² + 2x +
			</div>
			<div className="flex items-center gap-1">
				<div className="w-8 h-5 rounded border-b-2 border-primary/50 bg-primary/10 transition-all duration-600 ease-in-out group-hover:w-10 group-hover:border-primary/80 group-hover:bg-primary/20" />
				<span className="font-mono text-xs text-primary/70">= 0</span>
			</div>
			<div className="w-2 h-3 border-r-2 border-primary/50 animate-pulse" />
		</div>
	);
}

export function RankOrderIllustration() {
	return (
		<div className="flex flex-col justify-center gap-1.5 w-full px-3 py-2">
			{[1, 2, 3].map((n, i) => (
				<div
					key={n}
					className={cn(
						"flex items-center gap-2 rounded-md px-2 py-1 border transition-all duration-600 ease-in-out",
						i === 0 && "group-hover:-translate-y-0.5 group-hover:opacity-70",
						i === 1 &&
							"bg-primary/20 border-primary/35 translate-x-1 group-hover:translate-x-3 group-hover:bg-primary/30",
						i === 2 && "group-hover:translate-y-0.5 group-hover:opacity-70",
						i !== 1 && "bg-primary/8 border-primary/15",
					)}
				>
					<span className="text-[9px] font-bold text-primary/70 w-2.5">
						{n}
					</span>
					<div className="flex-1 h-1 rounded-full bg-primary/25" />
					<div className="flex gap-0.5">
						<div className="w-0.5 h-2 rounded-full bg-primary/30" />
						<div className="w-0.5 h-2 rounded-full bg-primary/30" />
					</div>
				</div>
			))}
		</div>
	);
}

export function FlipTilesIllustration() {
	return (
		<div className="grid grid-cols-2 gap-1.5 p-3 w-full">
			{[false, true, false, false].map((flipped, i) => (
				<div
					key={i}
					className={cn(
						"h-8 rounded-md border flex items-center justify-center transition-all duration-600 ease-in-out",
						flipped
							? "bg-primary/25 border-primary/40 group-hover:bg-primary/40 group-hover:border-primary/60 group-hover:scale-105"
							: "bg-primary/10 border-primary/20 group-hover:opacity-50",
					)}
				>
					{flipped ? (
						<span className="text-[10px] font-mono text-primary font-semibold">
							42
						</span>
					) : (
						<div className="w-4 h-1 rounded-full bg-primary/30" />
					)}
				</div>
			))}
		</div>
	);
}

export function SpeedRoundIllustration() {
	return (
		<div className="flex flex-col items-center justify-center gap-2 w-full">
			<div className="relative size-12 rounded-full border-2 border-primary/30 bg-primary/8 flex items-center justify-center transition-all duration-600 ease-in-out group-hover:border-primary/60 group-hover:bg-primary/15">
				<div className="absolute top-1/2 left-1/2 w-4 h-px bg-primary/60 origin-left -translate-y-px rotate-45 transition-all duration-600 ease-in-out group-hover:rotate-90 group-hover:bg-primary" />
				<div className="absolute top-1/2 left-1/2 w-3 h-px bg-primary origin-left -translate-y-px -rotate-90 transition-all duration-600 ease-in-out group-hover:-rotate-45" />
				<div className="size-1 rounded-full bg-primary/60" />
			</div>
			<div className="flex gap-1">
				{[0, 1, 2, 3].map((i) => (
					<div
						key={i}
						className={cn(
							"h-1.5 w-3 rounded-full transition-all duration-600 ease-in-out",
							i < 3
								? "bg-primary/40 group-hover:bg-primary/70"
								: "bg-primary/15 group-hover:bg-primary/40",
						)}
					/>
				))}
			</div>
		</div>
	);
}

export function SpotErrorIllustration() {
	return (
		<div className="flex flex-col justify-center gap-1.5 w-full px-3 py-2">
			{[false, false, true, false].map((err, i) => (
				<div key={i} className="flex items-center gap-1.5">
					<span className="text-[8px] text-primary/40 w-3">{i + 1}.</span>
					<div
						className={cn(
							"flex-1 h-1 rounded-full relative transition-all duration-600 ease-in-out",
							err
								? "bg-destructive/40 group-hover:bg-destructive/70"
								: "bg-primary/20 group-hover:opacity-50",
						)}
					>
						{err && (
							<div className="absolute inset-0 rounded-full bg-destructive/25 border border-destructive/40 group-hover:bg-destructive/40 transition-colors duration-600" />
						)}
					</div>
					{err && (
						<HugeiconsIcon
							icon={Cancel01Icon}
							className="size-2.5 text-destructive/70 transition-all duration-600 group-hover:text-destructive group-hover:scale-125"
							strokeWidth={2}
						/>
					)}
				</div>
			))}
		</div>
	);
}

export function PairOrNoPairIllustration() {
	return (
		<div className="flex items-center justify-center gap-2 w-full px-2">
			<div className="flex flex-col gap-1">
				<div className="rounded-md border border-primary/25 bg-primary/10 px-2 py-1 transition-all duration-600 ease-in-out group-hover:border-primary/40 group-hover:bg-primary/20">
					<span className="font-mono text-[10px] text-primary/80">x²−1</span>
				</div>
				<div className="rounded-md border border-primary/25 bg-primary/10 px-2 py-1 transition-all duration-600 ease-in-out group-hover:opacity-50">
					<span className="font-mono text-[10px] text-primary/80">2x+4</span>
				</div>
			</div>
			<div className="flex flex-col gap-1 items-center">
				<div className="size-6 rounded-full border border-primary/30 bg-primary/15 flex items-center justify-center transition-all duration-600 ease-in-out group-hover:scale-110 group-hover:bg-primary/30 group-hover:border-primary/50">
					<HugeiconsIcon
						icon={CheckmarkCircle02Icon}
						className="size-3.5 text-primary"
						strokeWidth={2}
					/>
				</div>
				<div className="size-6 rounded-full border border-destructive/30 bg-destructive/10 flex items-center justify-center transition-all duration-600 ease-in-out group-hover:opacity-40 group-hover:scale-90">
					<HugeiconsIcon
						icon={Cancel01Icon}
						className="size-3.5 text-destructive/60"
						strokeWidth={2}
					/>
				</div>
			</div>
		</div>
	);
}

export function TypeAnswerIllustration() {
	return (
		<div className="flex flex-col items-center justify-center gap-2 w-full px-3">
			<div className="text-[10px] text-primary/60 font-mono transition-opacity duration-600 group-hover:opacity-40">
				Solve for x:
			</div>
			<div className="text-[11px] text-primary/80 font-mono transition-all duration-600 ease-in-out group-hover:text-primary">
				3x − 7 = 14
			</div>
			<div className="flex items-center gap-1 rounded-md border border-primary/30 bg-primary/10 px-2 py-1 w-full transition-all duration-600 ease-in-out group-hover:border-primary/60 group-hover:bg-primary/20">
				<span className="font-mono text-[10px] text-primary/50">x =</span>
				<div className="flex-1 flex items-center">
					<div className="h-3 w-px bg-primary/70 animate-pulse ml-1" />
				</div>
			</div>
		</div>
	);
}
