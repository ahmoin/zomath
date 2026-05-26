import { put } from "@vercel/blob";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function POST(req: Request) {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session)
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

	const form = await req.formData();
	const file = form.get("file") as File | null;
	if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

	const blob = await put(
		`uploads/${session.user.id}/${Date.now()}-${file.name}`,
		file,
		{
			access: "private",
		},
	);

	return NextResponse.json({ url: blob.url, name: file.name });
}
