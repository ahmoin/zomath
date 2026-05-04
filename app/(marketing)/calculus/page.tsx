"use client";

import {
	ArrowRight02Icon,
	BrainIcon,
	CalculatorIcon,
	Camera01Icon,
	ChartLineData02Icon,
	CheckmarkCircle02Icon,
	Compass01Icon,
	Infinity01Icon,
	LayerIcon,
	Link02Icon,
	PaintBoardIcon,
	QrCodeIcon,
	Target01Icon,
	TriangleIcon,
	WaveSquareIcon,
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
		icon: PaintBoardIcon,
		title: "Limits & Continuity",
		description:
			"Build the foundation of calculus by understanding how functions behave as inputs approach a value. Master epsilon-delta proofs, limit laws, and the squeeze theorem with Newton by your side.",
		skills: [
			"Evaluating limits algebraically and graphically",
			"Understanding infinite limits and limits at infinity",
			"Continuity and the Intermediate Value Theorem",
			"Epsilon-delta definitions made intuitive",
		],
	},
	{
		icon: ChartLineData02Icon,
		title: "Derivatives",
		description:
			"Unlock the meaning of rates of change. From the limit definition of the derivative to the chain rule, Newton walks you through every technique with visual, step-by-step explanations.",
		skills: [
			"Power rule, product rule, quotient rule",
			"Chain rule and implicit differentiation",
			"Related rates and optimization problems",
			"Higher-order derivatives and concavity",
		],
	},
	{
		icon: WaveSquareIcon,
		title: "Integration",
		description:
			"Connect the area under a curve to antiderivatives. Newton helps you see the Fundamental Theorem of Calculus not as a formula to memorize, but as a deep connection you truly understand.",
		skills: [
			"Riemann sums and the definite integral",
			"Antiderivatives and indefinite integrals",
			"The Fundamental Theorem of Calculus",
			"Integration by substitution, parts, and partial fractions",
		],
	},
	{
		icon: Infinity01Icon,
		title: "Sequences & Series",
		description:
			"Tackle the part of calculus that trips up most students. Newton breaks down convergence tests, Taylor series, and power series into ideas that click and stick.",
		skills: [
			"Sequences, convergence, and bounds",
			"Convergence tests: ratio, root, comparison, and more",
			"Taylor and Maclaurin series",
			"Power series and intervals of convergence",
		],
	},
	{
		icon: LayerIcon,
		title: "Multivariable Calculus",
		description:
			"Extend your intuition into three dimensions and beyond. Newton uses interactive visualizations so partial derivatives and multiple integrals feel natural, not abstract.",
		skills: [
			"Partial derivatives and the gradient",
			"Double and triple integrals",
			"Vector fields, line integrals, and Green's Theorem",
			"Stokes' Theorem and the Divergence Theorem",
		],
	},
	{
		icon: Compass01Icon,
		title: "Differential Equations",
		description:
			"Learn the language that models the real world. From separable equations to systems of ODEs, Newton shows you how to solve and interpret the equations that describe nature.",
		skills: [
			"Separable and first-order linear ODEs",
			"Euler's method and slope fields",
			"Second-order linear equations with constant coefficients",
			"Systems of differential equations and phase portraits",
		],
	},
];

const struggles = [
	{
		icon: PaintBoardIcon,
		title: "Memorizing without understanding",
		description:
			"Many students learn the derivative rules by rote and hit a wall when problems require creative thinking. Newton starts from the why, so rules become obvious consequences instead of arbitrary formulas.",
	},
	{
		icon: TriangleIcon,
		title: "Algebra gaps resurface",
		description:
			"Calculus amplifies algebra weaknesses. Zomath's Concept Map detects prerequisites you might be shaky on, whether that's factoring, rational exponents, or trig identities, and helps you rebuild that foundation.",
	},
	{
		icon: QrCodeIcon,
		title: "Abstract theorems feel irrelevant",
		description:
			"The Mean Value Theorem seems pointless until you see what it actually guarantees. Newton connects every theorem to concrete examples and real-world meaning, so nothing feels like a ritual.",
	},
	{
		icon: PaintBoardIcon,
		title: "Weak intuition for limits",
		description:
			"Limits underpin all of calculus, but the epsilon-delta definition is notoriously opaque. Newton uses progressive visual explanations that make the formal definition feel like a natural next step.",
	},
];

