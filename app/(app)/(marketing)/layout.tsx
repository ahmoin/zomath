import { headers } from "next/headers";
import type { ReactNode } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { auth } from "@/lib/auth";

export default async function MarketingLayout({
	children,
}: {
	children: ReactNode;
}) {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

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
						<main>{children}</main>
					</SidebarInset>
				</SidebarProvider>
			</TooltipProvider>
		);
	}

	return (
		<>
			<SiteHeader />
			<main>{children}</main>
			<SiteFooter />
		</>
	);
}
