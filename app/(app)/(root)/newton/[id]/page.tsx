import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { AppSidebar } from "@/components/app-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { NewtonHeroSection } from "@/components/sections/newton-hero-loader";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { newtonChat } from "@/lib/schema";

export default async function NewtonChatPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) redirect("/log-in");

	const [chat] = await db
		.select()
		.from(newtonChat)
		.where(eq(newtonChat.id, id));

	if (!chat || chat.userId !== session.user.id) notFound();

	let initialMessages: unknown[] = [];
	try {
		initialMessages = JSON.parse(chat.messages);
	} catch {
		initialMessages = [];
	}

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
					<DashboardHeader name={session.user.name} />
					<div className="flex flex-1 flex-col overflow-hidden">
						<NewtonHeroSection
							isAuthed
							initialChatId={id}
							// biome-ignore lint/suspicious/noExplicitAny: persisted message shape
							initialMessages={initialMessages as any}
						/>
					</div>
				</SidebarInset>
			</SidebarProvider>
		</TooltipProvider>
	);
}
