import { jsonSchema, tool } from "ai";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { project } from "@/lib/schema";

export const updateProject = (_: { userId: string }) =>
	tool({
		description:
			"Update the title of an existing project. Use this when the user asks to rename or modify a project. Call listProjects first to find the project ID if you don't have it.",
		inputSchema: jsonSchema<{
			projectId: string;
			title: string;
		}>({
			type: "object",
			properties: {
				projectId: {
					type: "string",
					description: "The ID of the project to update",
				},
				title: {
					type: "string",
					description: "The new project title",
				},
			},
			required: ["projectId", "title"],
		}),
		execute: async ({
			projectId,
			title,
		}: {
			projectId: string;
			title: string;
		}) => {
			const existing = await db
				.select({ id: project.id })
				.from(project)
				.where(eq(project.id, projectId))
				.then((r) => r[0] ?? null);
			if (!existing) return { projectId, title, updated: false };
			await db.update(project).set({ title }).where(eq(project.id, projectId));
			return { projectId, title, updated: true };
		},
	});
