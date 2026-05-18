import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { AppSidebar } from "@/components/app-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { HeaderSlotProvider } from "@/components/dashboard-header-context";
import { PracticeHeroSection } from "@/components/sections/practice-hero";
import { templates } from "@/components/sections/practice-hero/data";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { auth } from "@/lib/auth";

export default async function PracticeFormatPage({
	params,
}: {
	params: Promise<{ format: string }>;
}) {
	const { format } = await params;
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session) redirect("/practice");

	const template = templates.find((t) => t.id === format);
	if (!template) redirect("/practice");

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
							<PracticeHeroSection name={session.user.name} formatId={format} />
						</div>
					</HeaderSlotProvider>
				</SidebarInset>
			</SidebarProvider>
		</TooltipProvider>
	);
}
