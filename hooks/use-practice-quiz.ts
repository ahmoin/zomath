"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { templates } from "@/components/sections/practice-hero/data";
import type { PracticePhase, QuestionState, QuizData } from "@/lib/types";

export type {
	PracticePhase,
	QuestionState,
	QuizData,
	QuizOption,
	QuizQuestion,
} from "@/lib/types";
export type Template = (typeof templates)[number];

export type PlanMessage = { role: "user" | "newton"; text: string };

export function usePracticeQuiz(formatId: string) {
	const router = useRouter();
	const selectedFormat = templates.find((t) => t.id === formatId) ?? null;

	const [phase, setPhase] = useState<PracticePhase>("topic-select");
	const [topic, setTopic] = useState("");
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
	const [planMessages, setPlanMessages] = useState<PlanMessage[]>([]);
	const [planLoading, setPlanLoading] = useState(false);
	const [planReady, setPlanReady] = useState(false);
	const [planTopic, setPlanTopic] = useState("");

	const goIdle = useCallback(() => {
		router.push("/practice");
	}, [router]);

	const handlePlanSubmit = useCallback(
		async ({
			text,
			attachmentNames,
		}: {
			text: string;
			attachmentNames?: string[];
		}) => {
			if (!text.trim() || !selectedFormat) return;
			const userMsg: PlanMessage = { role: "user", text };
			setPlanMessages((prev) => [...prev, userMsg]);
			setPlanLoading(true);
			try {
				const res = await fetch("/api/practice/plan", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						format: selectedFormat.title,
						messages: [...planMessages, userMsg],
						attachmentDescriptions: attachmentNames,
					}),
				});
				if (!res.ok) throw new Error("Failed");
				const data = (await res.json()) as {
					text: string;
					ready: boolean;
					topic?: string;
				};
				setPlanMessages((prev) => [
					...prev,
					{ role: "newton", text: data.text },
				]);
				if (data.ready && data.topic) {
					setPlanReady(true);
					setPlanTopic(data.topic);
				}
			} catch {
				setPlanMessages((prev) => [
					...prev,
					{ role: "newton", text: "Sorry, I ran into an issue. Try again." },
				]);
			} finally {
				setPlanLoading(false);
			}
		},
		[selectedFormat, planMessages],
	);

	const startQuiz = useCallback(async (t: string) => {
		setTopic(t);
		setPhase("loading");
		setShowResults(false);
		setCurrentQ(0);
		setShowHint(false);
		setChatMessages(planMessages);

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
			setPhase("topic-select");
		}
	}, [planMessages]);

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
				const res = await fetch("/api/practice/chat", {
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
		selectedFormat,
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
	};
}
