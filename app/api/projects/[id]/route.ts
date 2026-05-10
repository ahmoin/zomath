import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { project } from "@/lib/schema";

export async function PATCH(
	request: Request,
	{ params }: { params: Promise<{ id: string }> },
) {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) return new Response("Unauthorized", { status: 401 });

	const { id } = await params;
	const body = (await request.json()) as { title?: string };

	const [updated] = await db
		.update(project)
		.set({ title: body.title })
		.where(eq(project.id, id))
		.returning();

	return Response.json(updated);
}

export async function DELETE(
	_request: Request,
	{ params }: { params: Promise<{ id: string }> },
) {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) return new Response("Unauthorized", { status: 401 });

	const { id } = await params;
	await db.delete(project).where(eq(project.id, id));

	return new Response(null, { status: 204 });
}
