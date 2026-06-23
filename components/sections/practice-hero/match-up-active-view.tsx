"use client";

import {
	BookOpen02Icon,
	Cancel01Icon,
	CheckmarkCircle02Icon,
	RefreshIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { math } from "@streamdown/math";
import { useEffect, useRef, useState } from "react";
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
import type { MatchUpData, PracticePhase } from "@/lib/types";
import { cn } from "@/lib/utils";

export function MatchUpActiveView({
	matchUp,
	topic,
	chatMessages,
	chatLoading,
	practiceUpdating,
	handleChatSubmit,
	setPhase,
	onRestart,
}: {
	matchUp: MatchUpData;
	topic: string;
	chatMessages: Array<{ role: "user" | "newton"; text: string }>;
	chatLoading: boolean;
	practiceUpdating: boolean;
	handleChatSubmit: (msg: { text: string }) => void;
	setPhase: (p: PracticePhase) => void;
	onRestart: () => void;
}) {
	const [dragging, setDragging] = useState<string | null>(null);
	const [placements, setPlacements] = useState<Record<string, string>>({});
	const [submitted, setSubmitted] = useState(false);
	const [shuffledKeywords, setShuffledKeywords] = useState<string[]>([]);
	const dragOver = useRef<string | null>(null);

	useEffect(() => {
		const kws = [...matchUp.pairs.map((p) => p.keyword)].sort(
			() => Math.random() - 0.5,
		);
		setShuffledKeywords(kws);
		setPlacements({});
		setSubmitted(false);
	}, [matchUp]);

	const unplaced = shuffledKeywords.filter(
		(kw) => !Object.values(placements).includes(kw),
	);

	const handleDragStart = (kw: string) => setDragging(kw);
	const handleDragEnd = () => setDragging(null);

	const handleDropOnSlot = (definition: string) => {
		if (!dragging) return;
		setPlacements((prev) => {
			const next = { ...prev };
			for (const key of Object.keys(next)) {
				if (next[key] === dragging) delete next[key];
			}
			next[definition] = dragging;
			return next;
		});
		setDragging(null);
	};

	const handleDropOnBank = () => {
		if (!dragging) return;
		setPlacements((prev) => {
			const next = { ...prev };
			for (const key of Object.keys(next)) {
				if (next[key] === dragging) delete next[key];
			}
			return next;
		});
		setDragging(null);
	};

	const allPlaced = matchUp.pairs.every((p) => placements[p.definition]);

	const results = submitted
		? matchUp.pairs.map((p) => ({
				...p,
				placed: placements[p.definition] ?? null,
				correct: placements[p.definition] === p.keyword,
			}))
		: null;

	const score = results ? results.filter((r) => r.correct).length : 0;

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
							{matchUp.title}
						</span>
					</div>
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

				<div className="flex-1 overflow-y-auto px-8 py-6 flex flex-col gap-6">
					{!submitted && (
						<div
							className="flex flex-wrap gap-2 min-h-12 p-3 rounded-xl border border-dashed border-border bg-muted/30"
							onDragOver={(e) => e.preventDefault()}
							onDrop={handleDropOnBank}
						>
							{unplaced.length === 0 ? (
								<span className="text-xs text-muted-foreground self-center">
									All placed
								</span>
							) : (
								unplaced.map((kw) => (
									<div
										key={kw}
										draggable
										onDragStart={() => handleDragStart(kw)}
										onDragEnd={handleDragEnd}
										className={cn(
											"rounded-lg bg-primary text-primary-foreground px-3 py-1.5 text-sm font-medium cursor-grab select-none transition-opacity",
											dragging === kw && "opacity-40",
										)}
									>
										{kw}
									</div>
								))
							)}
						</div>
					)}

					<div className="flex flex-col gap-3">
						{matchUp.pairs.map((pair) => {
							const placed = placements[pair.definition] ?? null;
							const result = results?.find(
								(r) => r.definition === pair.definition,
							);
							return (
								<div key={pair.definition} className="flex items-center gap-3">
									<div
										onDragOver={(e) => {
											e.preventDefault();
											dragOver.current = pair.definition;
										}}
										onDrop={() => handleDropOnSlot(pair.definition)}
										className={cn(
											"w-36 shrink-0 h-10 rounded-lg border flex items-center justify-center text-sm font-medium transition-colors",
											submitted &&
												result?.correct &&
												"border-green-500/40 bg-green-500/15 text-green-600 dark:text-green-400",
											submitted &&
												!result?.correct &&
												placed &&
												"border-destructive/40 bg-destructive/15 text-destructive",
											!submitted && placed
												? "border-primary/40 bg-primary/10 text-foreground cursor-grab"
												: !submitted
													? "border-dashed border-border bg-muted/20 text-muted-foreground"
													: "",
										)}
										{...(!submitted && placed
											? {
													draggable: true,
													onDragStart: () => handleDragStart(placed),
													onDragEnd: handleDragEnd,
												}
											: {})}
									>
										{placed ?? (
											<span className="text-xs text-muted-foreground">
												Drop here
											</span>
										)}
									</div>
									<span className="text-sm text-foreground flex-1">
										{pair.definition}
									</span>
									{submitted && result && (
										<span className="shrink-0">
											{result.correct ? (
												<HugeiconsIcon
													icon={CheckmarkCircle02Icon}
													className="size-4 text-green-500"
													strokeWidth={1.5}
												/>
											) : (
												<span className="text-destructive text-xs">
													{result.keyword}
												</span>
											)}
										</span>
									)}
								</div>
							);
						})}
					</div>

					{submitted && (
						<div className="rounded-xl border bg-card p-4 flex items-center justify-between">
							<p className="text-sm font-medium text-foreground">
								{score}/{matchUp.pairs.length} correct
							</p>
							<Button size="sm" variant="outline" onClick={onRestart}>
								<HugeiconsIcon
									icon={RefreshIcon}
									className="size-3.5 mr-1.5"
									strokeWidth={1.5}
								/>
								Try again
							</Button>
						</div>
					)}
				</div>

				{!submitted && (
					<div className="px-8 pb-6 pt-2 shrink-0 border-t">
						<Button
							className="w-full"
							disabled={!allPlaced}
							onClick={() => setSubmitted(true)}
						>
							Submit Answers
						</Button>
					</div>
				)}
			</div>
		</div>
	);
}
