"use client";

import { SparklesIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { math } from "@streamdown/math";
import { PlusIcon } from "lucide-react";
import { useEffect } from "react";
import { Streamdown } from "streamdown";
import {
	Attachment,
	AttachmentInfo,
	AttachmentPreview,
	AttachmentRemove,
	Attachments,
} from "@/components/ai-elements/attachments";
import {
	PromptInput,
	PromptInputActionAddAttachments,
	PromptInputActionMenu,
	PromptInputActionMenuContent,
	PromptInputActionMenuTrigger,
	PromptInputFooter,
	PromptInputHeader,
	type PromptInputMessage,
	PromptInputSubmit,
	PromptInputTextarea,
	usePromptInputAttachments,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { useHeaderSlot } from "@/components/dashboard-header-context";
import { Button } from "@/components/ui/button";
import type { PlanMessage, Template } from "@/hooks/use-practice";
import { cn } from "@/lib/utils";

function AttachmentsPreviewer() {
	const { files, remove } = usePromptInputAttachments();
	if (files.length === 0) return null;
	return (
		<Attachments variant="inline">
			{files.map((file) => (
				<Attachment key={file.id} data={file} onRemove={() => remove(file.id)}>
					<AttachmentPreview />
					<AttachmentInfo />
					<AttachmentRemove />
				</Attachment>
			))}
		</Attachments>
	);
}

export function QuizPlanView({
	selectedFormat,
	planMessages,
	planLoading,
	planReady,
	planTopic,
	handlePlanSubmit,
	startQuiz,
	onChangeFormat,
}: {
	selectedFormat: Template;
	planMessages: PlanMessage[];
	planLoading: boolean;
	planReady: boolean;
	planTopic: string;
	handlePlanSubmit: (msg: { text: string; attachmentNames?: string[] }) => void;
	startQuiz: (topic: string) => void;
	onChangeFormat: () => void;
}) {
	const isEmpty = planMessages.length === 0;
	const { setRight } = useHeaderSlot();

	useEffect(() => {
		setRight(
			<>
				<span className="text-sm text-muted-foreground">
					{selectedFormat.title}
				</span>
				<Button variant="outline" size="sm" onClick={onChangeFormat}>
					&larr; Change format
				</Button>
			</>,
		);
		return () => setRight(null);
	}, [selectedFormat.title, onChangeFormat, setRight]);

	return (
		<div className="flex flex-1 flex-col overflow-hidden">
			<div className="flex-1 flex flex-col overflow-hidden">
				<div className="flex-1 overflow-y-auto px-8 pt-8 pb-4 flex flex-col gap-6">
					{isEmpty ? (
						<div className="flex flex-col items-center justify-center h-full gap-4 text-center">
							<div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
								<HugeiconsIcon
									icon={SparklesIcon}
									className="size-6 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<div className="flex flex-col gap-1.5">
								<p className="text-sm font-medium text-foreground">
									Tell Newton what you want to practice
								</p>
								<p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
									Describe your topic, paste in notes, or upload study
									materials. Newton will plan the perfect session.
								</p>
							</div>
						</div>
					) : (
						planMessages.map((msg, i) => (
							<div key={i} className="flex flex-col gap-1">
								<p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
									{msg.role === "user" ? "You" : "Newton"}
								</p>
								{msg.role === "user" ? (
									<div className="self-end ml-auto rounded-2xl bg-secondary px-4 py-3 text-sm text-foreground max-w-[85%]">
										{msg.text}
									</div>
								) : (
									<Streamdown
										plugins={{ math }}
										className="text-sm text-foreground leading-relaxed [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 max-w-[85%]"
									>
										{msg.text}
									</Streamdown>
								)}
							</div>
						))
					)}
					{planLoading && (
						<div className="flex flex-col gap-1">
							<p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
								Newton
							</p>
							<Shimmer className="text-sm text-muted-foreground">
								Planning...
							</Shimmer>
						</div>
					)}
				</div>

				{planReady && (
					<div className="mx-8 mb-4 rounded-xl border border-primary/30 bg-primary/8 px-5 py-4 flex items-center justify-between gap-4">
						<div className="flex flex-col gap-0.5">
							<p className="text-sm font-medium text-foreground">
								Ready to generate
							</p>
							<p className="text-xs text-muted-foreground">{planTopic}</p>
						</div>
						<Button
							onClick={() => startQuiz(planTopic)}
							className="shrink-0 gap-1.5"
						>
							<HugeiconsIcon
								icon={SparklesIcon}
								className="size-4"
								strokeWidth={1.5}
							/>
							Generate {selectedFormat.title}
						</Button>
					</div>
				)}

				<div className="px-8 pb-6 pt-2 shrink-0">
					<PromptInput
						multiple
						onSubmit={(msg: PromptInputMessage) => {
							handlePlanSubmit({
								text: msg.text,
								attachmentNames: msg.files.map((f) => f.filename ?? "file"),
							});
						}}
					>
						<PromptInputHeader>
							<AttachmentsPreviewer />
						</PromptInputHeader>
						<PromptInputTextarea
							placeholder={
								isEmpty
									? `What do you want to practice with ${selectedFormat.title}?`
									: "Reply to Newton..."
							}
							className={cn("min-h-12 max-h-40")}
						/>
						<PromptInputFooter>
							<PromptInputActionMenu>
								<PromptInputActionMenuTrigger>
									<PlusIcon className="size-4" />
								</PromptInputActionMenuTrigger>
								<PromptInputActionMenuContent>
									<PromptInputActionAddAttachments label="Upload notes or files" />
								</PromptInputActionMenuContent>
							</PromptInputActionMenu>
							<PromptInputSubmit disabled={planLoading} />
						</PromptInputFooter>
					</PromptInput>
				</div>
			</div>
		</div>
	);
}
