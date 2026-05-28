import { headers } from "next/headers";
import { AppSidebar } from "@/components/app-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { NewtonHeroSection } from "@/components/sections/newton-hero-loader";
import { NewtonMarketingSection } from "@/components/sections/newton-marketing";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { auth } from "@/lib/auth";

export default async function NewtonPage() {
	const session = await auth.api.getSession({ headers: await headers() });

	if (session) {
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
							<NewtonHeroSection isAuthed />
						</div>
					</SidebarInset>
				</SidebarProvider>
			</TooltipProvider>
		);
	}

	return <NewtonMarketingSection />;
}
