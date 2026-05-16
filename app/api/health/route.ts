import { sql } from "drizzle-orm";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
	try {
		await db.execute(sql`SELECT 1`);
		return NextResponse.json({ status: "ok" });
	} catch {
		return NextResponse.json(
			{ status: "down", reason: "Database unreachable" },
			{ status: 503 },
		);
	}
}
