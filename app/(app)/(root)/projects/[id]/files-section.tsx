import {
	Attachment01Icon,
	Delete01Icon,
	File01Icon,
	Image01Icon,
	Pdf01Icon,
	Presentation01Icon,
	Upload01Icon,
	Video01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useRef } from "react";
import type { ProjectResource } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "./section-header";
import { EmptySection } from "./empty-section";

export function FilesSection({
	files,
	uploadingFile,
	setResources,
	performUploadFile,
	performDeleteResource,
}: {
	files: ProjectResource[];
	uploadingFile: boolean;
	setResources: (
		resources:
			| ProjectResource[]
			| ((prev: ProjectResource[]) => ProjectResource[]),
	) => void;
	performUploadFile: (
		file: File,
		onSuccess: (resource: ProjectResource) => void,
	) => void;
	performDeleteResource: (id: string) => Promise<boolean>;
}) {
	const fileInputRef = useRef<HTMLInputElement>(null);

	return (
		<section className="flex flex-col gap-3">
			<SectionHeader icon={Attachment01Icon} label="Files" count={files.length}>
				<Button
					size="sm"
					variant="outline"
					onClick={() => fileInputRef.current?.click()}
					disabled={uploadingFile}
				>
					<HugeiconsIcon
						icon={Upload01Icon}
						className="size-3.5"
						strokeWidth={2}
					/>
					{uploadingFile ? "Uploading..." : "Upload file"}
				</Button>
				<input
					ref={fileInputRef}
					type="file"
					className="hidden"
					accept="*/*"
					onChange={(e) => {
						const file = e.target.files?.[0];
						if (file)
							performUploadFile(file, (resource) => {
								setResources((prev) => [...prev, resource]);
							});
						e.target.value = "";
					}}
				/>
			</SectionHeader>

			{files.length === 0 ? (
				<EmptySection
					label="Upload files, PDFs, slides, videos, or images"
					onClick={() => fileInputRef.current?.click()}
					disabled={uploadingFile}
				/>
			) : (
				<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
					{files.map((f) => (
						<FileCard
							key={f.id}
							resource={f}
							onDelete={() =>
								performDeleteResource(f.id).then((ok) => {
									if (ok)
										setResources((prev) => prev.filter((r) => r.id !== f.id));
								})
							}
						/>
					))}
				</div>
			)}
		</section>
	);
}

function fileTypeIcon(mimeType: string | null) {
	if (!mimeType) return File01Icon;
	if (mimeType === "application/pdf") return Pdf01Icon;
	if (mimeType.startsWith("image/")) return Image01Icon;
	if (mimeType.startsWith("video/")) return Video01Icon;
	if (mimeType.includes("presentation") || mimeType.includes("powerpoint"))
		return Presentation01Icon;
	return File01Icon;
}

function FileCard({
	resource,
	onDelete,
}: {
	resource: ProjectResource;
	onDelete: () => void;
}) {
	const icon = fileTypeIcon(resource.mimeType);

	return (
		<div className="group relative flex flex-col gap-2 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/30 hover:bg-accent/50">
			<div className="flex items-center gap-2">
				<HugeiconsIcon
					icon={icon}
					className="size-5 shrink-0 text-muted-foreground"
					strokeWidth={1.5}
				/>
				{resource.url ? (
					<a
						href={resource.url}
						target="_blank"
						rel="noopener noreferrer"
						className="truncate text-sm font-medium hover:underline"
					>
						{resource.title}
					</a>
				) : (
					<span className="truncate text-sm font-medium">{resource.title}</span>
				)}
			</div>
			<span className="text-xs text-muted-foreground">
				{resource.mimeType ?? "File"} · {formatDate(resource.createdAt)}
			</span>
			<button
				onClick={onDelete}
				className="absolute right-2 top-2 hidden rounded-lg p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-destructive group-hover:block"
			>
				<HugeiconsIcon
					icon={Delete01Icon}
					className="size-3.5"
					strokeWidth={2}
				/>
			</button>
		</div>
	);
}
