"use client";

import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { templates } from "@/components/sections/practice-hero/data";
import { Button } from "@/components/ui/button";
import type { PracticePhase, QuestionState, QuizData } from "@/lib/types";

export function QuizResultsView({
	quiz,
	topic,
	questionStates,
	setPhase,
	setShowResults,
	setCurrentQ,
	restartWithTopic,
}: {
	quiz: QuizData;
	topic: string;
	questionStates: QuestionState[];
	setPhase: (p: PracticePhase) => void;
	setShowResults: (v: boolean) => void;
	setCurrentQ: (n: number) => void;
	restartWithTopic: (t?: string) => void;
}) {
	const correct = questionStates.filter((s) => s === "correct").length;
	const incorrect = questionStates.filter((s) => s === "incorrect").length;
	const skipped = questionStates.filter((s) => s === "unanswered").length;
	const pct = Math.round((correct / quiz.questions.length) * 100);
	const weakTopics = [topic, ...templates.map((t) => t.title)]
		.filter((t, i, a) => a.indexOf(t) === i)
		.slice(0, 4);

	return (
		<div className="flex flex-1 overflow-hidden">
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
				<h2 className="text-lg font-semibold text-foreground">{quiz.title}</h2>
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
