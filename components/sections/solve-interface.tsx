"use client";

import "katex/dist/katex.min.css";
import {
	ArrowRight02Icon,
	Camera02Icon,
	Cancel01Icon,
	ImageUploadIcon,
	SparklesIcon,
	Upload01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { math } from "@streamdown/math";
import { upload } from "@vercel/blob/client";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { Streamdown } from "streamdown";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { Button } from "@/components/ui/button";
import { DEFAULT_CHAT_MODEL } from "@/lib/ai/models";

export function SolveInterface() {
	const [preview, setPreview] = useState<string | null>(null);
	const [dragging, setDragging] = useState(false);
	const [file, setFile] = useState<File | null>(null);
	const [blobUrl, setBlobUrl] = useState<string | null>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);
	const cameraInputRef = useRef<HTMLInputElement>(null);

	type HistoryMessage = {
		id: string;
		role: "user" | "assistant";
		parts: { type: "text"; text: string }[];
	};

	const [completion, setCompletion] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [history, setHistory] = useState<HistoryMessage[]>([]);
	const [followUp, setFollowUp] = useState("");
	const bottomRef = useRef<HTMLDivElement>(null);

	const handleFile = useCallback(
		(f: File) => {
			if (!f.type.startsWith("image/")) return;
			setPreview(URL.createObjectURL(f));
			setFile(f);
			setBlobUrl(null);
			setCompletion("");
		},
		[setCompletion],
	);

	const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) handleFile(file);
	};

	const onDrop = (e: React.DragEvent) => {
		e.preventDefault();
		setDragging(false);
		const file = e.dataTransfer.files?.[0];
		if (file) handleFile(file);
	};

	const onDragOver = (e: React.DragEvent) => {
		e.preventDefault();
		setDragging(true);
	};

	const onDragLeave = () => setDragging(false);

	const clearAll = () => {
		setPreview(null);
		setFile(null);
		setBlobUrl(null);
		setCompletion("");
		setHistory([]);
		setFollowUp("");
		if (fileInputRef.current) fileInputRef.current.value = "";
		if (cameraInputRef.current) cameraInputRef.current.value = "";
	};

	const streamResponse = async (
		url: string,
		hist: {
			id: string;
			role: "user" | "assistant";
			parts: { type: "text"; text: string }[];
		}[],
	) => {
		const res = await fetch("/api/solve", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				id: crypto.randomUUID(),
				imageUrl: url,
				messages: hist,
				selectedChatModel: DEFAULT_CHAT_MODEL,
				selectedVisibilityType: "private",
			}),
		});
		if (!res.ok || !res.body) throw new Error("Request failed");
		const reader = res.body.getReader();
		const decoder = new TextDecoder();
		let accumulated = "";
		let rafId: number | null = null;

		const flush = () => {
			setCompletion(accumulated);
			rafId = null;
		};

		while (true) {
			const { done, value } = await reader.read();
			if (done) break;
			const chunk = decoder.decode(value, { stream: true });
			const normalized = chunk
				.replace(/\\\[/g, "$$")
				.replace(/\\\]/g, "$$")
				.replace(/\\\(/g, "$$")
				.replace(/\\\)/g, "$$");
			accumulated += normalized;
			if (rafId === null) rafId = requestAnimationFrame(flush);
		}

		if (rafId !== null) cancelAnimationFrame(rafId);
		setCompletion(accumulated);
		return accumulated;
	};

	const handleSolve = async () => {
		if (!file) return;
		setIsLoading(true);
		setCompletion("");
		setHistory([]);
		try {
			const url =
				blobUrl ??
				(
					await upload(file.name, file, {
						access: "private",
						handleUploadUrl: "/api/solve/upload",
					})
				).url;
			setBlobUrl(url);
			const response = await streamResponse(url, []);
			setHistory([
				{
					id: crypto.randomUUID(),
					role: "assistant",
					parts: [{ type: "text", text: response }],
				},
			]);
			setCompletion("");
		} finally {
			setIsLoading(false);
			setTimeout(
				() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }),
				100,
			);
		}
	};

	const handleFollowUp = async () => {
		if (!followUp.trim() || !blobUrl || isLoading) return;
		const userMsg = {
			id: crypto.randomUUID(),
			role: "user" as const,
			parts: [{ type: "text" as const, text: followUp.trim() }],
		};
		const nextHistory = [...history, userMsg];
		setHistory(nextHistory);
		setFollowUp("");
		setIsLoading(true);
		setCompletion("");
		try {
			const response = await streamResponse(blobUrl, nextHistory);
			setHistory((prev) => [
				...prev,
				{
					id: crypto.randomUUID(),
					role: "assistant",
					parts: [{ type: "text", text: response }],
				},
			]);
			setCompletion("");
		} finally {
			setIsLoading(false);
			setTimeout(
				() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }),
				100,
			);
		}
	};

	return (
		<main className="flex min-h-svh flex-col items-center px-4 py-16">
			<div className="h-8" />
			<div className="w-full max-w-2xl">
				<div className="text-center mb-10">
					<div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm text-muted-foreground mb-6">
						<HugeiconsIcon
							icon={Camera02Icon}
							className="size-4"
							strokeWidth={1.5}
						/>
						Powered by Newton
					</div>
					<h1 className="text-4xl lg:text-5xl font-medium tracking-tight text-foreground">
						Snap or upload a problem
					</h1>
					<p className="mt-3 text-muted-foreground text-lg">
						Handwriting, printed text, whiteboard photos all work.
					</p>
				</div>

				{preview ? (
					<div className="rounded-2xl border border-border bg-muted overflow-hidden">
						<div className="relative aspect-video w-full">
							<Image
								src={preview}
								alt="Uploaded problem"
								fill
								className="object-contain"
							/>
						</div>
						<div className="p-4 flex gap-3">
							<Button
								variant="outline"
								className="flex-1"
								onClick={clearAll}
								disabled={isLoading}
							>
								<HugeiconsIcon
									icon={Cancel01Icon}
									className="size-4 mr-2"
									strokeWidth={1.5}
								/>
								Clear
							</Button>
							<Button
								className="flex-1"
								onClick={handleSolve}
								disabled={isLoading || !file}
							>
								{isLoading ? (
									<>
										<HugeiconsIcon
											icon={SparklesIcon}
											className="size-4 mr-2 animate-pulse"
											strokeWidth={1.5}
										/>
										<Shimmer as="span">Newton is thinking...</Shimmer>
									</>
								) : (
									<>
										Solve with Newton
										<HugeiconsIcon
											icon={ArrowRight02Icon}
											className="size-4 ml-2"
											strokeWidth={1.5}
										/>
									</>
								)}
							</Button>
						</div>
					</div>
				) : (
					<div
						onDrop={onDrop}
						onDragOver={onDragOver}
						onDragLeave={onDragLeave}
						className={`rounded-2xl border-2 border-dashed transition-colors cursor-pointer flex flex-col items-center justify-center gap-4 py-20 px-8 text-center ${
							dragging
								? "border-primary bg-primary/5"
								: "border-border bg-muted hover:border-primary/50 hover:bg-muted/80"
						}`}
						onClick={() => fileInputRef.current?.click()}
					>
						<div className="flex items-center justify-center size-16 rounded-2xl bg-background border border-border">
							<HugeiconsIcon
								icon={ImageUploadIcon}
								className="size-7 text-muted-foreground"
								strokeWidth={1.5}
							/>
						</div>
						<div>
							<p className="text-foreground font-medium text-lg">
								Drop your photo here
							</p>
							<p className="text-muted-foreground text-sm mt-1">
								or click to browse files
							</p>
						</div>
						<p className="text-xs text-muted-foreground">
							JPG, PNG, WEBP, HEIC supported
						</p>
					</div>
				)}

				<input
					ref={fileInputRef}
					type="file"
					accept="image/*"
					className="hidden"
					onChange={onFileChange}
				/>
				<input
					ref={cameraInputRef}
					type="file"
					accept="image/*"
					capture="environment"
					className="hidden"
					onChange={onFileChange}
				/>

				{!preview && (
					<div className="mt-4 flex gap-3">
						<Button
							variant="outline"
							className="flex-1"
							onClick={(e) => {
								e.stopPropagation();
								fileInputRef.current?.click();
							}}
						>
							<HugeiconsIcon
								icon={Upload01Icon}
								className="size-4 mr-2"
								strokeWidth={1.5}
							/>
							Upload photo
						</Button>
						<Button
							variant="outline"
							className="flex-1"
							onClick={(e) => {
								e.stopPropagation();
								cameraInputRef.current?.click();
							}}
						>
							<HugeiconsIcon
								icon={Camera02Icon}
								className="size-4 mr-2"
								strokeWidth={1.5}
							/>
							Take photo
						</Button>
					</div>
				)}

				{(history.length > 0 || completion || isLoading) && (
					<div className="mt-6 flex flex-col gap-4">
						{history.map((msg, i) =>
							msg.role === "user" ? (
								<div key={i} className="flex justify-end">
									<div className="max-w-[85%] rounded-2xl bg-primary px-4 py-3 text-sm text-primary-foreground">
										{msg.parts.find((p) => p.type === "text")?.text}
									</div>
								</div>
							) : (
								<div
									key={i}
									className="rounded-2xl border border-border bg-muted p-6"
								>
									<div className="flex items-center gap-2 mb-4">
										<div className="size-2 rounded-full bg-primary" />
										<span className="text-sm font-medium text-foreground">
											Newton
										</span>
									</div>
									<Streamdown
										plugins={{ math }}
										className="text-sm text-foreground leading-relaxed"
									>
										{msg.parts.find((p) => p.type === "text")?.text ?? ""}
									</Streamdown>
								</div>
							),
						)}

						{(completion || isLoading) && (
							<div className="rounded-2xl border border-border bg-muted p-6">
								<div className="flex items-center gap-2 mb-4">
									<div className="size-2 rounded-full bg-primary" />
									{isLoading && !completion ? (
										<Shimmer as="span" className="text-sm font-medium">
											Newton is thinking...
										</Shimmer>
									) : (
										<span className="text-sm font-medium text-foreground">
											Newton
										</span>
									)}
								</div>
								<Streamdown
									animated={{
										animation: "blurIn",
										duration: 200,
										easing: "ease-out",
									}}
									isAnimating={isLoading}
									plugins={{ math }}
									className="text-sm text-foreground leading-relaxed"
								>
									{completion}
								</Streamdown>
							</div>
						)}
					</div>
				)}

				{history.length > 0 && !isLoading && blobUrl && (
					<div className="mt-4 flex gap-2">
						<input
							type="text"
							value={followUp}
							onChange={(e) => setFollowUp(e.target.value)}
							onKeyDown={(e) =>
								e.key === "Enter" && !e.shiftKey && handleFollowUp()
							}
							placeholder="Ask Newton a follow-up..."
							className="flex-1 rounded-xl border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
						/>
						<Button
							onClick={handleFollowUp}
							disabled={!followUp.trim()}
							size="icon"
							className="rounded-xl size-12 shrink-0"
						>
							<HugeiconsIcon
								icon={ArrowRight02Icon}
								className="size-4"
								strokeWidth={1.5}
							/>
						</Button>
					</div>
				)}

				<div ref={bottomRef} />
			</div>
		</main>
	);
}
