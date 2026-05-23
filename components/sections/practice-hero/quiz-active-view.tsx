"use client";

import "katex/dist/katex.min.css";
import {
	ArrowDown01Icon,
	BookOpen02Icon,
	Cancel01Icon,
	CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { math } from "@streamdown/math";
import { Streamdown } from "streamdown";
import {
	PromptInput,
	PromptInputFooter,
	type PromptInputMessage,
	PromptInputSubmit,
	PromptInputTextarea,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { Button } from "@/components/ui/button";
import type { PracticePhase, QuestionState, QuizData } from "@/lib/types";
import { cn } from "@/lib/utils";

export function QuizActiveView({
	quiz,
	topic,
	currentQ,
	answers,
	questionStates,
	showHint,
	setShowHint,
	chatMessages,
	chatLoading,
	handleChatSubmit,
	handleAnswer,
	goNext,
	goBack,
	setPhase,
}: {
	quiz: QuizData;
	topic: string;
	currentQ: number;
	answers: (string | null)[];
	questionStates: QuestionState[];
	showHint: boolean;
	setShowHint: (v: boolean) => void;
	chatMessages: Array<{ role: "user" | "newton"; text: string }>;
	chatLoading: boolean;
	handleChatSubmit: (msg: { text: string }) => void;
	handleAnswer: (label: string) => void;
	goNext: () => void;
	goBack: () => void;
	setPhase: (p: PracticePhase) => void;
}) {
	const q = quiz.questions[currentQ];
	const answered = answers[currentQ];

	return (
		<div className="flex flex-1 overflow-hidden">
			<div className="w-[38%] border-r flex flex-col overflow-hidden">
				<div className="flex-1 overflow-y-auto px-8 pt-8 pb-4 flex flex-col gap-6">
					{chatMessages.map((msg, i) => (
						<div key={i} className="flex flex-col gap-1">
							<p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
								{msg.role === "user" ? "You" : "Newton"}
							</p>
							{msg.role === "user" ? (
								<div className="self-end ml-auto rounded-2xl bg-secondary px-4 py-3 text-sm text-foreground max-w-[90%]">
									{msg.text}
								</div>
							) : (
								<Streamdown
									plugins={{ math }}
									className="text-sm text-foreground leading-relaxed [&>*:first-child]:mt-0 [&>*:last-child]:mb-0"
								>
									{msg.text}
								</Streamdown>
							)}
						</div>
					))}
					{chatLoading && (
						<div className="flex flex-col gap-1">
							<p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
								Newton
							</p>
							<Shimmer className="text-sm text-muted-foreground">
								Thinking...
							</Shimmer>
						</div>
					)}
				</div>
				<div className="px-4 pb-4 pt-2 border-t flex flex-col gap-2 shrink-0">
					<PromptInput
						onSubmit={(msg: PromptInputMessage) => handleChatSubmit(msg)}
					>
						<PromptInputTextarea
							placeholder="Ask Newton anything..."
							className="min-h-10 max-h-32"
						/>
						<PromptInputFooter>
							<Button
								variant="ghost"
								size="sm"
								onClick={() => setPhase("idle")}
								className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground hover:bg-transparent"
							>
								&larr; Back
							</Button>
							<PromptInputSubmit disabled={chatLoading} />
						</PromptInputFooter>
					</PromptInput>
				</div>
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
						<div className="flex gap-1 text-base font-medium text-foreground">
							<span className="shrink-0">{currentQ + 1}.</span>
							<Streamdown
								plugins={{ math }}
								className="[&>*:first-child]:mt-0 [&>*:last-child]:mb-0"
							>
								{q.question}
							</Streamdown>
						</div>
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
								else if (isSelected) variant = "incorrect";
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
