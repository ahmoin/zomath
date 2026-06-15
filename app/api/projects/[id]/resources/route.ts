import { and, eq } from "drizzle-orm";
import { headers } from "next/headers";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { ChatbotError } from "@/lib/errors";
import { project, projectResource } from "@/lib/schema";

const createResourceSchema = z.object({
	type: z.enum(["file", "link", "note", "question"]),
	title: z.string().min(1).max(500).default("Untitled"),
	url: z.string().url().nullable().optional(),
	body: z.string().max(50000).nullable().optional(),
	mimeType: z.string().nullable().optional(),
});

export async function GET(
	_request: Request,
	{ params }: { params: Promise<{ id: string }> },
) {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) return new ChatbotError("unauthorized:auth").toResponse();

	const { id } = await params;

	const proj = await db.query.project.findFirst({
		where: and(eq(project.id, id), eq(project.userId, session.user.id)),
	});
	if (!proj) return new Response("Project not found", { status: 404 });

	const resources = await db.query.projectResource.findMany({
		where: and(
			eq(projectResource.projectId, id),
			eq(projectResource.userId, session.user.id),
		),
		orderBy: (r, { desc }) => [desc(r.createdAt)],
	});

	return Response.json(resources);
}

export async function POST(
	request: Request,
	{ params }: { params: Promise<{ id: string }> },
) {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) return new ChatbotError("unauthorized:auth").toResponse();

	const { id } = await params;

	const proj = await db.query.project.findFirst({
		where: and(eq(project.id, id), eq(project.userId, session.user.id)),
	});
	if (!proj) return new Response("Project not found", { status: 404 });

	let body: z.infer<typeof createResourceSchema>;
	try {
		body = createResourceSchema.parse(await request.json());
	} catch (_) {
		return new ChatbotError("bad_request:api").toResponse();
	}

	const [created] = await db
		.insert(projectResource)
		.values({
			id: crypto.randomUUID(),
			projectId: id,
			userId: session.user.id,
			type: body.type,
			title: body.title,
			url: body.url ?? null,
			body: body.body ?? null,
			mimeType: body.mimeType ?? null,
		})
		.returning();

	return Response.json(created, { status: 201 });
}