const faqs = [
	{
		question: "What calculus levels does Zomath cover?",
		answer:
			"Zomath covers everything from an introductory AP Calculus AB course through BC, multivariable calculus, and introductory differential equations. Whether you are just encountering limits for the first time or working through Stokes' Theorem, Newton adapts to your level.",
	},
	{
		question: "How is Newton different from just looking up solutions online?",
		answer:
			"Newton never just hands you the answer. Instead, it asks guiding questions, reveals one step at a time, and checks your understanding before moving on. The goal is for you to be able to solve the next problem on your own, without Newton.",
	},
	{
		question: "Can I upload a photo of my homework problem?",
		answer:
			"Yes. Use the Solve feature to snap a photo of any calculus problem. Newton will recognize it, parse the math, and then walk you through the solution step by step, asking questions along the way to make sure you understand each part.",
	},
	{
		question: "How does the Concept Map work for calculus?",
		answer:
			"The Concept Map visualizes how calculus topics connect. You will see that limits lead to derivatives, derivatives connect to integrals through the Fundamental Theorem, and series extend the idea of approximation. It highlights exactly where you are strong and where gaps exist, so you always know what to study next.",
	},
	{
		question: "Is Zomath useful for AP exam or competition prep?",
		answer:
			"Absolutely. Zomath's Practice engine has targeted drills aligned to AP Calculus AB and BC topics, and the adaptive difficulty helps competition students push beyond standard curriculum into deeper problem-solving. Newton can also work through past exam problems with you interactively.",
	},
	{
		question: "I haven't taken precalculus yet. Should I start here?",
		answer:
			"We recommend building a strong precalculus foundation first. Zomath has a dedicated Precalculus page with full coverage of functions, trigonometry, and analytic geometry. Newton will also let you know if a calculus topic requires prerequisites you haven't yet mastered.",
	},
];

