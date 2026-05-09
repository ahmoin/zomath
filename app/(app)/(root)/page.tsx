import { desc, eq } from "drizzle-orm";
import { headers } from "next/headers";
import { AppSidebar } from "@/components/app-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { AudienceSection } from "@/components/sections/audience";
import { DashboardLibrary } from "@/components/sections/dashboard-library";
import { FeaturesSection } from "@/components/sections/features";
import { HeroSection } from "@/components/sections/hero";
import { StackSection } from "@/components/sections/stack";
import { TestimonialSection } from "@/components/sections/testimonial";
import { WhySection } from "@/components/sections/why";
import { SiteFooter } from "@/components/site-footer";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { journal, project } from "@/lib/schema";

export default async function Page() {
	const authSession = await auth.api.getSession({
		headers: await headers(),
	});

	if (authSession) {
		const [projects, journals] = await Promise.all([
			db
				.select()
				.from(project)
				.where(eq(project.userId, authSession.user.id))
				.orderBy(desc(project.updatedAt)),
			db
				.select()
				.from(journal)
				.where(eq(journal.userId, authSession.user.id))
				.orderBy(desc(journal.updatedAt)),
		]);

		return (
			<>
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
								name: authSession.user.name,
								email: authSession.user.email,
								avatar: authSession.user.image,
							}}
						/>
						<SidebarInset>
							<DashboardHeader name={authSession.user.name} />
							<div className="flex flex-1 flex-col">
								<div className="@container/main flex flex-1 flex-col gap-2">
									<div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
										<DashboardLibrary projects={projects} journals={journals} />
									</div>
								</div>
							</div>
						</SidebarInset>
					</SidebarProvider>
				</TooltipProvider>
			</>
		);
	}

	return (
		<div className="flex min-h-svh flex-col">
			<HeroSection />
			<FeaturesSection />
			<WhySection />
			<TestimonialSection
				quote="I've never understood math this deeply. Newton explains the why behind every step, not just the answer."
				name="Pierre"
				role="High school junior"
			/>
			<AudienceSection />
			<StackSection />
			<TestimonialSection
				quote="Newton noticed I kept making the same algebra mistake before I even realized it. Now I catch myself every time. It's like having a tutor who actually pays attention."
				name="Alex"
				role="High school sophomore"
			/>
			<SiteFooter />
		</div>
	);
}
