"use client";

import {
	ArrowRight02Icon,
	Camera02Icon,
	Cancel01Icon,
	ImageUploadIcon,
	SparklesIcon,
	Upload01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import { upload } from "@vercel/blob/client";
import { useCallback, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export function SolveInterface() {
	const [preview, setPreview] = useState<string | null>(null);
	const [dragging, setDragging] = useState(false);
	const [file, setFile] = useState<File | null>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);
	const cameraInputRef = useRef<HTMLInputElement>(null);

	const [completion, setCompletion] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleFile = useCallback(
		(f: File) => {
			if (!f.type.startsWith("image/")) return;
			setPreview(URL.createObjectURL(f));
			setFile(f);
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
		setCompletion("");
		if (fileInputRef.current) fileInputRef.current.value = "";
		if (cameraInputRef.current) cameraInputRef.current.value = "";
	};

	const handleSolve = async () => {
		if (!file) return;
		setIsLoading(true);
		setCompletion("");
		try {
			const { url } = await upload(file.name, file, {
				access: "public",
				handleUploadUrl: "/api/solve/upload",
			});
			const res = await fetch("/api/solve", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ imageUrl: url }),
			});
			if (!res.ok || !res.body) throw new Error("Request failed");
			const reader = res.body.getReader();
			const decoder = new TextDecoder();
			while (true) {
				const { done, value } = await reader.read();
				if (done) break;
				const chunk = decoder.decode(value, { stream: true });
				for (const line of chunk.split("\n")) {
					if (line.startsWith("0:")) {
						try {
							const text = JSON.parse(line.slice(2));
							setCompletion((prev) => prev + text);
						} catch {}
					}
				}
			}
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<main className="flex min-h-svh flex-col items-center px-4 py-16">
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
										Newton is thinking...
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

				{(completion || isLoading) && (
					<div className="mt-6 rounded-2xl border border-border bg-muted p-6">
						<div className="flex items-center gap-2 mb-4">
							<div className="size-2 rounded-full bg-primary" />
							<span className="text-sm font-medium text-foreground">
								Newton
							</span>
						</div>
						<div className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">
							{completion}
							{isLoading && (
								<span className="inline-block w-1.5 h-4 bg-primary ml-0.5 animate-pulse align-middle" />
							)}
						</div>
					</div>
				)}
			</div>
		</main>
	);
}