export default function CalculusPage() {
	return (
		<main className="flex flex-col">
			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-3xl">
						<div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground mb-6">
							<HugeiconsIcon
								icon={CalculatorIcon}
								className="size-4"
								strokeWidth={1.5}
							/>
							<span>Calculus on Zomath</span>
						</div>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
							Stop memorizing calculus. Start understanding it.
						</h1>
						<p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
							Limits, derivatives, integrals, and series are not a list of
							formulas to cram. They are a way of seeing change and
							accumulation. Newton, your AI tutor, helps you build that vision
							from the ground up.
						</p>
						<div className="flex flex-wrap gap-3">
							<Button size="lg" asChild>
								<Link href="/signup">
									Start learning calculus free
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-5"
										strokeWidth={1.5}
									/>
								</Link>
							</Button>
							<Button variant="outline" size="lg" asChild>
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
						<p className="text-sm font-medium text-primary mb-3">
							How it works
						</p>
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Newton learns how you learn
						</h2>
						<p className="text-muted-foreground text-lg leading-relaxed">
							Newton is not a solution engine. It is a patient, adaptive tutor
							that meets you where you are, whether you are stuck on your first
							limit or wrestling with a triple integral.
						</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{
								icon: Camera01Icon,
								title: "Solve",
								description:
									"Snap a photo of any calculus problem. Newton walks you through it step by step, asking you to explain your reasoning at each stage.",
							},
							{
								icon: BrainIcon,
								title: "Ask Newton",
								description:
									"Chat with Newton like a tutor. Ask why the chain rule works, what a Riemann sum really means, or why the integral test applies.",
							},
							{
								icon: Link02Icon,
								title: "Concept Map",
								description:
									"See how every calculus topic connects. Discover gaps in your understanding and follow guided paths from limits to multivariable.",
							},
							{
								icon: Target01Icon,
								title: "Practice",
								description:
									"Targeted drills that adapt to your level. Newton identifies weak spots and generates problems that push you just beyond your comfort zone.",
							},
						].map((feature) => (
							<div key={feature.title} className="flex flex-col gap-4">
								<div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
									<HugeiconsIcon
										icon={feature.icon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="text-lg font-semibold text-foreground">
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
					<div className="max-w-2xl mb-16">
						<p className="text-sm font-medium text-primary mb-3">
							What you will learn
						</p>
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Every calculus topic, from limits to differential equations
						</h2>
						<p className="text-muted-foreground text-lg leading-relaxed">
							Zomath covers the full breadth of calculus with depth that goes
							beyond what any textbook can offer. Each topic is broken into
							skills, connected to prerequisites, and reinforced through
							practice.
						</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{topics.map((topic) => (
							<div
								key={topic.title}
								className="rounded-xl border bg-background p-6 flex flex-col gap-4"
							>
								<div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
									<HugeiconsIcon
										icon={topic.icon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="text-lg font-semibold text-foreground">
									{topic.title}
								</h3>
								<p className="text-sm text-muted-foreground leading-relaxed">
									{topic.description}
								</p>
								<ul className="flex flex-col gap-2 mt-auto pt-2">
									{topic.skills.map((skill) => (
										<li
											key={skill}
											className="flex items-start gap-2 text-sm text-muted-foreground"
										>
											<HugeiconsIcon
												icon={CheckmarkCircle02Icon}
												className="size-4 text-primary mt-0.5 shrink-0"
												strokeWidth={1.5}
											/>
											<span>{skill}</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="grid lg:grid-cols-2 gap-16 items-start">
						<div>
							<p className="text-sm font-medium text-primary mb-3">
								Why calculus is hard
							</p>
							<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
								The real reasons students get stuck
							</h2>
							<p className="text-muted-foreground text-lg leading-relaxed mb-6">
								Calculus is not inherently harder than other math. But it
								exposes gaps in understanding that earlier courses let you hide.
								Newton identifies those gaps and helps you fill them for good.
							</p>
							<Button variant="outline" asChild>
								<Link href="/ask">
									Ask Newton for help
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-4"
										strokeWidth={1.5}
									/>
								</Link>
							</Button>
						</div>
						<div className="flex flex-col gap-6">
							{struggles.map((struggle) => (
								<div key={struggle.title} className="flex gap-4">
									<div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
										<HugeiconsIcon
											icon={struggle.icon}
											className="size-5 text-primary"
											strokeWidth={1.5}
										/>
									</div>
									<div>
										<h3 className="text-base font-semibold text-foreground mb-1">
											{struggle.title}
										</h3>
										<p className="text-sm text-muted-foreground leading-relaxed">
											{struggle.description}
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
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div className="rounded-xl border bg-background p-8 flex flex-col gap-4">
							<div className="flex items-center gap-3 mb-2">
								<div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
									<HugeiconsIcon
										icon={Link02Icon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="text-lg font-semibold text-foreground">
									Your Calculus Concept Map
								</h3>
							</div>
							<div className="flex flex-col gap-3 text-sm">
								<div className="flex items-center gap-3 rounded-lg border px-4 py-3 bg-muted/50">
									<span className="font-medium text-foreground">Limits</span>
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-3.5 text-muted-foreground"
										strokeWidth={1.5}
									/>
									<span className="text-muted-foreground">Continuity</span>
								</div>
								<div className="flex items-center gap-3 rounded-lg border px-4 py-3 bg-muted/50">
									<span className="font-medium text-foreground">
										Derivatives
									</span>
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-3.5 text-muted-foreground"
										strokeWidth={1.5}
									/>
									<span className="text-muted-foreground">Rates of Change</span>
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-3.5 text-muted-foreground"
										strokeWidth={1.5}
									/>
									<span className="text-muted-foreground">Optimization</span>
								</div>
								<div className="flex items-center gap-3 rounded-lg border px-4 py-3 bg-muted/50">
									<span className="font-medium text-foreground">Integrals</span>
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-3.5 text-muted-foreground"
										strokeWidth={1.5}
									/>
									<span className="text-muted-foreground">Area</span>
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-3.5 text-muted-foreground"
										strokeWidth={1.5}
									/>
									<span className="text-muted-foreground">Volume</span>
								</div>
								<div className="flex items-center gap-3 rounded-lg border px-4 py-3 bg-muted/50">
									<span className="font-medium text-foreground">Series</span>
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-3.5 text-muted-foreground"
										strokeWidth={1.5}
									/>
									<span className="text-muted-foreground">Convergence</span>
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-3.5 text-muted-foreground"
										strokeWidth={1.5}
									/>
									<span className="text-muted-foreground">
										Taylor Polynomials
									</span>
								</div>
							</div>
							<p className="text-xs text-muted-foreground mt-2">
								This is a simplified view. Your actual Concept Map shows every
								connection and your mastery level for each node.
							</p>
						</div>
						<div>
							<p className="text-sm font-medium text-primary mb-3">
								Concept Map
							</p>
							<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
								See the whole picture, not just the next problem
							</h2>
							<p className="text-muted-foreground text-lg leading-relaxed mb-6">
								The Concept Map is your personal knowledge graph for calculus.
								It shows how every topic connects, highlights where you are
								strong in green, flags gaps in red, and recommends the most
								efficient path forward. No more studying blindly.
							</p>
							<ul className="flex flex-col gap-3">
								{[
									"Visualize prerequisites and dependencies at a glance",
									"Track mastery as you progress through each skill",
									"Get personalized recommendations for what to study next",
									"See how calculus connects to linear algebra, physics, and beyond",
								].map((item) => (
									<li
										key={item}
										className="flex items-start gap-2 text-muted-foreground"
									>
										<HugeiconsIcon
											icon={CheckmarkCircle02Icon}
											className="size-4 text-primary mt-0.5 shrink-0"
											strokeWidth={1.5}
										/>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mb-16">
						<p className="text-sm font-medium text-primary mb-3">Practice</p>
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Drills that adapt to you, not the other way around
						</h2>
						<p className="text-muted-foreground text-lg leading-relaxed">
							Every calculus skill needs practice. But not all practice is
							equal. Zomath generates problems calibrated to your current level,
							gradually increasing difficulty so you are always challenged but
							never overwhelmed.
						</p>
					</div>
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{
								title: "AP Calculus AB",
								description:
									"Full coverage of limits, derivatives, integrals, and the Fundamental Theorem. Aligned to College Board standards with free-response and multiple-choice practice.",
							},
							{
								title: "AP Calculus BC",
								description:
									"Everything in AB plus series, parametric equations, polar functions, and advanced integration techniques. Prepare for the BC exam with confidence.",
							},
							{
								title: "Competition prep",
								description:
									"Problems inspired by AMC, AIME, and Putnam that require creative applications of calculus. Push beyond the standard curriculum into deeper problem-solving.",
							},
							{
								title: "Multivariable",
								description:
									"Partial derivatives, multiple integrals, and vector calculus. Practice visualizing and computing in three dimensions with guided support from Newton.",
							},
							{
								title: "Differential equations",
								description:
									"From separable ODEs to systems and phase portraits. Build fluency with the techniques that show up in math, physics, and engineering courses.",
							},
							{
								title: "Spaced review",
								description:
									"Zomath tracks what you have learned and surfaces review problems at optimal intervals. Calculus builds on itself, and spaced practice keeps your foundation solid.",
							},
						].map((item) => (
							<div
								key={item.title}
								className="rounded-xl border bg-background p-6 flex flex-col gap-3"
							>
								<div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
									<HugeiconsIcon
										icon={PaintBoardIcon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="text-base font-semibold text-foreground">
									{item.title}
								</h3>
								<p className="text-sm text-muted-foreground leading-relaxed">
									{item.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32 bg-muted/30">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mb-12">
						<p className="text-sm font-medium text-primary mb-3">FAQ</p>
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Common questions about learning calculus on Zomath
						</h2>
					</div>
					<div className="max-w-2xl">
						<Accordion
							type="single"
							collapsible
							className="flex flex-col gap-3"
						>
							{faqs.map((faq, index) => (
								<AccordionItem
									key={index}
									value={`item-${index}`}
									className="rounded-xl border bg-background px-6"
								>
									<AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline py-5">
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

			<Separator />

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="rounded-2xl border bg-primary/5 p-8 lg:p-16 text-center">
						<div className="flex justify-center mb-6">
							<div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
								<HugeiconsIcon
									icon={PaintBoardIcon}
									className="size-6 text-primary"
									strokeWidth={1.5}
								/>
							</div>
						</div>
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4 max-w-xl mx-auto">
							The moment calculus clicks is closer than you think
						</h2>
						<p className="text-muted-foreground text-lg leading-relaxed max-w-lg mx-auto mb-8">
							Whether you are just starting limits or deep into multivariable,
							Newton is ready to help you understand, not just compute. Start
							for free today.
						</p>
						<div className="flex flex-wrap justify-center gap-3">
							<Button size="lg" asChild>
								<Link href="/signup">
									Start learning calculus free
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-5"
										strokeWidth={1.5}
									/>
								</Link>
							</Button>
							<Button variant="outline" size="lg" asChild>
								<Link href="/ask">Talk to Newton</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			<div className="h-8" />
		</main>
	);
}
