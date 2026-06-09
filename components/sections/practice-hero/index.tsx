"use client";

import { SparklesIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { FlashCardsActiveView } from "@/components/sections/practice-hero/flash-cards-active-view";
import { MatchUpActiveView } from "@/components/sections/practice-hero/match-up-active-view";
import { QuizActiveView } from "@/components/sections/practice-hero/quiz-active-view";
import { QuizPlanView } from "@/components/sections/practice-hero/quiz-plan-view";
import { QuizResultsView } from "@/components/sections/practice-hero/quiz-results-view";
import { usePractice } from "@/hooks/use-practice";

export function PracticeHeroSection({
	name,
	formatId,
}: {
	name: string;
	formatId: string;
}) {
	const {
		phase,
		setPhase,
		topic,
		selectedFormat,
		quiz,
		matchUp,
		flashCards,
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
		practiceUpdating,
		planMessages,
		planLoading,
		planReady,
		planTopic,
		goIdle,
		handlePlanSubmit,
		startQuiz,
		handleAnswer,
		goNext,
		goBack,
		restartWithTopic,
		handleChatSubmit,
	} = usePractice(formatId);

	if (!selectedFormat) return null;

	if (phase === "topic-select") {
		return (
			<QuizPlanView
				selectedFormat={selectedFormat}
				planMessages={planMessages}
				planLoading={planLoading}
				planReady={planReady}
				planTopic={planTopic}
				handlePlanSubmit={handlePlanSubmit}
				startQuiz={startQuiz}
				onChangeFormat={goIdle}
			/>
		);
	}

	if (phase === "loading") {
		return (
			<div className="flex flex-1 items-center justify-center">
				<div className="text-center flex flex-col items-center gap-4">
					<div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
						<HugeiconsIcon
							icon={SparklesIcon}
							className="size-7 text-primary animate-pulse"
							strokeWidth={1.5}
						/>
					</div>
					<Shimmer className="text-base text-muted-foreground">
						{`Newton is building your ${selectedFormat.title} on ${topic}...`}
					</Shimmer>
				</div>
			</div>
		);
	}

	if (phase === "match-up" && matchUp) {
		return (
			<MatchUpActiveView
				matchUp={matchUp}
				topic={topic}
				chatMessages={chatMessages}
				chatLoading={chatLoading}
				practiceUpdating={practiceUpdating}
				handleChatSubmit={handleChatSubmit}
				setPhase={setPhase}
				onRestart={() => startQuiz(topic)}
			/>
		);
	}

	if (phase === "flash-cards" && flashCards) {
		return (
			<FlashCardsActiveView
				flashCards={flashCards}
				topic={topic}
				chatMessages={chatMessages}
				chatLoading={chatLoading}
				practiceUpdating={practiceUpdating}
				handleChatSubmit={handleChatSubmit}
				setPhase={setPhase}
				onRestart={() => startQuiz(topic)}
			/>
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
			practiceUpdating={practiceUpdating}
			handleChatSubmit={handleChatSubmit}
			handleAnswer={handleAnswer}
			goNext={goNext}
			goBack={goBack}
			setPhase={setPhase}
		/>
	);
}
