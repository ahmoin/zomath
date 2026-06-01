import { jsonSchema, tool } from "ai";
import { markdownToLexicalJson } from "@/lib/ai/lexical";
import { db } from "@/lib/db";
import { journal } from "@/lib/schema";

export const createJournal = ({ userId }: { userId: string }) =>
	tool({
		description:
			"Create a new study notes journal document for the user in Zomath. A journal is a markdown document for study notes, summaries, explanations, or any written content, not a diary. Call this whenever the user asks to 'make a journal', 'create notes', 'write a document', or similar. Pass projectId to immediately associate the journal with a project.",
		inputSchema: jsonSchema<{
			title: string;
			content: string;
			projectId?: string;
		}>({
			type: "object",
			properties: {
				title: {
					type: "string",
					description: "A short descriptive title for the journal",
				},
				content: {
					type: "string",
					description: "The full markdown content of the journal",
				},
				projectId: {
					type: "string",
					description: "Optional project ID to add this journal to immediately",
				},
			},
			required: ["title", "content"],
		}),
		execute: async ({
			title,
			content,
			projectId,
		}: {
			title: string;
			content: string;
			projectId?: string;
		}) => {
			const id = crypto.randomUUID();
			await db.insert(journal).values({
				id,
				userId,
				title,
				content: markdownToLexicalJson(content),
				projectId: projectId ?? null,
			});
			return { journalId: id, title };
		},
	});
