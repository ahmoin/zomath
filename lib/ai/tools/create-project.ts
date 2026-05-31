import { jsonSchema, tool } from "ai";
import { db } from "@/lib/db";
import { project } from "@/lib/schema";

export const createProject = ({ userId }: { userId: string }) =>
	tool({
		description:
			"Create a new project (folder) in Zomath. A project groups journals together. Call this when the user asks to 'create a project', 'make a folder', or similar.",
		inputSchema: jsonSchema<{ title: string }>({
			type: "object",
			properties: {
				title: {
					type: "string",
					description: "Short descriptive project name",
				},
			},
			required: ["title"],
		}),
		execute: async ({ title }: { title: string }) => {
			const id = crypto.randomUUID();
			await db.insert(project).values({ id, userId, title });
			return { projectId: id, title };
		},
	});
