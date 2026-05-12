import {
	AnalyticsUpIcon,
	ArrowRight02Icon,
	BrainIcon,
	CheckmarkCircle02Icon,
	CopyIcon,
	CrownIcon,
	LayerIcon,
	LightbulbOffIcon,
	Pen01Icon,
	Rocket02Icon,
	StarIcon,
	Tap01Icon,
	Target01Icon,
	Timer02Icon,
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

const competitions = [
	{
		title: "AMC 8 / 10 / 12",
		description:
			"The starting line. Build speed, accuracy, and foundational problem-solving with contest-style questions that test what you know and how you think.",
		icon: Target01Icon,
	},
	{
		title: "AIME",
		description:
			"The proving ground. Master the multi-step reasoning and creative leaps that separate qualifiers from the rest of the field.",
		icon: LightbulbOffIcon,
	},
	{
		title: "USA(J)MO",
		description:
			"The big stage. Train on proof-writing, deep connections between topics, and the elegant arguments that olympiad problems demand.",
		icon: CrownIcon,
	},
	{
		title: "MathCounts",
		description:
			"Speed meets precision. Drill the quick-fire problems and learn the shortcuts and strategies that win at every round.",
		icon: Timer02Icon,
	},
];

const trainingSteps = [
	{
		step: "01",
		title: "Assess your level",
		description:
			"Newton evaluates your current skill across every competition topic, from basic counting to advanced number theory. No wasted time on what you already know.",
		icon: Target01Icon,
	},
	{
		step: "02",
		title: "Get your training plan",
		description:
			"Receive a personalized curriculum targeting your weakest areas and the highest-value skills for your target competition.",
		icon: Tap01Icon,
	},
	{
		step: "03",
		title: "Practice with purpose",
		description:
			"Work through competition-style problems with Newton's strategic hints. He nudges you toward the key insight instead of handing you the answer.",
		icon: Pen01Icon,
	},
	{
		step: "04",
		title: "Review and level up",
		description:
			"After every problem, analyze your approach, learn alternative solutions, and build the pattern recognition that competitors rely on under pressure.",
		icon: Rocket02Icon,
	},
];

const features = [
	{
		title: "Timed Practice Modes",
		description:
			"Simulate real contest conditions with countdown timers, scoring rules, and problem sets matched to your target competition format.",
		icon: Timer02Icon,
	},
	{
		title: "Strategic Hints from Newton",
		description:
			"Newton teaches you how competitors think about problems, offering strategic framings and nudges that sharpen your instincts over time.",
		icon: BrainIcon,
	},
	{
		title: "Pattern Recognition Training",
		description:
			"Competition math runs on patterns. Newton helps you spot recurring structures and shared techniques across hundreds of problems.",
		icon: LayerIcon,
	},
	{
		title: "Connected Concept Maps",
		description:
			"See how topics link together. The number theory you learn for AMC 10 might be the key insight for an AIME geometry problem.",
		icon: Tap01Icon,
	},
	{
		title: "Multiple Solution Paths",
		description:
			"Every problem comes with several approaches, not just the one the author had in mind. Learn to be flexible and creative when the clock is ticking.",
		icon: LightbulbOffIcon,
	},
	{
		title: "Detailed Progress Tracking",
		description:
			"Know exactly where you stand for each competition level and topic. Track your improvement over time and see what to focus on next.",
		icon: StarIcon,
	},
];

const topics = [
	{
		title: "Number Theory",
		content:
			"Divisibility rules, modular arithmetic, prime factorization, Euler's totient theorem, Chinese Remainder Theorem, Diophantine equations, and the clever manipulations that show up in every competition from AMC to USAMO.",
	},
	{
		title: "Combinatorics & Probability",
		content:
			"Counting principles, inclusion-exclusion, generating functions, expected value, conditional probability, and the systematic casework that turns impossible-looking problems into manageable ones.",
	},
	{
		title: "Geometry",
		content:
			"Similar triangles, power of a point, coordinate geometry, transformations, trigonometric identities, and the elegant synthetic arguments that make competition geometry so rewarding.",
	},
	{
		title: "Algebra & Functions",
		content:
			"Functional equations, sequences and series, inequalities, complex numbers, polynomial roots, and the algebraic tricks that show up in every competition at every level.",
	},
];

const benefits = [
	"Deep problem-solving skills that transfer to every area of math and science",
	"Stronger college applications, especially at schools like MIT and Caltech",
	"Mathematical maturity that makes higher-level courses feel natural",
	"Creative thinking and the ability to approach unfamiliar situations with confidence",
	"Persistence and grit, the habits that compound over a lifetime",
	"A community of driven peers who push each other to think harder",
];

const testimonials = [
	{
		quote:
			"I went from scoring 60 on the AMC 10 to making AIME in one season. Newton's hints taught me to see the structure in problems I used to stare at blankly.",
		name: "Anya K.",
		detail: "AIME Qualifier, California",
	},
	{
		quote:
			"The pattern recognition training changed everything. Problems that looked random started feeling familiar, and I could approach them with a plan instead of just guessing.",
		name: "David C.",
		detail: "USAMO Qualifier, Texas",
	},
	{
		quote:
			"I tried other prep platforms, but they just gave me answers. Newton actually taught me how to think about each problem, which made me faster and more confident on contest day.",
		name: "Meera S.",
		detail: "MathCounts State Champion, New Jersey",
	},
];

export default function CompetitionPage() {
	return (
		<main>
			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-3xl">
						<div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-sm text-muted-foreground mb-6">
							<HugeiconsIcon
								icon={CopyIcon}
								className="size-4"
								strokeWidth={1.5}
							/>
							For AMC, AIME, USAMO, and MathCounts
						</div>
						<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-6">
							Competition math, unlocked.
						</h1>
						<p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
							From your first AMC to a USAMO proof, Newton trains you to think
							like a competitor, not just a student. Strategic problem solving,
							targeted drills, and AI coaching built for the students who want
							more.
						</p>
						<div className="flex flex-wrap gap-3">
							<Button asChild size="lg">
								<Link href="/practice">
									Start Training
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-4 ml-1"
										strokeWidth={1.5}
									/>
								</Link>
							</Button>
							<Button asChild variant="outline" size="lg">
								<Link href="#topics">Explore Topics</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="mb-12">
						<p className="text-sm font-medium text-primary mb-3">
							Competitions
						</p>
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
							Every level. Every goal.
						</h2>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
						{competitions.map((comp) => (
							<div
								key={comp.title}
								className="rounded-xl border border-border bg-background p-6 lg:p-8"
							>
								<div className="flex size-10 items-center justify-center rounded-lg bg-muted mb-4">
									<HugeiconsIcon
										icon={comp.icon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="text-lg font-semibold mb-2">{comp.title}</h3>
								<p className="text-muted-foreground text-sm leading-relaxed">
									{comp.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="mb-12">
						<p className="text-sm font-medium text-primary mb-3">
							How It Works
						</p>
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
							Newton trains you like a competitor, not a textbook.
						</h2>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{trainingSteps.map((step) => (
							<div
								key={step.step}
								className="rounded-xl border border-border p-6 lg:p-8"
							>
								<div className="text-4xl font-bold text-muted-foreground/20 mb-4">
									{step.step}
								</div>
								<HugeiconsIcon
									icon={step.icon}
									className="size-6 text-primary mb-3"
									strokeWidth={1.5}
								/>
								<h3 className="text-lg font-semibold mb-2">{step.title}</h3>
								<p className="text-muted-foreground text-sm leading-relaxed">
									{step.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="mb-12">
						<p className="text-sm font-medium text-primary mb-3">
							Built for Competition
						</p>
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
							Everything you need to prepare, and nothing you don't.
						</h2>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{features.map((feat) => (
							<div
								key={feat.title}
								className="rounded-xl border border-border bg-background p-6"
							>
								<HugeiconsIcon
									icon={feat.icon}
									className="size-6 text-primary mb-4"
									strokeWidth={1.5}
								/>
								<h3 className="font-semibold mb-2">{feat.title}</h3>
								<p className="text-muted-foreground text-sm leading-relaxed">
									{feat.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section id="topics" className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
						<div>
							<p className="text-sm font-medium text-primary mb-3">Topics</p>
							<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
								Master every topic competitors need.
							</h2>
							<p className="text-muted-foreground leading-relaxed">
								Competition math demands breadth and depth. Newton covers every
								core topic area with problems, instruction, and strategic
								coaching tuned to the level you are training for.
							</p>
						</div>
						<div>
							<Accordion type="single" collapsible>
								{topics.map((topic, i) => (
									<AccordionItem key={topic.title} value={`topic-${i}`}>
										<AccordionTrigger className="text-lg font-semibold">
											{topic.title}
										</AccordionTrigger>
										<AccordionContent className="text-muted-foreground leading-relaxed">
											{topic.content}
										</AccordionContent>
									</AccordionItem>
								))}
							</Accordion>
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="mb-12">
						<p className="text-sm font-medium text-primary mb-3">
							What Students Say
						</p>
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
							Results that speak for themselves.
						</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{testimonials.map((testimonial) => (
							<div
								key={testimonial.name}
								className="rounded-xl border border-border bg-background p-6 lg:p-8"
							>
								<div className="flex gap-0.5 mb-4">
									<FiveStars
										className="size-4 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<p className="text-foreground text-sm leading-relaxed mb-4">
									{testimonial.quote}
								</p>
								<div>
									<p className="font-semibold text-sm">{testimonial.name}</p>
									<p className="text-muted-foreground text-xs">
										{testimonial.detail}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
						<div>
							<p className="text-sm font-medium text-primary mb-3">
								Why Competition Math?
							</p>
							<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-6">
								Because how you think matters more than what you know.
							</h2>
							<p className="text-muted-foreground leading-relaxed">
								Competition math is not about memorizing formulas. It is about
								learning to approach unfamiliar problems with creativity and
								persistence. Those skills last far beyond any contest.
							</p>
						</div>
						<div>
							<ul className="space-y-4">
								{benefits.map((benefit) => (
									<li key={benefit} className="flex items-start gap-3">
										<HugeiconsIcon
											icon={CheckmarkCircle02Icon}
											className="size-5 text-primary mt-0.5 shrink-0"
											strokeWidth={1.5}
										/>
										<span className="text-foreground">{benefit}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="rounded-2xl border border-border bg-background p-12 lg:p-16 text-center">
						<HugeiconsIcon
							icon={AnalyticsUpIcon}
							className="size-12 text-primary mx-auto mb-6"
							strokeWidth={1.5}
						/>
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Your next competition starts here.
						</h2>
						<p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl mx-auto">
							Join thousands of students preparing for their next competition
							with Newton. Whether you are aiming for your first AIME qualifier
							or a USAMO medal, the training starts now.
						</p>
						<Button asChild size="lg">
							<Link href="/practice">
								Start Training for Free
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-4 ml-1"
									strokeWidth={1.5}
								/>
							</Link>
						</Button>
					</div>
				</div>
			</section>
		</main>
	);
}
