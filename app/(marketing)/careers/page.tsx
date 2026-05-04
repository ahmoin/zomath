"use client";

import {
	ArrowRight02Icon,
	Book02Icon,
	BrainIcon,
	Clock01Icon,
	Home02Icon,
	LaptopIcon,
	Location01Icon,
	Mail02Icon,
	Rocket01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const openPositions = [
	{
		title: "Senior Frontend Engineer",
		department: "Engineering",
		location: "Remote",
		type: "Full-time",
		description:
			"Build beautiful, performant interfaces that help students understand math visually. You'll work closely with our design team to create intuitive learning experiences.",
	},
	{
		title: "AI/ML Engineer",
		department: "Engineering",
		location: "Remote",
		type: "Full-time",
		description:
			"Train and improve Newton, our AI tutor. Work on LLM fine-tuning, mathematical reasoning, and building systems that explain concepts clearly to students.",
	},
	{
		title: "Product Designer",
		department: "Design",
		location: "Remote",
		type: "Full-time",
		description:
			"Shape how millions of students interact with math. Design complex interactions that feel simple, and create visual systems for mathematical concepts.",
	},
	{
		title: "Curriculum Developer",
		department: "Content",
		location: "Remote",
		type: "Full-time",
		description:
			"Create the learning paths and practice problems that guide students through mathematics. Blend pedagogical expertise with our AI capabilities.",
	},
	{
		title: "Growth Marketing Manager",
		department: "Marketing",
		location: "Remote",
		type: "Full-time",
		description:
			"Help students discover Zomath. Build community, create content, and develop strategies to reach learners who need us most.",
	},
];

const benefits = [
	{
		icon: LaptopIcon,
		title: "Competitive Pay",
		description: "Salary and equity packages that reflect your impact.",
	},
	{
		icon: LaptopIcon,
		title: "Health Coverage",
		description:
			"Comprehensive medical, dental, and vision for you and dependents.",
	},
	{
		icon: Home02Icon,
		title: "Remote-First",
		description: "Work from anywhere with flexible hours and async culture.",
	},
	{
		icon: Book02Icon,
		title: "Learning Budget",
		description: "$2,000 annually for courses, books, and conferences.",
	},
	{
		icon: Clock01Icon,
		title: "Flexible PTO",
		description: "Take the time you need. We trust you to manage your work.",
	},
	{
		icon: LaptopIcon,
		title: "Equipment Budget",
		description: "Setup your ideal workspace with our $1,500 stipend.",
	},
];

const values = [
	{
		icon: LaptopIcon,
		title: "Curiosity Over Answers",
		description:
			"We're building for students who want to understand, not just solve. We approach problems the same way, with genuine curiosity and a desire to learn.",
	},
	{
		icon: LaptopIcon,
		title: "Students First, Always",
		description:
			"Every decision starts with what helps students learn. We measure success by understanding, not engagement metrics or completion rates.",
	},
	{
		icon: Rocket01Icon,
		title: "Solve Hard Problems",
		description:
			"Math education is genuinely difficult. We embrace the complexity and build solutions that actually work, not just look good.",
	},
];

export default function CareersPage() {
	return (
		<main className="flex flex-col">
			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-3xl">
						<Badge variant="secondary" className="mb-6">
							We're hiring
						</Badge>
						<h1 className="text-4xl lg:text-6xl font-medium tracking-tight mb-6">
							Help us change how the world learns math
						</h1>
						<p className="text-xl text-muted-foreground leading-relaxed mb-8">
							Every day, millions of students struggle with math not because
							they can't learn, but because they're not being taught in a way
							that makes sense. We're building something better.
						</p>
						<div className="flex flex-wrap gap-4">
							<Button asChild size="lg">
								<Link href="#openings">
									View open positions
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-5"
										strokeWidth={1.5}
									/>
								</Link>
							</Button>
							<Button variant="outline" size="lg" asChild>
								<Link href="#culture">Our culture</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted/50">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-3xl mx-auto text-center">
						<HugeiconsIcon
							icon={BrainIcon}
							className="size-12 text-primary mx-auto mb-6"
							strokeWidth={1.5}
						/>
						<h2 className="text-2xl lg:text-3xl font-medium tracking-tight mb-6">
							Math confidence changes everything
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed">
							When students truly understand math, doors open. College
							admissions, career options, problem-solving skills that last a
							lifetime. We're not just building an app, we're building the
							infrastructure for mathematical understanding at scale.
						</p>
					</div>
				</div>
			</section>

			<section id="culture" className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mb-16">
						<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-4">
							How we work
						</h2>
						<p className="text-lg text-muted-foreground">
							We're a small team doing ambitious work. Here's what guides us.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8 lg:gap-12">
						{values.map((value, index) => (
							<div key={index} className="space-y-4">
								<div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
									<HugeiconsIcon
										icon={value.icon}
										className="size-6 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="text-xl font-medium">{value.title}</h3>
								<p className="text-muted-foreground leading-relaxed">
									{value.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mb-16">
						<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-4">
							What we offer
						</h2>
						<p className="text-lg text-muted-foreground">
							Great work requires support. Here's how we take care of our team.
						</p>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{benefits.map((benefit, index) => (
							<div
								key={index}
								className="p-6 rounded-xl border bg-card hover:bg-muted/50 transition-colors"
							>
								<HugeiconsIcon
									icon={benefit.icon}
									className="size-6 text-primary mb-4"
									strokeWidth={1.5}
								/>
								<h3 className="font-medium mb-2">{benefit.title}</h3>
								<p className="text-sm text-muted-foreground">
									{benefit.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section id="openings" className="py-24 lg:py-32 bg-muted/30">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mb-16">
						<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-4">
							Open positions
						</h2>
						<p className="text-lg text-muted-foreground">
							Join our team and help build the future of math education.
						</p>
					</div>

					<div className="space-y-4">
						{openPositions.map((position, index) => (
							<div
								key={index}
								className="p-6 rounded-xl border bg-background hover:border-primary/50 transition-colors group"
							>
								<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
									<div className="flex-1">
										<div className="flex flex-wrap items-center gap-3 mb-2">
											<h3 className="text-lg font-medium">{position.title}</h3>
											<Badge variant="secondary">{position.department}</Badge>
										</div>
										<p className="text-muted-foreground mb-3">
											{position.description}
										</p>
										<div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
											<span className="flex items-center gap-1.5">
												<HugeiconsIcon
													icon={Location01Icon}
													className="size-4"
													strokeWidth={1.5}
												/>
												{position.location}
											</span>
											<span className="flex items-center gap-1.5">
												<HugeiconsIcon
													icon={Clock01Icon}
													className="size-4"
													strokeWidth={1.5}
												/>
												{position.type}
											</span>
										</div>
									</div>
									<Button
										variant="outline"
										className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
									>
										Apply now
										<HugeiconsIcon
											icon={ArrowRight02Icon}
											className="size-4"
											strokeWidth={1.5}
										/>
									</Button>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mb-16">
						<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-4">
							How we hire
						</h2>
						<p className="text-lg text-muted-foreground">
							We believe in a fair, transparent process that respects your time.
						</p>
					</div>

					<div className="grid md:grid-cols-4 gap-8">
						{[
							{
								step: "01",
								title: "Apply",
								description:
									"Submit your resume and a brief note about why Zomath interests you.",
							},
							{
								step: "02",
								title: "Initial Chat",
								description:
									"A 30-minute call to learn about each other and discuss your background.",
							},
							{
								step: "03",
								title: "Skills Session",
								description:
									"A practical session relevant to the role. No trick questions, just real work.",
							},
							{
								step: "04",
								title: "Team Meet",
								description:
									"Meet a few team members and ask any questions you have about working here.",
							},
						].map((item, index) => (
							<div key={index} className="relative">
								<div className="text-4xl font-medium text-primary/20 mb-4">
									{item.step}
								</div>
								<h3 className="font-medium mb-2">{item.title}</h3>
								<p className="text-sm text-muted-foreground">
									{item.description}
								</p>
								{index < 3 && (
									<div className="hidden md:block absolute top-2 left-[60%] w-[80%] border-t border-dashed border-border" />
								)}
							</div>
						))}
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mx-auto text-center">
						<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-4">
							Don't see a fit?
						</h2>
						<p className="text-lg text-muted-foreground mb-8">
							We're always interested in meeting people who care deeply about
							education. Send us a note and tell us what you'd bring to Zomath.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<Button asChild>
								<Link href="mailto:careers@zomath.com">
									<HugeiconsIcon
										icon={Mail02Icon}
										className="size-5"
										strokeWidth={1.5}
									/>
									careers@zomath.com
								</Link>
							</Button>
							<Button variant="outline" asChild>
								<Link
									href="https://linkedin.com/company/zomath"
									target="_blank"
									rel="noopener noreferrer"
								>
									<HugeiconsIcon
										icon={LaptopIcon}
										className="size-5"
										strokeWidth={1.5}
									/>
									Follow on LinkedIn
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
