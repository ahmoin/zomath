import { and, eq } from "drizzle-orm";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { ChatbotError } from "@/lib/errors";
import { projectResource } from "@/lib/schema";

export async function DELETE(
	_request: Request,
	{ params }: { params: Promise<{ id: string; resourceId: string }> },
) {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) return new ChatbotError("unauthorized:auth").toResponse();

	const { resourceId } = await params;

	const deleted = await db
		.delete(projectResource)
		.where(
			and(
				eq(projectResource.id, resourceId),
				eq(projectResource.userId, session.user.id),
			),
		)
		.returning();

	if (deleted.length === 0) {
		return new Response("Resource not found", { status: 404 });
	}

	return new Response(null, { status: 204 });
}
