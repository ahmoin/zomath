import { count, eq } from "drizzle-orm";
import { headers } from "next/headers";
import { AppSidebar } from "@/components/app-sidebar";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DashboardHeader } from "@/components/dashboard-header";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { AudienceSection } from "@/components/sections/audience";
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
import { session as sessionTable } from "@/lib/schema";

export default async function Page() {
	const authSession = await auth.api.getSession({
		headers: await headers(),
	});

	if (authSession) {
		const [{ value: sessionCount }] = await db
			.select({ value: count() })
			.from(sessionTable)
			.where(eq(sessionTable.userId, authSession.user.id));

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
										<SectionCards
											memberSince={authSession.user.createdAt}
											sessionCount={sessionCount}
										/>
										<div className="px-4 lg:px-6">
											<ChartAreaInteractive />
										</div>
										<DataTable data={[]} />
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
