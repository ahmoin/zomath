"use client";

import {
	AiBrain01Icon,
	ArrowRight02Icon,
	MegaphoneIcon,
	Mic01Icon,
	Moon01Icon,
	RadioIcon,
	SparklesIcon,
} from "@hugeicons/core-free-icons";
import type { HugeiconsIconProps } from "@hugeicons/react";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { PersonaState } from "@/components/ai-elements/persona";
import { Persona } from "@/components/ai-elements/persona";
import { SpeechInput } from "@/components/ai-elements/speech-input";
import {
	AudioPlayer,
	AudioPlayerControlBar,
	AudioPlayerElement,
	AudioPlayerPlayButton,
	AudioPlayerTimeDisplay,
	AudioPlayerTimeRange,
} from "@/components/ai-elements/audio-player";
import {
	Transcription,
	TranscriptionSegment,
} from "@/components/ai-elements/transcription";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";

type HugeIcon = HugeiconsIconProps["icon"];

const stateButtons: { state: PersonaState; icon: HugeIcon; label: string }[] = [
	{ state: "idle", icon: RadioIcon, label: "Idle" },
	{ state: "listening", icon: Mic01Icon, label: "Listening" },
	{ state: "thinking", icon: AiBrain01Icon, label: "Thinking" },
	{ state: "speaking", icon: MegaphoneIcon, label: "Speaking" },
	{ state: "asleep", icon: Moon01Icon, label: "Asleep" },
];

interface StateButtonProps {
	state: (typeof stateButtons)[0];
	currentState: PersonaState;
	onStateChange: (s: PersonaState) => void;
}

function StateButton({ state, currentState, onStateChange }: StateButtonProps) {
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

type Message = { role: "user" | "assistant"; content: string };

type SpeechData = {
	audio: { uint8ArrayData: Record<number, number>; mediaType: string };
	segments: { text: string; startSecond: number; endSecond: number }[];
};

function AuthedPersona() {
	const [personaState, setPersonaState] = useState<PersonaState>("idle");
	const [messages, setMessages] = useState<Message[]>([]);
	const [currentTime, setCurrentTime] = useState(0);
	const [speechData, setSpeechData] = useState<SpeechData | null>(null);
	const abortRef = useRef<AbortController | null>(null);
	const audioRef = useRef<HTMLAudioElement>(null);

	const audioBlobUrl = useMemo(() => {
		if (!speechData) return null;
		const bytes = new Uint8Array(Object.values(speechData.audio.uint8ArrayData));
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
		if (!audio) return;
		const onTimeUpdate = () => setCurrentTime(audio.currentTime);
		audio.addEventListener("timeupdate", onTimeUpdate);
		return () => audio.removeEventListener("timeupdate", onTimeUpdate);
	}, [speechData]);

	const fetchSpeech = useCallback(async (text: string) => {
		const res = await fetch("/api/newton/speech", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ text }),
		});
		if (!res.ok) return;
		const data = await res.json() as SpeechData;
		setSpeechData(data);
		setPersonaState("speaking");
	}, []);

	const sendToNewton = useCallback(
		async (userText: string) => {
			setPersonaState("thinking");
			setSpeechData(null);
			setCurrentTime(0);
			abortRef.current?.abort();

			const updated: Message[] = [
				...messages,
				{ role: "user", content: userText },
			];
			setMessages(updated);

			abortRef.current = new AbortController();
			const res = await fetch("/api/newton", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ messages: updated }),
				signal: abortRef.current.signal,
			});

			if (!res.ok || !res.body) {
				setPersonaState("idle");
				return;
			}

			const reader = res.body.getReader();
			const decoder = new TextDecoder();
			let full = "";

			while (true) {
				const { done, value } = await reader.read();
				if (done) break;
				full += decoder.decode(value, { stream: true });
			}

			setMessages((prev) => [...prev, { role: "assistant", content: full }]);
			await fetchSpeech(full);
		},
		[messages, fetchSpeech],
	);

	const handleTranscription = useCallback(
		(text: string) => {
			setPersonaState("listening");
			sendToNewton(text);
		},
		[sendToNewton],
	);

	useEffect(() => {
		return () => {
			abortRef.current?.abort();
		};
	}, []);

	const busy = personaState === "thinking" || personaState === "speaking";

	return (
		<div className="flex size-full flex-col items-center justify-center gap-6 py-24 lg:py-32">
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
						<AudioPlayerElement ref={audioRef} src={audioBlobUrl ?? ""} />
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
								key={index}
								index={index}
								segment={segment}
							/>
						)}
					</Transcription>
				</div>
			) : (
				!busy && messages.length === 0 && (
					<p className="text-sm text-muted-foreground">
						Tap the mic and ask Newton anything
					</p>
				)
			)}

			<SpeechInput
				className="size-14 rounded-full shadow-md"
				onTranscriptionChange={handleTranscription}
				disabled={busy}
			/>
		</div>
	);
}

export function NewtonHeroSection({ isAuthed }: { isAuthed: boolean }) {
	if (isAuthed) {
		return <AuthedPersona />;
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
