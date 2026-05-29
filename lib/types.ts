import type { UIMessage } from "ai";
import { z } from "zod";

export const messageMetadataSchema = z.object({
	createdAt: z.string(),
});

export type MessageMetadata = z.infer<typeof messageMetadataSchema>;

export type ChatTools = {};

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
	| "match-up";

export interface MatchUpPair {
	keyword: string;
	definition: string;
}

export interface MatchUpData {
	title: string;
	intro: string;
	pairs: MatchUpPair[];
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
