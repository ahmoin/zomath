"use client";

import {
	AbacusIcon,
	ArrowRight02Icon,
	Camera01Icon,
	CheckmarkCircle02Icon,
	CourseIcon,
	MultiplicationSignIcon,
	PlusSignIcon,
	Rocket01Icon,
	TangentIcon,
	ViewIcon,
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

const topics = [
	{
		icon: PlusSignIcon,
		title: "Linear Equations",
		description:
			"Solve single-variable equations, understand balancing both sides, and master multi-step problems with confidence.",
		skills: [
			"One-step equations",
			"Two-step equations",
			"Variables on both sides",
			"Fractional coefficients",
		],
	},
	{
		icon: AbacusIcon,
		title: "Functions & Graphing",
		description:
			"From plotting points to understanding domain and range, see how equations come alive on the coordinate plane.",
		skills: [
			"Function notation",
			"Linear functions",
			"Slope-intercept form",
			"Interpreting graphs",
		],
	},
	{
		icon: MultiplicationSignIcon,
		title: "Polynomials",
		description:
			"Add, subtract, multiply, and factor polynomials. Understand the structure behind expressions and why factoring works.",
		skills: [
			"Adding polynomials",
			"Multiplying binomials",
			"FOIL method",
			"Factoring trinomials",
		],
	},
	{
		icon: AbacusIcon,
		title: "Inequalities",
		description:
			"Extend your equation-solving skills to inequalities, including compound inequalities and systems on the number line.",
		skills: [
			"Solving inequalities",
			"Graphing solutions",
			"Compound inequalities",
			"Absolute value inequalities",
		],
	},
	{
		AbacusIcon,
		title: "Quadratics",
		description:
			"Tackle quadratic equations head on, from factoring and completing the square to the quadratic formula and parabolas.",
		skills: [
			"Factoring quadratics",
			"Quadratic formula",
			"Completing the square",
			"Graphing parabolas",
		],
	},
	{
		icon: AbacusIcon,
		title: "Rational Expressions",
		description:
			"Work with fractions containing polynomials, simplify complex expressions, and solve rational equations step by step.",
		skills: [
			"Simplifying rationals",
			"Multiplying and dividing",
			"Adding and subtracting",
			"Solving rational equations",
		],
	},
	{
		icon: AbacusIcon,
		title: "Systems of Equations",
		description:
			"Solve systems using substitution, elimination, and graphing. Understand what intersection really means.",
		skills: [
			"Substitution method",
			"Elimination method",
			"Graphing systems",
			"Real-world applications",
		],
	},
	{
		icon: AbacusIcon,
		title: "Exponents & Radicals",
		description:
			"Master the rules of exponents and radical expressions, the foundation for advanced algebra and beyond.",
		skills: [
			"Exponent rules",
			"Scientific notation",
			"Simplifying radicals",
			"Rational exponents",
		],
	},
];

const features = [
	{
		icon: Camera01Icon,
		title: "Solve",
		subtitle: "Photo to solution",
		description:
			"Stuck on an algebra problem? Snap a photo and Newton walks you through every step, explaining the reasoning behind each move so you actually understand it.",
	},
	{
		icon: AbacusIcon,
		title: "Ask Newton",
		subtitle: "AI chat tutor",
		description:
			"Confused about why we flip the inequality sign? Ask Newton. He adapts to your level, gives hints instead of just answers, and never makes you feel dumb.",
	},
	{
		icon: AbacusIcon,
		title: "Concept Map",
		subtitle: "See the connections",
		description:
			"Algebra is a web of connected ideas. The Concept Map shows you how linear equations relate to functions, how factoring connects to quadratics, and where you stand in the bigger picture.",
	},
	{
		icon: TangentIcon,
		title: "Practice",
		subtitle: "Targeted drills",
		description:
			"Practice the exact type of problem you need to work on. Newton generates problems at your difficulty level, tracks what you get wrong, and helps you improve fast.",
	},
];

const learningPath = [
	{
		step: 1,
		title: "Foundations",
		topics: "Variables, expressions, order of operations",
		duration: "1-2 weeks",
	},
	{
		step: 2,
		title: "Linear Equations",
		topics: "One-step through multi-step equations",
		duration: "2-3 weeks",
	},
	{
		step: 3,
		title: "Inequalities",
		topics: "Solving and graphing inequalities",
		duration: "1-2 weeks",
	},
	{
		step: 4,
		title: "Functions",
		topics: "Notation, graphing, linear functions",
		duration: "2-3 weeks",
	},
	{
		step: 5,
		title: "Systems",
		topics: "Substitution, elimination, applications",
		duration: "2-3 weeks",
	},
	{
		step: 6,
		title: "Polynomials",
		topics: "Operations, factoring, binomials",
		duration: "2-3 weeks",
	},
	{
		step: 7,
		title: "Quadratics",
		topics: "Factoring, formula, completing the square",
		duration: "3-4 weeks",
	},
	{
		step: 8,
		title: "Advanced",
		topics: "Rationals, radicals, exponent rules",
		duration: "3-4 weeks",
	},
];

const faqs = [
	{
		question:
			"I keep making sign errors in algebra. Can Newton help with that?",
		answer:
			"Absolutely. Sign errors are one of the most common struggles in algebra, and Newton is specifically designed to catch patterns in your mistakes. When you practice on Zomath, Newton tracks where you slip up and gives you targeted problems to build the habit of checking signs. Over time, you will develop an instinct for it rather than just trying to be more careful.",
	},
	{
		question: "What level of algebra does Zomath cover?",
		answer:
			"Zomath covers the full range of algebra, from pre-algebra fundamentals like variables and expressions through Algebra 2 topics like rational expressions and radical equations. Whether you are just starting out or preparing for an exam, Newton adjusts to your level and helps you progress from where you are.",
	},
	{
		question: "How is this different from watching algebra videos?",
		answer:
			"Videos are passive. You watch someone solve a problem and it makes sense, but when you try it yourself, you get stuck. Zomath is active learning. Newton guides you through problems step by step, asks you to try each move yourself, and gives you hints when you need them. You build real problem-solving muscle, not just familiarity.",
	},
	{
		question: "Can I use Zomath for my homework?",
		answer:
			"Yes, but with an important distinction. You can snap a photo of a homework problem and Newton will walk you through how to solve it, but he will not just give you the answer. The goal is understanding, not copying. By the time you finish working through it with Newton, you will be able to solve similar problems on your own.",
	},
	{
		question:
			"I am preparing for a math competition. Is Zomath useful for that?",
		answer:
			"Definitely. Competition math requires creative problem solving, not just following procedures. Newton can help you see alternative approaches, recognize patterns, and build the algebraic fluency that competition problems demand. Use Practice mode to drill specific techniques and Ask Newton to explore clever solutions to tough problems.",
	},
	{
		question: "How long does it take to get through algebra on Zomath?",
		answer:
			"It depends on your starting point and how consistently you practice. Most students who spend 20 to 30 minutes a day on Zomath see significant improvement within a few weeks. The Concept Map tracks your progress, so you always know what you have mastered and what to focus on next.",
	},
];

export default function AlgebraPage() {
	return (
		<main className="flex flex-col">
			<section className="relative overflow-hidden py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-3xl">
						<div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground mb-6">
							<HugeiconsIcon
								icon={CourseIcon}
								className="size-4"
								strokeWidth={1.5}
							/>
							Zomath Subject Guide
						</div>
						<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
							Finally understand algebra, not just survive it
						</h1>
						<p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
							Algebra is the language of mathematics. Newton helps you speak it
							fluently, from your first variable to your last quadratic. No
							memorization tricks, no shortcuts that break down. Just real
							understanding, built step by step.
						</p>
						<div className="flex flex-col sm:flex-row gap-3">
							<Button size="lg" asChild>
								<Link href="/practice?subject=algebra">
									Start learning algebra
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-4 ml-1"
										strokeWidth={1.5}
									/>
								</Link>
							</Button>
							<Button size="lg" variant="outline" asChild>
								<Link href="/ask">Ask Newton a question</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mb-16">
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Every algebra topic, covered deeply
						</h2>
						<p className="text-muted-foreground text-lg leading-relaxed">
							From foundational equations to advanced quadratics, Newton guides
							you through each topic with explanations that actually make sense
							and practice that adapts to you.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{topics.map((topic) => (
							<div
								key={topic.title}
								className="group rounded-xl border bg-card p-6 hover:border-primary/50 transition-colors"
							>
								<div className="rounded-lg bg-muted p-2.5 w-fit mb-4">
									<HugeiconsIcon
										icon={AbacusIcon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="font-semibold text-foreground mb-2">
									{topic.title}
								</h3>
								<p className="text-sm text-muted-foreground leading-relaxed mb-4">
									{topic.description}
								</p>
								<ul className="space-y-1.5">
									{topic.skills.map((skill) => (
										<li
											key={skill}
											className="flex items-start gap-2 text-sm text-muted-foreground"
										>
											<HugeiconsIcon
												icon={CheckmarkCircle02Icon}
												className="size-4 text-primary shrink-0 mt-0.5"
												strokeWidth={1.5}
											/>
											{skill}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32 bg-muted/30">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mb-16">
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Built for how you actually learn algebra
						</h2>
						<p className="text-muted-foreground text-lg leading-relaxed">
							Algebra requires practice, feedback, and connecting ideas
							together. Zomath gives you all three, powered by Newton, an AI
							tutor that actually understands math.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						{features.map((feature) => (
							<div
								key={feature.title}
								className="rounded-xl border bg-card p-8"
							>
								<div className="rounded-lg bg-muted p-2.5 w-fit mb-4">
									<HugeiconsIcon
										icon={feature.icon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<div className="flex items-baseline gap-2 mb-2">
									<h3 className="font-semibold text-foreground text-lg">
										{feature.title}
									</h3>
									<span className="text-sm text-muted-foreground">
										{feature.subtitle}
									</span>
								</div>
								<p className="text-muted-foreground leading-relaxed">
									{feature.description}
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
							A clear path from confusion to mastery
						</h2>
						<p className="text-muted-foreground text-lg leading-relaxed">
							Algebra builds on itself. If your foundation is shaky, everything
							above it wobbles. This path makes sure you are solid at every step
							before moving forward.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
						{learningPath.map((step) => (
							<div
								key={step.step}
								className="relative rounded-xl border bg-card p-6"
							>
								<div className="flex items-center gap-3 mb-3">
									<span className="flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
										{step.step}
									</span>
									<h3 className="font-semibold text-foreground">
										{step.title}
									</h3>
								</div>
								<p className="text-sm text-muted-foreground mb-2">
									{step.topics}
								</p>
								<div className="flex items-center gap-1.5 text-xs text-muted-foreground">
									<HugeiconsIcon
										icon={AbacusIcon}
										className="size-3.5"
										strokeWidth={1.5}
									/>
									{step.duration}
								</div>
							</div>
						))}
					</div>

					<div className="mt-8 text-center">
						<p className="text-sm text-muted-foreground mb-4">
							Your path may vary based on your starting level. Newton
							personalizes the sequence for you.
						</p>
						<Button variant="outline" asChild>
							<Link href="/concept-map?subject=algebra">
								View your concept map
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

			<Separator />

			<section className="py-24 lg:py-32 bg-muted/30">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="text-center max-w-2xl mx-auto mb-16">
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Algebra students are getting it
						</h2>
						<p className="text-muted-foreground text-lg leading-relaxed">
							Thousands of students use Zomath to finally make algebra click.
							Here is what the numbers look like.
						</p>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{[
							{
								value: "2.3M+",
								label: "Algebra problems solved",
								icon: AbacusIcon,
							},
							{
								value: "89%",
								label: "Students improve test scores",
								icon: AbacusIcon,
							},
							{
								value: "4.8",
								label: "Average rating from students",
								icon: AbacusIcon,
							},
							{
								value: "12 min",
								label: "Avg. time to a breakthrough",
								icon: AbacusIcon,
							},
						].map((stat) => (
							<div
								key={stat.label}
								className="rounded-xl border bg-card p-8 text-center"
							>
								<HugeiconsIcon
									icon={stat.icon}
									className="size-6 text-primary mx-auto mb-3"
									strokeWidth={1.5}
								/>
								<div className="text-3xl font-semibold text-foreground mb-1">
									{stat.value}
								</div>
								<div className="text-sm text-muted-foreground">
									{stat.label}
								</div>
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
							Students who used to dread algebra
						</h2>
						<p className="text-muted-foreground text-lg leading-relaxed">
							Real stories from students who went from confused to confident.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-6">
						{[
							{
								quote:
									"I used to freeze on word problems because I could not set up the equation. Newton taught me to translate English into algebra step by step. Now I actually look forward to them.",
								name: "Sofia R.",
								detail: "10th grade, Algebra 2",
							},
							{
								quote:
									"My teacher moves fast and I was too embarrassed to ask questions. With Newton, I can ask the same thing five different ways until it makes sense. No judgment, just help.",
								name: "Jaylen M.",
								detail: "9th grade, Algebra 1",
							},
							{
								quote:
									"I was stuck on factoring for weeks. The Concept Map showed me I was missing a prerequisite skill, and once I went back and fixed that, factoring just clicked. Game changer.",
								name: "Aisha K.",
								detail: "Self-learner, preparing for college placement",
							},
						].map((testimonial) => (
							<div
								key={testimonial.name}
								className="rounded-xl border bg-card p-8 flex flex-col"
							>
								<div className="mb-4">
									<HugeiconsIcon
										icon={ViewIcon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<p className="text-foreground leading-relaxed mb-6 flex-1">
									&ldquo;{testimonial.quote}&rdquo;
								</p>
								<div>
									<div className="font-semibold text-foreground text-sm">
										{testimonial.name}
									</div>
									<div className="text-xs text-muted-foreground">
										{testimonial.detail}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32 bg-muted/30">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mx-auto">
						<div className="text-center mb-12">
							<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
								Common questions about learning algebra on Zomath
							</h2>
						</div>

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
					<div className="rounded-2xl border bg-card p-12 lg:p-16 text-center">
						<div className="inline-flex items-center justify-center size-14 rounded-2xl bg-primary/10 mb-6">
							<HugeiconsIcon
								icon={Rocket01Icon}
								className="size-7 text-primary"
								strokeWidth={1.5}
							/>
						</div>
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Start understanding algebra today
						</h2>
						<p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto mb-8">
							Whether you are starting from scratch or prepping for an exam,
							Newton meets you where you are and helps you get where you need to
							be. No more staring at problems hoping the answer will appear.
						</p>
						<div className="flex flex-col sm:flex-row gap-3 justify-center">
							<Button size="lg" asChild>
								<Link href="/practice?subject=algebra">
									Start practicing now
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-4 ml-1"
										strokeWidth={1.5}
									/>
								</Link>
							</Button>
							<Button size="lg" variant="outline" asChild>
								<Link href="/solve">Solve a problem</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
