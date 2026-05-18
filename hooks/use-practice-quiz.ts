"use client";

import { useCallback, useState } from "react";
import type { templates } from "@/components/sections/practice-hero/data";
import type {
	QuizData,
	QuestionState,
	PracticePhase,
} from "@/lib/types";

export type { QuizOption, QuizQuestion, QuizData, QuestionState, PracticePhase } from "@/lib/types";
export type Template = (typeof templates)[number];

export function usePracticeQuiz() {
	const [phase, setPhase] = useState<PracticePhase>("idle");
	const [topic, setTopic] = useState("");
	const [topicInput, setTopicInput] = useState("");
	const [selectedFormat, setSelectedFormat] = useState<Template | null>(null);
	const [suggestLoading, setSuggestLoading] = useState(false);
	const [quiz, setQuiz] = useState<QuizData | null>(null);
	const [currentQ, setCurrentQ] = useState(0);
	const [answers, setAnswers] = useState<(string | null)[]>([]);
	const [questionStates, setQuestionStates] = useState<QuestionState[]>([]);
	const [showHint, setShowHint] = useState(false);
	const [showResults, setShowResults] = useState(false);
	const [chatMessages, setChatMessages] = useState<
		Array<{ role: "user" | "newton"; text: string }>
	>([]);
	const [chatLoading, setChatLoading] = useState(false);

	const selectFormat = useCallback((fmt: Template) => {
		setSelectedFormat(fmt);
		setTopicInput("");
		setPhase("topic-select");
	}, []);

	const suggestTopic = useCallback(async () => {
		setSuggestLoading(true);
		try {
			const res = await fetch("/api/practice/suggest-topic", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ format: selectedFormat?.title }),
			});
			if (!res.ok) throw new Error("Failed");
			const data = (await res.json()) as { topic: string };
			setTopicInput(data.topic);
		} catch {
			const fallbacks = [
				"Quadratic equations",
				"Derivatives",
				"Trigonometry",
				"Linear systems",
				"Probability",
			];
			setTopicInput(fallbacks[Math.floor(Math.random() * fallbacks.length)]);
		} finally {
			setSuggestLoading(false);
		}
	}, [selectedFormat]);

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

	const handleChatSubmit = useCallback(
		async ({ text }: { text: string }) => {
			if (!text.trim() || !quiz) return;
			setChatMessages((prev) => [...prev, { role: "user", text }]);
			setChatLoading(true);
			try {
				const res = await fetch("/api/chat", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						message: text,
						context: `Practice format: ${topic}. Current question: ${quiz.questions[currentQ]?.question ?? ""}`,
					}),
				});
				if (!res.ok) throw new Error("Failed");
				const data = (await res.json()) as { response: string };
				setChatMessages((prev) => [
					...prev,
					{ role: "newton", text: data.response },
				]);
			} catch {
				setChatMessages((prev) => [
					...prev,
					{ role: "newton", text: "Sorry, I ran into an issue. Try again." },
				]);
			} finally {
				setChatLoading(false);
			}
		},
		[quiz, topic, currentQ],
	);

	return {
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
	};
}
