import { jsonSchema, tool } from "ai";
import { and, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { journal } from "@/lib/schema";

export const addJournalToProject = ({ userId }: { userId: string }) =>
	tool({
		description:
			"Add an existing journal to an existing project by setting its projectId. Use this after createProject or when the user asks to move a journal into a project.",
		inputSchema: jsonSchema<{ journalId: string; projectId: string }>({
			type: "object",
			properties: {
				journalId: { type: "string", description: "The journal ID to add" },
				projectId: {
					type: "string",
					description: "The project ID to add it to",
				},
			},
			required: ["journalId", "projectId"],
		}),
		execute: async ({
			journalId,
			projectId,
		}: {
			journalId: string;
			projectId: string;
		}) => {
			await db
				.update(journal)
				.set({ projectId })
				.where(and(eq(journal.id, journalId), eq(journal.userId, userId)));
			return { ok: true };
		},
	});
