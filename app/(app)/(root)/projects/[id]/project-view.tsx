"use client";

import {
	Attachment01Icon,
	BookOpen01Icon,
	Delete01Icon,
	File01Icon,
	FolderLibraryIcon,
	HelpCircleIcon,
	Image01Icon,
	Link01Icon,
	NoteEditIcon,
	Pdf01Icon,
	Presentation01Icon,
	PlusSignIcon,
	QuestionIcon,
	SearchIcon,
	Upload01Icon,
	Video01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { EditorPreview } from "@/components/sections/editor-preview";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { Journal, Project, ProjectResource } from "@/lib/types";
import { formatDate } from "@/lib/utils";

type AvailableJournal = { id: string; title: string };

export function ProjectView({
	project,
	journals: initialJournals,
	resources: initialResources,
	availableJournals: initialAvailable,
}: {
	project: Project;
	journals: Journal[];
	resources: ProjectResource[];
	availableJournals: AvailableJournal[];
}) {
	const router = useRouter();
	const [journals, setJournals] = useState<Journal[]>(initialJournals);
	const [resources, setResources] = useState<ProjectResource[]>(initialResources);
	const [availableJournals, setAvailableJournals] = useState<AvailableJournal[]>(initialAvailable);

	const [creatingJournal, setCreatingJournal] = useState(false);
	const [addJournalOpen, setAddJournalOpen] = useState(false);
	const [journalSearch, setJournalSearch] = useState("");
	const [addingJournalId, setAddingJournalId] = useState<string | null>(null);

	const [addLinkOpen, setAddLinkOpen] = useState(false);
	const [linkTitle, setLinkTitle] = useState("");
	const [linkUrl, setLinkUrl] = useState("");
	const [savingLink, setSavingLink] = useState(false);

	const [addNoteOpen, setAddNoteOpen] = useState(false);
	const [noteTitle, setNoteTitle] = useState("");
	const [noteBody, setNoteBody] = useState("");
	const [savingNote, setSavingNote] = useState(false);

	const [addQuestionOpen, setAddQuestionOpen] = useState(false);
	const [questionText, setQuestionText] = useState("");
	const [savingQuestion, setSavingQuestion] = useState(false);

	const [uploadingFile, setUploadingFile] = useState(false);
	const fileInputRef = useRef<HTMLInputElement>(null);

	async function createJournal() {
		setCreatingJournal(true);
		try {
			const res = await fetch("/api/journals", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ projectId: project.id }),
			});
			if (!res.ok) return;
			const data = (await res.json()) as { id: string };
			router.push(`/journals/${data.id}`);
		} finally {
			setCreatingJournal(false);
		}
	}

	async function addExistingJournal(journalId: string) {
		setAddingJournalId(journalId);
		try {
			const res = await fetch(`/api/journals/${journalId}`, {
				method: "PATCH",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ projectId: project.id }),
			});
			if (!res.ok) return;
			const updated = await res.json() as Journal;
			setJournals((prev) => [...prev, updated]);
			setAvailableJournals((prev) => prev.filter((j) => j.id !== journalId));
			setAddJournalOpen(false);
			setJournalSearch("");
		} finally {
			setAddingJournalId(null);
		}
	}

	async function removeJournalFromProject(journalId: string) {
		const res = await fetch(`/api/journals/${journalId}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ projectId: null }),
		});
		if (!res.ok) return;
		const removed = journals.find((j) => j.id === journalId);
		setJournals((prev) => prev.filter((j) => j.id !== journalId));
		if (removed) setAvailableJournals((prev) => [...prev, { id: removed.id, title: removed.title }]);
	}

	async function uploadFile(file: File) {
		setUploadingFile(true);
		try {
			const form = new FormData();
			form.append("file", file);
			const uploadRes = await fetch("/api/upload", { method: "POST", body: form });
			if (!uploadRes.ok) return;
			const { url, name } = (await uploadRes.json()) as { url: string; name: string };

			const mimeType = file.type;
			const res = await fetch(`/api/projects/${project.id}/resources`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ type: "file", title: name, url, mimeType }),
			});
			if (!res.ok) return;
			const created = (await res.json()) as ProjectResource;
			setResources((prev) => [...prev, created]);
		} finally {
			setUploadingFile(false);
		}
	}

	async function saveLink() {
		if (!linkTitle.trim() || !linkUrl.trim()) return;
		setSavingLink(true);
		try {
			const res = await fetch(`/api/projects/${project.id}/resources`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ type: "link", title: linkTitle.trim(), url: linkUrl.trim() }),
			});
			if (!res.ok) return;
			const created = (await res.json()) as ProjectResource;
			setResources((prev) => [...prev, created]);
			setAddLinkOpen(false);
			setLinkTitle("");
			setLinkUrl("");
		} finally {
			setSavingLink(false);
		}
	}

	async function saveNote() {
		if (!noteTitle.trim()) return;
		setSavingNote(true);
		try {
			const res = await fetch(`/api/projects/${project.id}/resources`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ type: "note", title: noteTitle.trim(), body: noteBody.trim() || null }),
			});
			if (!res.ok) return;
			const created = (await res.json()) as ProjectResource;
			setResources((prev) => [...prev, created]);
			setAddNoteOpen(false);
			setNoteTitle("");
			setNoteBody("");
		} finally {
			setSavingNote(false);
		}
	}

	async function saveQuestion() {
		if (!questionText.trim()) return;
		setSavingQuestion(true);
		try {
			const res = await fetch(`/api/projects/${project.id}/resources`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ type: "question", title: questionText.trim() }),
			});
			if (!res.ok) return;
			const created = (await res.json()) as ProjectResource;
			setResources((prev) => [...prev, created]);
			setAddQuestionOpen(false);
			setQuestionText("");
		} finally {
			setSavingQuestion(false);
		}
	}

	async function deleteResource(id: string) {
		const res = await fetch(`/api/projects/${project.id}/resources/${id}`, { method: "DELETE" });
		if (res.ok) setResources((prev) => prev.filter((r) => r.id !== id));
	}

	const files = resources.filter((r) => r.type === "file");
	const links = resources.filter((r) => r.type === "link");
	const notes = resources.filter((r) => r.type === "note");
	const questions = resources.filter((r) => r.type === "question");

	const filteredAvailable = availableJournals.filter((j) =>
		j.title.toLowerCase().includes(journalSearch.toLowerCase()),
	);

	return (
		<div className="flex flex-1 flex-col">
			<header className="flex items-center gap-3 border-b border-border px-4 lg:px-6 py-4">
				<HugeiconsIcon icon={FolderLibraryIcon} className="size-5 text-muted-foreground" strokeWidth={1.5} />
				<h1 className="text-lg font-semibold tracking-tight">{project.title}</h1>
			</header>

			<div className="flex flex-1 flex-col gap-8 overflow-y-auto px-4 lg:px-6 py-6">
				{/* Journals */}
				<section className="flex flex-col gap-3">
					<SectionHeader
						icon={BookOpen01Icon}
						label="Journals"
						count={journals.length}
					>
						<Button size="sm" variant="outline" onClick={() => setAddJournalOpen(true)}>
							<HugeiconsIcon icon={BookOpen01Icon} className="size-3.5" strokeWidth={2} />
							Add existing
						</Button>
						<Button size="sm" variant="outline" onClick={createJournal} disabled={creatingJournal}>
							<HugeiconsIcon icon={PlusSignIcon} className="size-3.5" strokeWidth={2} />
							{creatingJournal ? "Creating..." : "New journal"}
						</Button>
					</SectionHeader>

					{journals.length === 0 ? (
						<EmptySection
							label="Add the first journal to this project"
							onClick={createJournal}
							disabled={creatingJournal}
						/>
					) : (
						<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
							{journals.map((j) => (
								<div key={j.id} className="group relative">
									<Link
										href={`/journals/${j.id}`}
										className="flex flex-col rounded-xl border border-border bg-card p-4 text-left transition-colors hover:border-primary/30 hover:bg-accent/50"
									>
										<div className="line-clamp-3 text-muted-foreground">
											{j.content ? (
												<EditorPreview content={j.content} />
											) : (
												<span className="text-xs">Empty journal</span>
											)}
										</div>
										<div className="mt-3 flex items-center justify-between">
											<span className="text-sm font-medium text-foreground">{j.title}</span>
											<span className="text-xs text-muted-foreground">{formatDate(j.updatedAt)}</span>
										</div>
									</Link>
									<button
										onClick={() => removeJournalFromProject(j.id)}
										className="absolute right-2 top-2 hidden rounded-lg p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-destructive group-hover:flex"
										title="Remove from project"
									>
										<HugeiconsIcon icon={Delete01Icon} className="size-3.5" strokeWidth={2} />
									</button>
								</div>
							))}
						</div>
					)}
				</section>

				{/* Files */}
				<section className="flex flex-col gap-3">
					<SectionHeader icon={Attachment01Icon} label="Files" count={files.length}>
						<Button
							size="sm"
							variant="outline"
							onClick={() => fileInputRef.current?.click()}
							disabled={uploadingFile}
						>
							<HugeiconsIcon icon={Upload01Icon} className="size-3.5" strokeWidth={2} />
							{uploadingFile ? "Uploading..." : "Upload file"}
						</Button>
						<input
							ref={fileInputRef}
							type="file"
							className="hidden"
							accept="*/*"
							onChange={(e) => {
								const file = e.target.files?.[0];
								if (file) uploadFile(file);
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
								<FileCard key={f.id} resource={f} onDelete={() => deleteResource(f.id)} />
							))}
						</div>
					)}
				</section>

				{/* Links */}
				<section className="flex flex-col gap-3">
					<SectionHeader icon={Link01Icon} label="Links" count={links.length}>
						<Button size="sm" variant="outline" onClick={() => setAddLinkOpen(true)}>
							<HugeiconsIcon icon={PlusSignIcon} className="size-3.5" strokeWidth={2} />
							Add link
						</Button>
					</SectionHeader>

					{links.length === 0 ? (
						<EmptySection label="Add lecture recordings, article links, or reference URLs" onClick={() => setAddLinkOpen(true)} />
					) : (
						<div className="flex flex-col gap-2">
							{links.map((l) => (
								<div
									key={l.id}
									className="group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:border-primary/30 hover:bg-accent/50"
								>
									<HugeiconsIcon icon={Link01Icon} className="size-4 shrink-0 text-muted-foreground" strokeWidth={1.5} />
									<div className="min-w-0 flex-1">
										<a
											href={l.url ?? "#"}
											target="_blank"
											rel="noopener noreferrer"
											className="block truncate text-sm font-medium hover:underline"
										>
											{l.title}
										</a>
										{l.url && (
											<span className="block truncate text-xs text-muted-foreground">{l.url}</span>
										)}
									</div>
									<button
										onClick={() => deleteResource(l.id)}
										className="hidden shrink-0 rounded-lg p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-destructive group-hover:block"
									>
										<HugeiconsIcon icon={Delete01Icon} className="size-3.5" strokeWidth={2} />
									</button>
								</div>
							))}
						</div>
					)}
				</section>

				{/* Notes */}
				<section className="flex flex-col gap-3">
					<SectionHeader icon={NoteEditIcon} label="Notes" count={notes.length}>
						<Button size="sm" variant="outline" onClick={() => setAddNoteOpen(true)}>
							<HugeiconsIcon icon={PlusSignIcon} className="size-3.5" strokeWidth={2} />
							New note
						</Button>
					</SectionHeader>

					{notes.length === 0 ? (
						<EmptySection label="Add quick notes, summaries, or reminders" onClick={() => setAddNoteOpen(true)} />
					) : (
						<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
							{notes.map((n) => (
								<div key={n.id} className="group relative flex flex-col gap-1 rounded-xl border border-border bg-card p-4">
									<span className="text-sm font-medium">{n.title}</span>
									{n.body && (
										<p className="line-clamp-4 text-xs text-muted-foreground">{n.body}</p>
									)}
									<button
										onClick={() => deleteResource(n.id)}
										className="absolute right-2 top-2 hidden rounded-lg p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-destructive group-hover:block"
									>
										<HugeiconsIcon icon={Delete01Icon} className="size-3.5" strokeWidth={2} />
									</button>
								</div>
							))}
						</div>
					)}
				</section>

				{/* Questions */}
				<section className="flex flex-col gap-3">
					<SectionHeader icon={QuestionIcon} label="Questions" count={questions.length}>
						<Button size="sm" variant="outline" onClick={() => setAddQuestionOpen(true)}>
							<HugeiconsIcon icon={PlusSignIcon} className="size-3.5" strokeWidth={2} />
							New question
						</Button>
					</SectionHeader>

					{questions.length === 0 ? (
						<EmptySection label="Track questions to research or ask your teacher" onClick={() => setAddQuestionOpen(true)} />
					) : (
						<div className="flex flex-col gap-2">
							{questions.map((q) => (
								<div
									key={q.id}
									className="group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:border-primary/30 hover:bg-accent/50"
								>
									<HugeiconsIcon icon={HelpCircleIcon} className="size-4 shrink-0 text-muted-foreground" strokeWidth={1.5} />
									<span className="min-w-0 flex-1 text-sm">{q.title}</span>
									<button
										onClick={() => deleteResource(q.id)}
										className="hidden shrink-0 rounded-lg p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-destructive group-hover:block"
									>
										<HugeiconsIcon icon={Delete01Icon} className="size-3.5" strokeWidth={2} />
									</button>
								</div>
							))}
						</div>
					)}
				</section>
			</div>

			{/* Add Existing Journal Dialog */}
			<Dialog open={addJournalOpen} onOpenChange={setAddJournalOpen}>
				<DialogContent className="max-w-md">
					<DialogHeader>
						<DialogTitle>Add existing journal</DialogTitle>
					</DialogHeader>
					<div className="relative">
						<HugeiconsIcon
							icon={SearchIcon}
							className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
							strokeWidth={1.5}
						/>
						<Input
							placeholder="Search journals..."
							value={journalSearch}
							onChange={(e) => setJournalSearch(e.target.value)}
							className="pl-9"
						/>
					</div>
					<div className="max-h-64 overflow-y-auto">
						{filteredAvailable.length === 0 ? (
							<p className="py-6 text-center text-sm text-muted-foreground">
								{availableJournals.length === 0
									? "All your journals are already in a project."
									: "No journals match your search."}
							</p>
						) : (
							<div className="flex flex-col gap-1 py-1">
								{filteredAvailable.map((j) => (
									<button
										key={j.id}
										onClick={() => addExistingJournal(j.id)}
										disabled={addingJournalId === j.id}
										className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors hover:bg-accent disabled:opacity-50"
									>
										<HugeiconsIcon icon={BookOpen01Icon} className="size-4 shrink-0 text-muted-foreground" strokeWidth={1.5} />
										<span className="truncate">{j.title}</span>
										{addingJournalId === j.id && (
											<span className="ml-auto text-xs text-muted-foreground">Adding...</span>
										)}
									</button>
								))}
							</div>
						)}
					</div>
				</DialogContent>
			</Dialog>

			{/* Add Link Dialog */}
			<Dialog open={addLinkOpen} onOpenChange={setAddLinkOpen}>
				<DialogContent className="max-w-md">
					<DialogHeader>
						<DialogTitle>Add link</DialogTitle>
					</DialogHeader>
					<div className="flex flex-col gap-3">
						<div className="flex flex-col gap-1.5">
							<Label>Title</Label>
							<Input
								placeholder="e.g. Khan Academy - Calculus"
								value={linkTitle}
								onChange={(e) => setLinkTitle(e.target.value)}
							/>
						</div>
						<div className="flex flex-col gap-1.5">
							<Label>URL</Label>
							<Input
								placeholder="https://..."
								value={linkUrl}
								onChange={(e) => setLinkUrl(e.target.value)}
								type="url"
							/>
						</div>
					</div>
					<DialogFooter>
						<Button variant="outline" onClick={() => setAddLinkOpen(false)}>Cancel</Button>
						<Button onClick={saveLink} disabled={savingLink || !linkTitle.trim() || !linkUrl.trim()}>
							{savingLink ? "Saving..." : "Add link"}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			{/* Add Note Dialog */}
			<Dialog open={addNoteOpen} onOpenChange={setAddNoteOpen}>
				<DialogContent className="max-w-md">
					<DialogHeader>
						<DialogTitle>New note</DialogTitle>
					</DialogHeader>
					<div className="flex flex-col gap-3">
						<div className="flex flex-col gap-1.5">
							<Label>Title</Label>
							<Input
								placeholder="Note title"
								value={noteTitle}
								onChange={(e) => setNoteTitle(e.target.value)}
							/>
						</div>
						<div className="flex flex-col gap-1.5">
							<Label>Content</Label>
							<Textarea
								placeholder="Write your note here..."
								value={noteBody}
								onChange={(e) => setNoteBody(e.target.value)}
								rows={5}
							/>
						</div>
					</div>
					<DialogFooter>
						<Button variant="outline" onClick={() => setAddNoteOpen(false)}>Cancel</Button>
						<Button onClick={saveNote} disabled={savingNote || !noteTitle.trim()}>
							{savingNote ? "Saving..." : "Save note"}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			{/* Add Question Dialog */}
			<Dialog open={addQuestionOpen} onOpenChange={setAddQuestionOpen}>
				<DialogContent className="max-w-md">
					<DialogHeader>
						<DialogTitle>New question</DialogTitle>
					</DialogHeader>
					<div className="flex flex-col gap-1.5">
						<Label>Question</Label>
						<Textarea
							placeholder="What do you want to find out or understand?"
							value={questionText}
							onChange={(e) => setQuestionText(e.target.value)}
							rows={3}
						/>
					</div>
					<DialogFooter>
						<Button variant="outline" onClick={() => setAddQuestionOpen(false)}>Cancel</Button>
						<Button onClick={saveQuestion} disabled={savingQuestion || !questionText.trim()}>
							{savingQuestion ? "Saving..." : "Save question"}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}

function SectionHeader({
	icon,
	label,
	count,
	children,
}: {
	icon: React.ComponentProps<typeof HugeiconsIcon>["icon"];
	label: string;
	count: number;
	children?: React.ReactNode;
}) {
	return (
		<div className="flex items-center justify-between">
			<div className="flex items-center gap-2">
				<HugeiconsIcon icon={icon} className="size-4 text-muted-foreground" strokeWidth={2} />
				<h2 className="text-sm font-semibold tracking-tight">{label}</h2>
				{count > 0 && (
					<span className="flex size-5 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground">
						{count}
					</span>
				)}
			</div>
			<div className="flex items-center gap-2">{children}</div>
		</div>
	);
}

function EmptySection({
	label,
	onClick,
	disabled,
}: {
	label: string;
	onClick?: () => void;
	disabled?: boolean;
}) {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className="group flex min-h-[80px] flex-col items-center justify-center gap-1.5 rounded-2xl border-2 border-dashed border-muted-foreground/25 bg-transparent transition-colors hover:border-primary/40 hover:bg-muted/40 disabled:opacity-50"
		>
			<HugeiconsIcon
				icon={PlusSignIcon}
				className="size-4 text-muted-foreground group-hover:text-primary transition-colors"
				strokeWidth={2}
			/>
			<span className="text-xs text-muted-foreground">{label}</span>
		</button>
	);
}

function fileTypeIcon(mimeType: string | null) {
	if (!mimeType) return File01Icon;
	if (mimeType === "application/pdf") return Pdf01Icon;
	if (mimeType.startsWith("image/")) return Image01Icon;
	if (mimeType.startsWith("video/")) return Video01Icon;
	if (mimeType.includes("presentation") || mimeType.includes("powerpoint")) return Presentation01Icon;
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
				<HugeiconsIcon icon={icon} className="size-5 shrink-0 text-muted-foreground" strokeWidth={1.5} />
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
				<HugeiconsIcon icon={Delete01Icon} className="size-3.5" strokeWidth={2} />
			</button>
		</div>
	);
}
