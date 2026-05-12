import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { journal, project } from "@/lib/schema";
import { JournalView } from "./journal-view";

interface Props {
	params: Promise<{ id: string }>;
}

export default async function JournalPage({ params }: Props) {
	const { id } = await params;
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) redirect("/log-in");

	const [doc] = await db.select().from(journal).where(eq(journal.id, id));
	if (!doc || doc.userId !== session.user.id) notFound();

	const parentProject = doc.projectId
		? await db
				.select({ id: project.id, title: project.title })
				.from(project)
				.where(eq(project.id, doc.projectId))
				.then((r) => r[0] ?? null)
		: null;

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
					<JournalView journal={doc} parentProject={parentProject} />
				</SidebarInset>
			</SidebarProvider>
		</TooltipProvider>
	);
}
