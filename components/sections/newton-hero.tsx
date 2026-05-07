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
import { memo, useCallback, useState } from "react";
import type { PersonaState } from "@/components/ai-elements/persona";
import { Persona } from "@/components/ai-elements/persona";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";

type HugeIcon = HugeiconsIconProps["icon"];

const states: { state: PersonaState; icon: HugeIcon; label: string }[] = [
	{ state: "idle", icon: RadioIcon, label: "Idle" },
	{ state: "listening", icon: Mic01Icon, label: "Listening" },
	{ state: "thinking", icon: AiBrain01Icon, label: "Thinking" },
	{ state: "speaking", icon: MegaphoneIcon, label: "Speaking" },
	{ state: "asleep", icon: Moon01Icon, label: "Asleep" },
];

interface StateButtonProps {
	state: (typeof states)[0];
	currentState: PersonaState;
	onStateChange: (state: PersonaState) => void;
}

const StateButton = memo(
	({ state, currentState, onStateChange }: StateButtonProps) => {
		const handleClick = useCallback(
			() => onStateChange(state.state),
			[onStateChange, state.state],
		);
		return (
			<Tooltip>
				<TooltipTrigger asChild>
					<Button
						onClick={handleClick}
						size="icon-sm"
						variant={currentState === state.state ? "default" : "outline"}
					>
						<HugeiconsIcon
							icon={state.icon}
							strokeWidth={2}
							className="size-4"
						/>
					</Button>
				</TooltipTrigger>
				<TooltipContent>{state.label}</TooltipContent>
			</Tooltip>
		);
	},
);

StateButton.displayName = "StateButton";

function AuthedPersona() {
	const [currentState, setCurrentState] = useState<PersonaState>("idle");

	const handleStateChange = useCallback((state: PersonaState) => {
		setCurrentState(state);
	}, []);

	return (
		<div className="flex size-full flex-col items-center justify-center gap-4 py-24 lg:py-32">
			<Persona className="size-32" state={currentState} variant="obsidian" />
			<ButtonGroup orientation="horizontal">
				{states.map((state) => (
					<StateButton
						key={state.state}
						currentState={currentState}
						onStateChange={handleStateChange}
						state={state}
					/>
				))}
			</ButtonGroup>
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
