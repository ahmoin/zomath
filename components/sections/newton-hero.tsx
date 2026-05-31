"use client";

import "katex/dist/katex.min.css";

import {
	AiBrain01Icon,
	ArrowRight02Icon,
	MegaphoneIcon,
	Mic01Icon,
	Moon01Icon,
	RadioIcon,
	SparklesIcon,
} from "@hugeicons/core-free-icons";
import {
	BrainIcon,
	CheckIcon,
	ImageIcon,
	LoaderIcon,
	WrenchIcon,
} from "lucide-react";
import type { HugeiconsIconProps } from "@hugeicons/react";
import { HugeiconsIcon } from "@hugeicons/react";
import type { ChatStatus, FileUIPart } from "ai";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocalStorage } from "@/hooks/use-local-storage";
import {
	AudioPlayer,
	AudioPlayerControlBar,
	AudioPlayerElement,
	AudioPlayerPlayButton,
	AudioPlayerTimeDisplay,
	AudioPlayerTimeRange,
} from "@/components/ai-elements/audio-player";
import {
	Conversation,
	ConversationContent,
	ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import {
	Message,
	MessageContent,
	MessageResponse,
} from "@/components/ai-elements/message";
import {
	Reasoning,
	ReasoningContent,
	ReasoningTrigger,
} from "@/components/ai-elements/reasoning";
import {
	Task,
	TaskContent,
	TaskItem,
	TaskItemFile,
	TaskTrigger,
} from "@/components/ai-elements/task";
import {
	Queue,
	QueueItem,
	QueueItemContent,
	QueueItemIndicator,
	QueueList,
	QueueSection,
	QueueSectionContent,
	QueueSectionLabel,
	QueueSectionTrigger,
} from "@/components/ai-elements/queue";
import type { PersonaState } from "@/components/ai-elements/persona";
import { Persona } from "@/components/ai-elements/persona";
import {
	Attachment,
	AttachmentPreview,
	AttachmentRemove,
	Attachments,
} from "@/components/ai-elements/attachments";
import {
	ModelSelector,
	ModelSelectorContent,
	ModelSelectorEmpty,
	ModelSelectorGroup,
	ModelSelectorInput,
	ModelSelectorItem,
	ModelSelectorList,
	ModelSelectorLogo,
	ModelSelectorName,
	ModelSelectorTrigger,
} from "@/components/ai-elements/model-selector";
import {
	PromptInput,
	PromptInputActionAddAttachments,
	PromptInputActionMenu,
	PromptInputActionMenuContent,
	PromptInputActionMenuTrigger,
	PromptInputBody,
	PromptInputButton,
	PromptInputFooter,
	PromptInputHeader,
	PromptInputSubmit,
	PromptInputTextarea,
	PromptInputTools,
	usePromptInputAttachments,
} from "@/components/ai-elements/prompt-input";
import { chatModels, DEFAULT_CHAT_MODEL } from "@/lib/ai/models";
import { JournalCreatedCard } from "@/components/sections/journal-created-card";
import { PracticeCreatedCard } from "@/components/sections/practice-created-card";
import { ProjectCreatedCard } from "@/components/sections/project-created-card";
import { SpeechInput } from "@/components/ai-elements/speech-input";
import {
	Transcription,
	TranscriptionSegment,
} from "@/components/ai-elements/transcription";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type HugeIcon = HugeiconsIconProps["icon"];
type Mode = "text" | "voice";
type FilePart = { mediaType: string; name: string; data: string };
type ConvMessage = {
	role: "user" | "assistant";
	content: string;
	files?: FilePart[];
	reasoning?: string;
	journals?: { id: string; title: string; updated?: boolean }[];
	practices?: { id: string; title: string }[];
	projects?: { id: string; title: string }[];
};

type SpeechData = {
	audio: { uint8ArrayData: Record<number, number>; mediaType: string };
	segments: { text: string; startSecond: number; endSecond: number }[];
};

const stateButtons: { state: PersonaState; icon: HugeIcon; label: string }[] = [
	{ state: "idle", icon: RadioIcon, label: "Idle" },
	{ state: "listening", icon: Mic01Icon, label: "Listening" },
	{ state: "thinking", icon: AiBrain01Icon, label: "Thinking" },
	{ state: "speaking", icon: MegaphoneIcon, label: "Speaking" },
	{ state: "asleep", icon: Moon01Icon, label: "Asleep" },
];

function AttachmentsDisplay() {
	const attachments = usePromptInputAttachments();
	if (attachments.files.length === 0) return null;
	return (
		<Attachments variant="inline">
			{attachments.files.map((f) => (
				<Attachment
					key={f.id}
					data={f}
					onRemove={() => attachments.remove(f.id)}
				>
					<AttachmentPreview />
					<AttachmentRemove />
				</Attachment>
			))}
		</Attachments>
	);
}

function StateButton({
	state,
	currentState,
	onStateChange,
}: {
	state: (typeof stateButtons)[0];
	currentState: PersonaState;
	onStateChange: (s: PersonaState) => void;
}) {
	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button
					onClick={() => onStateChange(state.state)}
					size="icon-sm"
					variant={currentState === state.state ? "default" : "outline"}
				>
					<HugeiconsIcon icon={state.icon} strokeWidth={2} className="size-4" />
				</Button>
			</TooltipTrigger>
			<TooltipContent>{state.label}</TooltipContent>
		</Tooltip>
	);
}

