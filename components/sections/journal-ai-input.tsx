"use client";

import "katex/dist/katex.min.css";
import { HugeiconsIcon } from "@hugeicons/react";
import {
	Cancel01Icon,
	ArrowUp01Icon,
	StopIcon,
	Copy01Icon,
	FileImageIcon,
} from "@hugeicons/core-free-icons";
import { math } from "@streamdown/math";
import { Streamdown } from "streamdown";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Shimmer } from "@/components/ai-elements/shimmer";
import {
	InlineCitation,
	InlineCitationCard,
	InlineCitationCardBody,
	InlineCitationCardTrigger,
	InlineCitationCarousel,
	InlineCitationCarouselContent,
	InlineCitationCarouselHeader,
	InlineCitationCarouselIndex,
	InlineCitationCarouselItem,
	InlineCitationCarouselNext,
	InlineCitationCarouselPrev,
	InlineCitationSource,
} from "@/components/ai-elements/inline-citation";

const PLACEHOLDERS = [
	"to start research",
	"to explain a concept",
	"to solve a problem",
	"to summarize notes",
];

const ACCEPT = ".pdf,.doc,.docx,.png,.jpg,.jpeg,.txt,.md,.csv,.json,.ppt,.pptx";

type UploadedFile = { name: string; url: string };
type Source = { number: string; title: string; url: string };
type Message = { role: "user" | "assistant"; text: string; sources?: Source[] };

