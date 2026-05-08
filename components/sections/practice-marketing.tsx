"use client";

import {
	Analytics01Icon,
	ArrowRight02Icon,
	BookOpen02Icon,
	BrainIcon,
	Cancel01Icon,
	ChartLineData02Icon,
	CheckmarkCircle02Icon,
	Clock01Icon,
	Copy01Icon,
	DashboardSpeed02Icon,
	EyeIcon,
	FavouriteIcon,
	GraduateFemaleIcon,
	LayerIcon,
	Link01Icon,
	MarketingIcon,
	Mining02Icon,
	PlayCircleIcon,
	PuzzleIcon,
	RefreshIcon,
	SparklesIcon,
	StarIcon,
	TangentIcon,
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

const categories = [
	{
		title: "Algebra",
		description:
			"Linear equations, quadratics, polynomials, systems, and inequalities. From basics to advanced manipulation.",
		count: "240+",
		icon: MarketingIcon,
		examples: [
			"Solve systems with 3 variables",
			"Factor tricky quadratics",
			"Graph rational functions",
		],
	},
	{
		title: "Geometry",
		description:
			"Triangles, circles, coordinate geometry, and proof strategies. Build spatial reasoning and logical rigor.",
		count: "190+",
		icon: PuzzleIcon,
		examples: [
			"Inscribed angle theorems",
			"Coordinate proofs",
			"3D surface area and volume",
		],
	},
	{
		title: "Calculus",
		description:
			"Limits, derivatives, integrals, and applied problems. Intuition first, then technique.",
		count: "310+",
		icon: Analytics01Icon,
		examples: [
			"Epsilon-delta proofs",
			"Optimization word problems",
			"Techniques of integration",
		],
	},
	{
		title: "Competition",
		description:
			"AMC, AIME, and olympiad-level problems with full solutions. Learn the tricks competition winners use.",
		count: "150+",
		icon: Copy01Icon,
		examples: [
			"AMC 10/12 style problems",
			"AIME number theory",
			"Olympiad proof strategies",
		],
	},
];

const steps = [
	{
		step: "01",
		title: "Take a diagnostic",
		description:
			"Newton assesses your current understanding across topics to map your strengths and gaps. No grade-level assumptions, just honest skill measurement.",
		icon: ChartLineData02Icon,
	},
	{
		step: "02",
		title: "Get your drill plan",
		description:
			"Newton builds a personalized practice sequence targeting exactly where you need growth. Not random problems, a deliberate path.",
		icon: TangentIcon,
	},
	{
		step: "03",
		title: "Practice with feedback",
		description:
			"Work through problems step by step. Newton catches misconceptions as they happen, not after you have already built bad habits.",
		icon: BrainIcon,
	},
	{
		step: "04",
		title: "Watch your mastery grow",
		description:
			"Each session updates your Concept Map in real time. See topics turn from shaky to solid as you practice consistently.",
		icon: SparklesIcon,
	},
];

const differentiators = [
	{
		title: "Adaptive difficulty that actually adapts",
		description:
			"Problems get harder as you improve and easier when you struggle. The zone of proximal development is not just theory here, it is the algorithm.",
		icon: LayerIcon,
	},
	{
		title: "Misconception detection, not just wrong answers",
		description:
			"Newton identifies why you got something wrong. Was it a calculation error, a conceptual gap, or a misread problem? The fix depends on the cause.",
		icon: BrainIcon,
	},
	{
		title: "Spaced repetition for math",
		description:
			"Topics you have mastered come back at increasing intervals. Research shows this is how you keep skills sharp long term.",
		icon: RefreshIcon,
	},
	{
		title: "Connected to your Concept Map",
		description:
			"Every practice session updates your understanding graph. Practice is not isolated, it feeds back into your full learning picture.",
		icon: ChartLineData02Icon,
	},
	{
		title: "Competition-ready problem sets",
		description:
			"Train with problems styled after AMC, AIME, and olympiad contests. Detailed solutions teach you the techniques, not just the answers.",
		icon: Copy01Icon,
	},
	{
		title: "No busywork, ever",
		description:
			"Every problem serves a purpose. If you have already mastered a skill, Newton moves you forward. Your time is respected.",
		icon: Mining02Icon,
	},
];

const stats = [
	{ value: "890+", label: "Curated problems", icon: BookOpen02Icon },
	{ value: "12min", label: "Average session", icon: Clock01Icon },
	{ value: "3.2x", label: "Faster mastery vs. worksheets", icon: Mining02Icon },
	{ value: "94%", label: "Students recommend Zomath", icon: StarIcon },
];

const sessionSteps = [
	{
		phase: "Warm-up",
		description:
			"Newton starts with a problem just below your current level. This activates prior knowledge and builds confidence before the challenge ramps up.",
		icon: DashboardSpeed02Icon,
	},
	{
		phase: "Targeted challenge",
		description:
			"The core of your drill. Problems hit the exact skill gap Newton identified. Difficulty adjusts in real time based on your responses.",
		icon: TangentIcon,
	},
	{
		phase: "Step-by-step feedback",
		description:
			"Stuck? Newton does not just give the answer. It asks a guiding question, highlights your error pattern, or shows a parallel example to unstick your thinking.",
		icon: EyeIcon,
	},
	{
		phase: "Review and connect",
		description:
			"After each problem, Newton connects it to related concepts in your map. You see how this skill links to what you already know and what comes next.",
		icon: Link01Icon,
	},
];

const comparisons = [
	{
		traditional: "Same 30 problems as everyone else",
		zomath: "Unique sequence based on your gaps",
	},
	{
		traditional: "Check the back of the book for answers",
		zomath: "Newton explains why you went wrong",
	},
	{
		traditional: "Easy problems mixed with impossible ones",
		zomath: "Difficulty adapts to keep you in the growth zone",
	},
	{
		traditional: "Forgot it by next week",
		zomath: "Spaced repetition brings it back before you forget",
	},
	{
		traditional: "No idea what to study next",
		zomath: "Newton prioritizes the skill with the highest impact",
	},
	{
		traditional: "One-size-fits-all homework",
		zomath: "Every problem earns its place in your session",
	},
];

const faqs = [
	{
		question: "How does Newton decide what problems to give me?",
		answer:
			"Newton runs a diagnostic across your enrolled topics, then uses a combination of item response theory and your Concept Map data to select problems. It weighs your current mastery, recent practice history, and the relative importance of each skill to choose the problem that will have the most learning impact.",
	},
	{
		question: "Can I choose what to practice?",
		answer:
			"Absolutely. You can pick any topic or subtopic to focus on, set your own difficulty range, or let Newton decide. Many students start with Newton's recommendation and then drill specific weak spots they want to shore up before a test or competition.",
	},
	{
		question: "What happens when I get a problem wrong?",
		answer:
			"Newton first identifies the type of error: conceptual, procedural, or computational. Then it responds accordingly. For conceptual errors, it offers a mini-explanation or a parallel example. For procedural errors, it highlights the step where things went wrong. For computational errors, it lets you retry the calculation. You never just see a red X and move on.",
	},
	{
		question: "How long should a practice session be?",
		answer:
			"The average session is about 12 minutes, but you can practice for as long as you want. Newton is designed to work in short, focused bursts because research shows that spaced, concentrated practice is more effective than marathon study sessions. Even 5 problems a day adds up to significant growth over time.",
	},
	{
		question: "Is Practice included in the free plan?",
		answer:
			"Yes. You get access to a generous number of practice problems and Newton-guided drills on the free plan. The Pro plan unlocks unlimited problems, advanced analytics, competition problem sets, and priority access to new content as it is added.",
	},
	{
		question: "Does Practice work for competition math?",
		answer:
			"Yes. We have dedicated problem sets for AMC 10, AMC 12, AIME, and introductory olympiad topics. Each competition problem includes a detailed solution that teaches the underlying technique, so you are learning reusable strategies, not just memorizing solutions to specific problems.",
	},
];

function ComparisonRow({
	traditional,
	zomath,
}: {
	traditional: string;
	zomath: string;
}) {
	return (
		<>
			<div className="rounded-lg bg-muted/50 p-4 flex items-start gap-2">
				<HugeiconsIcon
					icon={Cancel01Icon}
					className="size-4 text-muted-foreground shrink-0 mt-0.5"
					strokeWidth={1.5}
				/>
				<span className="text-sm text-muted-foreground">{traditional}</span>
			</div>
			<div className="rounded-lg bg-primary/5 border border-primary/20 p-4 flex items-start gap-2">
				<HugeiconsIcon
					icon={CheckmarkCircle02Icon}
					className="size-4 text-primary shrink-0 mt-0.5"
					strokeWidth={1.5}
				/>
				<span className="text-sm text-foreground">{zomath}</span>
			</div>
		</>
	);
}

export function PracticeMarketingSection() {
	return (
		<main className="flex flex-col">
			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-3xl">
						<div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-3 py-1 text-sm text-muted-foreground mb-6">
							<HugeiconsIcon
								icon={PlayCircleIcon}
								className="size-4"
								strokeWidth={1.5}
							/>
							Targeted practice drills
						</div>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.1]">
							Practice that knows what you need before you do
						</h1>
						<p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
							Stop grinding random problem sets. Newton builds a practice plan
							around your actual gaps, adapts as you improve, and makes sure you
							never forget what you have learned.
						</p>
						<div className="mt-8 flex flex-col sm:flex-row gap-3">
							<Button size="lg" className="text-base" asChild>
								<Link href="/sign-up">
									Start practicing free
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-4 ml-1"
										strokeWidth={1.5}
									/>
								</Link>
							</Button>
							<Button variant="outline" size="lg" className="text-base" asChild>
								<Link href="/solve">See how it works</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 border-t">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="text-center max-w-2xl mx-auto mb-16">
						<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-foreground">
							Not another worksheet. A system.
						</h2>
						<p className="mt-4 text-muted-foreground text-lg">
							Practice only works when it targets the right skills, at the right
							difficulty, at the right time. Zomath handles all three.
						</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{stats.map((stat) => (
							<div
								key={stat.label}
								className="rounded-xl border bg-card p-6 text-center"
							>
								<div className="mx-auto mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10">
									<HugeiconsIcon
										icon={stat.icon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<div className="text-3xl font-medium text-foreground">
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

			<section className="py-24 lg:py-32 border-t">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mb-16">
						<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-foreground">
							How it works
						</h2>
						<p className="mt-4 text-muted-foreground text-lg">
							From diagnostic to mastery, Newton guides every step.
						</p>
					</div>
					<div className="grid md:grid-cols-2 gap-8">
						{steps.map((item) => (
							<div
								key={item.step}
								className="relative rounded-xl border bg-card p-6 lg:p-8"
							>
								<div className="flex items-start gap-4">
									<div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
										<HugeiconsIcon
											icon={item.icon}
											className="size-5 text-primary"
											strokeWidth={1.5}
										/>
									</div>
									<div>
										<span className="text-xs font-medium text-primary tracking-wider uppercase">
											{item.step}
										</span>
										<h3 className="mt-1 text-xl font-medium text-foreground">
											{item.title}
										</h3>
										<p className="mt-2 text-muted-foreground leading-relaxed">
											{item.description}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 border-t">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mb-16">
						<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-foreground">
							What a drill session feels like
						</h2>
						<p className="mt-4 text-muted-foreground text-lg">
							Each session is a focused conversation between you and Newton, not
							a lonely worksheet.
						</p>
					</div>
					<div className="space-y-6">
						{sessionSteps.map((item, index) => (
							<div
								key={item.phase}
								className="relative flex items-start gap-6 lg:gap-8"
							>
								<div className="flex flex-col items-center">
									<div className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-primary/10">
										<HugeiconsIcon
											icon={item.icon}
											className="size-5 text-primary"
											strokeWidth={1.5}
										/>
									</div>
									{index < sessionSteps.length - 1 && (
										<div className="w-px flex-1 bg-border min-h-12 mt-2" />
									)}
								</div>
								<div className="pb-8 pt-1">
									<h3 className="text-lg font-medium text-foreground">
										{item.phase}
									</h3>
									<p className="mt-2 text-muted-foreground leading-relaxed max-w-xl">
										{item.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 border-t">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="text-center max-w-2xl mx-auto mb-16">
						<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-foreground">
							Practice across every topic
						</h2>
						<p className="mt-4 text-muted-foreground text-lg">
							From foundational skills to competition-level challenges, Zomath
							has problems designed to build genuine understanding.
						</p>
					</div>
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{categories.map((cat) => (
							<div
								key={cat.title}
								className="group rounded-xl border bg-card p-6 hover:border-primary/30 transition-colors"
							>
								<div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 mb-4">
									<HugeiconsIcon
										icon={cat.icon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="text-lg font-medium text-foreground">
									{cat.title}
								</h3>
								<p className="mt-2 text-sm text-muted-foreground leading-relaxed">
									{cat.description}
								</p>
								<Separator className="my-4" />
								<ul className="space-y-1.5 mb-4">
									{cat.examples.map((ex) => (
										<li
											key={ex}
											className="flex items-center gap-2 text-sm text-muted-foreground"
										>
											<HugeiconsIcon
												icon={CheckmarkCircle02Icon}
												className="size-3.5 text-primary shrink-0"
												strokeWidth={1.5}
											/>
											{ex}
										</li>
									))}
								</ul>
								<div className="inline-flex items-center gap-1 text-sm font-medium text-primary">
									<span>{cat.count} problems</span>
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-3.5 group-hover:translate-x-0.5 transition-transform"
										strokeWidth={1.5}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 border-t">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mb-16">
						<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-foreground">
							What makes Zomath practice different
						</h2>
						<p className="mt-4 text-muted-foreground text-lg">
							Most practice tools give you problems. Zomath gives you a learning
							system.
						</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{differentiators.map((item) => (
							<div key={item.title} className="flex flex-col">
								<div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 mb-4">
									<HugeiconsIcon
										icon={item.icon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="text-lg font-medium text-foreground">
									{item.title}
								</h3>
								<p className="mt-2 text-muted-foreground leading-relaxed">
									{item.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 border-t">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="text-center max-w-2xl mx-auto mb-16">
						<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-foreground">
							Worksheets vs. Zomath Practice
						</h2>
						<p className="mt-4 text-muted-foreground text-lg">
							The difference is not just digital. It is structural.
						</p>
					</div>
					<div className="max-w-3xl mx-auto">
						<div className="grid grid-cols-[1fr_1fr] gap-4">
							<div className="text-center pb-4">
								<span className="text-sm font-medium text-muted-foreground">
									Traditional worksheets
								</span>
							</div>
							<div className="text-center pb-4">
								<span className="text-sm font-medium text-primary">
									Zomath Practice
								</span>
							</div>
							{comparisons.map((row) => (
								<ComparisonRow
									key={row.traditional}
									traditional={row.traditional}
									zomath={row.zomath}
								/>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 border-t">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-3xl mx-auto">
						<div className="rounded-xl border bg-card p-8 lg:p-12">
							<div className="flex items-start gap-4 mb-6">
								<div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
									<HugeiconsIcon
										icon={FavouriteIcon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<div>
									<p className="text-foreground text-lg leading-relaxed italic">
										"I used to do 50 problems a night and still feel lost. With
										Zomath, I do 10 problems in 12 minutes and actually
										understand what I am doing. The next day in class, I am the
										one explaining things to my table."
									</p>
									<div className="mt-4">
										<p className="text-sm font-medium text-foreground">
											Priya M.
										</p>
										<p className="text-sm text-muted-foreground">
											10th grade, Honors Algebra 2
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 border-t">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mb-16">
						<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-foreground">
							Frequently asked questions
						</h2>
						<p className="mt-4 text-muted-foreground text-lg">
							Everything you want to know about Zomath Practice.
						</p>
					</div>
					<div className="max-w-3xl">
						<Accordion type="single" collapsible className="space-y-4">
							{faqs.map((faq, index) => (
								<AccordionItem
									key={index}
									value={`faq-${index}`}
									className="rounded-xl border bg-card px-6"
								>
									<AccordionTrigger className="text-left text-foreground font-medium hover:no-underline py-5">
										{faq.question}
									</AccordionTrigger>
									<AccordionContent className="text-muted-foreground leading-relaxed pb-5">
										{faq.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 border-t">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="rounded-2xl bg-primary/5 border p-8 lg:p-16">
						<div className="max-w-2xl mx-auto text-center">
							<div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10">
								<HugeiconsIcon
									icon={GraduateFemaleIcon}
									className="size-6 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-foreground">
								Stop practicing blindly
							</h2>
							<p className="mt-4 text-muted-foreground text-lg leading-relaxed">
								Every minute you spend on Zomath Practice is directed at the
								skill that will move you forward the most. No filler, no
								repetition of what you already know, no gaps left unchecked.
							</p>
							<div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
								<Button size="lg" className="text-base" asChild>
									<Link href="/sign-up">
										Start your first drill
										<HugeiconsIcon
											icon={ArrowRight02Icon}
											className="size-4 ml-1"
											strokeWidth={1.5}
										/>
									</Link>
								</Button>
								<Button
									variant="outline"
									size="lg"
									className="text-base"
									asChild
								>
									<Link href="/ask">Talk to Newton first</Link>
								</Button>
							</div>
							<p className="mt-4 text-sm text-muted-foreground">
								Free to start. No credit card required.
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
