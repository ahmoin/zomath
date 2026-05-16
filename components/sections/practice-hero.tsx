"use client";

import "katex/dist/katex.min.css";
import {
	Analytics01Icon,
	ArrowDown01Icon,
	BookOpen02Icon,
	Cancel01Icon,
	CheckmarkCircle02Icon,
	Copy01Icon,
	PuzzleIcon,
	SparklesIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { math } from "@streamdown/math";
import { useCallback, useState } from "react";
import { Streamdown } from "streamdown";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { Button } from "@/components/ui/button";
import {
	Item,
	ItemContent,
	ItemDescription,
	ItemTitle,
} from "@/components/ui/item";
import { cn } from "@/lib/utils";

function QuizIllustration() {
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

function MatchUpIllustration() {
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

function FlashCardsIllustration() {
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

function GameshowIllustration() {
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

function TrueOrFalseIllustration() {
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

function FillBlankIllustration() {
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

function RankOrderIllustration() {
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

function FlipTilesIllustration() {
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

function SpeedRoundIllustration() {
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

function SpotErrorIllustration() {
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

function PairOrNoPairIllustration() {
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

function TypeAnswerIllustration() {
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

const templates: Array<{
	title: string;
	description: string;
	Illustration: () => React.JSX.Element;
}> = [
	{
		title: "Quiz",
		description:
			"Multiple choice questions. Tap the correct answer to proceed.",
		Illustration: QuizIllustration,
	},
	{
		title: "Match Up",
		description: "Drag and drop each keyword next to its correct definition.",
		Illustration: MatchUpIllustration,
	},
	{
		title: "Flash Cards",
		description:
			"Test yourself using cards with prompts on the front and answers on the back.",
		Illustration: FlashCardsIllustration,
	},
	{
		title: "Gameshow Quiz",
		description:
			"A multiple choice quiz with time pressure, lifelines, and a bonus round.",
		Illustration: GameshowIllustration,
	},
	{
		title: "True or False",
		description:
			"Items fly by at speed. Get as many right as you can before time runs out.",
		Illustration: TrueOrFalseIllustration,
	},
	{
		title: "Fill in the Blank",
		description:
			"Complete each equation or statement by typing the missing value.",
		Illustration: FillBlankIllustration,
	},
	{
		title: "Rank Order",
		description: "Drag and drop the steps or values into their correct order.",
		Illustration: RankOrderIllustration,
	},
	{
		title: "Flip Tiles",
		description:
			"Explore two-sided tiles by tapping to reveal the answer underneath.",
		Illustration: FlipTilesIllustration,
	},
	{
		title: "Speed Round",
		description:
			"Rapid-fire questions against the clock. How many can you answer correctly?",
		Illustration: SpeedRoundIllustration,
	},
	{
		title: "Spot the Error",
		description:
			"Find the mistake in a worked solution before the timer runs out.",
		Illustration: SpotErrorIllustration,
	},
	{
		title: "Pair or No Pair",
		description: "Decide whether two expressions or values are equivalent.",
		Illustration: PairOrNoPairIllustration,
	},
	{
		title: "Type the Answer",
		description: "Type the correct answer for each prompt or equation.",
		Illustration: TypeAnswerIllustration,
	},
];

interface QuizOption {
	label: string;
	text: string;
	correct: boolean;
	explanation: string;
}

interface QuizQuestion {
	question: string;
	latex?: string;
	options: QuizOption[];
	hint: string;
}

interface QuizData {
	title: string;
	intro: string;
	questions: QuizQuestion[];
}

type QuestionState = "unanswered" | "correct" | "incorrect";

interface PracticeHeroSectionProps {
	name: string;
}

export function PracticeHeroSection({ name }: PracticeHeroSectionProps) {
	const firstName = name.split(" ")[0];
	const [phase, setPhase] = useState<"idle" | "loading" | "quiz">("idle");
	const [topic, setTopic] = useState("");
	const [quiz, setQuiz] = useState<QuizData | null>(null);
	const [currentQ, setCurrentQ] = useState(0);
	const [answers, setAnswers] = useState<(string | null)[]>([]);
	const [questionStates, setQuestionStates] = useState<QuestionState[]>([]);
	const [showHint, setShowHint] = useState(false);
	const [showResults, setShowResults] = useState(false);

	const startQuiz = useCallback(async (t: string) => {
		setTopic(t);
		setPhase("loading");
		setShowResults(false);
		setCurrentQ(0);
		setShowHint(false);

		try {
			const res = await fetch("/api/practice/generate", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ topic: t, count: 6 }),
			});
			if (!res.ok) throw new Error("Failed");
			const data = (await res.json()) as QuizData;
			setQuiz(data);
			setAnswers(new Array(data.questions.length).fill(null));
			setQuestionStates(new Array(data.questions.length).fill("unanswered"));
			setPhase("quiz");
		} catch {
			setPhase("idle");
		}
	}, []);

	const handleAnswer = useCallback(
		(label: string) => {
			if (!quiz) return;
			const q = quiz.questions[currentQ];
			const chosen = q.options.find((o) => o.label === label);
			if (!chosen) return;

			const newAnswers = [...answers];
			newAnswers[currentQ] = label;
			setAnswers(newAnswers);

			const newStates = [...questionStates];
			newStates[currentQ] = chosen.correct ? "correct" : "incorrect";
			setQuestionStates(newStates);
		},
		[quiz, currentQ, answers, questionStates],
	);

	const goNext = useCallback(() => {
		if (!quiz) return;
		if (currentQ < quiz.questions.length - 1) {
			setCurrentQ(currentQ + 1);
			setShowHint(false);
		} else {
			setShowResults(true);
		}
	}, [quiz, currentQ]);

	const goBack = useCallback(() => {
		if (currentQ > 0) {
			setCurrentQ(currentQ - 1);
			setShowHint(false);
		}
	}, [currentQ]);

	const restartWithTopic = useCallback(
		(t?: string) => {
			startQuiz(t ?? topic);
		},
		[startQuiz, topic],
	);

	if (phase === "idle") {
		return (
			<div className="flex flex-col gap-8 px-4 py-12 max-w-7xl mx-auto lg:px-12 lg:py-16">
				<div className="flex flex-col gap-2">
					<h1 className="text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
						How do you want to practice today, {firstName}?
					</h1>
					<p className="text-muted-foreground text-lg">
						Pick a format and Newton will generate a session on any topic you
						choose.
					</p>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
					{templates.map(({ title, description, Illustration }) => (
						<Item
							key={title}
							asChild
							variant="outline"
							size="default"
							className="group cursor-pointer overflow-hidden p-0 gap-0 hover:border-primary/40 hover:bg-accent/50 transition-colors"
						>
							<button type="button" onClick={() => startQuiz(title)}>
								<div className="w-28 self-stretch shrink-0 bg-primary/10 flex items-center justify-center">
									<Illustration />
								</div>
								<ItemContent className="px-4 py-4">
									<ItemTitle className="text-sm font-semibold text-foreground whitespace-normal">
										{title}
									</ItemTitle>
									<ItemDescription className="line-clamp-3">
										{description}
									</ItemDescription>
								</ItemContent>
							</button>
						</Item>
					))}
				</div>
			</div>
		);
	}

	if (phase === "loading") {
		return (
			<div className="flex items-center justify-center min-h-[60vh]">
				<div className="text-center flex flex-col items-center gap-4">
					<div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
						<HugeiconsIcon
							icon={SparklesIcon}
							className="size-7 text-primary animate-pulse"
							strokeWidth={1.5}
						/>
					</div>
					<Shimmer className="text-base text-muted-foreground">
						{`Newton is building your ${topic} quiz...`}
					</Shimmer>
				</div>
			</div>
		);
	}

	if (!quiz) return null;

	const q = quiz.questions[currentQ];
	const answered = answers[currentQ];
	const correctOption = q.options.find((o) => o.correct);

	if (showResults) {
		const correct = questionStates.filter((s) => s === "correct").length;
		const incorrect = questionStates.filter((s) => s === "incorrect").length;
		const skipped = questionStates.filter((s) => s === "unanswered").length;
		const pct = Math.round((correct / quiz.questions.length) * 100);
		const weakTopics = [topic, ...templates.map((t) => t.title)]
			.filter((t, i, a) => a.indexOf(t) === i)
			.slice(0, 4);

		return (
			<div className="flex h-[calc(100vh-var(--header-height))] overflow-hidden">
				<div className="w-[40%] border-r flex flex-col p-8 gap-6">
					<div className="flex flex-col gap-1">
						<p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
							Newton
						</p>
						<p className="text-sm text-foreground leading-relaxed">
							{pct >= 80
								? `Nice work on the ${topic} quiz! You scored ${pct}%. You have a solid understanding of the core concepts.`
								: pct >= 50
									? `Good effort on ${topic}. You got ${pct}% — there are a few areas worth revisiting. Try another quiz focused on your weak spots.`
									: `${topic} is tricky. You got ${pct}% this time. Let's drill the concepts that tripped you up with a targeted follow-up quiz.`}
						</p>
					</div>
					<Button
						variant="ghost"
						onClick={() => setPhase("idle")}
						className="h-auto p-0 text-sm text-muted-foreground hover:text-foreground hover:bg-transparent text-left"
					>
						&larr; Back to topics
					</Button>
				</div>

				<div className="w-[60%] flex flex-col p-8 gap-8 overflow-y-auto">
					<h2 className="text-lg font-semibold text-foreground">
						{quiz.title}
					</h2>
					<p className="text-muted-foreground text-sm -mt-6">
						Quiz complete. Here is how you scored.
					</p>

					<div className="flex items-center gap-6">
						<span className="text-5xl font-bold text-foreground">{pct}%</span>
						<div className="flex gap-3">
							<div className="rounded-lg bg-green-500/15 border border-green-500/30 px-4 py-3 text-center min-w-[80px]">
								<p className="text-xs text-green-600 dark:text-green-400 font-medium">
									Correct
								</p>
								<p className="text-2xl font-bold text-green-600 dark:text-green-400">
									{correct}
								</p>
							</div>
							<div className="rounded-lg bg-red-500/15 border border-red-500/30 px-4 py-3 text-center min-w-[80px]">
								<p className="text-xs text-red-600 dark:text-red-400 font-medium">
									Incorrect
								</p>
								<p className="text-2xl font-bold text-red-600 dark:text-red-400">
									{incorrect}
								</p>
							</div>
							<div className="rounded-lg bg-muted px-4 py-3 text-center min-w-[80px]">
								<p className="text-xs text-muted-foreground font-medium">
									Skipped
								</p>
								<p className="text-2xl font-bold text-foreground">{skipped}</p>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-3">
						<p className="text-sm font-medium text-foreground">
							Create another quiz based on growth areas
						</p>
						<div className="flex flex-wrap gap-2">
							{weakTopics.map((t) => (
								<Button
									key={t}
									variant="ghost"
									onClick={() => restartWithTopic(t)}
									className="h-auto rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary hover:bg-primary/20 hover:text-primary transition-colors"
								>
									<HugeiconsIcon
										icon={CheckmarkCircle02Icon}
										className="size-3.5"
										strokeWidth={1.5}
									/>
									{t}
								</Button>
							))}
						</div>
					</div>

					<div className="flex gap-3 mt-2">
						<Button
							variant="outline"
							onClick={() => {
								setShowResults(false);
								setCurrentQ(0);
							}}
						>
							Review answers
						</Button>
						<Button onClick={() => restartWithTopic()}>
							Create another quiz
						</Button>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="flex h-[calc(100vh-var(--header-height))] overflow-hidden">
			<div className="w-[38%] border-r flex flex-col p-8 gap-6 overflow-y-auto">
				<div className="flex flex-col gap-1">
					<p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
						You
					</p>
					<div className="self-end ml-auto rounded-2xl bg-secondary px-4 py-3 text-sm text-foreground max-w-[90%]">
						Quiz me on {topic}
					</div>
				</div>
				<div className="flex flex-col gap-1">
					<p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
						Newton
					</p>
					<Streamdown
						plugins={{ math }}
						className="text-sm text-foreground leading-relaxed [&>*:first-child]:mt-0 [&>*:last-child]:mb-0"
					>
						{quiz.intro}
					</Streamdown>
				</div>
				<Button
					variant="ghost"
					onClick={() => setPhase("idle")}
					className="mt-auto h-auto p-0 text-sm text-muted-foreground hover:text-foreground hover:bg-transparent text-left"
				>
					&larr; Back to topics
				</Button>
			</div>

			<div className="w-[62%] flex flex-col overflow-hidden">
				<div className="flex items-center justify-between px-8 pt-6 pb-4 border-b shrink-0">
					<div className="flex items-center gap-2">
						<HugeiconsIcon
							icon={BookOpen02Icon}
							className="size-4 text-muted-foreground"
							strokeWidth={1.5}
						/>
						<span className="text-sm font-medium text-foreground">
							{quiz.title}
						</span>
					</div>
					<div className="flex items-center gap-3">
						<span className="text-sm text-muted-foreground">
							{currentQ + 1}/{quiz.questions.length}
						</span>
						<Button
							variant="ghost"
							size="icon-sm"
							onClick={() => setPhase("idle")}
							className="text-muted-foreground hover:text-foreground"
						>
							<HugeiconsIcon
								icon={Cancel01Icon}
								className="size-4"
								strokeWidth={1.5}
							/>
						</Button>
					</div>
				</div>

				<div className="flex gap-1 px-8 py-3 shrink-0">
					{quiz.questions.map((q, i) => (
						<div
							key={q.question}
							className={cn(
								"h-1 flex-1 rounded-full transition-colors",
								questionStates[i] === "correct"
									? "bg-blue-500"
									: questionStates[i] === "incorrect"
										? "bg-destructive"
										: i === currentQ
											? "bg-primary/50"
											: "bg-muted",
							)}
						/>
					))}
				</div>

				<div className="flex-1 overflow-y-auto px-8 py-4 flex flex-col gap-6">
					<div className="flex flex-col gap-3">
						<p className="text-base font-medium text-foreground">
							{currentQ + 1}. {q.question}
						</p>
						{q.latex && (
							<div className="rounded-lg bg-muted px-4 py-3">
								<Streamdown
									plugins={{ math }}
									className="text-foreground [&>*:first-child]:mt-0 [&>*:last-child]:mb-0"
								>
									{`$$${q.latex.replace(/^\s*\\\(|\\\)\s*$|\\\[|\\\]/g, "").trim()}$$`}
								</Streamdown>
							</div>
						)}
					</div>

					<div className="flex flex-col gap-2">
						{q.options.map((opt) => {
							const isSelected = answered === opt.label;
							const isAnswered = answered !== null;
							let variant: "default" | "correct" | "incorrect" | "neutral" =
								"default";
							if (isAnswered) {
								if (opt.correct) variant = "correct";
								else if (isSelected && !opt.correct) variant = "incorrect";
								else variant = "neutral";
							}

							return (
								<button
									key={opt.label}
									type="button"
									disabled={isAnswered}
									onClick={() => handleAnswer(opt.label)}
									className={cn(
										"w-full rounded-xl border p-4 text-left transition-colors",
										!isAnswered &&
											"hover:border-primary/40 hover:bg-accent/50 cursor-pointer",
										variant === "correct" &&
											"border-green-500/40 bg-green-500/15",
										variant === "incorrect" &&
											"border-destructive/40 bg-destructive/15",
										variant === "neutral" && "border-border bg-muted/30",
										variant === "default" && "border-border bg-card",
									)}
								>
									<div className="flex items-start justify-between gap-3">
										<div className="flex-1 min-w-0">
											<div className="flex items-center gap-2 mb-1">
												<span
													className={cn(
														"text-sm font-medium",
														variant === "correct" &&
															"text-green-600 dark:text-green-400",
														variant === "incorrect" && "text-destructive",
														variant === "neutral" && "text-muted-foreground",
														variant === "default" && "text-foreground",
													)}
												>
													{opt.label}.
												</span>
												<Streamdown
													plugins={{ math }}
													className={cn(
														"text-sm [&>*:first-child]:mt-0 [&>*:last-child]:mb-0",
														variant === "correct" &&
															"text-green-600 dark:text-green-400",
														variant === "incorrect" && "text-destructive",
														variant === "neutral" && "text-muted-foreground",
														variant === "default" && "text-foreground",
													)}
												>
													{opt.text}
												</Streamdown>
											</div>
											{isAnswered && (opt.correct || isSelected) && (
												<p
													className={cn(
														"text-xs leading-relaxed mt-1",
														opt.correct
															? "text-green-600 dark:text-green-400"
															: "text-destructive",
													)}
												>
													{opt.explanation}
												</p>
											)}
										</div>
										{isAnswered && opt.correct && (
											<HugeiconsIcon
												icon={CheckmarkCircle02Icon}
												className="size-4 text-green-500 shrink-0 mt-0.5"
												strokeWidth={1.5}
											/>
										)}
										{isAnswered && isSelected && !opt.correct && (
											<HugeiconsIcon
												icon={Cancel01Icon}
												className="size-4 text-destructive shrink-0 mt-0.5"
												strokeWidth={1.5}
											/>
										)}
									</div>
								</button>
							);
						})}
					</div>

					<div>
						<Button
							variant="ghost"
							onClick={() => setShowHint(!showHint)}
							className="h-auto gap-1 p-0 text-sm text-muted-foreground hover:text-foreground hover:bg-transparent"
						>
							Show hint
							<HugeiconsIcon
								icon={ArrowDown01Icon}
								className={cn(
									"size-4 transition-transform",
									showHint && "rotate-180",
								)}
								strokeWidth={1.5}
							/>
						</Button>
						{showHint && (
							<p className="mt-2 text-sm text-muted-foreground leading-relaxed">
								{q.hint}
							</p>
						)}
					</div>
				</div>

				<div className="px-8 py-4 border-t flex items-center justify-between shrink-0">
					<Button variant="ghost" onClick={goBack} disabled={currentQ === 0}>
						Back
					</Button>
					<Button onClick={goNext} disabled={answers[currentQ] === null}>
						{currentQ === quiz.questions.length - 1 ? "Finish" : "Next"}
					</Button>
				</div>
			</div>
		</div>
	);
}