export function JournalAiInput({
	centered,
	onClose,
}: {
	centered?: boolean;
	onClose?: () => void;
}) {
	const [value, setValue] = useState("");
	const [placeholderIndex, setPlaceholderIndex] = useState(0);
	const [files, setFiles] = useState<UploadedFile[]>([]);
	const [uploading, setUploading] = useState(false);
	const [messages, setMessages] = useState<Message[]>([]);
	const [streamingText, setStreamingText] = useState("");
	const [streamingSources, setStreamingSources] = useState<Source[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [chatVisible, setChatVisible] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);
	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);
	const abortRef = useRef<AbortController | null>(null);
	const messagesEndRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const id = setInterval(() => {
			setPlaceholderIndex((i) => (i + 1) % PLACEHOLDERS.length);
		}, 2500);
		return () => clearInterval(id);
	}, []);

	useEffect(() => {
		if (centered) {
			const prefix = "Add notes to my journal about ";
			if (!value.startsWith(prefix)) setValue(prefix);
			requestAnimationFrame(() => {
				const el = textareaRef.current;
				if (!el) return;
				el.focus();
				el.setSelectionRange(el.value.length, el.value.length);
			});
		}
		// biome-ignore lint/correctness/useExhaustiveDependencies: only react to centered toggle
	}, [centered]);

	useEffect(() => {
		if (centered) setChatVisible(true);
	}, [centered]);

	useEffect(() => {
		function handleMouseDown(e: MouseEvent) {
			if (centered) return;
			if (
				containerRef.current &&
				!containerRef.current.contains(e.target as Node)
			) {
				setChatVisible(false);
			}
		}
		document.addEventListener("mousedown", handleMouseDown);
		return () => document.removeEventListener("mousedown", handleMouseDown);
	}, [centered]);

	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages, streamingText]);

	function handleInput() {
		const el = textareaRef.current;
		if (!el) return;
		el.style.height = "36px";
		el.style.height = `${Math.min(el.scrollHeight, 108)}px`;
	}

	async function handleFiles(selected: FileList) {
		setUploading(true);
		const results = await Promise.all(
			Array.from(selected).map(async (file) => {
				const form = new FormData();
				form.append("file", file);
				const res = await fetch("/api/upload", { method: "POST", body: form });
				if (!res.ok) return null;
				return res.json() as Promise<UploadedFile>;
			}),
		);
		setFiles((prev) => [
			...prev,
			...(results.filter(Boolean) as UploadedFile[]),
		]);
		setUploading(false);
	}

	function removeFile(url: string) {
		setFiles((prev) => prev.filter((f) => f.url !== url));
	}

	async function handleSubmit(e?: React.FormEvent) {
		e?.preventDefault();
		if (!value.trim() && files.length === 0) return;
		if (isLoading) return;

		const userText = value.trim();
		setValue("");
		if (textareaRef.current) textareaRef.current.style.height = "36px";
		onClose?.();
		setMessages((prev) => [...prev, { role: "user", text: userText }]);
		setIsLoading(true);
		setStreamingText("");

		const controller = new AbortController();
		abortRef.current = controller;
		setStreamingSources([]);

		try {
			const res = await fetch("/api/newton/research", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				signal: controller.signal,
				body: JSON.stringify({ query: userText }),
			});

			if (!res.ok || !res.body) throw new Error("Request failed");

			const reader = res.body.getReader();
			const decoder = new TextDecoder();
			let accumulated = "";
			let sources: Source[] = [];

			while (true) {
				const { done, value: chunk } = await reader.read();
				if (done) break;
				const text = decoder.decode(chunk, { stream: true });
				if (accumulated === "" && text.startsWith("data:sources:")) {
					const newlineIdx = text.indexOf("\n\n");
					const sourcesJson = text.slice("data:sources:".length, newlineIdx);
					sources = JSON.parse(sourcesJson);
					setStreamingSources(sources);
					accumulated += text.slice(newlineIdx + 2);
				} else {
					accumulated += text;
				}
				setStreamingText(accumulated);
			}

			setMessages((prev) => [
				...prev,
				{ role: "assistant", text: accumulated, sources },
			]);
			setStreamingText("");
			setStreamingSources([]);
		} catch (err) {
			if ((err as Error).name !== "AbortError") {
				setMessages((prev) => [
					...prev,
					{
						role: "assistant",
						text: "Something went wrong. Please try again.",
					},
				]);
			}
			setStreamingText("");
			setStreamingSources([]);
		} finally {
			setIsLoading(false);
			abortRef.current = null;
		}
	}

	function handleStop() {
		abortRef.current?.abort();
	}

	function renderWithCitations(text: string, sources: Source[]) {
		if (!sources.length) {
			return (
				<Streamdown
					plugins={{ math }}
					className="text-sm text-foreground leading-relaxed"
				>
					{text}
				</Streamdown>
			);
		}
		const parts = text.split(/(\[\d+\])/g);
		return (
			<span className="text-sm text-foreground leading-relaxed">
				{parts.map((part, i) => {
					const match = part.match(/^\[(\d+)\]$/);
					if (match) {
						const source = sources.find((s) => s.number === match[1]);
						if (source) {
							return (
								<InlineCitation key={i}>
									<InlineCitationCard>
										<InlineCitationCardTrigger sources={[source.url]} />
										<InlineCitationCardBody>
											<InlineCitationCarousel>
												<InlineCitationCarouselHeader>
													<InlineCitationCarouselPrev />
													<InlineCitationCarouselNext />
													<InlineCitationCarouselIndex />
												</InlineCitationCarouselHeader>
												<InlineCitationCarouselContent>
													<InlineCitationCarouselItem>
														<InlineCitationSource
															title={source.title}
															url={source.url}
														/>
													</InlineCitationCarouselItem>
												</InlineCitationCarouselContent>
											</InlineCitationCarousel>
										</InlineCitationCardBody>
									</InlineCitationCard>
								</InlineCitation>
							);
						}
					}
					return (
						<Streamdown
							key={i}
							plugins={{ math }}
							className="text-sm text-foreground leading-relaxed"
						>
							{part}
						</Streamdown>
					);
				})}
			</span>
		);
	}

	function clearChat() {
		setMessages([]);
		setStreamingText("");
	}

	function copyChat() {
		const text = messages
			.map((m) => `${m.role === "user" ? "You" : "Newton"}: ${m.text}`)
			.join("\n\n");
		navigator.clipboard.writeText(text);
	}

	const hasMessages = messages.length > 0 || isLoading;

	return (
		<>
			<div
				className="fixed inset-0 z-[999998] transition-all duration-300 ease-out"
				style={{
					background: centered ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0)",
					backdropFilter: centered ? "blur(4px)" : "blur(0px)",
					pointerEvents: centered ? "auto" : "none",
				}}
				onClick={onClose}
			/>

			<div
				ref={containerRef}
				className="fixed isolate z-[999999] left-1/2 transition-all duration-300 ease-out"
				style={{
					transform: centered ? "translate(-50%, -50%)" : "translate(-50%, 0)",
					top: centered ? "50%" : "8px",
					width: centered
						? "min(540px, calc(100vw - 32px))"
						: "min(426px, calc(100vw - 32px))",
				}}
			>
				<div className="relative">
					<div
						className={`rounded-xl px-1.5 min-h-9 bg-[rgb(221,233,213)] border border-[rgba(55,159,87,0.3)] backdrop-blur-xl ${hasMessages && chatVisible ? "rounded-b-none border-b-0" : ""}`}
					>
						<form
							className="relative flex flex-col outline-none"
							onSubmit={handleSubmit}
						>
							<div className="flex items-start pt-1.5">
								<Button
									type="button"
									variant="ghost"
									size="icon"
									disabled={uploading}
									className="shrink-0 size-7 rounded-md hover:bg-green-500/10 text-green-600"
									onClick={() => fileInputRef.current?.click()}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
									>
										<path
											d="M12 2.75C12.6904 2.75 13.25 3.30964 13.25 4V10.75H20C20.6904 10.75 21.25 11.3096 21.25 12C21.25 12.6904 20.6904 13.25 20 13.25H13.25V20C13.25 20.6904 12.6904 21.25 12 21.25C11.3096 21.25 10.75 20.6904 10.75 20V13.25H4C3.30964 13.25 2.75 12.6904 2.75 12C2.75 11.3096 3.30964 10.75 4 10.75H10.75V4C10.75 3.30964 11.3096 2.75 12 2.75Z"
											fill="currentColor"
											fillRule="evenodd"
										/>
									</svg>
								</Button>

								<div className="relative flex-1 flex items-center">
									<Textarea
										ref={textareaRef}
										rows={1}
										className="w-full pl-4 pr-2 pt-1 pb-1.5 bg-transparent text-sm leading-[1.4] text-neutral-800 border-none shadow-none focus-visible:ring-0 resize-none overflow-y-auto min-h-9 max-h-[108px] [transition:height_150ms_cubic-bezier(0.25,0.46,0.45,0.94)]"
										value={value}
										onChange={(e) => setValue(e.target.value)}
										onInput={handleInput}
										onFocus={() => setChatVisible(true)}
										onKeyDown={(e) => {
											if (e.key === "Enter" && !e.shiftKey) {
												e.preventDefault();
												handleSubmit();
											}
										}}
									/>

									{!value && (
										<div className="absolute inset-0 flex items-start pointer-events-none pl-4 pr-2 pt-1 text-sm leading-[1.4]">
											<div className="flex items-center">
												<span className="text-green-600/60 whitespace-nowrap">
													Ask&nbsp;
												</span>
												<div
													className="relative"
													style={{ width: "max-content" }}
												>
													{PLACEHOLDERS.map((p, i) => (
														<span
															key={p}
															className="block text-green-600/60 whitespace-nowrap transition-all duration-300"
															style={{
																opacity: i === placeholderIndex ? 1 : 0,
																transform:
																	i === placeholderIndex
																		? "translateY(0)"
																		: "translateY(-8px)",
																position: i === 0 ? "relative" : "absolute",
																top: 0,
																left: 0,
															}}
														>
															{p}
														</span>
													))}
												</div>
											</div>
										</div>
									)}
								</div>

								{isLoading ? (
									<Button
										type="button"
										size="icon"
										onClick={handleStop}
										className="shrink-0 size-7 rounded-md bg-red-500 hover:bg-red-600 text-white"
									>
										<HugeiconsIcon
											icon={StopIcon}
											className="size-3.5"
											strokeWidth={0}
											style={{ fill: "white" }}
											aria-hidden
										/>
									</Button>
								) : (
									<Button
										type="submit"
										size="icon"
										disabled={!value.trim() && files.length === 0}
										className="shrink-0 size-7 rounded-md bg-green-600 hover:bg-green-700 text-white disabled:opacity-30"
									>
										<HugeiconsIcon
											icon={ArrowUp01Icon}
											className="size-4"
											strokeWidth={2}
											aria-hidden
										/>
									</Button>
								)}
							</div>

							{files.length > 0 && (
								<div className="pr-1.5 pb-1.5 -mt-1 flex flex-wrap gap-1.5">
									{files.map((f) => (
										<div
											key={f.url}
											className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md max-w-full bg-green-600/20 border border-transparent hover:border-green-600/30 cursor-pointer transition-colors duration-150"
										>
											<HugeiconsIcon
												icon={FileImageIcon}
												className="size-3.5 shrink-0 text-green-600/70"
												strokeWidth={1.5}
											/>
											<span className="text-[12px] truncate text-neutral-800/80 max-w-[160px]">
												{f.name}
											</span>
											<button
												type="button"
												onClick={() => removeFile(f.url)}
												className="p-0.5 rounded shrink-0 text-green-600/50 hover:text-green-600 hover:bg-green-600/10 transition-colors duration-100"
											>
												<HugeiconsIcon
													icon={Cancel01Icon}
													className="size-3"
													strokeWidth={2}
													aria-hidden
												/>
											</button>
										</div>
									))}
								</div>
							)}
						</form>
					</div>

					{hasMessages && (
						<div
							className="absolute top-full left-0 right-0 rounded-xl rounded-t-none bg-background border border-[rgba(55,159,87,0.3)] border-t-0 shadow-md overflow-hidden transition-all duration-300 ease-out"
							style={{
								backdropFilter: "blur(25px) saturate(155%)",
								opacity: chatVisible ? 1 : 0,
								transform: chatVisible ? "translateY(0)" : "translateY(-6px)",
								pointerEvents: chatVisible ? "auto" : "none",
							}}
							onClick={(e) => e.stopPropagation()}
						>
							<div className="px-4 py-4 overflow-y-auto space-y-3 max-h-[35vh] min-h-[120px]">
								{messages.map((msg, i) =>
									msg.role === "user" ? (
										<div key={i} className="flex justify-end">
											<div className="max-w-[85%] rounded-2xl bg-[rgb(221,233,213)] border border-[rgba(55,159,87,0.2)] px-3 py-2 text-sm text-neutral-800">
												{msg.text}
											</div>
										</div>
									) : (
										<div
											key={i}
											className="text-sm text-foreground leading-relaxed"
										>
											{renderWithCitations(msg.text, msg.sources ?? [])}
										</div>
									),
								)}
								{isLoading && (
									<div className="text-sm text-foreground leading-relaxed space-y-2">
										{streamingSources.length > 0 && (
											<div className="flex items-center gap-1.5 flex-wrap">
												{streamingSources.slice(0, 5).map((s) => (
													<a
														key={s.number}
														href={s.url}
														target="_blank"
														rel="noopener noreferrer"
														className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[11px] bg-muted text-muted-foreground hover:text-foreground transition-colors"
													>
														<img
															src={`https://www.google.com/s2/favicons?domain=${new URL(s.url).hostname}&sz=16`}
															alt=""
															className="size-3 rounded-sm"
														/>
														{new URL(s.url).hostname.replace("www.", "")}
													</a>
												))}
												{streamingSources.length > 5 && (
													<span className="text-[11px] text-muted-foreground">
														+{streamingSources.length - 5} more
													</span>
												)}
											</div>
										)}
										{streamingText ? (
											<Streamdown
												animated={{
													animation: "blurIn",
													duration: 200,
													easing: "ease-out",
												}}
												isAnimating={true}
												plugins={{ math }}
												className="text-sm text-foreground leading-relaxed"
											>
												{streamingText}
											</Streamdown>
										) : streamingSources.length > 0 ? (
											<Shimmer className="text-green-700/70 text-sm">
												Writing notes...
											</Shimmer>
										) : (
											<Shimmer className="text-green-700/70 text-sm">
												Thinking...
											</Shimmer>
										)}
									</div>
								)}
								<div ref={messagesEndRef} />
							</div>

							<div className="px-4 pb-3 flex gap-2">
								<button
									type="button"
									onClick={clearChat}
									className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium text-neutral-600 bg-muted hover:bg-red-500 hover:text-white transition-colors"
								>
									<HugeiconsIcon
										icon={Cancel01Icon}
										className="size-3"
										strokeWidth={2}
										aria-hidden
									/>
									Clear chat
								</button>
								<button
									type="button"
									onClick={copyChat}
									className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium text-neutral-600 bg-muted hover:bg-muted/60 transition-colors"
								>
									<HugeiconsIcon
										icon={Copy01Icon}
										className="size-3"
										strokeWidth={2}
										aria-hidden
									/>
									Copy
								</button>
							</div>
						</div>
					)}
				</div>

				<input
					ref={fileInputRef}
					type="file"
					multiple
					accept={ACCEPT}
					className="hidden"
					onChange={(e) => e.target.files && handleFiles(e.target.files)}
				/>
			</div>
		</>
	);
}
