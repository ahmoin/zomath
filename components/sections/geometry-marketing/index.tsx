"use client";

import {
	Analytics01Icon,
	ArrowRight02Icon,
	BookOpen01Icon,
	BrainIcon,
	Camera01Icon,
	CheckmarkCircle01Icon,
	CompassIcon,
	FavouriteSquareIcon,
	InformationCircleIcon,
	LigatureIcon,
	LightbulbOffIcon,
	MathIcon,
	MoveToIcon,
	Pen01Icon,
	QuestionIcon,
	SparklesIcon,
	Target01Icon,
	TriangleIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { GeometryDiagram } from "@/components/illustrations/geometry-diagram";
import { CallToAction } from "@/components/sections/geometry-marketing/cta";
import {
	classicTheorems,
	conceptMapFeatures,
	learningPaths,
	proofSteps,
	sampleQuestions,
	struggles,
	topics,
} from "@/components/sections/geometry-marketing/data";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function GeometrySection() {
	return (
		<main className="flex flex-col">
			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-3xl">
						<div className="flex items-center gap-2 mb-6">
							<div className="flex items-center justify-center size-10 rounded-lg bg-primary/10">
								<HugeiconsIcon
									icon={TriangleIcon}
									className="size-5 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<span className="text-sm font-medium text-primary">Geometry</span>
						</div>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
							See the shapes. Build the logic. Own the proofs.
						</h1>
						<p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">
							Geometry is where math becomes visual and logical at the same
							time. Newton helps you develop spatial intuition, construct
							rigorous proofs, and truly understand why the rules work, not just
							that they exist.
						</p>
						<div className="flex flex-col sm:flex-row gap-3">
							<Link href="/practice?subject=geometry">
								<Button size="lg" className="gap-2">
									Start practicing
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-4"
										strokeWidth={1.5}
									/>
								</Button>
							</Link>
							<Link href="/ask">
								<Button size="lg" variant="outline" className="gap-2">
									Ask Newton a question
									<HugeiconsIcon
										icon={QuestionIcon}
										className="size-4"
										strokeWidth={1.5}
									/>
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mb-16">
						<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Every angle covered
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed">
							From basic shapes to competition-level proofs, Zomath meets you
							wherever you are and takes you further.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{topics.map((topic) => (
							<div
								key={topic.title}
								className="group rounded-xl border bg-card p-6 hover:border-primary/30 transition-colors"
							>
								<div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 mb-4">
									<HugeiconsIcon
										icon={topic.icon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="text-lg font-semibold text-foreground mb-2">
									{topic.title}
								</h3>
								<p className="text-muted-foreground text-sm leading-relaxed mb-4">
									{topic.description}
								</p>
								<div className="flex flex-wrap gap-2">
									{topic.concepts.map((concept) => (
										<span
											key={concept}
											className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
										>
											{concept}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32 bg-muted/50">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						<div>
							<div className="flex items-center gap-2 mb-4">
								<HugeiconsIcon
									icon={LightbulbOffIcon}
									className="size-5 text-primary"
									strokeWidth={1.5}
								/>
								<span className="text-sm font-medium text-primary">
									Visual-First Learning
								</span>
							</div>
							<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
								Geometry is visual. Your learning should be too.
							</h2>
							<p className="text-muted-foreground leading-relaxed mb-6">
								Newton does not just describe geometric concepts in words. When
								you snap a photo of a geometry problem, the AI reconstructs the
								diagram, labels every element, and walks you through the
								reasoning visually. Every step is annotated. Every relationship
								is made clear.
							</p>
							<ul className="space-y-3">
								{[
									"Snap a photo, get an interactive diagram back",
									"See theorems derived visually, not just stated",
									"Explore constructions step by step with Newton",
									"Watch how transformations reshape figures in real time",
								].map((item) => (
									<li key={item} className="flex items-start gap-3">
										<HugeiconsIcon
											icon={CheckmarkCircle01Icon}
											className="size-5 text-primary mt-0.5 shrink-0"
											strokeWidth={1.5}
										/>
										<span className="text-muted-foreground text-sm leading-relaxed">
											{item}
										</span>
									</li>
								))}
							</ul>
						</div>
						<div className="rounded-2xl border bg-card p-8 aspect-[4/3] flex items-center justify-center relative overflow-hidden">
							<div className="absolute inset-0 opacity-[0.04]">
								<GeometryDiagram className="w-full h-full" />
							</div>
							<div className="text-center relative z-10 space-y-4">
								<div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5">
									<HugeiconsIcon
										icon={Camera01Icon}
										className="size-4 text-primary"
										strokeWidth={1.5}
									/>
									<span className="text-xs font-medium text-primary">
										Snap a problem
									</span>
								</div>
								<div className="flex justify-center">
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-4 text-muted-foreground/40"
										strokeWidth={1.5}
									/>
								</div>
								<div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5">
									<HugeiconsIcon
										icon={LigatureIcon}
										className="size-4 text-primary"
										strokeWidth={1.5}
									/>
									<span className="text-xs font-medium text-primary">
										Interactive diagram
									</span>
								</div>
								<div className="flex justify-center">
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-4 text-muted-foreground/40"
										strokeWidth={1.5}
									/>
								</div>
								<div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5">
									<HugeiconsIcon
										icon={LightbulbOffIcon}
										className="size-4 text-primary"
										strokeWidth={1.5}
									/>
									<span className="text-xs font-medium text-primary">
										Step-by-step solution
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mb-16">
						<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Learn to prove, not just to compute
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed">
							Proofs are the heart of geometry, and most students have never
							been taught a systematic approach. Newton guides you through the
							four phases of every successful proof.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{proofSteps.map((step, idx) => (
							<div key={step.step} className="relative">
								<div className="rounded-xl border bg-card p-6 h-full">
									<div className="flex items-center gap-3 mb-4">
										<div className="flex items-center justify-center size-10 rounded-lg bg-primary/10">
											<HugeiconsIcon
												icon={step.icon}
												className="size-5 text-primary"
												strokeWidth={1.5}
											/>
										</div>
										<span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
											Step {idx + 1}
										</span>
									</div>
									<h3 className="text-lg font-semibold text-foreground mb-2">
										{step.step}
									</h3>
									<p className="text-muted-foreground text-sm leading-relaxed">
										{step.description}
									</p>
								</div>
								{idx < proofSteps.length - 1 && (
									<div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
										<HugeiconsIcon
											icon={ArrowRight02Icon}
											className="size-6 text-muted-foreground/30"
											strokeWidth={1.5}
										/>
									</div>
								)}
							</div>
						))}
					</div>
					<div className="mt-12 rounded-xl border bg-muted/30 p-6 lg:p-8">
						<div className="flex items-start gap-4">
							<div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 shrink-0">
								<HugeiconsIcon
									icon={InformationCircleIcon}
									className="size-5 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<div>
								<h4 className="text-base font-semibold text-foreground mb-1">
									Newton never skips the reasoning
								</h4>
								<p className="text-sm text-muted-foreground leading-relaxed">
									When Newton helps you write a proof, every statement is
									justified. No "it is obvious that" leaps. No hand-waving. You
									learn to write proofs that would satisfy the strictest grader,
									because you understand each logical step, not just the
									conclusion.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32 bg-muted/50">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mb-16">
						<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Common struggles, real solutions
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed">
							Geometry trips students up in predictable ways. Here is how Newton
							helps you break through each one.
						</p>
					</div>
					<div className="space-y-6">
						{struggles.map((item) => (
							<div
								key={item.challenge}
								className="rounded-xl border bg-card p-6 lg:p-8"
							>
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
									<div>
										<span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2">
											The struggle
										</span>
										<p className="text-foreground font-medium text-lg">
											{item.challenge}
										</p>
									</div>
									<div>
										<div className="flex items-center gap-2 mb-2">
											<HugeiconsIcon
												icon={LightbulbOffIcon}
												className="size-4 text-primary"
												strokeWidth={1.5}
											/>
											<span className="text-xs font-semibold text-primary uppercase tracking-wider">
												How Newton helps
											</span>
										</div>
										<p className="text-muted-foreground leading-relaxed">
											{item.solution}
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
					<div className="max-w-2xl mb-16">
						<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Three ways to master geometry
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed">
							Whether you are stuck on homework, preparing for a test, or
							training for competitions, Zomath has the right tool.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{[
							{
								icon: SparklesIcon,
								title: "Solve",
								body: "Snap a photo of any geometry problem. Newton identifies the figure, reconstructs the diagram, and guides you through the solution one step at a time. No jumping to the final answer.",
								href: "/solve",
								cta: "Try Solve",
							},
							{
								icon: BrainIcon,
								title: "Ask Newton",
								body: 'Chat with Newton about any geometry concept. Ask why a theorem works, request a different proof approach, or explore a "what if" scenario. The conversation adapts to your level.',
								href: "/ask",
								cta: "Ask a question",
							},
							{
								icon: Pen01Icon,
								title: "Practice",
								body: "Targeted drills that adapt to your weak spots. Work through proof sequences, computation problems, and visual reasoning exercises that build real fluency, not just memorization.",
								href: "/practice?subject=geometry",
								cta: "Start drilling",
							},
						].map(({ icon, title, body, href, cta }) => (
							<div key={title} className="rounded-xl border bg-card p-8">
								<div className="flex items-center justify-center size-12 rounded-xl bg-primary/10 mb-5">
									<HugeiconsIcon
										icon={icon}
										className="size-6 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="text-lg font-semibold text-foreground mb-2">
									{title}
								</h3>
								<p className="text-muted-foreground text-sm leading-relaxed mb-4">
									{body}
								</p>
								<Link
									href={href}
									className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
								>
									{cta}
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-3.5"
										strokeWidth={1.5}
									/>
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32 bg-muted/50">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						<div className="order-2 lg:order-1 rounded-2xl border bg-muted/30 p-8">
							<div className="space-y-3">
								{[
									{
										icon: TriangleIcon,
										label: "Triangle Congruence",
										sub: "Connected to 4 concepts",
										status: "In progress",
										active: false,
									},
									{
										icon: BookOpen01Icon,
										label: "Proof Strategies",
										sub: "Mastered 3 of 5 strategies",
										status: "Active",
										active: true,
									},
									{
										icon: CompassIcon,
										label: "Circle Theorems",
										sub: "Prerequisite: Similarity",
										status: "Locked",
										active: false,
										muted: true,
									},
									{
										icon: Target01Icon,
										label: "Similarity Ratios",
										sub: "Connected to 3 concepts",
										status: "In progress",
										active: false,
									},
									{
										icon: MoveToIcon,
										label: "Transformations",
										sub: "Connected to 2 concepts",
										status: "Not started",
										active: false,
										muted: true,
									},
								].map(({ icon, label, sub, status, active, muted }) => (
									<div
										key={label}
										className={`flex items-center gap-3 p-4 rounded-lg bg-background border${active ? " border-primary/30" : ""}`}
									>
										<HugeiconsIcon
											icon={icon}
											className={`size-5 ${muted ? "text-muted-foreground" : "text-primary"}`}
											strokeWidth={1.5}
										/>
										<div className="flex-1 min-w-0">
											<p className="text-sm font-medium text-foreground">
												{label}
											</p>
											<p className="text-xs text-muted-foreground">{sub}</p>
										</div>
										<span
											className={`text-xs font-medium shrink-0 ${muted ? "text-muted-foreground" : "text-primary"}`}
										>
											{status}
										</span>
									</div>
								))}
							</div>
						</div>
						<div className="order-1 lg:order-2">
							<div className="flex items-center gap-2 mb-4">
								<HugeiconsIcon
									icon={Analytics01Icon}
									className="size-5 text-primary"
									strokeWidth={1.5}
								/>
								<span className="text-sm font-medium text-primary">
									Concept Map
								</span>
							</div>
							<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
								See how every concept connects
							</h2>
							<p className="text-muted-foreground leading-relaxed mb-6">
								Geometry is deeply interconnected, but textbooks rarely show you
								the big picture. Zomath's Concept Map reveals how every theorem,
								definition, and technique relates to everything else. Know
								exactly where you stand and what to learn next.
							</p>
							<ul className="space-y-3 mb-8">
								{conceptMapFeatures.map((item) => (
									<li key={item} className="flex items-start gap-3">
										<HugeiconsIcon
											icon={CheckmarkCircle01Icon}
											className="size-5 text-primary mt-0.5 shrink-0"
											strokeWidth={1.5}
										/>
										<span className="text-muted-foreground text-sm leading-relaxed">
											{item}
										</span>
									</li>
								))}
							</ul>
							<Link href="/concept-map?subject=geometry">
								<Button variant="outline" className="gap-2">
									Explore the Concept Map
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-4"
										strokeWidth={1.5}
									/>
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mb-16">
						<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Your path from basics to brilliance
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed">
							Whether you are just starting geometry or training for national
							competitions, Newton adapts the content, difficulty, and teaching
							style to match your level.
						</p>
					</div>
					<div className="space-y-6">
						{learningPaths.map((path) => (
							<div
								key={path.level}
								className="rounded-xl border bg-card p-6 lg:p-8"
							>
								<div className="flex flex-col lg:flex-row gap-6">
									<div className="flex items-start gap-4 lg:w-1/3">
										<div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 shrink-0">
											<HugeiconsIcon
												icon={path.icon}
												className="size-5 text-primary"
												strokeWidth={1.5}
											/>
										</div>
										<div>
											<h3 className="text-lg font-semibold text-foreground">
												{path.level}
											</h3>
											<p className="text-xs font-medium text-muted-foreground">
												{path.subtitle}
											</p>
										</div>
									</div>
									<div className="lg:w-1/3">
										<p className="text-muted-foreground text-sm leading-relaxed">
											{path.description}
										</p>
									</div>
									<div className="lg:w-1/3">
										<p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
											Key topics
										</p>
										<div className="flex flex-wrap gap-2">
											{path.topics.map((topic) => (
												<span
													key={topic}
													className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
												>
													{topic}
												</span>
											))}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32 bg-muted/50">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<div className="flex items-center justify-center gap-2 mb-4">
							<HugeiconsIcon
								icon={Target01Icon}
								className="size-5 text-primary"
								strokeWidth={1.5}
							/>
							<span className="text-sm font-medium text-primary">
								Competition Ready
							</span>
						</div>
						<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Training for AMC, AIME, and beyond
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed">
							Competition geometry demands creative problem solving and deep
							pattern recognition. Newton trains you to spot clever
							constructions, apply power of a point, and navigate the classic
							theorems that show up again and again.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
						{[
							{
								value: "200+",
								label: "Competition-style problems with step-by-step guidance",
							},
							{
								value: "50+",
								label: "Classic theorems and lemmas explained visually",
							},
							{
								value: "Adaptive",
								label: "Difficulty that scales from beginner to Olympiad level",
							},
						].map(({ value, label }) => (
							<div
								key={label}
								className="rounded-xl border bg-card p-6 text-center"
							>
								<p className="text-3xl font-semibold text-foreground mb-1">
									{value}
								</p>
								<p className="text-sm text-muted-foreground">{label}</p>
							</div>
						))}
					</div>
					<div className="rounded-xl border bg-card p-6 lg:p-8 mb-6">
						<h3 className="text-lg font-semibold text-foreground mb-2">
							Clever constructions made intuitive
						</h3>
						<p className="text-sm text-muted-foreground leading-relaxed">
							The hardest part of competition geometry is knowing what line to
							draw. Newton trains your instinct by showing why certain auxiliary
							lines work, walking through classic construction patterns, and
							helping you develop your own creative eye. Each construction comes
							with a visual walkthrough so you see exactly why it unlocks the
							problem.
						</p>
					</div>
					<div className="rounded-xl border bg-card p-6 lg:p-8">
						<h3 className="text-lg font-semibold text-foreground mb-6">
							Classic theorems you will master
						</h3>
						<div className="space-y-4">
							{classicTheorems.map((theorem) => (
								<div
									key={theorem.name}
									className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 pb-4 border-b last:border-b-0 last:pb-0"
								>
									<div className="sm:w-44 shrink-0">
										<p className="text-sm font-semibold text-foreground">
											{theorem.name}
										</p>
									</div>
									<div className="flex-1">
										<p className="text-sm text-muted-foreground leading-relaxed">
											{theorem.application}
										</p>
										<p className="text-xs text-muted-foreground/70 mt-1">
											Appears in: {theorem.appears}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mb-16">
						<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Built for how geometry actually works
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed">
							Geometry is not like other math subjects. It demands a unique
							blend of visual reasoning, logical deduction, and creative
							insight. Every feature in Zomath is designed around these demands.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{[
							{
								icon: LigatureIcon,
								title: "Diagram reconstruction",
								body: "Snap a photo of a messy hand-drawn figure. Newton reconstructs a clean, labeled diagram with all points, lines, and angles identified. Then the reasoning begins from the actual geometry, not from guesswork about what the drawing shows.",
							},
							{
								icon: MoveToIcon,
								title: "Dynamic exploration",
								body: "Drag points, rotate figures, and watch how relationships hold or change. When you move a vertex and see that the circumcenter stays on the Euler line, the theorem stops being abstract and starts being real.",
							},
							{
								icon: MathIcon,
								title: "Algebra-geometry fluency",
								body: "Coordinate geometry, vector methods, and complex number techniques blur the line between algebra and geometry. Newton teaches you when a geometric insight is cleaner than a computation, and when algebra saves time over pure synthetic reasoning.",
							},
							{
								icon: FavouriteSquareIcon,
								title: "Pattern recognition training",
								body: "Expert geometers see hidden structures: cyclic quadrilaterals, similar triangles, and symmetric configurations. Newton trains your eye by surfacing these patterns progressively, building the intuition that makes hard problems feel approachable.",
							},
						].map(({ icon, title, body }) => (
							<div key={title} className="rounded-xl border bg-card p-6">
								<div className="flex items-center gap-3 mb-3">
									<div className="flex items-center justify-center size-9 rounded-lg bg-primary/10">
										<HugeiconsIcon
											icon={icon}
											className="size-4 text-primary"
											strokeWidth={1.5}
										/>
									</div>
									<h3 className="text-base font-semibold text-foreground">
										{title}
									</h3>
								</div>
								<p className="text-muted-foreground text-sm leading-relaxed">
									{body}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32 bg-muted/50">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-3xl mx-auto text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Geometry questions Newton loves to answer
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed">
							Here are some real things you can ask Newton right now.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
						{sampleQuestions.map((question) => (
							<Link
								key={question}
								href={`/ask?q=${encodeURIComponent(question)}`}
								className="flex items-center gap-3 rounded-lg border bg-card p-4 hover:border-primary/30 transition-colors group"
							>
								<HugeiconsIcon
									icon={QuestionIcon}
									className="size-4 text-muted-foreground shrink-0"
									strokeWidth={1.5}
								/>
								<span className="text-sm text-foreground group-hover:text-primary transition-colors">
									{question}
								</span>
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-3.5 text-muted-foreground/50 shrink-0 ml-auto group-hover:text-primary transition-colors"
									strokeWidth={1.5}
								/>
							</Link>
						))}
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32">
				<CallToAction />
			</section>
		</main>
	);
}
