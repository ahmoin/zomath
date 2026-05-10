import { and, eq } from "drizzle-orm";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { journal } from "@/lib/schema";

export async function DELETE(
	_req: Request,
	{ params }: { params: Promise<{ id: string }> },
) {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) return new Response("Unauthorized", { status: 401 });

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
	req: Request,
	{ params }: { params: Promise<{ id: string }> },
) {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) return new Response("Unauthorized", { status: 401 });

	const { id } = await params;
	const body = (await req.json()) as { title?: string; content?: string };
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
		return new Response("Journal not", { status: 404 });
	}

	return Response.json(updated);
}
