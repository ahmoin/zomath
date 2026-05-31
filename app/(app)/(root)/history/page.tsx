import { desc, eq } from "drizzle-orm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { HistoryView } from "@/app/(app)/(root)/history/history-view";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { journal, newtonChat, practice, project } from "@/lib/schema";

export default async function HistoryPage() {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) redirect("/log-in");

	const userId = session.user.id;

	const [chats, journals, practices, projects] = await Promise.all([
		db
			.select({
				id: newtonChat.id,
				title: newtonChat.title,
				updatedAt: newtonChat.updatedAt,
			})
			.from(newtonChat)
			.where(eq(newtonChat.userId, userId))
			.orderBy(desc(newtonChat.updatedAt)),
		db
			.select({
				id: journal.id,
				title: journal.title,
				updatedAt: journal.updatedAt,
			})
			.from(journal)
			.where(eq(journal.userId, userId))
			.orderBy(desc(journal.updatedAt)),
		db
			.select({
				id: practice.id,
				title: practice.title,
				updatedAt: practice.updatedAt,
			})
			.from(practice)
			.where(eq(practice.userId, userId))
			.orderBy(desc(practice.updatedAt)),
		db
			.select({
				id: project.id,
				title: project.title,
				updatedAt: project.updatedAt,
			})
			.from(project)
			.where(eq(project.userId, userId))
			.orderBy(desc(project.updatedAt)),
	]);

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
					<div className="flex h-full flex-col overflow-hidden">
						<HistoryView
							chats={chats}
							journals={journals}
							practices={practices}
							projects={projects}
						/>
					</div>
				</SidebarInset>
			</SidebarProvider>
		</TooltipProvider>
	);
}
