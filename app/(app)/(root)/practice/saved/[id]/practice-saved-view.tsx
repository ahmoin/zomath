"use client";

import { useState } from "react";
import { QuizActiveView } from "@/components/sections/practice-hero/quiz-active-view";
import { QuizResultsView } from "@/components/sections/practice-hero/quiz-results-view";
import type { PracticePhase, QuestionState, QuizData } from "@/lib/types";

export function PracticeSavedView({
	quiz,
	topic,
}: {
	quiz: QuizData;
	topic: string;
}) {
	const [currentQ, setCurrentQ] = useState(0);
	const [answers, setAnswers] = useState<(string | null)[]>(
		Array(quiz.questions.length).fill(null),
	);
	const [questionStates, setQuestionStates] = useState<QuestionState[]>(
		Array(quiz.questions.length).fill("unanswered"),
	);
	const [showHint, setShowHint] = useState(false);
	const [showResults, setShowResults] = useState(false);
	const [chatMessages, setChatMessages] = useState<
		Array<{ role: "user" | "newton"; text: string }>
	>([]);
	const [chatLoading] = useState(false);
	const [_phase, setPhase] = useState<PracticePhase>("quiz");

	function handleAnswer(label: string) {
		if (answers[currentQ] !== null) return;
		const q = quiz.questions[currentQ];
		const opt = q.options.find((o) => o.label === label);
		const state: QuestionState = opt?.correct ? "correct" : "incorrect";
		setAnswers((prev) => {
			const next = [...prev];
			next[currentQ] = label;
			return next;
		});
		setQuestionStates((prev) => {
			const next = [...prev];
			next[currentQ] = state;
			return next;
		});
	}

	function goNext() {
		if (currentQ < quiz.questions.length - 1) {
			setCurrentQ(currentQ + 1);
			setShowHint(false);
		} else {
			setShowResults(true);
		}
	}

	function goBack() {
		if (currentQ > 0) {
			setCurrentQ(currentQ - 1);
			setShowHint(false);
		}
	}

	function handleChatSubmit(msg: { text: string }) {
		setChatMessages((prev) => [...prev, { role: "user", text: msg.text }]);
	}

	function restartWithTopic() {
		setAnswers(Array(quiz.questions.length).fill(null));
		setQuestionStates(Array(quiz.questions.length).fill("unanswered"));
		setCurrentQ(0);
		setShowHint(false);
		setShowResults(false);
		setChatMessages([]);
	}

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
			practiceUpdating={false}
		/>
	);
}
