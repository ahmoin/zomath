"use client";

import "katex/dist/katex.min.css";
import {
	BookOpen02Icon,
	Cancel01Icon,
	CheckmarkCircle02Icon,
	RefreshIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { math } from "@streamdown/math";
import { useState } from "react";
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
import type { FlashCardData, PracticePhase } from "@/lib/types";
import { cn } from "@/lib/utils";

export function FlashCardsActiveView({
	flashCards,
	topic,
	chatMessages,
	chatLoading,
	practiceUpdating,
	handleChatSubmit,
	setPhase,
	onRestart,
}: {
	flashCards: FlashCardData;
	topic: string;
	chatMessages: Array<{ role: "user" | "newton"; text: string }>;
	chatLoading: boolean;
	practiceUpdating: boolean;
	handleChatSubmit: (msg: { text: string }) => void;
	setPhase: (p: PracticePhase) => void;
	onRestart: () => void;
}) {
	const [index, setIndex] = useState(0);
	const [flipped, setFlipped] = useState(false);
	const [results, setResults] = useState<Record<number, "got-it" | "learning">>(
		{},
	);
	const [done, setDone] = useState(false);

	const card = flashCards.cards[index];
	const total = flashCards.cards.length;
	const answeredCount = Object.keys(results).length;

	const advance = (verdict: "got-it" | "learning") => {
		const next = { ...results, [index]: verdict };
		setResults(next);
		if (index < total - 1) {
			setIndex(index + 1);
			setFlipped(false);
		} else {
			setDone(true);
		}
	};

	const restart = () => {
		setIndex(0);
		setFlipped(false);
		setResults({});
		setDone(false);
	};

	const gotItCount = Object.values(results).filter(
		(v) => v === "got-it",
	).length;

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

			<div className="w-[62%] flex flex-col overflow-hidden relative">
				{practiceUpdating && (
					<div className="absolute inset-0 z-10 flex items-center justify-center bg-background/70 backdrop-blur-sm">
						<Shimmer className="text-sm text-muted-foreground">
							Updating...
						</Shimmer>
					</div>
				)}
				<div className="flex items-center justify-between px-8 pt-6 pb-4 border-b shrink-0">
					<div className="flex items-center gap-2">
						<HugeiconsIcon
							icon={BookOpen02Icon}
							className="size-4 text-muted-foreground"
							strokeWidth={1.5}
						/>
						<span className="text-sm font-medium text-foreground">
							{flashCards.title}
						</span>
					</div>
					<div className="flex items-center gap-3">
						<span className="text-xs text-muted-foreground">
							{done ? total : index + 1} / {total}
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

				<div className="flex-1 overflow-y-auto px-8 py-8 flex flex-col items-center gap-6">
					{done ? (
						<>
							<div className="w-full max-w-lg rounded-2xl border bg-card p-8 flex flex-col items-center gap-4 text-center">
								<HugeiconsIcon
									icon={CheckmarkCircle02Icon}
									className="size-10 text-green-500"
									strokeWidth={1.5}
								/>
								<p className="text-lg font-semibold text-foreground">
									{gotItCount}/{total} cards mastered
								</p>
								<p className="text-sm text-muted-foreground">
									{gotItCount === total
										? "Perfect score! You nailed every card."
										: gotItCount >= total / 2
											? "Good progress - keep reviewing the ones you missed."
											: "Keep at it - repetition is the key to mastery."}
								</p>
							</div>
							<div className="flex gap-3">
								<Button variant="outline" onClick={restart}>
									<HugeiconsIcon
										icon={RefreshIcon}
										className="size-3.5 mr-1.5"
										strokeWidth={1.5}
									/>
									Restart deck
								</Button>
								<Button onClick={onRestart}>New deck</Button>
							</div>
						</>
					) : (
						<>
							<div className="w-full max-w-lg">
								<div className="mb-2 h-1.5 w-full rounded-full bg-muted overflow-hidden">
									<div
										className="h-full bg-primary rounded-full transition-all"
										style={{ width: `${(answeredCount / total) * 100}%` }}
									/>
								</div>
							</div>

							<button
								type="button"
								className={cn(
									"w-full max-w-lg min-h-52 rounded-2xl border bg-card p-8 flex flex-col items-center justify-center gap-4 text-center cursor-pointer select-none transition-all hover:shadow-md active:scale-[0.99]",
									flipped && "bg-primary/5 border-primary/30",
								)}
								onClick={() => setFlipped((v) => !v)}
							>
								<span className="text-xs uppercase tracking-wider font-medium text-muted-foreground">
									{flipped ? "Answer" : "Question"} - click to flip
								</span>
								{!flipped ? (
									<p className="text-base font-medium text-foreground leading-relaxed">
										{card.front}
									</p>
								) : (
									<div className="flex flex-col items-center gap-3 w-full">
										{card.latex && (
											<Streamdown
												plugins={{ math }}
												className="text-lg font-semibold text-foreground [&>*:first-child]:mt-0 [&>*:last-child]:mb-0"
											>
												{`$$${card.latex}$$`}
											</Streamdown>
										)}
										<p className="text-sm text-foreground leading-relaxed">
											{card.back}
										</p>
									</div>
								)}
							</button>

							{flipped && (
								<div className="flex gap-3 w-full max-w-lg">
									<Button
										variant="outline"
										className="flex-1 border-destructive/40 text-destructive hover:bg-destructive/10 hover:text-destructive"
										onClick={() => advance("learning")}
									>
										Still learning
									</Button>
									<Button
										className="flex-1 bg-green-600 hover:bg-green-700 text-white"
										onClick={() => advance("got-it")}
									>
										Got it
									</Button>
								</div>
							)}
						</>
					)}
				</div>
			</div>
		</div>
	);
}
