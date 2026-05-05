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

export default async function Page() {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (session) {
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
								name: session.user.name,
								email: session.user.email,
								avatar: session.user.image,
							}}
						/>
						<SidebarInset>
							<DashboardHeader />
							<div className="flex flex-1 flex-col">
								<div className="@container/main flex flex-1 flex-col gap-2">
									<div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
										<SectionCards />
										<div className="px-4 lg:px-6">
											<ChartAreaInteractive />
										</div>
										<DataTable
											data={[
												{
													id: 1,
													problem: "Solve for x: 3x + 5 = 20",
													subject: "Algebra",
													difficulty: "Easy",
													status: "Solved",
													score: 100,
													date: "2023-10-01",
												},
												{
													id: 2,
													problem: "Find the derivative of x^2 * sin(x)",
													subject: "Calculus",
													difficulty: "Medium",
													status: "Solved",
													score: 85,
													date: "2023-10-02",
												},
												{
													id: 3,
													problem:
														"Calculate the area of a circle with radius 5",
													subject: "Geometry",
													difficulty: "Easy",
													status: "Solved",
													score: 100,
													date: "2023-10-03",
												},
												{
													id: 4,
													problem: "Evaluate the integral of e^x from 0 to 1",
													subject: "Calculus",
													difficulty: "Hard",
													status: "In Progress",
													score: 40,
													date: "2023-10-04",
												},
												{
													id: 5,
													problem: "Factor the quadratic equation x^2 - 5x + 6",
													subject: "Algebra",
													difficulty: "Easy",
													status: "Solved",
													score: 95,
													date: "2023-10-05",
												},
												{
													id: 6,
													problem: "Find the standard deviation of the dataset",
													subject: "Statistics",
													difficulty: "Medium",
													status: "Solved",
													score: 88,
													date: "2023-10-06",
												},
												{
													id: 7,
													problem:
														"Prove that triangles ABC and DEF are congruent",
													subject: "Geometry",
													difficulty: "Hard",
													status: "In Progress",
													score: 60,
													date: "2023-10-07",
												},
												{
													id: 8,
													problem:
														"Solve the system of equations: x+y=10, x-y=2",
													subject: "Algebra",
													difficulty: "Easy",
													status: "Solved",
													score: 100,
													date: "2023-10-08",
												},
												{
													id: 9,
													problem:
														"Find the limit as x approaches 0 of sin(x)/x",
													subject: "Calculus",
													difficulty: "Medium",
													status: "Solved",
													score: 90,
													date: "2023-10-09",
												},
												{
													id: 10,
													problem: "Determine the probability of rolling a 6",
													subject: "Statistics",
													difficulty: "Easy",
													status: "Solved",
													score: 100,
													date: "2023-10-10",
												},
												{
													id: 11,
													problem: "Calculate the volume of a sphere",
													subject: "Geometry",
													difficulty: "Medium",
													status: "Solved",
													score: 85,
													date: "2023-10-11",
												},
												{
													id: 12,
													problem: "Apply the chain rule to f(g(x))",
													subject: "Calculus",
													difficulty: "Hard",
													status: "In Progress",
													score: 30,
													date: "2023-10-12",
												},
												{
													id: 13,
													problem: "Simplify the rational expression",
													subject: "Algebra",
													difficulty: "Medium",
													status: "Solved",
													score: 75,
													date: "2023-10-13",
												},
												{
													id: 14,
													problem:
														"Find the median of the given frequency distribution",
													subject: "Statistics",
													difficulty: "Medium",
													status: "Solved",
													score: 92,
													date: "2023-10-14",
												},
												{
													id: 15,
													problem:
														"Use Pythagorean theorem to find the hypotenuse",
													subject: "Geometry",
													difficulty: "Easy",
													status: "Solved",
													score: 100,
													date: "2023-10-15",
												},
												{
													id: 16,
													problem: "Calculate the cross product of two vectors",
													subject: "Linear Algebra",
													difficulty: "Hard",
													status: "Solved",
													score: 80,
													date: "2023-10-16",
												},
												{
													id: 17,
													problem:
														"Solve the logarithmic equation log(x) + log(2) = 1",
													subject: "Algebra",
													difficulty: "Medium",
													status: "In Progress",
													score: 50,
													date: "2023-10-17",
												},
												{
													id: 18,
													problem: "Find the Taylor series expansion for e^x",
													subject: "Calculus",
													difficulty: "Hard",
													status: "Solved",
													score: 95,
													date: "2023-10-18",
												},
												{
													id: 19,
													problem: "Determine the z-score for the given value",
													subject: "Statistics",
													difficulty: "Medium",
													status: "Solved",
													score: 85,
													date: "2023-10-19",
												},
												{
													id: 20,
													problem:
														"Find the equation of a line passing through two points",
													subject: "Algebra",
													difficulty: "Easy",
													status: "Solved",
													score: 100,
													date: "2023-10-20",
												},
												{
													id: 21,
													problem:
														"Compute the definite integral using substitution",
													subject: "Calculus",
													difficulty: "Medium",
													status: "In Progress",
													score: 65,
													date: "2023-10-21",
												},
												{
													id: 22,
													problem: "Find the surface area of a cylinder",
													subject: "Geometry",
													difficulty: "Medium",
													status: "Solved",
													score: 90,
													date: "2023-10-22",
												},
												{
													id: 23,
													problem:
														"Solve absolute value inequality |2x - 3| < 5",
													subject: "Algebra",
													difficulty: "Medium",
													status: "Solved",
													score: 88,
													date: "2023-10-23",
												},
												{
													id: 24,
													problem:
														"Find the expected value of the random variable",
													subject: "Statistics",
													difficulty: "Hard",
													status: "In Progress",
													score: 45,
													date: "2023-10-24",
												},
												{
													id: 25,
													problem:
														"Identify the asymptotes of the rational function",
													subject: "Algebra",
													difficulty: "Medium",
													status: "Solved",
													score: 82,
													date: "2023-10-25",
												},
												{
													id: 26,
													problem: "Calculate the area between two curves",
													subject: "Calculus",
													difficulty: "Hard",
													status: "Solved",
													score: 91,
													date: "2023-10-26",
												},
												{
													id: 27,
													problem: "Find the roots of the cubic polynomial",
													subject: "Algebra",
													difficulty: "Hard",
													status: "In Progress",
													score: 55,
													date: "2023-10-27",
												},
												{
													id: 28,
													problem:
														"Determine if the series converges or diverges",
													subject: "Calculus",
													difficulty: "Hard",
													status: "Solved",
													score: 78,
													date: "2023-10-28",
												},
												{
													id: 29,
													problem: "Perform matrix multiplication",
													subject: "Linear Algebra",
													difficulty: "Medium",
													status: "Solved",
													score: 100,
													date: "2023-10-29",
												},
												{
													id: 30,
													problem:
														"Solve the word problem using linear equations",
													subject: "Algebra",
													difficulty: "Medium",
													status: "Solved",
													score: 85,
													date: "2023-10-30",
												},
												{
													id: 31,
													problem: "Calculate the binomial probability",
													subject: "Statistics",
													difficulty: "Medium",
													status: "In Progress",
													score: 70,
													date: "2023-10-31",
												},
												{
													id: 32,
													problem:
														"Find the derivative using the quotient rule",
													subject: "Calculus",
													difficulty: "Medium",
													status: "Solved",
													score: 90,
													date: "2023-11-01",
												},
												{
													id: 33,
													problem: "Determine the vertex of the parabola",
													subject: "Algebra",
													difficulty: "Easy",
													status: "Solved",
													score: 100,
													date: "2023-11-02",
												},
												{
													id: 34,
													problem: "Find the missing angle in the triangle",
													subject: "Geometry",
													difficulty: "Easy",
													status: "Solved",
													score: 100,
													date: "2023-11-03",
												},
												{
													id: 35,
													problem: "Evaluate the partial derivative",
													subject: "Calculus",
													difficulty: "Hard",
													status: "In Progress",
													score: 40,
													date: "2023-11-04",
												},
												{
													id: 36,
													problem: "Solve the exponential equation 2^x = 32",
													subject: "Algebra",
													difficulty: "Easy",
													status: "Solved",
													score: 100,
													date: "2023-11-05",
												},
												{
													id: 37,
													problem: "Calculate the correlation coefficient",
													subject: "Statistics",
													difficulty: "Hard",
													status: "Solved",
													score: 88,
													date: "2023-11-06",
												},
												{
													id: 38,
													problem: "Find the perimeter of the composite figure",
													subject: "Geometry",
													difficulty: "Medium",
													status: "Solved",
													score: 92,
													date: "2023-11-07",
												},
												{
													id: 39,
													problem:
														"Solve the differential equation dy/dx = x/y",
													subject: "Calculus",
													difficulty: "Hard",
													status: "In Progress",
													score: 50,
													date: "2023-11-08",
												},
												{
													id: 40,
													problem: "Graph the piecewise function",
													subject: "Algebra",
													difficulty: "Medium",
													status: "Solved",
													score: 85,
													date: "2023-11-09",
												},
												{
													id: 41,
													problem: "Find the confidence interval for the mean",
													subject: "Statistics",
													difficulty: "Medium",
													status: "Solved",
													score: 80,
													date: "2023-11-10",
												},
												{
													id: 42,
													problem: "Determine the eigenvalues of the matrix",
													subject: "Linear Algebra",
													difficulty: "Hard",
													status: "In Progress",
													score: 60,
													date: "2023-11-11",
												},
												{
													id: 43,
													problem: "Solve the radical equation",
													subject: "Algebra",
													difficulty: "Medium",
													status: "Solved",
													score: 90,
													date: "2023-11-12",
												},
												{
													id: 44,
													problem: "Evaluate the double integral",
													subject: "Calculus",
													difficulty: "Hard",
													status: "Solved",
													score: 75,
													date: "2023-11-13",
												},
												{
													id: 45,
													problem:
														"Find the volume using method of cylindrical shells",
													subject: "Calculus",
													difficulty: "Hard",
													status: "In Progress",
													score: 30,
													date: "2023-11-14",
												},
												{
													id: 46,
													problem:
														"Solve the trigonometric equation sin(x) = 0.5",
													subject: "Trigonometry",
													difficulty: "Medium",
													status: "Solved",
													score: 100,
													date: "2023-11-15",
												},
												{
													id: 47,
													problem: "Prove the trigonometric identity",
													subject: "Trigonometry",
													difficulty: "Hard",
													status: "In Progress",
													score: 55,
													date: "2023-11-16",
												},
												{
													id: 48,
													problem: "Find the arc length of the curve",
													subject: "Calculus",
													difficulty: "Hard",
													status: "Solved",
													score: 82,
													date: "2023-11-17",
												},
												{
													id: 49,
													problem: "Simplify the complex fraction",
													subject: "Algebra",
													difficulty: "Medium",
													status: "Solved",
													score: 88,
													date: "2023-11-18",
												},
												{
													id: 50,
													problem: "Perform hypothesis testing for the sample",
													subject: "Statistics",
													difficulty: "Hard",
													status: "In Progress",
													score: 65,
													date: "2023-11-19",
												},
												{
													id: 51,
													problem: "Find the area of the sector of a circle",
													subject: "Geometry",
													difficulty: "Medium",
													status: "Solved",
													score: 95,
													date: "2023-11-20",
												},
												{
													id: 52,
													problem: "Solve the initial value problem",
													subject: "Calculus",
													difficulty: "Hard",
													status: "Solved",
													score: 90,
													date: "2023-11-21",
												},
												{
													id: 53,
													problem: "Expand the binomial using the theorem",
													subject: "Algebra",
													difficulty: "Medium",
													status: "Solved",
													score: 100,
													date: "2023-11-22",
												},
												{
													id: 54,
													problem: "Determine the inverse of the function",
													subject: "Algebra",
													difficulty: "Medium",
													status: "In Progress",
													score: 70,
													date: "2023-11-23",
												},
												{
													id: 55,
													problem: "Find the center of mass of the lamina",
													subject: "Calculus",
													difficulty: "Hard",
													status: "In Progress",
													score: 40,
													date: "2023-11-24",
												},
												{
													id: 56,
													problem: "Solve the system of inequalities",
													subject: "Algebra",
													difficulty: "Medium",
													status: "Solved",
													score: 85,
													date: "2023-11-25",
												},
												{
													id: 57,
													problem: "Calculate the conditional probability",
													subject: "Statistics",
													difficulty: "Medium",
													status: "Solved",
													score: 92,
													date: "2023-11-26",
												},
												{
													id: 58,
													problem: "Use L'Hôpital's rule to evaluate the limit",
													subject: "Calculus",
													difficulty: "Medium",
													status: "Solved",
													score: 96,
													date: "2023-11-27",
												},
												{
													id: 59,
													problem: "Find the determinant of the 3x3 matrix",
													subject: "Linear Algebra",
													difficulty: "Medium",
													status: "Solved",
													score: 100,
													date: "2023-11-28",
												},
												{
													id: 60,
													problem: "Solve the rational equation",
													subject: "Algebra",
													difficulty: "Medium",
													status: "In Progress",
													score: 60,
													date: "2023-11-29",
												},
												{
													id: 61,
													problem: "Find the domain and range of the function",
													subject: "Algebra",
													difficulty: "Easy",
													status: "Solved",
													score: 100,
													date: "2023-11-30",
												},
												{
													id: 62,
													problem: "Evaluate the line integral",
													subject: "Calculus",
													difficulty: "Hard",
													status: "In Progress",
													score: 45,
													date: "2023-12-01",
												},
												{
													id: 63,
													problem: "Find the missing side using Law of Cosines",
													subject: "Trigonometry",
													difficulty: "Medium",
													status: "Solved",
													score: 90,
													date: "2023-12-02",
												},
												{
													id: 64,
													problem: "Determine the margin of error",
													subject: "Statistics",
													difficulty: "Medium",
													status: "Solved",
													score: 88,
													date: "2023-12-03",
												},
												{
													id: 65,
													problem: "Solve the exact differential equation",
													subject: "Calculus",
													difficulty: "Hard",
													status: "Solved",
													score: 85,
													date: "2023-12-04",
												},
												{
													id: 66,
													problem: "Simplify the radical expression",
													subject: "Algebra",
													difficulty: "Easy",
													status: "Solved",
													score: 100,
													date: "2023-12-05",
												},
												{
													id: 67,
													problem: "Find the angle between two vectors",
													subject: "Linear Algebra",
													difficulty: "Medium",
													status: "In Progress",
													score: 75,
													date: "2023-12-06",
												},
												{
													id: 68,
													problem: "Graph the polar equation",
													subject: "Calculus",
													difficulty: "Medium",
													status: "Solved",
													score: 92,
													date: "2023-12-07",
												},
											]}
										/>
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
