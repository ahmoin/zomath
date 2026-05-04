"use client";

import {
	ArrowRight02Icon,
	BrainIcon,
	Comment02Icon,
	HashtagIcon,
	Rocket02Icon,
	StarIcon,
	TangentIcon,
	Target01Icon,
	UserMultipleIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const stats = [
	{ value: "12,000+", label: "Active Learners" },
	{ value: "85,000+", label: "Problems Discussed" },
	{ value: "340+", label: "Study Groups" },
	{ value: "45", label: "Countries" },
];

const features = [
	{
		icon: Target01Icon,
		title: "Study Groups",
		description:
			"Join focused study groups organized by topic, from AP Calculus to Olympiad combinatorics. Find your people and tackle hard problems together.",
	},
	{
		icon: Comment02Icon,
		title: "Discussion Forums",
		description:
			"Ask questions, share elegant solutions, and help fellow learners break through roadblocks. Every question gets answered, often within minutes.",
	},
	{
		icon: Target01Icon,
		title: "Weekly Challenges",
		description:
			"Test your skills with community math challenges curated by Newton. Compete on leaderboards, earn badges, and push your limits.",
	},
	{
		icon: BrainIcon,
		title: "Newton Study Sessions",
		description:
			"Drop into live sessions where Newton guides groups through tough concepts, answers questions in real time, and adapts to what the group needs.",
	},
];

const testimonials = [
	{
		name: "Aria K.",
		role: "AP Calculus Student",
		initials: "AK",
		quote:
			"I used to stare at homework for hours, feeling stuck and alone. The Zomath community changed that. Someone always has a different way of explaining things that makes it click.",
	},
	{
		name: "Daniel M.",
		role: "AMC Competitor",
		initials: "DM",
		quote:
			"The competition math study group is incredible. We work through problems together and Newton fills in the gaps when we are stuck. My AMC score went up 30 points in two months.",
	},
	{
		name: "Priya S.",
		role: "Self-Learner",
		initials: "PS",
		quote:
			"As someone learning math on my own, having a community where I can ask questions without judgment has been a game changer. People here genuinely want you to understand.",
	},
];

const challenges = [
	{
		tag: "Algebra",
		title: "The Symmetric Surprise",
		description: "Find all real solutions to x² + y² + xy = 7 given x + y = 3.",
		difficulty: "Medium",
		solvers: "142",
	},
	{
		tag: "Geometry",
		title: "Circle Through a Point",
		description:
			"Given triangle ABC with AB = 5, BC = 7, CA = 8, find the circumradius.",
		difficulty: "Hard",
		solvers: "67",
	},
	{
		tag: "Number Theory",
		title: "Digit Dungeon",
		description:
			"How many positive integers less than 1000 have digits in strictly increasing order?",
		difficulty: "Easy",
		solvers: "218",
	},
];

const values = [
	{
		icon: Target01Icon,
		title: "Understanding over answers",
		description:
			"We celebrate the process, not just the final result. A wrong answer with good reasoning is worth more than a correct answer with no understanding.",
	},
	{
		icon: Target01Icon,
		title: "Patience and encouragement",
		description:
			"Everyone learns at their own pace. Meet people where they are, offer hints before solutions, and celebrate small wins along the way.",
	},
	{
		icon: BrainIcon,
		title: "Curiosity without judgment",
		description:
			"No question is too basic, no confusion too small. The bravest thing a learner can do is admit they do not understand something.",
	},
];

const faqs = [
	{
		question: "Is the Zomath community free to join?",
		answer:
			"Yes, the community is free for all Zomath users. You can join study groups, participate in forums, and take on weekly challenges at no cost. Premium features like unlimited Newton sessions are available with a Zomath Pro subscription.",
	},
	{
		question: "How do study groups work?",
		answer:
			"Study groups are organized by topic and skill level. You can browse existing groups or create your own. Each group has a shared workspace, discussion thread, and the option to summon Newton for guided help. Groups range from casual homework help to intense competition prep.",
	},
	{
		question: "Can I get help with my specific homework problems?",
		answer:
			"Absolutely. The forums are a great place to post problems you are stuck on. Community members and Newton both provide explanations focused on understanding, not just answers. You will learn the why, not just the what.",
	},
	{
		question: "What are the weekly challenges?",
		answer:
			"Every Monday, Newton selects three new math problems across different difficulty levels. Solve them before Sunday and earn points toward your community ranking. Challenges are a fun way to build problem solving skills and see how you stack up against other learners.",
	},
	{
		question: "Is this a safe space for beginners?",
		answer:
			"Without question. Zomath is built on the belief that everyone can learn math. Our community guidelines emphasize respect, patience, and encouragement. There are no dumb questions here, only genuine curiosity that deserves a thoughtful answer.",
	},
	{
		question: "How is the community moderated?",
		answer:
			"A combination of community moderators and Newton-powered content guidelines keeps discussions constructive and welcoming. We take harassment, cheating, and unhelpful behavior seriously. Our goal is a space where every learner feels safe to be honest about what they do not know.",
	},
];

const leaderboard = [
	{ rank: 1, name: "Yuxin W.", points: 2840, streak: 47 },
	{ rank: 2, name: "Marcus T.", points: 2615, streak: 38 },
	{ rank: 3, name: "Sofia R.", points: 2490, streak: 33 },
	{ rank: 4, name: "Aarav P.", points: 2340, streak: 29 },
	{ rank: 5, name: "Elena K.", points: 2205, streak: 25 },
];

export default function CommunityPage() {
	return (
		<main>
			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-3xl mx-auto text-center">
						<div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground mb-8">
							<HugeiconsIcon
								icon={UserMultipleIcon}
								className="size-4"
								strokeWidth={1.5}
							/>
							<span>12,000+ learners and growing</span>
						</div>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-6">
							Learn math better, <span className="text-primary">together</span>
						</h1>
						<p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-10">
							Math is not a solo sport. Join a community of curious learners who
							help each other understand deeply, celebrate breakthroughs, and
							make the hard parts a little less lonely.
						</p>
						<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
							<Button size="lg" asChild>
								<Link href="/signup">
									Join the community
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-4 ml-1"
										strokeWidth={1.5}
									/>
								</Link>
							</Button>
							<Button size="lg" variant="outline" asChild>
								<Link href="/community/guidelines">Read our guidelines</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-16 lg:py-20">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
						{stats.map((stat) => (
							<div key={stat.label}>
								<p className="text-3xl lg:text-4xl font-semibold text-foreground">
									{stat.value}
								</p>
								<p className="text-sm text-muted-foreground mt-1">
									{stat.label}
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
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Everything you need to learn together
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed">
							From casual homework help to intense competition prep, the Zomath
							community has a place for every kind of learner.
						</p>
					</div>
					<div className="grid md:grid-cols-2 gap-6">
						{features.map((feature) => (
							<div
								key={feature.title}
								className="rounded-xl border bg-card p-8 hover:shadow-md transition-shadow"
							>
								<div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
									<HugeiconsIcon
										icon={feature.icon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="text-xl font-semibold text-foreground mb-2">
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

			<Separator />

			<section className="py-24 lg:py-32 bg-muted/30">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
						<div className="max-w-2xl">
							<div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-1.5 text-sm text-muted-foreground mb-6">
								<HugeiconsIcon
									icon={HashtagIcon}
									className="size-4"
									strokeWidth={1.5}
								/>
								<span>This week&apos;s challenges</span>
							</div>
							<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
								Sharpen your skills with community challenges
							</h2>
							<p className="text-lg text-muted-foreground leading-relaxed">
								Newton picks fresh problems every week across topics and
								difficulty levels. Solve them, discuss strategies, and climb the
								leaderboard.
							</p>
						</div>
						<Button
							variant="outline"
							asChild
							className="shrink-0 self-start lg:self-auto"
						>
							<Link href="/community/challenges">
								View all challenges
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-4 ml-1"
									strokeWidth={1.5}
								/>
							</Link>
						</Button>
					</div>
					<div className="grid md:grid-cols-3 gap-6">
						{challenges.map((challenge) => (
							<div
								key={challenge.title}
								className="rounded-xl border bg-card p-8 hover:shadow-md transition-shadow"
							>
								<div className="flex items-center justify-between mb-4">
									<span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
										{challenge.tag}
									</span>
									<span className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
										{challenge.difficulty}
									</span>
								</div>
								<h3 className="text-lg font-semibold text-foreground mb-2">
									{challenge.title}
								</h3>
								<p className="text-sm text-muted-foreground leading-relaxed mb-4">
									{challenge.description}
								</p>
								<div className="flex items-center gap-1.5 text-sm text-muted-foreground">
									<HugeiconsIcon
										icon={Target01Icon}
										className="size-4"
										strokeWidth={1.5}
									/>
									<span>{challenge.solvers} solvers</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="grid lg:grid-cols-2 gap-16 items-start">
						<div>
							<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
								Community leaderboard
							</h2>
							<p className="text-lg text-muted-foreground leading-relaxed mb-6">
								Top contributors earn points by solving challenges, helping
								others in forums, and maintaining daily learning streaks. Every
								interaction counts.
							</p>
							<p className="text-muted-foreground leading-relaxed mb-8">
								Rankings reset monthly so new members always have a fair shot.
								Earn badges, unlock titles, and see your name climb the board as
								you grow.
							</p>
							<Button variant="outline" asChild>
								<Link href="/community/leaderboard">
									View full leaderboard
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-4 ml-1"
										strokeWidth={1.5}
									/>
								</Link>
							</Button>
						</div>
						<div className="rounded-xl border bg-card overflow-hidden">
							<div className="grid grid-cols-[2rem_1fr_auto_auto] gap-x-4 items-center px-6 py-3 border-b bg-muted/50 text-xs font-medium text-muted-foreground">
								<span>#</span>
								<span>Learner</span>
								<span>Points</span>
								<span>Streak</span>
							</div>
							{leaderboard.map((entry) => (
								<div
									key={entry.rank}
									className="grid grid-cols-[2rem_1fr_auto_auto] gap-x-4 items-center px-6 py-3.5 border-b last:border-b-0"
								>
									<span className="text-sm font-semibold text-foreground">
										{entry.rank}
									</span>
									<span className="text-sm font-medium text-foreground">
										{entry.name}
									</span>
									<span className="text-sm text-muted-foreground tabular-nums">
										{entry.points.toLocaleString()}
									</span>
									<span className="text-sm text-muted-foreground tabular-nums">
										{entry.streak}d
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="text-center max-w-2xl mx-auto mb-16">
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Hear from our community
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed">
							Real stories from learners who found their math people here.
						</p>
					</div>
					<div className="grid md:grid-cols-3 gap-6">
						{testimonials.map((testimonial) => (
							<div
								key={testimonial.name}
								className="rounded-xl border bg-card p-8"
							>
								<div className="flex items-center gap-1 mb-5">
									{[...Array(5)].map((_, i) => (
										<HugeiconsIcon
											key={i}
											icon={StarIcon}
											className="size-4 text-primary"
											strokeWidth={1.5}
										/>
									))}
								</div>
								<p className="text-foreground leading-relaxed mb-6">
									&ldquo;{testimonial.quote}&rdquo;
								</p>
								<div className="flex items-center gap-3">
									<div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
										{testimonial.initials}
									</div>
									<div>
										<p className="text-sm font-medium text-foreground">
											{testimonial.name}
										</p>
										<p className="text-xs text-muted-foreground">
											{testimonial.role}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div>
							<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
								Built on respect, driven by curiosity
							</h2>
							<p className="text-lg text-muted-foreground leading-relaxed mb-8">
								The Zomath community is a space where every question matters and
								every learner belongs. Our guidelines are simple but we take
								them seriously.
							</p>
							<Button variant="outline" asChild>
								<Link href="/community/guidelines">
									Read the full guidelines
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-4 ml-1"
										strokeWidth={1.5}
									/>
								</Link>
							</Button>
						</div>
						<div className="space-y-6">
							{values.map((value) => (
								<div key={value.title} className="flex gap-4">
									<div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
										<HugeiconsIcon
											icon={value.icon}
											className="size-5 text-primary"
											strokeWidth={1.5}
										/>
									</div>
									<div>
										<h3 className="font-semibold text-foreground mb-1">
											{value.title}
										</h3>
										<p className="text-sm text-muted-foreground leading-relaxed">
											{value.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32 bg-muted/30">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-3xl mx-auto">
						<div className="text-center mb-12">
							<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
								Common questions
							</h2>
							<p className="text-lg text-muted-foreground">
								Everything you want to know about the Zomath community.
							</p>
						</div>
						<Accordion type="single" collapsible className="w-full">
							{faqs.map((faq, index) => (
								<AccordionItem key={index} value={`item-${index}`}>
									<AccordionTrigger className="text-left">
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

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="rounded-2xl bg-primary/5 border p-12 lg:p-16 text-center">
						<HugeiconsIcon
							icon={Rocket02Icon}
							className="size-10 text-primary mx-auto mb-6"
							strokeWidth={1.5}
						/>
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Ready to find your math people?
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto mb-8">
							Join thousands of learners who are making math social, supportive,
							and genuinely fun. Your next breakthrough is waiting.
						</p>
						<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
							<Button size="lg" asChild>
								<Link href="/signup">
									Get started for free
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-4 ml-1"
										strokeWidth={1.5}
									/>
								</Link>
							</Button>
							<Button size="lg" variant="outline" asChild>
								<Link href="/community/explore">Explore community</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
