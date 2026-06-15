import { and, eq, isNull } from "drizzle-orm";
import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { journal, project, projectResource } from "@/lib/schema";
import type { ProjectResource } from "@/lib/types";
import { ProjectView } from "./project-view";

export default async function ProjectPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) redirect("/log-in");

	const [doc] = await db.select().from(project).where(eq(project.id, id));
	if (!doc || doc.userId !== session.user.id) notFound();

	const [journals, resources, allUserJournals] = await Promise.all([
		db.select().from(journal).where(eq(journal.projectId, id)),
		db
			.select()
			.from(projectResource)
			.where(eq(projectResource.projectId, id))
			.orderBy(projectResource.createdAt) as Promise<ProjectResource[]>,
		db
			.select({ id: journal.id, title: journal.title })
			.from(journal)
			.where(
				and(
					eq(journal.userId, session.user.id),
					isNull(journal.projectId),
				),
			),
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
					<ProjectView
						project={doc}
						journals={journals}
						resources={resources}
						availableJournals={allUserJournals}
					/>
				</SidebarInset>
			</SidebarProvider>
		</TooltipProvider>
	);
}
