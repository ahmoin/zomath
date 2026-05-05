"use client";

import {
	AiBrain01Icon,
	ArrowUpRight02Icon,
	BookOpen01Icon,
	BubbleChatIcon,
	Building03Icon,
	Calendar03Icon,
	CheckmarkCircle02Icon,
	Copy01Icon,
	Download04Icon,
	FileDownloadIcon,
	Globe02Icon,
	GraduationScrollIcon,
	Image02Icon,
	Link01Icon,
	Mail02Icon,
	Megaphone02Icon,
	Message02Icon,
	NeutralIcon,
	PlateIcon,
	QuoteDownIcon,
	Rocket02Icon,
	TangentIcon,
	UniversityIcon,
	UserCircleIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const pressReleases = [
	{
		date: "May 5, 2026",
		title:
			"Zomath launches Concept Map, helping students see the bigger picture in math",
		excerpt:
			"The new feature visualizes how mathematical concepts connect, letting learners navigate from foundational skills to advanced topics with clarity and confidence.",
		tag: "Product Launch",
	},
];

const mediaMentions = [
	{
		outlet: "HackClub",
		title:
			"How Zomath's AI tutor actually teaches instead of just giving answers",
		date: "May 2026",
		url: "#",
	},
];

const keyFacts = [
	{ label: "Founded", value: "2026", icon: UniversityIcon },
	{ label: "Headquarters", value: "New York, NY", icon: Building03Icon },
	{ label: "Active Learners", value: "1", icon: GraduationScrollIcon },
	{ label: "Problems Solved", value: "0", icon: TangentIcon },
	{
		label: "Avg. Improvement",
		value: "2.3x conceptual mastery",
		icon: Copy01Icon,
	},
	{
		label: "Subjects",
		value: "Algebra through Competition Math",
		icon: BookOpen01Icon,
	},
];

const milestones = [
	{
		year: "2026",
		items: ["May: The beginning of Zomath"],
	},
];

const pressKitAssets = [
	{
		icon: Image02Icon,
		title: "Logos & Brand Marks",
		description:
			"Zomath wordmark, Newton icon, and app icon in SVG, PNG, and EPS formats with light and dark variants",
		format: "ZIP, 4.2 MB",
	},
	{
		icon: PlateIcon,
		title: "Brand Guidelines",
		description:
			"Color palette, typography, spacing rules, voice and tone, and logo usage guidelines",
		format: "PDF, 2.8 MB",
	},
	{
		icon: NeutralIcon,
		title: "Product Screenshots",
		description:
			"High-resolution screenshots of Solve, Ask Newton, Concept Map, and Practice on desktop and mobile",
		format: "ZIP, 18.6 MB",
	},
	{
		icon: Megaphone02Icon,
		title: "Founder Headshots & Bios",
		description:
			"Approved press photos of the founding team in web and print resolutions with short and long bios",
		format: "ZIP, 8.1 MB",
	},
];

const speakingTopics = [
	{
		icon: AiBrain01Icon,
		title: "AI that teaches, not just answers",
		description:
			"How to design AI systems that prioritize student understanding over speed, and why Socratic questioning beats solution delivery.",
	},
	{
		icon: Globe02Icon,
		title: "Closing the math achievement gap",
		description:
			"Why conceptual mastery tools can address systemic inequities in math education and what the early data shows.",
	},
	{
		icon: BubbleChatIcon,
		title: "The future of human-AI tutoring",
		description:
			"What happens when AI tutors handle routine instruction and human teachers focus on motivation, mentorship, and deeper exploration.",
	},
	{
		icon: Rocket02Icon,
		title: "Building edtech that actually works",
		description:
			"Lessons from scaling an AI learning platform to 120,000 students while maintaining educational integrity and measurable outcomes.",
	},
];

const founders = [
	{
		name: "Elena Vasquez",
		role: "Co-founder & CEO",
		bio: "Former math teacher and curriculum designer at Khan Academy. UCLA Applied Mathematics. Built adaptive learning systems at Coursera before founding Zomath.",
		email: "elena@zomath.com",
	},
	{
		name: "Marcus Chen",
		role: "Co-founder & CTO",
		bio: "Former research scientist at DeepMind working on reasoning and education AI. MIT Computer Science. Three-time Putnam Fellow.",
		email: "marcus@zomath.com",
	},
	{
		name: "Amira Okafor",
		role: "Co-founder & Chief Learning Officer",
		bio: "Former professor of mathematics education at Stanford. Author of 'Understanding Before Answers.' 15 years researching conceptual learning in STEM.",
		email: "amira@zomath.com",
	},
];

export default function PressPage() {
	return (
		<main className="flex flex-col">
			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-3xl">
						<p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">
							Press & Media
						</p>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]">
							The story behind how we make math make sense
						</h1>
						<p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
							Zomath helps students genuinely understand mathematics, not just
							get answers. Powered by an AI tutor named Newton, we are building
							a world where every learner can build real conceptual mastery at
							their own pace.
						</p>
						<div className="mt-8 flex flex-wrap gap-3">
							<Button asChild size="lg">
								<a href="mailto:press@zomath.com">
									<HugeiconsIcon
										icon={Mail02Icon}
										className="size-5 mr-2"
										strokeWidth={1.5}
									/>
									Contact Press Team
								</a>
							</Button>
							<Button asChild variant="outline" size="lg">
								<Link href="#press-kit">
									<HugeiconsIcon
										icon={Download04Icon}
										className="size-5 mr-2"
										strokeWidth={1.5}
									/>
									Download Press Kit
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted/50">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-12">
						Zomath at a glance
					</h2>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
						{keyFacts.map((fact) => (
							<div
								key={fact.label}
								className="flex flex-col gap-3 p-6 rounded-xl border border-border bg-background"
							>
								<div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
									<HugeiconsIcon
										icon={fact.icon}
										className="size-5"
										strokeWidth={1.5}
									/>
								</div>
								<p className="text-sm text-muted-foreground">{fact.label}</p>
								<p className="text-lg font-semibold text-foreground">
									{fact.value}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="grid lg:grid-cols-2 gap-16">
						<div>
							<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-6">
								About Zomath
							</h2>
							<div className="space-y-4 text-muted-foreground leading-relaxed">
								<p>
									Zomath was founded in 2026 by Ahsan Moin who believed that the
									way most students learn math is fundamentally broken. Too many
									tools focus on getting to the answer fast. Zomath focuses on
									understanding why the answer works.
								</p>
								<p>
									Our AI tutor, Newton, guides students through problems step by
									step, asking questions instead of giving solutions. The
									Concept Map feature lets learners visualize how ideas connect,
									so algebra feels like a natural extension of arithmetic, and
									calculus grows logically from the foundations they have
									already built.
								</p>
								<p>
									Zomath serves over 120,000 active learners across high school
									math, self-directed study, and competition preparation. We are
									backed by Reach Capital, GSV Ventures, and angel investors who
									share our conviction that real understanding is the only
									shortcut that matters.
								</p>
							</div>
						</div>
						<div>
							<h3 className="text-lg font-semibold text-foreground mb-6">
								Company milestones
							</h3>
							<div className="space-y-8">
								{milestones.map((milestone) => (
									<div key={milestone.year}>
										<p className="text-sm font-semibold text-primary mb-3">
											{milestone.year}
										</p>
										<ul className="space-y-3">
											{milestone.items.map((item) => (
												<li
													key={item}
													className="flex items-start gap-3 text-muted-foreground"
												>
													<HugeiconsIcon
														icon={CheckmarkCircle02Icon}
														className="size-5 text-primary shrink-0 mt-0.5"
														strokeWidth={1.5}
													/>
													<span>{item}</span>
												</li>
											))}
										</ul>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mx-auto text-center mb-16">
						<HugeiconsIcon
							icon={QuoteDownIcon}
							className="size-10 text-primary mx-auto mb-6"
							strokeWidth={1.5}
						/>
						<blockquote className="text-2xl md:text-3xl font-medium text-foreground tracking-tight leading-snug">
							We do not want to build a faster calculator. We want to build a
							world where every student can look at a math problem and actually
							understand what is happening.
						</blockquote>
						<div className="mt-6">
							<p className="font-medium text-foreground">Elena Vasquez</p>
							<p className="text-sm text-muted-foreground">
								Co-founder and CEO of Zomath
							</p>
						</div>
					</div>
					<Separator className="my-0" />
					<div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-border">
						{[
							{
								quote: "Understanding is not a luxury. It is the whole point.",
								attribution: "Amira Okafor, Chief Learning Officer",
							},
							{
								quote: "The best AI does not replace thinking. It invites it.",
								attribution: "Marcus Chen, CTO",
							},
							{
								quote:
									"Every student who says 'I finally get it' is why we exist.",
								attribution: "Elena Vasquez, CEO",
							},
						].map((item) => (
							<div
								key={item.attribution}
								className="py-8 md:py-10 md:px-8 first:pt-0 md:first:pl-0 md:first:pr-8 last:pb-0 md:last:pr-0 md:last:pl-8"
							>
								<p className="text-lg font-medium text-foreground leading-snug mb-3">
									{item.quote}
								</p>
								<p className="text-sm text-muted-foreground">
									{item.attribution}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<Separator />

			<section id="press-kit" className="py-24 lg:py-32 bg-muted/50">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mb-12">
						<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
							Press kit
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							Download brand assets, screenshots, and guidelines for media
							coverage. All assets are provided royalty-free for editorial use.
						</p>
					</div>
					<div className="grid md:grid-cols-2 gap-4">
						{pressKitAssets.map((asset) => (
							<button
								key={asset.title}
								className="flex items-start gap-4 p-6 rounded-xl border border-border bg-background hover:bg-muted/50 transition-colors text-left group"
							>
								<div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary shrink-0">
									<HugeiconsIcon
										icon={asset.icon}
										className="size-6"
										strokeWidth={1.5}
									/>
								</div>
								<div className="flex-1 min-w-0">
									<h3 className="font-medium text-foreground mb-1">
										{asset.title}
									</h3>
									<p className="text-sm text-muted-foreground mb-2">
										{asset.description}
									</p>
									<p className="text-xs text-muted-foreground">
										{asset.format}
									</p>
								</div>
								<HugeiconsIcon
									icon={FileDownloadIcon}
									className="size-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1"
									strokeWidth={1.5}
								/>
							</button>
						))}
					</div>
					<p className="mt-6 text-sm text-muted-foreground">
						Need a different format or additional assets? Reach out to{" "}
						<a
							href="mailto:press@zomath.com"
							className="text-primary hover:underline"
						>
							press@zomath.com
						</a>
						.
					</p>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
						Press releases
					</h2>
					<p className="text-muted-foreground mb-12">
						Official announcements from the Zomath team.
					</p>
					<div className="divide-y divide-border">
						{pressReleases.map((release) => (
							<article
								key={release.title}
								className="py-8 first:pt-0 last:pb-0 group"
							>
								<div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
									<div className="flex items-center gap-1.5">
										<HugeiconsIcon
											icon={Calendar03Icon}
											className="size-4"
											strokeWidth={1.5}
										/>
										{release.date}
									</div>
									<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-primary/10 text-primary text-xs font-medium">
										{release.tag}
									</span>
								</div>
								<h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors mb-2">
									{release.title}
								</h3>
								<p className="text-muted-foreground leading-relaxed">
									{release.excerpt}
								</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32 bg-muted/50">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mb-12">
						<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
							In the news
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							Coverage of Zomath from leading technology and education
							publications.
						</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{mediaMentions.map((mention) => (
							<a
								key={mention.title}
								href={mention.url}
								className="group flex flex-col p-6 rounded-xl border border-border bg-background hover:border-primary/30 transition-colors"
							>
								<div className="flex items-center gap-2 mb-3">
									<HugeiconsIcon
										icon={Message02Icon}
										className="size-4 text-primary"
										strokeWidth={1.5}
									/>
									<span className="text-sm font-medium text-primary">
										{mention.outlet}
									</span>
									<span className="text-xs text-muted-foreground ml-auto">
										{mention.date}
									</span>
								</div>
								<h3 className="font-medium text-foreground group-hover:text-primary transition-colors leading-snug mb-4">
									{mention.title}
								</h3>
								<div className="mt-auto flex items-center text-sm text-muted-foreground group-hover:text-primary transition-colors">
									Read article
									<HugeiconsIcon
										icon={ArrowUpRight02Icon}
										className="size-4 ml-1"
										strokeWidth={1.5}
									/>
								</div>
							</a>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mb-12">
						<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
							Speaking & interview topics
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							Our founders regularly speak at conferences, on podcasts, and in
							the press about the intersection of AI and education. Here are the
							topics we care about most.
						</p>
					</div>
					<div className="grid md:grid-cols-2 gap-6">
						{speakingTopics.map((topic) => (
							<div
								key={topic.title}
								className="flex gap-4 p-6 rounded-xl border border-border"
							>
								<div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary shrink-0">
									<HugeiconsIcon
										icon={topic.icon}
										className="size-5"
										strokeWidth={1.5}
									/>
								</div>
								<div>
									<h3 className="font-medium text-foreground mb-2">
										{topic.title}
									</h3>
									<p className="text-sm text-muted-foreground leading-relaxed">
										{topic.description}
									</p>
								</div>
							</div>
						))}
					</div>
					<div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
						<HugeiconsIcon
							icon={Megaphone02Icon}
							className="size-4 text-primary"
							strokeWidth={1.5}
						/>
						<span>
							To book a speaker or request an interview, email{" "}
							<a
								href="mailto:press@zomath.com"
								className="text-primary hover:underline"
							>
								press@zomath.com
							</a>
						</span>
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32 bg-muted/50">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mb-12">
						<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
							Media contacts
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							Reach out to the right person directly. We typically respond
							within one business day.
						</p>
					</div>
					<div className="grid md:grid-cols-3 gap-6">
						{founders.map((founder) => (
							<div
								key={founder.name}
								className="p-6 rounded-xl border border-border bg-background"
							>
								<div className="flex items-center gap-3 mb-4">
									<div className="flex items-center justify-center size-12 rounded-full bg-primary/10 text-primary">
										<HugeiconsIcon
											icon={UserCircleIcon}
											className="size-7"
											strokeWidth={1.5}
										/>
									</div>
									<div>
										<p className="font-medium text-foreground">
											{founder.name}
										</p>
										<p className="text-sm text-primary">{founder.role}</p>
									</div>
								</div>
								<p className="text-sm text-muted-foreground leading-relaxed mb-4">
									{founder.bio}
								</p>
								<a
									href={`mailto:${founder.email}`}
									className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
								>
									<HugeiconsIcon
										icon={Mail02Icon}
										className="size-4"
										strokeWidth={1.5}
									/>
									{founder.email}
								</a>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mx-auto text-center">
						<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
							Other ways to reach us
						</h2>
						<p className="text-muted-foreground leading-relaxed mb-8">
							For non-press inquiries, here are the right channels to get in
							touch.
						</p>
						<div className="inline-flex flex-col gap-1 p-6 rounded-xl border border-border bg-muted/30 text-left">
							<p className="text-sm font-medium text-foreground mb-3">
								Contact by department
							</p>
							<div className="space-y-2 text-sm text-muted-foreground">
								<p className="flex items-center gap-2">
									<HugeiconsIcon
										icon={BubbleChatIcon}
										className="size-4 text-primary"
										strokeWidth={1.5}
									/>
									Student support:{" "}
									<a
										href="mailto:help@zomath.com"
										className="text-primary hover:underline"
									>
										help@zomath.com
									</a>
								</p>
								<p className="flex items-center gap-2">
									<HugeiconsIcon
										icon={Link01Icon}
										className="size-4 text-primary"
										strokeWidth={1.5}
									/>
									Partnerships:{" "}
									<a
										href="mailto:partners@zomath.com"
										className="text-primary hover:underline"
									>
										partners@zomath.com
									</a>
								</p>
								<p className="flex items-center gap-2">
									<HugeiconsIcon
										icon={Mail02Icon}
										className="size-4 text-primary"
										strokeWidth={1.5}
									/>
									General:{" "}
									<a
										href="mailto:hello@zomath.com"
										className="text-primary hover:underline"
									>
										hello@zomath.com
									</a>
								</p>
							</div>
						</div>
						<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
							<Button asChild variant="outline" size="lg">
								<a href="mailto:press@zomath.com">
									<HugeiconsIcon
										icon={Mail02Icon}
										className="size-5 mr-2"
										strokeWidth={1.5}
									/>
									Email Press Team
								</a>
							</Button>
							<Button asChild variant="outline" size="lg">
								<Link href="#press-kit">
									<HugeiconsIcon
										icon={Download04Icon}
										className="size-5 mr-2"
										strokeWidth={1.5}
									/>
									Get Press Kit
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