const STEP_LABELS: Record<string, string> = {
	createJournal: "Creating journal",
	updateJournal: "Updating journal",
	createProject: "Creating project",
	addJournalToProject: "Adding to project",
	listJournals: "Listing journals",
	readJournal: "Reading journal",
	listProjects: "Listing projects",
	readProject: "Reading project",
	searchWeb: "Searching the web",
};

function AuthedPersona({
	initialChatId,
	initialMessages = [],
}: {
	initialChatId?: string;
	initialMessages?: ConvMessage[];
}) {
	const pathname = usePathname();
	const [mode, setMode] = useLocalStorage<Mode>("newton:mode", "voice");
	const [model, setModel] = useLocalStorage("newton:model", DEFAULT_CHAT_MODEL);
	const [modelSelectorOpen, setModelSelectorOpen] = useState(false);
	const [personaState, setPersonaState] = useState<PersonaState>("idle");
	const [messages, setMessages] = useState<ConvMessage[]>(initialMessages);
	const [streamingText, setStreamingText] = useState("");
	const [streamingReasoning, setStreamingReasoning] = useState("");
	const [streamingSteps, setStreamingSteps] = useState<
		{ name: string; status: "running" | "done" }[]
	>([]);
	const [streamingStatus, setStreamingStatus] = useState<string | null>(null);
	const [chatStatus, setChatStatus] = useState<ChatStatus>("ready");
	const [currentTime, setCurrentTime] = useState(0);
	const [speechData, setSpeechData] = useState<SpeechData | null>(null);
	const abortRef = useRef<AbortController | null>(null);
	const chatIdRef = useRef<string>(initialChatId ?? crypto.randomUUID());
	const audioRef = useRef<HTMLAudioElement>(null);
	const messagesRef = useRef(messages);
	useEffect(() => {
		messagesRef.current = messages;
	}, [messages]);

	const audioBlobUrl = useMemo(() => {
		if (!speechData) return null;
		const bytes = new Uint8Array(
			Object.values(speechData.audio.uint8ArrayData),
		);
		const blob = new Blob([bytes], { type: speechData.audio.mediaType });
		return URL.createObjectURL(blob);
	}, [speechData]);

	useEffect(() => {
		return () => {
			if (audioBlobUrl) URL.revokeObjectURL(audioBlobUrl);
		};
	}, [audioBlobUrl]);

	useEffect(() => {
		const audio = audioRef.current;
		if (!audio || !audioBlobUrl) return;
		const onTimeUpdate = () => setCurrentTime(audio.currentTime);
		const onEnded = () => setPersonaState("idle");
		audio.addEventListener("timeupdate", onTimeUpdate);
		audio.addEventListener("ended", onEnded);
		audio.play().catch(() => {});
		return () => {
			audio.removeEventListener("timeupdate", onTimeUpdate);
			audio.removeEventListener("ended", onEnded);
		};
	}, [audioBlobUrl]);

	useEffect(() => {
		return () => {
			abortRef.current?.abort();
		};
	}, []);

	const fetchSpeech = useCallback(async (text: string) => {
		const res = await fetch("/api/newton/speech", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ text }),
		});
		if (!res.ok) return;
		const data = (await res.json()) as SpeechData;
		setSpeechData(data);
		setPersonaState("speaking");
	}, []);

	const sendToNewton = useCallback(
		async (
			userText: string,
			attachments: FileUIPart[] = [],
		): Promise<string | null> => {
			setSpeechData(null);
			setCurrentTime(0);
			abortRef.current?.abort();

			const files: FilePart[] = await Promise.all(
				attachments.map(async (f) => {
					const res = await fetch(f.url);
					const blob = await res.blob();
					const data = await new Promise<string>((resolve) => {
						const reader = new FileReader();
						reader.onload = () =>
							resolve((reader.result as string).split(",")[1]);
						reader.readAsDataURL(blob);
					});
					return { mediaType: f.mediaType, name: f.filename ?? "file", data };
				}),
			);

			const updated: ConvMessage[] = [
				...messagesRef.current,
				{
					role: "user",
					content: userText,
					files: files.length ? files : undefined,
				},
			];
			setMessages(updated);
			setChatStatus("submitted");

			const isFirstMessage = messagesRef.current.length === 0;
			if (isFirstMessage) {
				fetch("/api/newton/chats", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						id: chatIdRef.current,
						title: userText,
						messages: updated,
					}),
				}).catch(() => {});
				if (pathname === "/newton") {
					window.history.replaceState(null, "", `/newton/${chatIdRef.current}`);
				}
			}

			abortRef.current = new AbortController();
			try {
				const res = await fetch("/api/newton", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						id: crypto.randomUUID(),
						selectedChatModel: model,
						selectedVisibilityType: "private",
						messages: updated.map((m) => ({
							id: crypto.randomUUID(),
							role: m.role,
							parts: [
								{ type: "text", text: m.content },
								...(m.files ?? []).map((f) => ({
									type: "file",
									mediaType: f.mediaType,
									data: f.data,
								})),
							],
						})),
					}),
					signal: abortRef.current.signal,
				});

				if (!res.ok || !res.body) {
					setChatStatus("error");
					return null;
				}

				const reader = res.body.getReader();
				const decoder = new TextDecoder();
				let buffer = "";
				let fullText = "";
				let fullReasoning = "";
				const journals: { id: string; title: string; updated?: boolean }[] = [];
				const practices: { id: string; title: string }[] = [];
				const projects: { id: string; title: string }[] = [];
				setChatStatus("streaming");

				while (true) {
					const { done, value } = await reader.read();
					if (done) break;
					buffer += decoder.decode(value, { stream: true });
					const lines = buffer.split("\n");
					buffer = lines.pop() ?? "";
					for (const line of lines) {
						if (line.startsWith("0:")) {
							fullText += JSON.parse(line.slice(2)) as string;
							setStreamingText(fullText);
						} else if (line.startsWith("g:")) {
							fullReasoning += JSON.parse(line.slice(2)) as string;
							setStreamingReasoning(fullReasoning);
						} else if (line.startsWith("s:")) {
							const step = JSON.parse(line.slice(2)) as {
								name: string;
								status: "running" | "done";
							};
							setStreamingSteps((prev) => {
								let idx = -1;
								for (let i = prev.length - 1; i >= 0; i--) {
									if (
										prev[i].name === step.name &&
										prev[i].status === "running"
									) {
										idx = i;
										break;
									}
								}
								if (step.status === "done" && idx !== -1) {
									const next = [...prev];
									next[idx] = { ...next[idx], status: "done" };
									return next;
								}
								return [...prev, step];
							});
						} else if (line.startsWith("j:")) {
							journals.push(
								JSON.parse(line.slice(2)) as {
									id: string;
									title: string;
									updated?: boolean;
								},
							);
						} else if (line.startsWith("p:")) {
							practices.push(
								JSON.parse(line.slice(2)) as { id: string; title: string },
							);
						} else if (line.startsWith("r:")) {
							projects.push(
								JSON.parse(line.slice(2)) as { id: string; title: string },
							);
						} else if (line.startsWith("w:")) {
							const { seconds } = JSON.parse(line.slice(2)) as {
								seconds: number;
							};
							setStreamingStatus(`Rate limited — retrying in ${seconds}s...`);
							setTimeout(() => setStreamingStatus(null), seconds * 1000);
						} else if (line.startsWith("e:")) {
							const { message } = JSON.parse(line.slice(2)) as {
								message: string;
							};
							setStreamingStatus(message);
						}
					}
				}

				setMessages((prev) => [
					...prev,
					{
						role: "assistant",
						content: fullText,
						reasoning: fullReasoning || undefined,
						journals: journals.length ? journals : undefined,
						practices: practices.length ? practices : undefined,
						projects: projects.length ? projects : undefined,
					},
				]);
				setStreamingText("");
				setStreamingReasoning("");
				setStreamingSteps([]);
				setStreamingStatus(null);
				const finalMessages = [
					...messagesRef.current,
					{
						role: "assistant" as const,
						content: fullText,
						reasoning: fullReasoning || undefined,
						journals: journals.length ? journals : undefined,
						practices: practices.length ? practices : undefined,
						projects: projects.length ? projects : undefined,
					},
				];
				setChatStatus("ready");
				fetch("/api/newton/chats", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						id: chatIdRef.current,
						title: userText,
						messages: finalMessages,
					}),
				}).catch(() => {});
				return fullText;
			} catch (err) {
				if ((err as Error).name !== "AbortError") setChatStatus("error");
				setStreamingText("");
				setStreamingSteps([]);
				setStreamingStatus(null);
				setChatStatus("ready");
				return null;
			}
		},
		[],
	);

	const handleVoiceTranscription = useCallback(
		async (text: string) => {
			setPersonaState("thinking");
			const response = await sendToNewton(text);
			if (response) await fetchSpeech(response);
			else setPersonaState("idle");
		},
		[sendToNewton, fetchSpeech],
	);

	const busy = personaState === "thinking" || personaState === "speaking";
	const isGenerating = chatStatus === "submitted" || chatStatus === "streaming";
	const canSwitchMode = !busy && !isGenerating;

	const modeToggle = (
		<div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
			<RadioGroup
				value={mode}
				onValueChange={(v) => {
					if (!canSwitchMode) return;
					const next = v as Mode;
					if (next === "text") setPersonaState("idle");
					setMode(next);
				}}
				className={cn(
					"flex w-auto flex-row items-center gap-3 rounded-full border border-border bg-background px-5 py-1.5 shadow-sm transition-opacity",
					!canSwitchMode && "cursor-not-allowed opacity-40",
				)}
			>
				<div className="flex items-center gap-1.5">
					<RadioGroupItem
						value="text"
						id="newton-mode-text"
						disabled={!canSwitchMode}
					/>
					<Label
						htmlFor="newton-mode-text"
						className={cn(
							"text-xs font-semibold",
							canSwitchMode ? "cursor-pointer" : "cursor-not-allowed",
						)}
					>
						Text
					</Label>
				</div>
				<div className="flex items-center gap-1.5">
					<RadioGroupItem
						value="voice"
						id="newton-mode-voice"
						disabled={!canSwitchMode}
					/>
					<Label
						htmlFor="newton-mode-voice"
						className={cn(
							"text-xs font-semibold",
							canSwitchMode ? "cursor-pointer" : "cursor-not-allowed",
						)}
					>
						Voice
					</Label>
				</div>
			</RadioGroup>
		</div>
	);

	return (
		<div className="relative size-full">
			<div
				className={cn(
					"relative flex size-full flex-col overflow-hidden",
					mode !== "text" && "hidden",
				)}
			>
				<Conversation>
					<ConversationContent className="mx-auto w-full max-w-2xl">
						{messages.length === 0 &&
						!streamingText &&
						chatStatus !== "submitted" ? (
							<p className="py-8 text-center text-sm text-muted-foreground">
								Ask Newton anything
							</p>
						) : (
							<>
								{messages.map((msg, i) => (
									<Message key={i} from={msg.role}>
										<MessageContent>
											{msg.role === "user" &&
												msg.files &&
												msg.files.length > 0 && (
													<Task defaultOpen={false}>
														<TaskTrigger
															title={`${msg.files.length} attachment${msg.files.length > 1 ? "s" : ""}`}
														/>
														<TaskContent>
															<TaskItem>
																{msg.files.map((f) => (
																	<TaskItemFile key={f.name}>
																		{f.name}
																	</TaskItemFile>
																))}
															</TaskItem>
														</TaskContent>
													</Task>
												)}
											{msg.role === "assistant" ? (
												<>
													{msg.reasoning && (
														<Reasoning isStreaming={false}>
															<ReasoningTrigger />
															<ReasoningContent>
																{msg.reasoning}
															</ReasoningContent>
														</Reasoning>
													)}
													<MessageResponse>{msg.content}</MessageResponse>
													{msg.journals?.map((j) => (
														<JournalCreatedCard
															key={j.id}
															id={j.id}
															title={j.title}
															updated={j.updated}
														/>
													))}
													{msg.practices?.map((p) => (
														<PracticeCreatedCard
															key={p.id}
															id={p.id}
															title={p.title}
														/>
													))}
													{msg.projects?.map((proj) => (
														<ProjectCreatedCard
															key={proj.id}
															id={proj.id}
															title={proj.title}
														/>
													))}
												</>
											) : (
												msg.content
											)}
										</MessageContent>
									</Message>
								))}
								{chatStatus === "submitted" &&
									!streamingText &&
									!streamingReasoning && (
										<Message from="assistant">
											<MessageContent>
												<Reasoning isStreaming>
													<ReasoningTrigger />
												</Reasoning>
											</MessageContent>
										</Message>
									)}
								{(streamingText ||
									streamingReasoning ||
									streamingSteps.length > 0 ||
									streamingStatus) && (
									<Message from="assistant">
										<MessageContent>
											{streamingSteps.length > 0 && !streamingText && (
												<Queue className="mb-2">
													<QueueSection>
														<QueueSectionTrigger>
															<QueueSectionLabel
																label="steps"
																count={streamingSteps.length}
															/>
														</QueueSectionTrigger>
														<QueueSectionContent>
															<QueueList>
																{streamingSteps.map((step, i) => (
																	<QueueItem key={i}>
																		<div className="flex items-center gap-2">
																			<QueueItemIndicator
																				completed={step.status === "done"}
																			/>
																			<QueueItemContent
																				completed={step.status === "done"}
																			>
																				{STEP_LABELS[step.name] ?? step.name}
																			</QueueItemContent>
																			{step.status === "running" ? (
																				<LoaderIcon className="size-3 animate-spin text-muted-foreground/60" />
																			) : (
																				<CheckIcon className="size-3 text-muted-foreground/40" />
																			)}
																		</div>
																	</QueueItem>
																))}
															</QueueList>
														</QueueSectionContent>
													</QueueSection>
												</Queue>
											)}
											{streamingStatus && (
												<p className="animate-pulse text-xs text-muted-foreground">
													{streamingStatus}
												</p>
											)}
											{streamingReasoning && (
												<Reasoning isStreaming={!streamingText}>
													<ReasoningTrigger />
													<ReasoningContent>
														{streamingReasoning}
													</ReasoningContent>
												</Reasoning>
											)}
											{streamingText && (
												<MessageResponse isAnimating>
													{streamingText}
												</MessageResponse>
											)}
										</MessageContent>
									</Message>
								)}
							</>
						)}
					</ConversationContent>
					<ConversationScrollButton />
				</Conversation>

				<div className="mx-auto w-full max-w-2xl shrink-0 px-4 pb-20 pt-2">
					<PromptInput
						globalDrop
						multiple
						onSubmit={({ text, files }) => {
							if (!text.trim() || isGenerating) return;
							sendToNewton(text, files);
						}}
					>
						<PromptInputHeader>
							<AttachmentsDisplay />
						</PromptInputHeader>
						<PromptInputBody>
							<PromptInputTextarea placeholder="Ask Newton anything..." />
						</PromptInputBody>
						<PromptInputFooter>
							<PromptInputTools>
								<PromptInputActionMenu>
									<PromptInputActionMenuTrigger />
									<PromptInputActionMenuContent>
										<PromptInputActionAddAttachments />
									</PromptInputActionMenuContent>
								</PromptInputActionMenu>
								<ModelSelector
									open={modelSelectorOpen}
									onOpenChange={setModelSelectorOpen}
								>
									<ModelSelectorTrigger asChild>
										<PromptInputButton>
											<ModelSelectorLogo provider={model.split("/")[0]} />
											<ModelSelectorName>
												{chatModels.find((m) => m.id === model)?.name ?? model}
											</ModelSelectorName>
										</PromptInputButton>
									</ModelSelectorTrigger>
									<ModelSelectorContent>
										<ModelSelectorInput placeholder="Search models..." />
										<ModelSelectorList>
											<ModelSelectorEmpty>No models found.</ModelSelectorEmpty>
											<ModelSelectorGroup heading="Models">
												{chatModels.map((m) => (
													<ModelSelectorItem
														key={m.id}
														value={m.id}
														onSelect={() => {
															setModel(m.id);
															setModelSelectorOpen(false);
														}}
													>
														<ModelSelectorLogo provider={m.provider} />
														<ModelSelectorName>{m.name}</ModelSelectorName>
														<div className="ml-auto flex items-center gap-1">
															{m.caps?.vision && (
																<ImageIcon className="size-3 text-muted-foreground" />
															)}
															{m.caps?.tools && (
																<WrenchIcon className="size-3 text-muted-foreground" />
															)}
															{m.caps?.reasoning && (
																<BrainIcon className="size-3 text-muted-foreground" />
															)}
														</div>
													</ModelSelectorItem>
												))}
											</ModelSelectorGroup>
										</ModelSelectorList>
									</ModelSelectorContent>
								</ModelSelector>
							</PromptInputTools>
							<PromptInputSubmit
								status={chatStatus}
								onStop={() => abortRef.current?.abort()}
							/>
						</PromptInputFooter>
					</PromptInput>
				</div>
			</div>

			<div
				className={cn(
					"flex size-full flex-col items-center justify-center gap-6 py-24 lg:py-32",
					mode !== "voice" && "hidden",
				)}
			>
				<Persona className="size-32" state={personaState} variant="opal" />

				<ButtonGroup orientation="horizontal">
					{stateButtons.map((s) => (
						<StateButton
							key={s.state}
							state={s}
							currentState={personaState}
							onStateChange={setPersonaState}
						/>
					))}
				</ButtonGroup>

				{speechData ? (
					<div className="flex w-full max-w-md flex-col gap-3">
						<AudioPlayer>
							<AudioPlayerElement
								ref={audioRef}
								src={audioBlobUrl ?? ""}
								autoPlay
							/>
							<AudioPlayerControlBar>
								<AudioPlayerPlayButton />
								<AudioPlayerTimeDisplay />
								<AudioPlayerTimeRange />
							</AudioPlayerControlBar>
						</AudioPlayer>
						<Transcription
							currentTime={currentTime}
							onSeek={(time) => {
								setCurrentTime(time);
								if (audioRef.current) audioRef.current.currentTime = time;
							}}
							segments={speechData.segments}
							className="max-w-md"
						>
							{(segment, index) => (
								<TranscriptionSegment
									key={segment.startSecond}
									index={index}
									segment={segment}
								/>
							)}
						</Transcription>
					</div>
				) : (
					!busy &&
					messages.length === 0 && (
						<p className="text-sm text-muted-foreground">
							Tap the mic and ask Newton anything
						</p>
					)
				)}

				<SpeechInput
					className="size-14 rounded-full shadow-md"
					onTranscriptionChange={handleVoiceTranscription}
					disabled={busy}
				/>
			</div>

			{modeToggle}
		</div>
	);
}

export function NewtonHeroSection({
	isAuthed,
	initialChatId,
	initialMessages,
}: {
	isAuthed: boolean;
	initialChatId?: string;
	initialMessages?: ConvMessage[];
}) {
	if (isAuthed) {
		return (
			<AuthedPersona
				initialChatId={initialChatId}
				initialMessages={initialMessages}
			/>
		);
	}

	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-3xl mx-auto text-center">
					<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-sm text-muted-foreground mb-8">
						<HugeiconsIcon
							icon={SparklesIcon}
							className="size-4 text-primary"
							strokeWidth={1.5}
						/>
						Your AI math tutor
					</div>
					<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-foreground mb-6">
						Meet Newton
					</h1>
					<p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-10">
						An AI tutor that actually teaches. Newton guides you to
						understanding with questions, hints, and conversations, so you build
						real mathematical intuition instead of just collecting answers.
					</p>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<Link href="/sign-up">
							<Button size="lg" className="text-base px-6">
								Start learning with Newton
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-5 ml-1"
									strokeWidth={1.5}
								/>
							</Button>
						</Link>
						<Link href="#how-it-works">
							<Button variant="outline" size="lg" className="text-base px-6">
								See how it works
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
