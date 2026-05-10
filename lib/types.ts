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

export type HistoryMessage = { role: "user" | "assistant"; text: string };

export type Attachment = {
	name: string;
	url: string;
	contentType: string;
};
