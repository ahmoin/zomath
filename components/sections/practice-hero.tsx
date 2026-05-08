"use client";

import "katex/dist/katex.min.css";
import {
	Analytics01Icon,
	ArrowDown01Icon,
	ArrowRight02Icon,
	BookOpen02Icon,
	Cancel01Icon,
	CheckmarkCircle02Icon,
	Copy01Icon,
	MarketingIcon,
	PuzzleIcon,
	SparklesIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { math } from "@streamdown/math";
import { useCallback, useState } from "react";
import { Streamdown } from "streamdown";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const topics = [
	{ title: "Algebra", icon: MarketingIcon, count: "240+" },
	{ title: "Geometry", icon: PuzzleIcon, count: "190+" },
	{ title: "Calculus", icon: Analytics01Icon, count: "310+" },
	{ title: "Competition", icon: Copy01Icon, count: "150+" },
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
	const [customTopic, setCustomTopic] = useState("");
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
					<div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground w-fit">
						<HugeiconsIcon
							icon={BookOpen02Icon}
							className="size-4"
							strokeWidth={1.5}
						/>
						Practice
					</div>
					<h1 className="text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
						What are you drilling today, {firstName}?
					</h1>
					<p className="text-muted-foreground text-lg">
						Pick a topic and Newton will generate a personalized quiz.
					</p>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
					{topics.map((t) => (
						<Button
							key={t.title}
							variant="ghost"
							onClick={() => startQuiz(t.title)}
							className="group h-auto rounded-xl border bg-card p-6 text-left hover:border-primary/40 hover:bg-accent/50 transition-colors cursor-pointer flex-col items-start"
						>
							<div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 mb-4">
								<HugeiconsIcon
									icon={t.icon}
									className="size-5 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<h3 className="text-base font-semibold text-foreground">
								{t.title}
							</h3>
							<div className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
								<span>{t.count} problems</span>
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-3.5 group-hover:translate-x-0.5 transition-transform"
									strokeWidth={1.5}
								/>
							</div>
						</Button>
					))}
				</div>

				<div className="flex gap-2 max-w-md">
					<input
						type="text"
						value={customTopic}
						onChange={(e) => setCustomTopic(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter" && customTopic.trim())
								startQuiz(customTopic.trim());
						}}
						placeholder="Or type a custom topic..."
						className="flex-1 rounded-xl border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
					/>
					<Button
						onClick={() => customTopic.trim() && startQuiz(customTopic.trim())}
						disabled={!customTopic.trim()}
						className="rounded-xl"
					>
						<HugeiconsIcon
							icon={SparklesIcon}
							className="size-4"
							strokeWidth={1.5}
						/>
					</Button>
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
		const weakTopics = [topic, ...topics.map((t) => t.title)]
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
					{quiz.questions.map((_, i) => (
						<div
							key={i}
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
