import { and, eq } from "drizzle-orm";
import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { PracticeSavedView } from "@/app/(app)/(root)/practice/saved/[id]/practice-saved-view";
import { AppSidebar } from "@/components/app-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { HeaderSlotProvider } from "@/components/dashboard-header-context";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { practice } from "@/lib/schema";
import type { QuizData } from "@/lib/types";

export default async function PracticeSavedPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) redirect("/login");

	const row = await db
		.select()
		.from(practice)
		.where(and(eq(practice.id, id), eq(practice.userId, session.user.id)))
		.limit(1)
		.then((r) => r[0]);

	if (!row) notFound();

	const questions = JSON.parse(row.questions);
	const quiz: QuizData = {
		title: row.title,
		intro: "",
		questions,
	};

	return (
		<TooltipProvider>
			<SidebarProvider
				style={
					{
						"--sidebar-width": "calc(var(--spacing) * 72)",
						"--header-height": "calc(var(--spacing) * 12)",
					} as React.CSSProperties
				}
			>
				<AppSidebar
					variant="inset"
					user={{
						name: session.user.name,
						email: session.user.email,
						avatar: session.user.image,
					}}
				/>
				<SidebarInset>
					<HeaderSlotProvider>
						<DashboardHeader name={session.user.name} />
						<div className="flex flex-1 flex-col overflow-hidden">
							<PracticeSavedView quiz={quiz} topic={row.topic} />
						</div>
					</HeaderSlotProvider>
				</SidebarInset>
			</SidebarProvider>
		</TooltipProvider>
	);
}
