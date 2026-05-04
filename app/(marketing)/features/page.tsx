"use client";

import {
	ArrowRight02Icon,
	BookOpen01Icon,
	BrainIcon,
	Camera01Icon,
	ChartBubble01Icon,
	ChartLineData01Icon,
	ChartUpIcon,
	CheckmarkCircle02Icon,
	Clock01Icon,
	GraduateFemaleIcon,
	LayerIcon,
	LightbulbOffIcon,
	Shield01Icon,
	SmartPhone01Icon,
	SparklesIcon,
	Target01Icon,
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

const coreFeatures = [
	{
		icon: Camera01Icon,
		title: "Solve",
		subtitle: "Photo to understanding",
		description:
			"Snap a photo of any math problem and Newton walks you through it step by step. Not just the answer, but the reasoning behind every step so you actually understand the path from question to solution.",
		details: [
			"Handwritten and printed problems supported",
			"Covers algebra through competition math",
			"Every step explained in plain language",
			"Follow-up questions encouraged",
		],
	},
	{
		icon: ChartBubble01Icon,
		title: "Ask Newton",
		subtitle: "Your personal AI tutor",
		description:
			"Newton is not a search engine that spits out answers. It is a patient tutor that asks you questions, catches your misconceptions, and adapts to how you think. Stuck at 11pm before a test? Newton is there.",
		details: [
			"Conversational, not transactional",
			"Adapts to your level in real time",
			"Probes your understanding, not just your answers",
			"Available anytime you need help",
		],
	},
	{
		icon: ChartUpIcon,
		title: "Concept Map",
		subtitle: "See how math connects",
		description:
			"Math is not a list of isolated topics. The Concept Map shows you how everything fits together, from foundational skills to advanced theorems. See exactly where you stand and what to learn next.",
		details: [
			"Visual graph of mathematical relationships",
			"Highlights your strengths and gaps",
			"Suggests the most impactful next topic",
			"Tracks mastery as you progress",
		],
	},
	{
		icon: Target01Icon,
		title: "Practice",
		subtitle: "Drills that actually help",
		description:
			"Practice problems generated to target your weak spots, not random worksheets. Newton crafts problems at your level, adjusts difficulty as you improve, and explains mistakes so they do not happen twice.",
		details: [
			"Problems tailored to your gaps",
			"Adaptive difficulty that grows with you",
			"Detailed explanations for every mistake",
			"Competition math preparation tracks",
		],
	},
	{
		icon: ChartLineData01Icon,
		title: "Progress",
		subtitle: "Track your growth",
		description:
			"See how far you have come with detailed progress tracking across topics, skills, and problem types. Celebrate real understanding, not just completed assignments.",
		details: [
			"Mastery levels across all topics",
			"Time spent and problems solved metrics",
			"Streak tracking to build habits",
			"Weekly summaries and insights",
		],
	},
];

const differentiators = [
	{
		icon: BrainIcon,
		title: "Built to teach, not to cheat",
		description:
			"Every feature is designed around genuine understanding. Newton never just gives you the answer. It guides you to discover it yourself, so the knowledge actually sticks.",
	},
	{
		icon: LayerIcon,
		title: "One platform, every level",
		description:
			"From struggling with algebra to preparing for math olympiads, Zomath adapts. No need to switch apps as you grow. The platform grows with you.",
	},
	{
		icon: Shield01Icon,
		title: "Your data stays yours",
		description:
			"We do not sell your data. We do not show ads. Your learning journey is private, and the only thing we use your data for is making your experience better.",
	},
];

const faqItems = [
	{
		question: "What math levels does Zomath cover?",
		answer:
			"Zomath covers everything from pre-algebra through competition math. Whether you are learning to solve your first linear equation or tackling AMC problems, Newton adapts its explanations and practice problems to your level.",
	},
	{
		question: "How is Newton different from ChatGPT or other AI tools?",
		answer:
			"Newton is purpose-built for math education. Unlike general AI chatbots, Newton understands mathematical reasoning deeply, identifies your specific misconceptions, and structures its teaching around proven pedagogy. It asks you questions, checks your understanding at each step, and never just hands you the answer.",
	},
	{
		question: "Can I use Zomath for test preparation?",
		answer:
			"Absolutely. Zomath supports preparation for SAT Math, ACT Math, AP Calculus, AP Statistics, AMC, AIME, and more. Practice problems adapt to match the style and difficulty of your target exam, and Newton helps you build the conceptual foundation that makes test strategies actually work.",
	},
	{
		question: "Is Zomath suitable for self-learners?",
		answer:
			"Zomath was designed with self-learners in mind. The Concept Map provides a clear learning path, Practice generates problems at exactly your level, and Newton is always available to answer questions. You do not need a teacher or a curriculum to make consistent progress.",
	},
	{
		question: "Does it work with handwritten problems?",
		answer:
			"Yes. The Solve feature recognizes handwritten math from photos taken with your phone. Just snap a picture, and Newton will walk you through the problem step by step.",
	},
	{
		question: "How much does Zomath cost?",
		answer:
			"Zomath offers a free tier with daily access to Newton and limited Solve scans. The Pro plan unlocks unlimited interactions, full Concept Map access, advanced Practice tracks, and detailed progress analytics. Check our pricing page for current details.",
	},
];

export default function FeaturesPage() {
	return (
		<main className="flex flex-col">
			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-3xl mx-auto text-center">
						<div className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-1.5 mb-6">
							<HugeiconsIcon
								icon={SparklesIcon}
								className="size-4 text-primary"
								strokeWidth={1.5}
							/>
							<span className="text-sm font-medium text-muted-foreground">
								Powered by Newton
							</span>
						</div>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-6">
							Everything you need to master math
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
							Zomath is not another calculator or answer key. It is a complete
							learning platform built around one principle: genuine
							understanding. Here is what that looks like in practice.
						</p>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted/50">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mb-16">
						<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Five features, one goal
						</h2>
						<p className="text-lg text-muted-foreground">
							Every feature in Zomath works together toward a single purpose:
							helping you genuinely understand mathematics, from the ground up.
						</p>
					</div>

					<div className="space-y-12">
						{coreFeatures.map((feature, index) => (
							<div key={feature.title}>
								<div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
									<div>
										<div className="flex items-center gap-4 mb-4">
											<div className="flex items-center justify-center size-12 rounded-xl bg-primary/10">
												<HugeiconsIcon
													icon={feature.icon}
													className="size-6 text-primary"
													strokeWidth={1.5}
												/>
											</div>
											<div>
												<h3 className="text-2xl font-semibold text-foreground">
													{feature.title}
												</h3>
												<p className="text-sm text-muted-foreground">
													{feature.subtitle}
												</p>
											</div>
										</div>
										<p className="text-muted-foreground leading-relaxed mb-6">
											{feature.description}
										</p>
										<Link href="/pricing">
											<Button variant="outline" className="group">
												Try {feature.title}
												<HugeiconsIcon
													icon={ArrowRight02Icon}
													className="size-4 ml-1 group-hover:translate-x-0.5 transition-transform"
													strokeWidth={1.5}
												/>
											</Button>
										</Link>
									</div>
									<div className="bg-background border border-border rounded-2xl p-6 lg:p-8">
										<ul className="space-y-4">
											{feature.details.map((detail) => (
												<li key={detail} className="flex items-start gap-3">
													<HugeiconsIcon
														icon={CheckmarkCircle02Icon}
														className="size-5 text-primary shrink-0 mt-0.5"
														strokeWidth={1.5}
													/>
													<span className="text-foreground">{detail}</span>
												</li>
											))}
										</ul>
									</div>
								</div>
								{index < coreFeatures.length - 1 && (
									<Separator className="mt-12" />
								)}
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div>
							<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
								Newton makes the difference
							</h2>
							<p className="text-lg text-muted-foreground leading-relaxed mb-8">
								Most math apps give you answers. Newton gives you understanding.
								It is the AI tutor built specifically for mathematics, trained
								on proven pedagogy, and designed to adapt to how you think.
							</p>
							<div className="space-y-6">
								<div className="flex items-start gap-4">
									<div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 shrink-0">
										<HugeiconsIcon
											icon={LightbulbOffIcon}
											className="size-5 text-primary"
											strokeWidth={1.5}
										/>
									</div>
									<div>
										<h4 className="font-semibold text-foreground mb-1">
											Socratic method
										</h4>
										<p className="text-muted-foreground text-sm leading-relaxed">
											Newton asks questions before giving explanations. It helps
											you discover the answer yourself, which builds deeper and
											more lasting understanding.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-4">
									<div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 shrink-0">
										<HugeiconsIcon
											icon={Clock01Icon}
											className="size-5 text-primary"
											strokeWidth={1.5}
										/>
									</div>
									<div>
										<h4 className="font-semibold text-foreground mb-1">
											Always available
										</h4>
										<p className="text-muted-foreground text-sm leading-relaxed">
											Stuck on homework at midnight? Need a quick review before
											class? Newton is there 24/7, patient and ready, no
											scheduling required.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-4">
									<div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 shrink-0">
										<HugeiconsIcon
											icon={SmartPhone01Icon}
											className="size-5 text-primary"
											strokeWidth={1.5}
										/>
									</div>
									<div>
										<h4 className="font-semibold text-foreground mb-1">
											Works where you study
										</h4>
										<p className="text-muted-foreground text-sm leading-relaxed">
											Snap a photo from your phone, ask a question from your
											laptop, review concepts on your tablet. Zomath works
											seamlessly across all your devices.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="bg-muted/50 border border-border rounded-2xl p-8 lg:p-10">
							<div className="flex items-center gap-3 mb-6">
								<div className="flex items-center justify-center size-10 rounded-full bg-primary/10">
									<HugeiconsIcon
										icon={BrainIcon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<div>
									<p className="font-semibold text-foreground">Newton</p>
									<p className="text-xs text-muted-foreground">AI Math Tutor</p>
								</div>
							</div>
							<div className="space-y-4">
								<div className="bg-background rounded-xl rounded-tl-sm p-4 border border-border">
									<p className="text-sm text-foreground">
										I keep getting the chain rule wrong. Can you help?
									</p>
								</div>
								<div className="bg-primary/10 rounded-xl rounded-tr-sm p-4 border border-primary/20">
									<p className="text-sm text-foreground">
										Of course! Before I explain, let me ask: when you apply the
										chain rule, what do you think the "inner function" and
										"outer function" are in a problem like sin(x²)?
									</p>
								</div>
								<div className="bg-background rounded-xl rounded-tl-sm p-4 border border-border">
									<p className="text-sm text-foreground">
										The inner would be x² and the outer is sin of that?
									</p>
								</div>
								<div className="bg-primary/10 rounded-xl rounded-tr-sm p-4 border border-primary/20">
									<p className="text-sm text-foreground">
										Exactly right! So the chain rule says: take the derivative
										of the outer, evaluated at the inner, then multiply by the
										derivative of the inner. You already identified the pieces.
										So what would that look like for sin(x²)?
									</p>
								</div>
							</div>
							<p className="text-xs text-muted-foreground mt-4 text-center">
								Newton guides you to the answer. It does not just give it to
								you.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted/50">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="text-center max-w-2xl mx-auto mb-16">
						<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Why Zomath is different
						</h2>
						<p className="text-lg text-muted-foreground">
							We built Zomath because we were frustrated with math tools that
							optimize for shortcuts. Here is what sets us apart.
						</p>
					</div>
					<div className="grid md:grid-cols-3 gap-8">
						{differentiators.map((item) => (
							<div
								key={item.title}
								className="bg-background border border-border rounded-2xl p-8"
							>
								<div className="flex items-center justify-center size-12 rounded-xl bg-primary/10 mb-5">
									<HugeiconsIcon
										icon={item.icon}
										className="size-6 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="text-xl font-semibold text-foreground mb-3">
									{item.title}
								</h3>
								<p className="text-muted-foreground leading-relaxed">
									{item.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="text-center max-w-2xl mx-auto mb-16">
						<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Built for real students
						</h2>
						<p className="text-lg text-muted-foreground">
							Whether you are catching up, keeping up, or getting ahead, Zomath
							meets you where you are.
						</p>
					</div>
					<div className="grid md:grid-cols-2 gap-6">
						<div className="bg-muted/50 border border-border rounded-2xl p-8">
							<HugeiconsIcon
								icon={BookOpen01Icon}
								className="size-8 text-primary mb-4"
								strokeWidth={1.5}
							/>
							<h3 className="text-xl font-semibold text-foreground mb-2">
								High school students
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								Struggling with a specific topic or just want to stay ahead?
								Zomath aligns with your curriculum and gives you the exact help
								you need, when you need it. No more blank stares at homework.
							</p>
						</div>
						<div className="bg-muted/50 border border-border rounded-2xl p-8">
							<HugeiconsIcon
								icon={GraduateFemaleIcon}
								className="size-8 text-primary mb-4"
								strokeWidth={1.5}
							/>
							<h3 className="text-xl font-semibold text-foreground mb-2">
								Self-learners
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								Learning math on your own takes discipline and direction. The
								Concept Map gives you a clear path, Practice keeps you sharp,
								and Newton answers your questions so you never stay stuck.
							</p>
						</div>
						<div className="bg-muted/50 border border-border rounded-2xl p-8 md:col-span-2">
							<div className="grid md:grid-cols-2 gap-8 items-center">
								<div>
									<HugeiconsIcon
										icon={SparklesIcon}
										className="size-8 text-primary mb-4"
										strokeWidth={1.5}
									/>
									<h3 className="text-xl font-semibold text-foreground mb-2">
										Competition math prep
									</h3>
									<p className="text-muted-foreground leading-relaxed">
										Preparing for AMC, AIME, or other competitions requires a
										different kind of practice. Zomath offers dedicated tracks
										with challenging problems, proof-based reasoning, and
										strategy coaching from Newton.
									</p>
								</div>
								<div className="grid grid-cols-2 gap-4">
									<div className="bg-background border border-border rounded-xl p-5 text-center">
										<p className="text-3xl font-semibold text-primary mb-1">
											AMC
										</p>
										<p className="text-sm text-muted-foreground">
											10 & 12 prep
										</p>
									</div>
									<div className="bg-background border border-border rounded-xl p-5 text-center">
										<p className="text-3xl font-semibold text-primary mb-1">
											AIME
										</p>
										<p className="text-sm text-muted-foreground">
											Advanced tracks
										</p>
									</div>
									<div className="bg-background border border-border rounded-xl p-5 text-center">
										<p className="text-3xl font-semibold text-primary mb-1">
											SAT
										</p>
										<p className="text-sm text-muted-foreground">
											Math sections
										</p>
									</div>
									<div className="bg-background border border-border rounded-xl p-5 text-center">
										<p className="text-3xl font-semibold text-primary mb-1">
											AP
										</p>
										<p className="text-sm text-muted-foreground">
											Calc & Stats
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted/50">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mx-auto mb-12">
						<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Frequently asked questions
						</h2>
						<p className="text-lg text-muted-foreground">
							Common questions about Zomath and how it works.
						</p>
					</div>
					<div className="max-w-3xl mx-auto">
						<Accordion type="single" collapsible className="space-y-3">
							{faqItems.map((item, index) => (
								<AccordionItem
									key={index}
									value={`faq-${index}`}
									className="bg-background border border-border rounded-xl px-6"
								>
									<AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
										{item.question}
									</AccordionTrigger>
									<AccordionContent className="text-muted-foreground leading-relaxed pb-5">
										{item.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12 lg:p-16 text-center">
						<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Start understanding math today
						</h2>
						<p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
							Join thousands of students who are learning math the right way.
							Not by memorizing, but by truly understanding.
						</p>
						<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
							<Link href="/pricing">
								<Button size="lg" className="group">
									Get started free
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-4 ml-1 group-hover:translate-x-0.5 transition-transform"
										strokeWidth={1.5}
									/>
								</Button>
							</Link>
							<Link href="/solve">
								<Button variant="outline" size="lg">
									Try Solve
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
