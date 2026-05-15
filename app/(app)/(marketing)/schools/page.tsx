"use client";

import {
	Analytics01Icon,
	ArrowRight02Icon,
	Book02Icon,
	BrainIcon,
	Building03Icon,
	Call02Icon,
	Camera01Icon,
	ChartLineData02Icon,
	CheckmarkCircle02Icon,
	Clock01Icon,
	GraduationScrollIcon,
	Location01Icon,
	Mail02Icon,
	PlayCircleIcon,
	PuzzleIcon,
	ShieldKeyIcon,
	StarIcon,
	Target03Icon,
	TaskDaily01Icon,
	UserMultipleIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { FiveStars } from "@/components/five-stars";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const stats = [
	{ value: "2.3x", label: "Faster concept mastery" },
	{ value: "85%", label: "Students report deeper understanding" },
	{ value: "12 hrs", label: "Teacher prep time saved weekly" },
	{ value: "500+", label: "Schools across 38 states" },
];

const features = [
	{
		icon: UserMultipleIcon,
		title: "Differentiated Learning at Scale",
		description:
			"Newton adapts to each student's pace and understanding in real time. Advanced students get challenged while struggling learners get the foundational support they need, all from the same classroom.",
	},
	{
		icon: ChartLineData02Icon,
		title: "Real-Time Progress Analytics",
		description:
			"Track class-wide trends and individual progress with detailed dashboards. Spot gaps early, identify patterns across sections, and celebrate breakthroughs the moment they happen.",
	},
	{
		icon: ShieldKeyIcon,
		title: "Curriculum Aligned from Day One",
		description:
			"Content aligned with Common Core, state standards, and popular textbooks including Big Ideas Math, Eureka Math, and Illustrative Mathematics. Zomath integrates with your curriculum, not against it.",
	},
	{
		icon: Clock01Icon,
		title: "Save Hours Every Week",
		description:
			"Generate targeted practice sets, quizzes, and homework in minutes. Newton handles the repetitive explanation and differentiation so you can focus on the parts of teaching that matter most.",
	},
];

const studentFeatures = [
	{
		icon: Camera01Icon,
		title: "Solve",
		description:
			"Students snap a photo of any problem and Newton walks them through it step by step, asking guiding questions instead of giving away answers.",
	},
	{
		icon: BrainIcon,
		title: "Ask Newton",
		description:
			"A conversational AI tutor that remembers where each student struggled last time. Newton explains concepts in multiple ways until something clicks.",
	},
	{
		icon: PuzzleIcon,
		title: "Concept Map",
		description:
			"Students see their personal map of mathematical understanding, including which prerequisites are strong and which need reinforcement before moving forward.",
	},
	{
		icon: Target03Icon,
		title: "Practice",
		description:
			"Targeted drills that adapt difficulty in real time. Every problem is chosen to address the specific gaps that student has, not generic worksheets.",
	},
];

const educatorTools = [
	{
		icon: Analytics01Icon,
		title: "Teacher Dashboard",
		description:
			"Monitor all your classes from one interface. See who's struggling, who's excelling, and where the class needs more support, updated in real time as students work.",
	},
	{
		icon: TaskDaily01Icon,
		title: "Smart Assignments",
		description:
			"Create assignments that automatically adjust difficulty based on each student's performance. Set it once and Zomath handles the differentiation for every learner.",
	},
	{
		icon: PuzzleIcon,
		title: "Concept Map Insights",
		description:
			"Visualize student understanding across prerequisite concepts at a glance. Spot gaps before they become obstacles to new material, for individuals or the whole class.",
	},
	{
		icon: PlayCircleIcon,
		title: "Live Session Mode",
		description:
			"Use Zomath during class for interactive problem solving. Newton works alongside you as a teaching assistant, providing hints and alternate explanations while you lead.",
	},
];

const integrations = [
	"Google Classroom",
	"Canvas",
	"Schoology",
	"Clever",
	"ClassLink",
	"Google SSO",
	"Microsoft SSO",
];

const complianceBadges = [
	{ icon: ShieldKeyIcon, label: "COPPA Compliant" },
	{ icon: Book02Icon, label: "FERPA Compliant" },
	{ icon: ShieldKeyIcon, label: "SOC 2 Type II" },
];

const implementationSteps = [
	{
		step: "01",
		title: "Schedule a Demo",
		description:
			"See Zomath in action with a personalized walkthrough for your math department or administrative team. We tailor the session to your school's specific needs.",
	},
	{
		step: "02",
		title: "Pilot Program",
		description:
			"Start with a 4-week pilot in select classrooms. We provide training materials, set up your LMS integration, and offer dedicated support throughout.",
	},
	{
		step: "03",
		title: "School-Wide Rollout",
		description:
			"Expand to your full school with onboarding sessions for every teacher and student. We handle roster sync, LMS setup, and the heavy lifting.",
	},
	{
		step: "04",
		title: "Ongoing Partnership",
		description:
			"Regular check-ins, data reviews, training updates, and a dedicated success manager. We treat your outcomes as our outcomes.",
	},
];

const testimonials = [
	{
		quote:
			"We had students who hadn't passed a math test all year suddenly explaining concepts to their classmates. Newton gave them the confidence to engage with material they'd been avoiding.",
		author: "Dr. Sarah Chen",
		role: "Math Department Chair",
		school: "Lincoln High School, Portland",
	},
	{
		quote:
			"The analytics alone are worth it. I can see exactly where each student is struggling and adjust my lessons accordingly. It's like having a teaching assistant for every period.",
		author: "Marcus Williams",
		role: "Algebra II Teacher",
		school: "Riverside Academy, Austin",
	},
	{
		quote:
			"We piloted three math platforms last year. Zomath was the only one students actually asked to keep using. That told us everything we needed to know about which one works.",
		author: "Janet Rodriguez",
		role: "Principal",
		school: "Westfield Middle School, Denver",
	},
];

const pricingTiers = [
	{
		name: "Classroom",
		target: "Individual Teachers",
		price: "Free trial, then contact us",
		features: [
			"Up to 35 students",
			"Full Newton AI tutor access",
			"Basic analytics dashboard",
			"Email support",
			"Self-service onboarding",
		],
		cta: "Start Free Trial",
		highlighted: false,
	},
	{
		name: "School",
		target: "Single School",
		price: "Custom pricing",
		features: [
			"Unlimited students",
			"Advanced analytics and reporting",
			"LMS integration (Canvas, Schoology, Google Classroom)",
			"Priority support with live chat",
			"Dedicated onboarding session",
			"Admin controls and school-wide settings",
			"Concept Map aggregate insights",
		],
		cta: "Request Quote",
		highlighted: true,
	},
	{
		name: "District",
		target: "School Districts",
		price: "Custom pricing",
		features: [
			"Multiple schools under one license",
			"District-wide analytics and comparison",
			"Clever and ClassLink integration",
			"Dedicated success manager",
			"Custom professional development sessions",
			"API access for custom integrations",
			"SIS integration and auto-rostering",
			"Data sharing agreements",
		],
		cta: "Contact Sales",
		highlighted: false,
	},
];

const faqs = [
	{
		question: "How long does implementation typically take?",
		answer:
			"Most schools are fully up and running within 2 to 3 weeks. This includes account setup, LMS integration if needed, and teacher training sessions. Our onboarding process has been refined across hundreds of school deployments to minimize disruption to your schedule.",
	},
	{
		question: "Does Zomath replace teachers?",
		answer:
			"Not at all. Zomath is built to amplify what teachers do best. Newton handles the repetitive work of explaining concepts multiple ways and generating differentiated practice, freeing teachers to focus on meaningful interactions, complex problem solving, and the human elements of teaching that no AI can replicate. Teachers tell us they feel more effective, not less needed.",
	},
	{
		question: "What grade levels and math subjects does Zomath cover?",
		answer:
			"Zomath currently covers Pre-Algebra through Calculus, including Geometry, Statistics, AP courses, and competition math preparation. We align with Common Core and major state standards, and we're continuously expanding our content based on partner school feedback.",
	},
	{
		question: "How do you handle student data and privacy?",
		answer:
			"Student privacy is foundational to everything we build. Zomath is COPPA and FERPA compliant, and we're SOC 2 Type II certified. We never sell data, we use it only to improve each student's learning experience, and we offer data deletion on request. We're happy to sign school-specific data processing agreements and comply with state privacy laws like SOPIPA and CALEDPA.",
	},
	{
		question: "Can Zomath integrate with our existing systems?",
		answer:
			"Yes. We integrate with Google Classroom, Canvas, Schoology, Clever, and ClassLink out of the box. For district partners, we offer SIS integration and SSO via Google, Microsoft, or Clever. If you use a system not listed here, ask us. We add new integrations regularly based on partner requests.",
	},
	{
		question: "What kind of support do you offer during and after rollout?",
		answer:
			"All plans include email support with a 24-hour response time. School and District plans include priority support with live chat and a dedicated success manager who meets with your team regularly. We also offer optional professional development sessions tailored to your math department's needs.",
	},
	{
		question: "How does Newton differ from other AI math tools?",
		answer:
			"Most AI math tools give students answers. Newton is built to help students genuinely understand. When a student asks for help, Newton asks guiding questions, offers multiple explanation approaches, and identifies the prerequisite concepts the student might be missing. It's a tutor, not an answer key. Teachers can see every interaction Newton has with their students.",
	},
	{
		question: "What does the pilot program look like?",
		answer:
			"The standard pilot is 4 weeks in 2 to 4 classrooms. We provide full feature access, set up your LMS integration, train participating teachers, and collect data on student engagement and outcomes. At the end, you receive a detailed report and a clear recommendation on next steps. There's no obligation to continue.",
	},
];

export default function SchoolsPage() {
	return (
		<main className="flex min-h-screen flex-col">
			<section className="relative overflow-hidden py-24 lg:py-32">
				<div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
				<div className="relative max-w-7xl mx-auto px-4 lg:px-12">
					<div className="mx-auto max-w-3xl text-center">
						<div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
							<HugeiconsIcon
								icon={Building03Icon}
								className="size-4"
								strokeWidth={1.5}
							/>
							For Schools and Districts
						</div>
						<h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
							Every Student Deserves a Math Tutor That Actually Gets Them
						</h1>
						<p className="mb-8 text-lg text-muted-foreground sm:text-xl">
							Newton, our AI tutor, adapts to each student's pace and
							understanding in real time. Zomath gives your teachers the tools
							to differentiate instruction at scale, so no learner falls through
							the cracks.
						</p>
						<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
							<Button asChild size="lg">
								<Link href="/sign-up">
									Try for free
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										size={16}
										strokeWidth={2}
									/>
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			<section className="border-y bg-muted/30 py-12">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="grid grid-cols-2 gap-8 md:grid-cols-4">
						{stats.map((stat) => (
							<div key={stat.label} className="text-center">
								<div className="text-3xl font-bold text-foreground lg:text-4xl">
									{stat.value}
								</div>
								<div className="mt-1 text-sm text-muted-foreground">
									{stat.label}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted/50">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
							Why Schools Choose Zomath
						</h2>
						<p className="text-lg text-muted-foreground">
							We built Zomath to solve the real challenges math teachers face
							every day: too many students, too little time, and no easy way to
							give everyone what they need.
						</p>
					</div>
					<div className="grid gap-8 md:grid-cols-2">
						{features.map((feature) => (
							<div
								key={feature.title}
								className="rounded-xl border bg-background p-6 transition-shadow hover:shadow-lg"
							>
								<div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3">
									<HugeiconsIcon
										icon={feature.icon}
										className="size-6 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="mb-2 text-xl font-semibold text-foreground">
									{feature.title}
								</h3>
								<p className="text-muted-foreground leading-relaxed">
									{feature.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">
							<HugeiconsIcon
								icon={BrainIcon}
								className="size-4"
								strokeWidth={1.5}
							/>
							Meet Newton
						</div>
						<h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
							An AI Tutor That Teaches, Not Just Tells
						</h2>
						<p className="text-lg text-muted-foreground">
							Newton is the heart of Zomath. Unlike tools that hand out answers,
							Newton helps students build genuine understanding through guided
							questioning and personalized explanations.
						</p>
					</div>
					<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
						{studentFeatures.map((feature) => (
							<div key={feature.title} className="text-center">
								<div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-primary/10">
									<HugeiconsIcon
										icon={feature.icon}
										className="size-7 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="mb-2 text-lg font-semibold text-foreground">
									{feature.title}
								</h3>
								<p className="text-sm text-muted-foreground leading-relaxed">
									{feature.description}
								</p>
							</div>
						))}
					</div>
					<div className="mt-12 rounded-xl border bg-muted/30 p-6 text-center">
						<p className="text-muted-foreground">
							<span className="font-medium text-foreground">
								Teachers see every interaction.
							</span>{" "}
							Full transparency into how Newton works with each student,
							including questions asked, concepts reviewed, and areas of
							struggle. No black boxes.
						</p>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted/50">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
						<div>
							<h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
								Built for Educators, Not Just Students
							</h2>
							<p className="mb-8 text-lg text-muted-foreground">
								Zomath is not just a student tool. We built powerful features
								specifically for teachers and administrators to make your job
								easier and your impact greater.
							</p>
							<div className="space-y-6">
								{educatorTools.map((tool) => (
									<div key={tool.title} className="flex gap-4">
										<div className="mt-1 flex-shrink-0">
											<div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
												<HugeiconsIcon
													icon={tool.icon}
													className="size-5 text-primary"
													strokeWidth={1.5}
												/>
											</div>
										</div>
										<div>
											<h3 className="font-semibold text-foreground">
												{tool.title}
											</h3>
											<p className="text-sm text-muted-foreground leading-relaxed">
												{tool.description}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className="relative">
							<div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-muted border overflow-hidden">
								<div className="absolute inset-4 rounded-lg bg-background shadow-lg p-5">
									<div className="flex items-center gap-2 mb-4">
										<div className="size-3 rounded-full bg-red-400" />
										<div className="size-3 rounded-full bg-yellow-400" />
										<div className="size-3 rounded-full bg-green-400" />
										<span className="ml-2 text-xs text-muted-foreground">
											Zomath Dashboard
										</span>
									</div>
									<div className="space-y-3">
										<div className="flex items-center justify-between">
											<div className="h-3 w-24 rounded bg-muted" />
											<div className="h-3 w-16 rounded bg-primary/20" />
										</div>
										<div className="space-y-2">
											<div className="flex items-center gap-3 rounded-lg bg-muted/50 p-2.5">
												<div className="size-8 rounded-full bg-primary/20" />
												<div className="flex-1 space-y-1.5">
													<div className="h-2.5 w-20 rounded bg-muted" />
													<div className="h-1.5 w-full rounded-full bg-muted">
														<div className="h-1.5 w-3/4 rounded-full bg-primary/40" />
													</div>
												</div>
												<div className="h-4 w-10 rounded bg-primary/10" />
											</div>
											<div className="flex items-center gap-3 rounded-lg bg-muted/50 p-2.5">
												<div className="size-8 rounded-full bg-primary/20" />
												<div className="flex-1 space-y-1.5">
													<div className="h-2.5 w-16 rounded bg-muted" />
													<div className="h-1.5 w-full rounded-full bg-muted">
														<div className="h-1.5 w-1/2 rounded-full bg-primary/40" />
													</div>
												</div>
												<div className="h-4 w-10 rounded bg-primary/10" />
											</div>
											<div className="flex items-center gap-3 rounded-lg bg-muted/50 p-2.5">
												<div className="size-8 rounded-full bg-primary/20" />
												<div className="flex-1 space-y-1.5">
													<div className="h-2.5 w-24 rounded bg-muted" />
													<div className="h-1.5 w-full rounded-full bg-muted">
														<div className="h-1.5 w-[85%] rounded-full bg-primary/40" />
													</div>
												</div>
												<div className="h-4 w-10 rounded bg-primary/10" />
											</div>
										</div>
										<div className="grid grid-cols-3 gap-2 pt-2">
											<div className="rounded-lg bg-primary/5 p-2 text-center">
												<div className="h-3 w-8 mx-auto rounded bg-primary/20" />
												<div className="h-2 w-12 mx-auto rounded bg-muted mt-1.5" />
											</div>
											<div className="rounded-lg bg-primary/5 p-2 text-center">
												<div className="h-3 w-6 mx-auto rounded bg-primary/20" />
												<div className="h-2 w-10 mx-auto rounded bg-muted mt-1.5" />
											</div>
											<div className="rounded-lg bg-primary/5 p-2 text-center">
												<div className="h-3 w-10 mx-auto rounded bg-primary/20" />
												<div className="h-2 w-14 mx-auto rounded bg-muted mt-1.5" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="mx-auto max-w-2xl text-center mb-12">
						<h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
							Fits Into Your Existing Stack
						</h2>
						<p className="text-lg text-muted-foreground">
							Zomath connects with the tools your school already uses. No
							disruptive migrations, no duplicate logins, no headaches.
						</p>
					</div>
					<div className="mb-16">
						<div className="flex flex-wrap items-center justify-center gap-3">
							{integrations.map((name) => (
								<div
									key={name}
									className="rounded-full border bg-muted/50 px-5 py-2.5 text-sm font-medium text-foreground"
								>
									{name}
								</div>
							))}
						</div>
						<p className="mt-4 text-center text-sm text-muted-foreground">
							Need a different integration? We add new ones regularly based on
							partner requests.
						</p>
					</div>
					<div className="mx-auto max-w-3xl rounded-xl border bg-background p-8">
						<h3 className="mb-6 text-center text-lg font-semibold text-foreground">
							Privacy and Compliance
						</h3>
						<div className="grid gap-6 sm:grid-cols-3">
							{complianceBadges.map((badge) => (
								<div
									key={badge.label}
									className="flex flex-col items-center gap-2 text-center"
								>
									<div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
										<HugeiconsIcon
											icon={badge.icon}
											className="size-6 text-primary"
											strokeWidth={1.5}
										/>
									</div>
									<span className="text-sm font-medium text-foreground">
										{badge.label}
									</span>
									<p className="text-xs text-muted-foreground">
										{badge.label === "COPPA Compliant" &&
											"Full compliance with children's online privacy requirements."}
										{badge.label === "FERPA Compliant" &&
											"Student education records handled with strict FERPA standards."}
										{badge.label === "SOC 2 Type II" &&
											"Independently audited security and data handling practices."}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted/50">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
							Simple Implementation, Lasting Results
						</h2>
						<p className="text-lg text-muted-foreground">
							We have refined our partnership process across hundreds of school
							deployments. Your team stays focused on teaching while we handle
							the rest.
						</p>
					</div>
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						{implementationSteps.map((item, index) => (
							<div key={item.step} className="relative">
								<div className="mb-4 text-5xl font-bold text-primary/20">
									{item.step}
								</div>
								<h3 className="mb-2 text-lg font-semibold text-foreground">
									{item.title}
								</h3>
								<p className="text-sm text-muted-foreground leading-relaxed">
									{item.description}
								</p>
								{index < implementationSteps.length - 1 && (
									<div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -translate-x-8" />
								)}
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
							Trusted by Educators Across the Country
						</h2>
						<p className="text-lg text-muted-foreground">
							Real stories from schools using Zomath to transform their math
							programs.
						</p>
					</div>
					<div className="grid gap-8 lg:grid-cols-3">
						{testimonials.map((testimonial) => (
							<div
								key={testimonial.author}
								className="flex flex-col rounded-xl border bg-background p-6"
							>
								<div className="mb-4 flex gap-1">
									<FiveStars className="size-4 text-primary fill-current" />
								</div>
								<blockquote className="mb-6 flex-1 text-muted-foreground italic leading-relaxed">
									&ldquo;{testimonial.quote}&rdquo;
								</blockquote>
								<div className="border-t pt-4">
									<div className="font-semibold text-foreground">
										{testimonial.author}
									</div>
									<div className="text-sm text-muted-foreground">
										{testimonial.role}
									</div>
									<div className="text-sm text-muted-foreground">
										{testimonial.school}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted/50">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
							Plans for Every School
						</h2>
						<p className="text-lg text-muted-foreground">
							Whether you are a single classroom or an entire district, we have
							a plan that fits your needs and budget.
						</p>
					</div>
					<div className="grid gap-8 lg:grid-cols-3">
						{pricingTiers.map((tier) => (
							<div
								key={tier.name}
								className={`relative flex flex-col rounded-xl border p-6 ${
									tier.highlighted
										? "border-primary bg-primary/5 ring-2 ring-primary/20"
										: "bg-background"
								}`}
							>
								{tier.highlighted && (
									<div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
										Most Popular
									</div>
								)}
								<div className="mb-6">
									<div className="text-sm font-medium text-muted-foreground">
										{tier.target}
									</div>
									<h3 className="text-2xl font-bold text-foreground">
										{tier.name}
									</h3>
									<div className="mt-2 text-lg font-semibold text-foreground">
										{tier.price}
									</div>
								</div>
								<ul className="mb-8 flex-1 space-y-3">
									{tier.features.map((feature) => (
										<li key={feature} className="flex items-start gap-3">
											<HugeiconsIcon
												icon={CheckmarkCircle02Icon}
												className="mt-0.5 size-4 text-primary flex-shrink-0"
												strokeWidth={1.5}
											/>
											<span className="text-sm text-muted-foreground">
												{feature}
											</span>
										</li>
									))}
								</ul>
								<Button
									variant={tier.highlighted ? "default" : "outline"}
									className="w-full"
								>
									{tier.cta}
								</Button>
							</div>
						))}
					</div>
					<p className="mt-8 text-center text-sm text-muted-foreground">
						All plans include full access to Newton, the AI tutor. Volume
						discounts available for multi-school and district-wide deployments.
					</p>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
							Frequently Asked Questions
						</h2>
						<p className="text-lg text-muted-foreground">
							Common questions from school administrators and teachers.
						</p>
					</div>
					<div className="mx-auto max-w-3xl">
						<Accordion type="single" collapsible className="w-full">
							{faqs.map((faq) => (
								<AccordionItem key={faq.question} value={faq.question}>
									<AccordionTrigger className="text-left text-foreground">
										{faq.question}
									</AccordionTrigger>
									<AccordionContent className="text-muted-foreground leading-relaxed">
										{faq.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
						<div>
							<h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
								Get in Touch
							</h2>
							<p className="mb-8 text-lg text-muted-foreground">
								Ready to see how Zomath can work for your school? Our team is
								here to answer questions and help you find the right path
								forward.
							</p>
							<div className="space-y-5">
								<div className="flex items-center gap-4">
									<div className="flex size-11 items-center justify-center rounded-full bg-primary/10">
										<HugeiconsIcon
											icon={Mail02Icon}
											className="size-5 text-primary"
											strokeWidth={1.5}
										/>
									</div>
									<div>
										<div className="text-sm font-medium text-muted-foreground">
											Email
										</div>
										<div className="font-medium text-foreground">
											schools@zomath.com
										</div>
									</div>
								</div>
								<div className="flex items-center gap-4">
									<div className="flex size-11 items-center justify-center rounded-full bg-primary/10">
										<HugeiconsIcon
											icon={Call02Icon}
											className="size-5 text-primary"
											strokeWidth={1.5}
										/>
									</div>
									<div>
										<div className="text-sm font-medium text-muted-foreground">
											Phone
										</div>
										<div className="font-medium text-foreground">
											(555) 123-4567
										</div>
									</div>
								</div>
								<div className="flex items-center gap-4">
									<div className="flex size-11 items-center justify-center rounded-full bg-primary/10">
										<HugeiconsIcon
											icon={Location01Icon}
											className="size-5 text-primary"
											strokeWidth={1.5}
										/>
									</div>
									<div>
										<div className="text-sm font-medium text-muted-foreground">
											Office
										</div>
										<div className="font-medium text-foreground">
											San Francisco, CA
										</div>
									</div>
								</div>
							</div>
							<div className="mt-8 rounded-xl border bg-muted/50 p-5">
								<h3 className="mb-2 font-semibold text-foreground">
									Prefer a quick call?
								</h3>
								<p className="text-sm text-muted-foreground mb-3">
									Schedule a 15-minute intro call with our school partnerships
									team. No pressure, just a conversation about your needs.
								</p>
								<Button variant="outline" size="sm" className="gap-2">
									Book a Call
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-3.5"
										strokeWidth={1.5}
									/>
								</Button>
							</div>
						</div>
						<div className="rounded-xl border bg-muted/50 p-6 lg:p-8">
							<h3 className="mb-6 text-xl font-semibold text-foreground">
								Request a Demo
							</h3>
							<form className="space-y-4">
								<div className="grid gap-4 sm:grid-cols-2">
									<div>
										<label className="mb-2 block text-sm font-medium text-foreground">
											First Name
										</label>
										<input
											type="text"
											className="w-full rounded-lg border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
											placeholder="Jane"
										/>
									</div>
									<div>
										<label className="mb-2 block text-sm font-medium text-foreground">
											Last Name
										</label>
										<input
											type="text"
											className="w-full rounded-lg border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
											placeholder="Smith"
										/>
									</div>
								</div>
								<div>
									<label className="mb-2 block text-sm font-medium text-foreground">
										Work Email
									</label>
									<input
										type="email"
										className="w-full rounded-lg border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
										placeholder="jane.smith@school.edu"
									/>
								</div>
								<div>
									<label className="mb-2 block text-sm font-medium text-foreground">
										School or District
									</label>
									<input
										type="text"
										className="w-full rounded-lg border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
										placeholder="Lincoln High School"
									/>
								</div>
								<div className="grid gap-4 sm:grid-cols-2">
									<div>
										<label className="mb-2 block text-sm font-medium text-foreground">
											Role
										</label>
										<select className="w-full rounded-lg border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
											<option value="">Select your role</option>
											<option value="teacher">Teacher</option>
											<option value="department-chair">Department Chair</option>
											<option value="principal">
												Principal / Administrator
											</option>
											<option value="district">District Administrator</option>
											<option value="instructional-coach">
												Instructional Coach
											</option>
											<option value="other">Other</option>
										</select>
									</div>
									<div>
										<label className="mb-2 block text-sm font-medium text-foreground">
											Student Count
										</label>
										<select className="w-full rounded-lg border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
											<option value="">Select range</option>
											<option value="1-100">1 to 100</option>
											<option value="100-500">100 to 500</option>
											<option value="500-1000">500 to 1,000</option>
											<option value="1000+">1,000+</option>
										</select>
									</div>
								</div>
								<div>
									<label className="mb-2 block text-sm font-medium text-foreground">
										Anything else you would like us to know?
									</label>
									<textarea
										rows={3}
										className="w-full rounded-lg border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
										placeholder="Tell us about your school's needs, timeline, or any questions you have..."
									/>
								</div>
								<Button type="submit" className="w-full" size="lg">
									Request Demo
								</Button>
								<p className="text-xs text-muted-foreground text-center">
									We typically respond within one business day. No spam, ever.
								</p>
							</form>
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-primary text-primary-foreground">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
							Ready to Transform Your Math Program?
						</h2>
						<p className="mb-8 text-lg opacity-90">
							Join the growing number of schools helping every student genuinely
							understand math. It starts with a conversation.
						</p>
						<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
							<Button
								size="lg"
								variant="secondary"
								className="gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
							>
								Schedule a Demo
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-4"
									strokeWidth={1.5}
								/>
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
							>
								<HugeiconsIcon
									icon={GraduationScrollIcon}
									className="size-4"
									strokeWidth={1.5}
								/>
								View Case Studies
							</Button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
