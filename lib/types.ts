import type { InferUITool, UIMessage } from "ai";
import { z } from "zod";
import type { addJournalToProject } from "@/lib/ai/tools/add-journal-to-project";
import type { createJournal } from "@/lib/ai/tools/create-journal";
import type { createPractice } from "@/lib/ai/tools/create-practice";
import type { createProject } from "@/lib/ai/tools/create-project";
import type { listJournals } from "@/lib/ai/tools/list-journals";
import type { listProjects } from "@/lib/ai/tools/list-projects";
import type { readJournal } from "@/lib/ai/tools/read-journal";
import type { readProject } from "@/lib/ai/tools/read-project";
import type { searchWeb } from "@/lib/ai/tools/search-web";
import type { updateJournal } from "@/lib/ai/tools/update-journal";

export const messageMetadataSchema = z.object({
	createdAt: z.string(),
});

export type MessageMetadata = z.infer<typeof messageMetadataSchema>;

export type ChatTools = {
	createJournal: InferUITool<ReturnType<typeof createJournal>>;
	updateJournal: InferUITool<ReturnType<typeof updateJournal>>;
	createPractice: InferUITool<ReturnType<typeof createPractice>>;
	createProject: InferUITool<ReturnType<typeof createProject>>;
	addJournalToProject: InferUITool<ReturnType<typeof addJournalToProject>>;
	listJournals: InferUITool<ReturnType<typeof listJournals>>;
	listProjects: InferUITool<ReturnType<typeof listProjects>>;
	readJournal: InferUITool<ReturnType<typeof readJournal>>;
	readProject: InferUITool<ReturnType<typeof readProject>>;
	searchWeb: InferUITool<ReturnType<typeof searchWeb>>;
};

export type CustomUIDataTypes = {
	textDelta: string;
	imageDelta: string;
	sheetDelta: string;
	codeDelta: string;
	appendMessage: string;
	id: string;
	title: string;
	clear: null;
	finish: null;
	"chat-title": string;
};

export type ChatMessage = UIMessage<
	MessageMetadata,
	CustomUIDataTypes,
	ChatTools
>;

export interface QuizOption {
	label: string;
	text: string;
	correct: boolean;
	explanation: string;
}

export interface QuizQuestion {
	question: string;
	latex?: string;
	options: QuizOption[];
	hint: string;
}

export interface QuizData {
	title: string;
	intro: string;
	questions: QuizQuestion[];
}

export type QuestionState = "unanswered" | "correct" | "incorrect";
export type PracticePhase =
	| "idle"
	| "topic-select"
	| "loading"
	| "quiz"
	| "match-up"
	| "flash-cards";

export interface MatchUpPair {
	keyword: string;
	definition: string;
}

export interface MatchUpData {
	title: string;
	intro: string;
	pairs: MatchUpPair[];
}

export interface FlashCard {
	front: string;
	back: string;
	latex?: string;
}

export interface FlashCardData {
	title: string;
	intro: string;
	cards: FlashCard[];
}

export interface Project {
	id: string;
	title: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface Journal {
	id: string;
	title: string;
	content: string;
	projectId: string | null;
	createdAt: Date;
	updatedAt: Date;
}

export type ProjectResourceType = "file" | "link" | "note" | "question";

export interface ProjectResource {
	id: string;
	projectId: string;
	userId: string;
	type: ProjectResourceType;
	title: string;
	url: string | null;
	body: string | null;
	mimeType: string | null;
	createdAt: Date;
	updatedAt: Date;
}

export type ViewMode = "grid" | "list";

export type SortMode =
	| "edited-newest"
	| "edited-oldest"
	| "created-newest"
	| "created-oldest"
	| "alpha-az"
	| "alpha-za";

export type Attachment = {
	name: string;
	url: string;
	contentType: string;
};

export type HistoryItem = {
	id: string;
	title: string;
	updatedAt: Date;
	type: "chat" | "journal" | "practice" | "project";
};

export type RecentItem = {
	id: string;
	title: string;
	updatedAt: Date;
	type: "chat" | "journal" | "practice" | "project";
	href: string;
};

export type LexicalJsonNode = {
	type: string;
	text?: string;
	version?: number;
	children?: LexicalJsonNode[];
	[key: string]: unknown;
};

export type JournalUploadedFile = { name: string; url: string };

export type JournalSource = { number: string; title: string; url: string };

export type JournalMessage = {
	role: "user" | "assistant";
	text: string;
	sources?: JournalSource[];
};

export type NewtonMode = "text" | "voice";

export type NewtonFilePart = { mediaType: string; name: string; data: string };

export type NewtonMessage = {
	role: "user" | "assistant";
	content: string;
	files?: NewtonFilePart[];
	reasoning?: string;
	journals?: { id: string; title: string; updated?: boolean }[];
	practices?: { id: string; title: string }[];
	projects?: { id: string; title: string }[];
};

export type NewtonSpeechData = {
	audio: { uint8ArrayData: Record<number, number>; mediaType: string };
	segments: { text: string; startSecond: number; endSecond: number }[];
};

export type SuggestionBlockType =
	| "h1"
	| "h2"
	| "h3"
	| "paragraph"
	| "bullet"
	| "numbered"
	| "blockquote";

export type SuggestionBlock = {
	id: string;
	raw: string;
	type: SuggestionBlockType;
	lines: string[];
};
