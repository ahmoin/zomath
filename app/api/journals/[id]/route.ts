import { and, eq } from "drizzle-orm";
import { headers } from "next/headers";
import { updateJournalSchema } from "@/app/api/journals/schema";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { ChatbotError } from "@/lib/errors";
import { journal } from "@/lib/schema";

export async function DELETE(
	_request: Request,
	{ params }: { params: Promise<{ id: string }> },
) {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) return new ChatbotError("unauthorized:auth").toResponse();

	const { id } = await params;

	const deletedRows = await db
		.delete(journal)
		.where(and(eq(journal.id, id), eq(journal.userId, session.user.id)))
		.returning();

	if (deletedRows.length === 0) {
		return new Response("Journal not found", { status: 404 });
	}

	return new Response(null, { status: 204 });
}

export async function PATCH(
	request: Request,
	{ params }: { params: Promise<{ id: string }> },
) {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) return new ChatbotError("unauthorized:auth").toResponse();

	const { id } = await params;

	let body: { title?: string; content?: string };
	try {
		body = updateJournalSchema.parse(await request.json());
	} catch (_) {
		return new ChatbotError("bad_request:api").toResponse();
	}

	const [updated] = await db
		.update(journal)
		.set({
			title: body.title,
			content: body.content,
			updatedAt: new Date(),
		})
		.where(and(eq(journal.id, id), eq(journal.userId, session.user.id)))
		.returning();

	if (!updated) {
		return new Response("Journal not found", { status: 404 });
	}

	return Response.json(updated);
}
