"use client";

import { SparklesIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { templates } from "@/components/sections/practice-hero/data";
import { QuizActiveView } from "@/components/sections/practice-hero/quiz-active-view";
import { QuizResultsView } from "@/components/sections/practice-hero/quiz-results-view";
import { Button } from "@/components/ui/button";
import {
	Item,
	ItemContent,
	ItemDescription,
	ItemTitle,
} from "@/components/ui/item";
import { usePracticeQuiz } from "@/hooks/use-practice-quiz";
import { cn } from "@/lib/utils";

export function PracticeHeroSection({ name }: { name: string }) {
	const firstName = name.split(" ")[0];
	const {
		phase,
		setPhase,
		topic,
		topicInput,
		setTopicInput,
		selectedFormat,
		suggestLoading,
		quiz,
		currentQ,
		setCurrentQ,
		answers,
		questionStates,
		showHint,
		setShowHint,
		showResults,
		setShowResults,
		chatMessages,
		chatLoading,
		selectFormat,
		suggestTopic,
		startQuiz,
		handleAnswer,
		goNext,
		goBack,
		restartWithTopic,
		handleChatSubmit,
	} = usePracticeQuiz();

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
							<button
								type="button"
								onClick={() =>
									selectFormat({ title, description, Illustration })
								}
							>
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

	if (phase === "topic-select" && selectedFormat) {
		const { Illustration } = selectedFormat;
		return (
			<div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
				<div className="w-full max-w-md flex flex-col gap-6">
					<div className="flex items-center gap-4">
						<div className="size-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
							<div className="scale-75">
								<Illustration />
							</div>
						</div>
						<div>
							<p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-0.5">
								Selected format
							</p>
							<h2 className="text-lg font-semibold text-foreground">
								{selectedFormat.title}
							</h2>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<label className="text-sm font-medium text-foreground">
							What topic do you want to practice?
						</label>
						<input
							type="text"
							value={topicInput}
							onChange={(e) => setTopicInput(e.target.value)}
							onKeyDown={(e) => {
								if (e.key === "Enter" && topicInput.trim())
									startQuiz(topicInput.trim());
							}}
							placeholder="e.g. Quadratic equations, Derivatives..."
							className="flex-1 rounded-xl border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
							autoFocus
						/>
						<Button
							variant="ghost"
							size="sm"
							onClick={suggestTopic}
							disabled={suggestLoading}
							className="self-start h-auto px-0 text-xs text-muted-foreground hover:text-foreground hover:bg-transparent gap-1.5"
						>
							<HugeiconsIcon
								icon={SparklesIcon}
								className={cn("size-3.5", suggestLoading && "animate-pulse")}
								strokeWidth={1.5}
							/>
							{suggestLoading ? "Thinking..." : "Suggest a topic for me"}
						</Button>
					</div>
					<div className="flex gap-2">
						<Button variant="outline" onClick={() => setPhase("idle")}>
							Back
						</Button>
						<Button
							onClick={() => topicInput.trim() && startQuiz(topicInput.trim())}
							disabled={!topicInput.trim()}
							className="flex-1"
						>
							Start session
						</Button>
					</div>
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
						{`Newton is building your ${selectedFormat?.title ?? topic} on ${topic}...`}
					</Shimmer>
				</div>
			</div>
		);
	}

	if (!quiz) return null;

	if (showResults) {
		return (
			<QuizResultsView
				quiz={quiz}
				topic={topic}
				questionStates={questionStates}
				setPhase={setPhase}
				setShowResults={setShowResults}
				setCurrentQ={setCurrentQ}
				restartWithTopic={restartWithTopic}
			/>
		);
	}

	return (
		<QuizActiveView
			quiz={quiz}
			topic={topic}
			currentQ={currentQ}
			answers={answers}
			questionStates={questionStates}
			showHint={showHint}
			setShowHint={setShowHint}
			chatMessages={chatMessages}
			chatLoading={chatLoading}
			handleChatSubmit={handleChatSubmit}
			handleAnswer={handleAnswer}
			goNext={goNext}
			goBack={goBack}
			setPhase={setPhase}
		/>
	);
}
