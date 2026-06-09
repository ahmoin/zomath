"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { templates } from "@/components/sections/practice-hero/data";
import type {
	FlashCardData,
	MatchUpData,
	PracticePhase,
	QuestionState,
	QuizData,
} from "@/lib/types";

export type {
	FlashCard,
	FlashCardData,
	MatchUpData,
	MatchUpPair,
	PracticePhase,
	QuestionState,
	QuizData,
	QuizOption,
	QuizQuestion,
} from "@/lib/types";
export type Template = (typeof templates)[number];

export type PlanMessage = { role: "user" | "newton"; text: string };

export function usePractice(formatId: string) {
	const router = useRouter();
	const selectedFormat = templates.find((t) => t.id === formatId) ?? null;

	const [phase, setPhase] = useState<PracticePhase>("topic-select");
	const [topic, setTopic] = useState("");
	const [quiz, setQuiz] = useState<QuizData | null>(null);
	const [matchUp, setMatchUp] = useState<MatchUpData | null>(null);
	const [flashCards, setFlashCards] = useState<FlashCardData | null>(null);
	const [currentQ, setCurrentQ] = useState(0);
	const [answers, setAnswers] = useState<(string | null)[]>([]);
	const [questionStates, setQuestionStates] = useState<QuestionState[]>([]);
	const [showHint, setShowHint] = useState(false);
	const [showResults, setShowResults] = useState(false);
	const [chatMessages, setChatMessages] = useState<
		Array<{ role: "user" | "newton"; text: string }>
	>([]);
	const [chatLoading, setChatLoading] = useState(false);
	const [practiceUpdating, setPracticeUpdating] = useState(false);
	const [planMessages, setPlanMessages] = useState<PlanMessage[]>([]);
	const [planLoading, setPlanLoading] = useState(false);
	const [planReady, setPlanReady] = useState(false);
	const [planTopic, setPlanTopic] = useState("");
	const [planCount, setPlanCount] = useState(6);

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
					count?: number;
				};
				setPlanMessages((prev) => [
					...prev,
					{ role: "newton", text: data.text },
				]);
				if (data.ready && data.topic) {
					setPlanReady(true);
					setPlanTopic(data.topic);
					setPlanCount(data.count ?? 6);
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

	const startQuiz = useCallback(
		async (t: string) => {
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
					body: JSON.stringify({ topic: t, count: planCount, formatId }),
				});
				if (!res.ok) throw new Error("Failed");
				const data = (await res.json()) as { formatId?: string } & (
					| QuizData
					| MatchUpData
					| FlashCardData
				);
				if (data.formatId === "match-up") {
					setMatchUp(data as MatchUpData);
					setPhase("match-up");
				} else if (data.formatId === "flash-cards") {
					setFlashCards(data as FlashCardData);
					setPhase("flash-cards");
				} else {
					const quizData = data as QuizData;
					setQuiz(quizData);
					setAnswers(new Array(quizData.questions.length).fill(null));
					setQuestionStates(
						new Array(quizData.questions.length).fill("unanswered"),
					);
					setPhase("quiz");
				}
			} catch {
				setPhase("topic-select");
			}
		},
		[planMessages, formatId, planCount],
	);

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
			if (!text.trim()) return;
			setChatMessages((prev) => [...prev, { role: "user", text }]);
			setChatLoading(true);
			try {
				const currentPractice = quiz ?? matchUp ?? flashCards;
				const contextStr = quiz
					? `Practice format: quiz on ${topic}. Current question: ${quiz.questions[currentQ]?.question ?? ""}`
					: matchUp
						? `Practice format: match-up on ${topic}.`
						: `Practice format: flash-cards on ${topic}.`;

				const res = await fetch("/api/practice/chat", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						message: text,
						history: chatMessages,
						context: contextStr,
					}),
				});
				if (!res.ok) throw new Error("Failed");
				const data = (await res.json()) as {
					response: string;
					suggestUpdate?: boolean;
				};
				setChatMessages((prev) => [
					...prev,
					{ role: "newton", text: data.response },
				]);

				if (data.suggestUpdate && currentPractice) {
					setChatLoading(false);
					setPracticeUpdating(true);
					try {
						const updateRes = await fetch("/api/practice/update", {
							method: "POST",
							headers: { "Content-Type": "application/json" },
							body: JSON.stringify({
								formatId,
								current: currentPractice,
								instructions: text,
							}),
						});
						if (!updateRes.ok) throw new Error("Update failed");
						const updated = (await updateRes.json()) as {
							formatId?: string;
						} & (QuizData | MatchUpData | FlashCardData);
						if (updated.formatId === "match-up") {
							setMatchUp(updated as MatchUpData);
						} else if (updated.formatId === "flash-cards") {
							setFlashCards(updated as FlashCardData);
						} else {
							const quizData = updated as QuizData;
							setQuiz(quizData);
							setAnswers(new Array(quizData.questions.length).fill(null));
							setQuestionStates(
								new Array(quizData.questions.length).fill("unanswered"),
							);
							setCurrentQ(0);
							setShowResults(false);
						}
					} catch {
						// TODO: handle error
					} finally {
						setPracticeUpdating(false);
					}
					return;
				}
			} catch {
				setChatMessages((prev) => [
					...prev,
					{ role: "newton", text: "Sorry, I ran into an issue. Try again." },
				]);
			} finally {
				setChatLoading(false);
			}
		},
		[quiz, matchUp, flashCards, topic, currentQ, chatMessages, formatId],
	);

	return {
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
		planCount,
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
