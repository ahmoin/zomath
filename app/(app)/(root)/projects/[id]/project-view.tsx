"use client";

import {
	BookOpen01Icon,
	Delete01Icon,
	FolderLibraryIcon,
	PlusSignIcon,
	SearchIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
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
import { useProjectActions } from "@/app/(app)/(root)/projects/[id]/use-project-actions";
import { JournalsSection } from "@/app/(app)/(root)/projects/[id]/journals-section";
import { FilesSection } from "@/app/(app)/(root)/projects/[id]/files-section";
import { LinksSection } from "@/app/(app)/(root)/projects/[id]/links-section";
import { NotesSection } from "@/app/(app)/(root)/projects/[id]/notes-section";
import { QuestionsSection } from "@/app/(app)/(root)/projects/[id]/questions-section";

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
	const [resources, setResources] =
		useState<ProjectResource[]>(initialResources);
	const [availableJournals, setAvailableJournals] =
		useState<AvailableJournal[]>(initialAvailable);

	const [addJournalOpen, setAddJournalOpen] = useState(false);
	const [journalSearch, setJournalSearch] = useState("");

	const [addLinkOpen, setAddLinkOpen] = useState(false);
	const [linkTitle, setLinkTitle] = useState("");
	const [linkUrl, setLinkUrl] = useState("");

	const [addNoteOpen, setAddNoteOpen] = useState(false);
	const [noteTitle, setNoteTitle] = useState("");
	const [noteBody, setNoteBody] = useState("");

	const [addQuestionOpen, setAddQuestionOpen] = useState(false);
	const [questionText, setQuestionText] = useState("");

	const {
		creatingJournal,
		addingJournalId,
		savingLink,
		savingNote,
		savingQuestion,
		uploadingFile,
		createJournal: performCreateJournal,
		addExistingJournal: performAddExistingJournal,
		removeJournalFromProject: performRemoveJournal,
		uploadFile: performUploadFile,
		saveLink: performSaveLink,
		saveNote: performSaveNote,
		saveQuestion: performSaveQuestion,
		deleteResource: performDeleteResource,
	} = useProjectActions(project.id, (id) => router.push(`/journals/${id}`));

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
				<HugeiconsIcon
					icon={FolderLibraryIcon}
					className="size-5 text-muted-foreground"
					strokeWidth={1.5}
				/>
				<h1 className="text-lg font-semibold tracking-tight">
					{project.title}
				</h1>
			</header>

			<div className="flex flex-1 flex-col gap-8 overflow-y-auto px-4 lg:px-6 py-6">
				<JournalsSection
					journals={journals}
					creatingJournal={creatingJournal}
					setAddJournalOpen={setAddJournalOpen}
					setJournals={setJournals}
					setAvailableJournals={setAvailableJournals}
					performCreateJournal={performCreateJournal}
					performRemoveJournal={performRemoveJournal}
				/>

				<FilesSection
					files={files}
					uploadingFile={uploadingFile}
					setResources={setResources}
					performUploadFile={performUploadFile}
					performDeleteResource={performDeleteResource}
				/>

				<LinksSection
					links={links}
					setAddLinkOpen={setAddLinkOpen}
					setResources={setResources}
					performDeleteResource={performDeleteResource}
				/>

				<NotesSection
					notes={notes}
					setAddNoteOpen={setAddNoteOpen}
					setResources={setResources}
					performDeleteResource={performDeleteResource}
				/>

				<QuestionsSection
					questions={questions}
					setAddQuestionOpen={setAddQuestionOpen}
					setResources={setResources}
					performDeleteResource={performDeleteResource}
				/>
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
										onClick={() =>
											performAddExistingJournal(j.id, (updated) => {
												setJournals((prev) => [...prev, updated]);
												setAvailableJournals((prev) =>
													prev.filter((j2) => j2.id !== j.id),
												);
												setAddJournalOpen(false);
												setJournalSearch("");
											})
										}
										disabled={addingJournalId === j.id}
										className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors hover:bg-accent disabled:opacity-50"
									>
										<HugeiconsIcon
											icon={BookOpen01Icon}
											className="size-4 shrink-0 text-muted-foreground"
											strokeWidth={1.5}
										/>
										<span className="truncate">{j.title}</span>
										{addingJournalId === j.id && (
											<span className="ml-auto text-xs text-muted-foreground">
												Adding...
											</span>
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
						<Button variant="outline" onClick={() => setAddLinkOpen(false)}>
							Cancel
						</Button>
						<Button
							onClick={() =>
								performSaveLink(linkTitle, linkUrl, (resource) => {
									setResources((prev) => [...prev, resource]);
									setAddLinkOpen(false);
									setLinkTitle("");
									setLinkUrl("");
								})
							}
							disabled={savingLink || !linkTitle.trim() || !linkUrl.trim()}
						>
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
						<Button variant="outline" onClick={() => setAddNoteOpen(false)}>
							Cancel
						</Button>
						<Button
							onClick={() =>
								performSaveNote(noteTitle, noteBody, (resource) => {
									setResources((prev) => [...prev, resource]);
									setAddNoteOpen(false);
									setNoteTitle("");
									setNoteBody("");
								})
							}
							disabled={savingNote || !noteTitle.trim()}
						>
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
						<Button variant="outline" onClick={() => setAddQuestionOpen(false)}>
							Cancel
						</Button>
						<Button
							onClick={() =>
								performSaveQuestion(questionText, (resource) => {
									setResources((prev) => [...prev, resource]);
									setAddQuestionOpen(false);
									setQuestionText("");
								})
							}
							disabled={savingQuestion || !questionText.trim()}
						>
							{savingQuestion ? "Saving..." : "Save question"}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}
