"use client";

import {
	ArrowRight02Icon,
	BookOpen01Icon,
	BrainIcon,
	Camera02Icon,
	PuzzleIcon,
	Rocket02Icon,
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

function ValueCard({
	icon,
	title,
	description,
}: {
	icon: React.ReactNode;
	title: string;
	description: string;
}) {
	return (
		<div className="rounded-2xl border bg-background p-8 transition-shadow hover:shadow-md">
			<div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
				{icon}
			</div>
			<h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>
			<p className="text-muted-foreground leading-relaxed">{description}</p>
		</div>
	);
}

function PersonaCard({
	icon,
	title,
	subtitle,
	description,
}: {
	icon: React.ReactNode;
	title: string;
	subtitle: string;
	description: string;
}) {
	return (
		<div className="flex flex-col rounded-2xl border bg-background p-8">
			<div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-muted text-foreground">
				{icon}
			</div>
			<h3 className="text-lg font-semibold text-foreground">{title}</h3>
			<p className="mb-3 text-sm font-medium text-primary">{subtitle}</p>
			<p className="text-muted-foreground leading-relaxed">{description}</p>
		</div>
	);
}

function FeaturePillar({
	icon,
	title,
	description,
}: {
	icon: React.ReactNode;
	title: string;
	description: string;
}) {
	return (
		<div className="flex gap-5">
			<div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
				{icon}
			</div>
			<div>
				<h3 className="mb-1 text-base font-semibold text-foreground">
					{title}
				</h3>
				<p className="text-sm text-muted-foreground leading-relaxed">
					{description}
				</p>
			</div>
		</div>
	);
}

export default function AboutPage() {
	return (
		<main className="flex flex-col">
			<section className="py-24 lg:py-32">
				<div className="mx-auto max-w-7xl px-4 lg:px-12">
					<div className="mx-auto max-w-3xl text-center">
						<p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
							About Zomath
						</p>
						<h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
							Every student deserves to truly understand math
						</h1>
						<p className="text-lg text-muted-foreground leading-relaxed lg:text-xl">
							Zomath was built on a simple belief: math is not about memorizing
							steps and crunching numbers. It is about thinking clearly, seeing
							patterns, and building confidence that extends far beyond the
							classroom.
						</p>
					</div>
				</div>
			</section>

			<section className="bg-muted py-24 lg:py-32">
				<div className="mx-auto max-w-7xl px-4 lg:px-12">
					<div className="grid gap-16 lg:grid-cols-2 lg:items-center">
						<div>
							<p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
								The problem we saw
							</p>
							<h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
								Math education is broken, and students are paying the price
							</h2>
							<div className="space-y-4 text-muted-foreground leading-relaxed">
								<p>
									Too many students learn math as a set of disconnected rules.
									Memorize this formula. Apply that procedure. Get the right
									answer. Move on. The result is fragile understanding that
									crumbles the moment a problem looks slightly different from
									the textbook example.
								</p>
								<p>
									We watched friends, siblings, and classmates struggle not
									because they were incapable, but because they never had
									someone who could explain the "why" behind the "what." A tutor
									costs $80 per hour. A textbook can not answer follow-up
									questions. And a calculator certainly can not teach you how to
									think.
								</p>
								<p>
									Zomath exists to change that. We built an AI tutor, Newton,
									who is patient, available around the clock, and genuinely
									invested in helping you understand, not just arrive at the
									correct answer.
								</p>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-4">
							<div className="rounded-2xl border bg-background p-6">
								<p className="mb-1 text-3xl font-bold text-primary">73%</p>
								<p className="text-sm text-muted-foreground">
									of students say they forget math concepts right after a test
								</p>
							</div>
							<div className="rounded-2xl border bg-background p-6">
								<p className="mb-1 text-3xl font-bold text-primary">$80+</p>
								<p className="text-sm text-muted-foreground">
									average hourly rate for private math tutoring in the US
								</p>
							</div>
							<div className="rounded-2xl border bg-background p-6">
								<p className="mb-1 text-3xl font-bold text-primary">1 in 3</p>
								<p className="text-sm text-muted-foreground">
									students report math anxiety that affects their performance
								</p>
							</div>
							<div className="rounded-2xl border bg-background p-6">
								<p className="mb-1 text-3xl font-bold text-primary">24/7</p>
								<p className="text-sm text-muted-foreground">
									when students actually need help, most resources are
									unavailable
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="mx-auto max-w-7xl px-4 lg:px-12">
					<div className="mx-auto max-w-2xl text-center">
						<p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
							Meet Newton
						</p>
						<h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
							An AI tutor that actually teaches
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							Newton is not a search engine. It is not a calculator with a chat
							window. It is a patient, adaptive tutor that meets you where you
							are and guides you toward real understanding, one question at a
							time.
						</p>
					</div>

					<div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
						<FeaturePillar
							icon={
								<HugeiconsIcon
									icon={BrainIcon}
									className="size-5"
									strokeWidth={1.5}
								/>
							}
							title="Adaptive explanations"
							description="Newton adjusts its explanations to your level. Struggling with a prerequisite? It notices and fills the gap before moving on. Already comfortable? It challenges you to go deeper."
						/>
						<FeaturePillar
							icon={
								<HugeiconsIcon
									icon={BrainIcon}
									className="size-5"
									strokeWidth={1.5}
								/>
							}
							title="Socratic dialogue"
							description="Instead of dumping answers, Newton asks questions. It walks you through the reasoning process so you build intuition, not dependency on a solution key."
						/>
						<FeaturePillar
							icon={
								<HugeiconsIcon
									icon={Camera02Icon}
									className="size-5"
									strokeWidth={1.5}
								/>
							}
							title="Photo to understanding"
							description="Snap a photo of any problem and Newton does not just solve it. It breaks down every step, identifies the underlying concept, and connects it to what you already know."
						/>
						<FeaturePillar
							icon={
								<HugeiconsIcon
									icon={BrainIcon}
									className="size-5"
									strokeWidth={1.5}
								/>
							}
							title="Connected concepts"
							description="Newton maps how each idea relates to others. You never learn in isolation. Every new concept is placed in context, building a web of understanding that actually sticks."
						/>
						<FeaturePillar
							icon={
								<HugeiconsIcon
									icon={BrainIcon}
									className="size-5"
									strokeWidth={1.5}
								/>
							}
							title="Targeted practice"
							description="After identifying where you need work, Newton generates practice problems at exactly the right difficulty. Not too easy, not overwhelming, always productive."
						/>
						<FeaturePillar
							icon={
								<HugeiconsIcon
									icon={BrainIcon}
									className="size-5"
									strokeWidth={1.5}
								/>
							}
							title="Progress that shows"
							description="Newton tracks your growth across concepts and skills. You see exactly where you have improved and where to focus next, turning vague feelings into clear momentum."
						/>
					</div>
				</div>
			</section>

			<section className="bg-muted py-24 lg:py-32">
				<div className="mx-auto max-w-7xl px-4 lg:px-12">
					<div className="mx-auto max-w-2xl text-center">
						<p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
							Our values
						</p>
						<h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
							What we believe
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							These principles shape every feature we build, every explanation
							Newton gives, and every decision we make as a team.
						</p>
					</div>

					<div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						<ValueCard
							icon={
								<HugeiconsIcon
									icon={BrainIcon}
									className="size-6"
									strokeWidth={1.5}
								/>
							}
							title="Understanding over answers"
							description="Getting the right answer is a byproduct, not the goal. We optimize for deep, transferable understanding that students carry with them into every future math class and beyond."
						/>
						<ValueCard
							icon={
								<HugeiconsIcon
									icon={BrainIcon}
									className="size-6"
									strokeWidth={1.5}
								/>
							}
							title="Empathy in every interaction"
							description="Math anxiety is real. Newton never judges, never rushes, and never makes a student feel small for asking a question. Patience is not a feature, it is a principle."
						/>
						<ValueCard
							icon={
								<HugeiconsIcon
									icon={BrainIcon}
									className="size-6"
									strokeWidth={1.5}
								/>
							}
							title="Curiosity as the engine"
							description="The best learning happens when students want to know more. We design experiences that spark questions, reward exploration, and make the beauty of math visible."
						/>
						<ValueCard
							icon={
								<HugeiconsIcon
									icon={BrainIcon}
									className="size-6"
									strokeWidth={1.5}
								/>
							}
							title="Transparency in how we teach"
							description="We never hide the reasoning behind a step. Every explanation can be unpacked further. Every concept is traced back to its foundations. Nothing is magic."
						/>
						<ValueCard
							icon={
								<HugeiconsIcon
									icon={PuzzleIcon}
									className="size-6"
									strokeWidth={1.5}
								/>
							}
							title="Connection, not isolation"
							description="No concept exists in a vacuum. Our Concept Map makes relationships explicit, so students always see how new ideas fit into the bigger picture of mathematical knowledge."
						/>
						<ValueCard
							icon={
								<HugeiconsIcon
									icon={BookOpen01Icon}
									className="size-6"
									strokeWidth={1.5}
								/>
							}
							title="Accessible to every learner"
							description="Great math education should not be a luxury. Zomath is built to reach students regardless of their school quality, budget, or background. Knowledge should be universal."
						/>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="mx-auto max-w-7xl px-4 lg:px-12">
					<div className="mx-auto max-w-2xl text-center">
						<p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
							Built for
						</p>
						<h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
							Students who learn differently
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							Whether you are catching up, keeping pace, or pushing ahead,
							Zomath adapts to your goals and your pace. Here are some of the
							learners we had in mind.
						</p>
					</div>

					<div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						<PersonaCard
							icon={
								<HugeiconsIcon
									icon={BrainIcon}
									className="size-5"
									strokeWidth={1.5}
								/>
							}
							title="The high schooler"
							subtitle="Algebra through Calculus"
							description="Stuck on homework at 10pm with no one to ask. Newton is there with a patient, step-by-step walkthrough that actually makes sense."
						/>
						<PersonaCard
							icon={
								<HugeiconsIcon
									icon={Rocket02Icon}
									className="size-5"
									strokeWidth={1.5}
								/>
							}
							title="The self-learner"
							subtitle="Going at your own pace"
							description="Learning outside a classroom is freeing but lonely. Zomath gives you structure, feedback, and a tutor who never gets tired of your questions."
						/>
						<PersonaCard
							icon={
								<HugeiconsIcon
									icon={BrainIcon}
									className="size-5"
									strokeWidth={1.5}
								/>
							}
							title="The competitor"
							subtitle="AMC, AIME, and beyond"
							description="Competition math demands creative problem-solving, not rote methods. Newton helps you build the flexible thinking that competition problems reward."
						/>
						<PersonaCard
							icon={
								<HugeiconsIcon
									icon={BrainIcon}
									className="size-5"
									strokeWidth={1.5}
								/>
							}
							title="The returning student"
							subtitle="Rebuilding foundations"
							description="Coming back to math after years away is intimidating. Zomath meets you at whatever level you are and rebuilds confidence one concept at a time."
						/>
					</div>
				</div>
			</section>

			<section className="bg-muted py-24 lg:py-32">
				<div className="mx-auto max-w-7xl px-4 lg:px-12">
					<div className="mx-auto max-w-2xl">
						<p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
							Common questions
						</p>
						<h2 className="mb-10 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
							About Zomath and Newton
						</h2>

						<Accordion type="single" collapsible className="space-y-3">
							<AccordionItem
								value="item-1"
								className="rounded-xl border bg-background px-6"
							>
								<AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
									Is Newton just a chatbot that gives answers?
								</AccordionTrigger>
								<AccordionContent className="text-muted-foreground leading-relaxed">
									No. Newton is designed to teach, not to tell. When you ask a
									question, it walks you through the reasoning process step by
									step. It asks follow-up questions to check your understanding
									and adapts its explanations based on your responses. The goal
									is always for you to walk away knowing why something works,
									not just that it works.
								</AccordionContent>
							</AccordionItem>

							<AccordionItem
								value="item-2"
								className="rounded-xl border bg-background px-6"
							>
								<AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
									What math topics does Zomath cover?
								</AccordionTrigger>
								<AccordionContent className="text-muted-foreground leading-relaxed">
									Zomath currently covers topics from pre-algebra through AP
									Calculus and introductory linear algebra, including
									competition math fundamentals. Our Concept Map spans over
									2,000 interconnected topics, and we are continuously expanding
									into more advanced areas based on student demand.
								</AccordionContent>
							</AccordionItem>

							<AccordionItem
								value="item-3"
								className="rounded-xl border bg-background px-6"
							>
								<AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
									Can Zomath replace my math teacher?
								</AccordionTrigger>
								<AccordionContent className="text-muted-foreground leading-relaxed">
									Zomath is a complement, not a replacement. Great teachers
									provide inspiration, classroom community, and pedagogical
									expertise that technology cannot fully replicate. What Zomath
									provides is something different: unlimited, patient,
									one-on-one support whenever you need it. Think of Newton as a
									tutor who is always available, not a substitute for the human
									connection of a great classroom.
								</AccordionContent>
							</AccordionItem>

							<AccordionItem
								value="item-4"
								className="rounded-xl border bg-background px-6"
							>
								<AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
									How does the photo-to-solution feature work?
								</AccordionTrigger>
								<AccordionContent className="text-muted-foreground leading-relaxed">
									When you snap a photo of a math problem, Zomath recognizes the
									content, identifies the relevant concepts, and then Newton
									walks you through the solution interactively. It does not just
									show steps on a screen. It explains each one, checks if you
									understand, and connects the problem to the broader concept so
									you can handle similar problems on your own.
								</AccordionContent>
							</AccordionItem>

							<AccordionItem
								value="item-5"
								className="rounded-xl border bg-background px-6"
							>
								<AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
									Is my data and progress private?
								</AccordionTrigger>
								<AccordionContent className="text-muted-foreground leading-relaxed">
									Yes. Your learning data belongs to you. We use progress
									tracking solely to improve your experience, to help Newton
									personalize explanations, and to show you your growth. We
									never sell student data, and we never use it to train models
									without explicit, informed consent.
								</AccordionContent>
							</AccordionItem>

							<AccordionItem
								value="item-6"
								className="rounded-xl border bg-background px-6"
							>
								<AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
									What does the name Zomath mean?
								</AccordionTrigger>
								<AccordionContent className="text-muted-foreground leading-relaxed">
									The "Zo" comes from the Greek word for life, "zoe." Math is
									not a dead subject frozen in textbooks. It is alive, dynamic,
									and deeply connected to how we understand the world. Zomath is
									about bringing that life back into math education, making it
									feel as vivid and real as it actually is.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="mx-auto max-w-7xl px-4 lg:px-12">
					<div className="mx-auto max-w-3xl text-center">
						<h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
							Ready to learn math the way it was meant to be learned?
						</h2>
						<p className="mb-10 text-lg text-muted-foreground leading-relaxed">
							Join the students who are trading memorization for understanding.
							Newton is ready whenever you are.
						</p>
						<div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
							<Button asChild size="lg" className="gap-2 text-base">
								<Link href="/sign-up">
									Start learning for free
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-4"
										strokeWidth={1.5}
									/>
								</Link>
							</Button>
							<Button
								asChild
								variant="outline"
								size="lg"
								className="gap-2 text-base"
							>
								<Link href="/features">
									Explore features
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-4"
										strokeWidth={1.5}
									/>
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
