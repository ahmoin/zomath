"use client";

import {
	AirportIcon,
	Analytics01Icon,
	ArrowRight02Icon,
	BookOpen01Icon,
	BrainIcon,
	Camera01Icon,
	CheckmarkCircle01Icon,
	CompassIcon,
	Copy01Icon,
	EyeIcon,
	FavouriteSquareIcon,
	GraduationScrollIcon,
	InformationCircleIcon,
	LayerIcon,
	LigatureIcon,
	LightbulbOffIcon,
	Link01Icon,
	MathIcon,
	MoveToIcon,
	Pen01Icon,
	QuestionIcon,
	Shield01Icon,
	SparklesIcon,
	SquareIcon,
	Target01Icon,
	TriangleIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const topics = [
	{
		icon: TriangleIcon,
		title: "Triangles",
		description:
			"Congruence criteria, similarity, Pythagorean theorem, special triangles, cevians, and area. Master every triangle property from basic to advanced.",
		concepts: [
			"SSS, SAS, ASA, AAS, HL",
			"Pythagorean triples",
			"Centroid, orthocenter, incenter",
			"Law of Sines and Cosines",
		],
	},
	{
		icon: CompassIcon,
		title: "Circles",
		description:
			"Arcs, sectors, inscribed angles, tangent lines, power of a point. Understand circles from the ground up.",
		concepts: [
			"Inscribed angle theorem",
			"Tangent-secant relationships",
			"Power of a Point",
			"Radical axes and coaxal circles",
		],
	},
	{
		icon: AirportIcon,
		title: "Coordinate Geometry",
		description:
			"Distance, midpoint, slope, line equations, and analytic proofs. Bridge algebra and geometry seamlessly.",
		concepts: [
			"Distance and midpoint formulas",
			"Line equations and intersections",
			"Conic sections basics",
			"Analytic proof techniques",
		],
	},
	{
		icon: LayerIcon,
		title: "Transformations",
		description:
			"Translations, rotations, reflections, dilations, and symmetry. See how shapes move through space.",
		concepts: [
			"Rigid motions and isometries",
			"Composition of transformations",
			"Symmetry groups",
			"Dilations and similarity",
		],
	},
	{
		icon: SquareIcon,
		title: "Polygons & Quadrilaterals",
		description:
			"Properties of parallelograms, trapezoids, regular polygons, interior and exterior angles. Build solid foundations.",
		concepts: [
			"Parallelogram criteria",
			"Interior and exterior angle sums",
			"Regular polygon properties",
			"Area and perimeter formulas",
		],
	},
	{
		icon: Shield01Icon,
		title: "Proofs & Logic",
		description:
			"Two-column proofs, paragraph proofs, and logical reasoning. Learn to construct airtight arguments step by step.",
		concepts: [
			"If-then statements and converses",
			"Direct and indirect proof",
			"Proof by contradiction",
			"Common proof strategies",
		],
	},
];

const struggles = [
	{
		challenge: "Staring at a proof with no idea where to start",
		solution:
			"Newton walks you through proof strategies with guiding questions instead of giving away the answer. You learn to identify what you know, what you need, and which theorems bridge the gap. Over time, you develop your own proof instincts.",
	},
	{
		challenge: "Memorizing formulas without understanding why they work",
		solution:
			"Every formula comes with a visual derivation. See why the area of a circle is πr², why the Pythagorean theorem holds, and why inscribed angles behave the way they do. When you understand the why, the what sticks naturally.",
	},
	{
		challenge: "Getting lost in multi-step construction problems",
		solution:
			"Break down complex problems into smaller, manageable pieces. Newton helps you identify what you know, what you need, and the logical path between them. Each step builds on the last, so you never feel overwhelmed.",
	},
	{
		challenge: "Connecting algebra to geometric concepts",
		solution:
			"Our Concept Map shows exactly how algebra and geometry intersect, from coordinate proofs to similarity ratios. No more siloed thinking. When you see the connections, both subjects become easier.",
	},
	{
		challenge: "Knowing which theorem to apply and when",
		solution:
			"Newton trains your pattern recognition by presenting problems that look different but use the same core ideas. You learn to spot the hidden triangle, the subtle cyclic quadrilateral, and the key auxiliary line that unlocks everything.",
	},
];

const proofSteps = [
	{
		step: "Identify",
		description:
			"What do you know? What are you trying to prove? Newton helps you list your givens and goals clearly.",
		icon: EyeIcon,
	},
	{
		step: "Connect",
		description:
			"Which theorems and definitions bridge your givens to your conclusion? Newton suggests paths without spoiling the journey.",
		icon: Link01Icon,
	},
	{
		step: "Construct",
		description:
			"Build your argument one logical step at a time. Each statement follows from the last. Newton checks your reasoning as you go.",
		icon: Pen01Icon,
	},
	{
		step: "Verify",
		description:
			"Review the complete proof. Does every step follow? Is anything assumed that should not be? Newton helps you catch gaps before your teacher does.",
		icon: CheckmarkCircle01Icon,
	},
];

const learningPaths = [
	{
		level: "Foundations",
		subtitle: "Grades 8-9",
		description:
			"Build your geometric vocabulary and intuition. Learn the basic properties of lines, angles, triangles, and circles. Start writing simple proofs.",
		topics: [
			"Angle relationships",
			"Triangle properties",
			"Parallel lines and transversals",
			"Intro to proofs",
		],
		icon: GraduationScrollIcon,
	},
	{
		level: "Intermediate",
		subtitle: "Grades 10-11",
		description:
			"Deepen your understanding with similarity, coordinate geometry, and more sophisticated proof techniques. Connect algebra and geometry fluently.",
		topics: [
			"Similarity and proportions",
			"Right triangle trigonometry",
			"Circle theorems",
			"Coordinate proofs",
		],
		icon: BookOpen01Icon,
	},
	{
		level: "Advanced",
		subtitle: "Competition Prep",
		description:
			"Tackle the classic theorems and clever constructions that define competition geometry. Train your creative problem solving and pattern recognition.",
		topics: [
			"Power of a Point",
			"Ceva and Menelaus",
			"Radical axes",
			"Olympiad constructions",
		],
		icon: Copy01Icon,
	},
];

const classicTheorems = [
	{
		name: "Power of a Point",
		application:
			"The Swiss Army knife of circle problems. Relates the products of segment lengths from a point to a circle.",
		appears: "AMC, AIME, and nearly every circle problem",
	},
	{
		name: "Ceva's Theorem",
		application:
			"Determines when three cevians of a triangle are concurrent. Essential for concurrency problems.",
		appears: "AIME, USAMO, and Olympiad geometry",
	},
	{
		name: "Menelaus' Theorem",
		application:
			"The collinearity counterpart to Ceva. Determines when three points on a triangle's sides are collinear.",
		appears: "AIME, competition proof problems",
	},
	{
		name: "Ptolemy's Theorem",
		application:
			"Connects the sides and diagonals of a cyclic quadrilateral. A bridge between geometry and algebra.",
		appears: "AMC 12, AIME, and number theory crossover",
	},
	{
		name: "Radical Axes",
		application:
			"The locus of points with equal power to two circles. Unifies seemingly unrelated circle configurations.",
		appears: "AIME, USAMO, and advanced problems",
	},
];

export default function GeometryPage() {
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
									icon={EyeIcon}
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
								<svg
									viewBox="0 0 400 300"
									className="w-full h-full"
									xmlns="http://www.w3.org/2000/svg"
								>
									<circle
										cx="200"
										cy="150"
										r="100"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
									/>
									<polygon
										points="200,50 300,230 100,230"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
									/>
									<line
										x1="100"
										y1="230"
										x2="200"
										y2="50"
										stroke="currentColor"
										strokeWidth="1.5"
									/>
									<line
										x1="300"
										y1="230"
										x2="200"
										y2="50"
										stroke="currentColor"
										strokeWidth="1.5"
									/>
									<line
										x1="100"
										y1="230"
										x2="300"
										y2="230"
										stroke="currentColor"
										strokeWidth="1.5"
									/>
									<line
										x1="200"
										y1="50"
										x2="200"
										y2="150"
										stroke="currentColor"
										strokeWidth="1"
										strokeDasharray="6,4"
									/>
									<line
										x1="150"
										y1="140"
										x2="250"
										y2="140"
										stroke="currentColor"
										strokeWidth="1"
										strokeDasharray="6,4"
									/>
									<circle cx="200" cy="150" r="3" fill="currentColor" />
									<circle cx="200" cy="50" r="3" fill="currentColor" />
									<circle cx="300" cy="230" r="3" fill="currentColor" />
									<circle cx="100" cy="230" r="3" fill="currentColor" />
									<line
										x1="300"
										y1="230"
										x2="100"
										y2="230"
										stroke="currentColor"
										strokeWidth="1"
										strokeDasharray="3,3"
									/>
								</svg>
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
						{struggles.map((item, idx) => (
							<div key={idx} className="rounded-xl border bg-card p-6 lg:p-8">
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
									<div>
										<div className="flex items-center gap-2 mb-2">
											<span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
												The struggle
											</span>
										</div>
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
						<div className="rounded-xl border bg-card p-8">
							<div className="flex items-center justify-center size-12 rounded-xl bg-primary/10 mb-5">
								<HugeiconsIcon
									icon={SparklesIcon}
									className="size-6 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<h3 className="text-lg font-semibold text-foreground mb-2">
								Solve
							</h3>
							<p className="text-muted-foreground text-sm leading-relaxed mb-4">
								Snap a photo of any geometry problem. Newton identifies the
								figure, reconstructs the diagram, and guides you through the
								solution one step at a time. No jumping to the final answer.
							</p>
							<Link
								href="/solve"
								className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
							>
								Try Solve
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-3.5"
									strokeWidth={1.5}
								/>
							</Link>
						</div>

						<div className="rounded-xl border bg-card p-8">
							<div className="flex items-center justify-center size-12 rounded-xl bg-primary/10 mb-5">
								<HugeiconsIcon
									icon={BrainIcon}
									className="size-6 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<h3 className="text-lg font-semibold text-foreground mb-2">
								Ask Newton
							</h3>
							<p className="text-muted-foreground text-sm leading-relaxed mb-4">
								Chat with Newton about any geometry concept. Ask why a theorem
								works, request a different proof approach, or explore a "what
								if" scenario. The conversation adapts to your level.
							</p>
							<Link
								href="/ask"
								className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
							>
								Ask a question
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-3.5"
									strokeWidth={1.5}
								/>
							</Link>
						</div>

						<div className="rounded-xl border bg-card p-8">
							<div className="flex items-center justify-center size-12 rounded-xl bg-primary/10 mb-5">
								<HugeiconsIcon
									icon={Pen01Icon}
									className="size-6 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<h3 className="text-lg font-semibold text-foreground mb-2">
								Practice
							</h3>
							<p className="text-muted-foreground text-sm leading-relaxed mb-4">
								Targeted drills that adapt to your weak spots. Work through
								proof sequences, computation problems, and visual reasoning
								exercises that build real fluency, not just memorization.
							</p>
							<Link
								href="/practice?subject=geometry"
								className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
							>
								Start drilling
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-3.5"
									strokeWidth={1.5}
								/>
							</Link>
						</div>
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32 bg-muted/50">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						<div className="order-2 lg:order-1 rounded-2xl border bg-muted/30 p-8">
							<div className="space-y-3">
								<div className="flex items-center gap-3 p-4 rounded-lg bg-background border">
									<HugeiconsIcon
										icon={TriangleIcon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
									<div className="flex-1 min-w-0">
										<p className="text-sm font-medium text-foreground">
											Triangle Congruence
										</p>
										<p className="text-xs text-muted-foreground">
											Connected to 4 concepts
										</p>
									</div>
									<span className="text-xs font-medium text-primary shrink-0">
										In progress
									</span>
								</div>
								<div className="flex items-center gap-3 p-4 rounded-lg bg-background border border-primary/30">
									<HugeiconsIcon
										icon={BookOpen01Icon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
									<div className="flex-1 min-w-0">
										<p className="text-sm font-medium text-foreground">
											Proof Strategies
										</p>
										<p className="text-xs text-muted-foreground">
											Mastered 3 of 5 strategies
										</p>
									</div>
									<span className="text-xs font-medium text-primary shrink-0">
										Active
									</span>
								</div>
								<div className="flex items-center gap-3 p-4 rounded-lg bg-background border">
									<HugeiconsIcon
										icon={CompassIcon}
										className="size-5 text-muted-foreground"
										strokeWidth={1.5}
									/>
									<div className="flex-1 min-w-0">
										<p className="text-sm font-medium text-foreground">
											Circle Theorems
										</p>
										<p className="text-xs text-muted-foreground">
											Prerequisite: Similarity
										</p>
									</div>
									<span className="text-xs font-medium text-muted-foreground shrink-0">
										Locked
									</span>
								</div>
								<div className="flex items-center gap-3 p-4 rounded-lg bg-background border">
									<HugeiconsIcon
										icon={Target01Icon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
									<div className="flex-1 min-w-0">
										<p className="text-sm font-medium text-foreground">
											Similarity Ratios
										</p>
										<p className="text-xs text-muted-foreground">
											Connected to 3 concepts
										</p>
									</div>
									<span className="text-xs font-medium text-primary shrink-0">
										In progress
									</span>
								</div>
								<div className="flex items-center gap-3 p-4 rounded-lg bg-background border">
									<HugeiconsIcon
										icon={MoveToIcon}
										className="size-5 text-muted-foreground"
										strokeWidth={1.5}
									/>
									<div className="flex-1 min-w-0">
										<p className="text-sm font-medium text-foreground">
											Transformations
										</p>
										<p className="text-xs text-muted-foreground">
											Connected to 2 concepts
										</p>
									</div>
									<span className="text-xs font-medium text-muted-foreground shrink-0">
										Not started
									</span>
								</div>
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
								{[
									"Visual map of every geometry concept and its prerequisites",
									"Real-time progress tracking shows what you have mastered",
									"Adaptive recommendations guide your next steps",
									"See how algebra, trigonometry, and geometry intersect",
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
						{learningPaths.map((path, _idx) => (
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
						<div className="rounded-xl border bg-card p-6 text-center">
							<p className="text-3xl font-semibold text-foreground mb-1">
								200+
							</p>
							<p className="text-sm text-muted-foreground">
								Competition-style problems with step-by-step guidance
							</p>
						</div>
						<div className="rounded-xl border bg-card p-6 text-center">
							<p className="text-3xl font-semibold text-foreground mb-1">50+</p>
							<p className="text-sm text-muted-foreground">
								Classic theorems and lemmas explained visually
							</p>
						</div>
						<div className="rounded-xl border bg-card p-6 text-center">
							<p className="text-3xl font-semibold text-foreground mb-1">
								Adaptive
							</p>
							<p className="text-sm text-muted-foreground">
								Difficulty that scales from beginner to Olympiad level
							</p>
						</div>
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
						<div className="rounded-xl border bg-card p-6">
							<div className="flex items-center gap-3 mb-3">
								<div className="flex items-center justify-center size-9 rounded-lg bg-primary/10">
									<HugeiconsIcon
										icon={LigatureIcon}
										className="size-4 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="text-base font-semibold text-foreground">
									Diagram reconstruction
								</h3>
							</div>
							<p className="text-muted-foreground text-sm leading-relaxed">
								Snap a photo of a messy hand-drawn figure. Newton reconstructs a
								clean, labeled diagram with all points, lines, and angles
								identified. Then the reasoning begins from the actual geometry,
								not from guesswork about what the drawing shows.
							</p>
						</div>

						<div className="rounded-xl border bg-card p-6">
							<div className="flex items-center gap-3 mb-3">
								<div className="flex items-center justify-center size-9 rounded-lg bg-primary/10">
									<HugeiconsIcon
										icon={MoveToIcon}
										className="size-4 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="text-base font-semibold text-foreground">
									Dynamic exploration
								</h3>
							</div>
							<p className="text-muted-foreground text-sm leading-relaxed">
								Drag points, rotate figures, and watch how relationships hold or
								change. When you move a vertex and see that the circumcenter
								stays on the Euler line, the theorem stops being abstract and
								starts being real.
							</p>
						</div>

						<div className="rounded-xl border bg-card p-6">
							<div className="flex items-center gap-3 mb-3">
								<div className="flex items-center justify-center size-9 rounded-lg bg-primary/10">
									<HugeiconsIcon
										icon={MathIcon}
										className="size-4 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="text-base font-semibold text-foreground">
									Algebra-geometry fluency
								</h3>
							</div>
							<p className="text-muted-foreground text-sm leading-relaxed">
								Coordinate geometry, vector methods, and complex number
								techniques blur the line between algebra and geometry. Newton
								teaches you when a geometric insight is cleaner than a
								computation, and when algebra saves time over pure synthetic
								reasoning.
							</p>
						</div>

						<div className="rounded-xl border bg-card p-6">
							<div className="flex items-center gap-3 mb-3">
								<div className="flex items-center justify-center size-9 rounded-lg bg-primary/10">
									<HugeiconsIcon
										icon={FavouriteSquareIcon}
										className="size-4 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="text-base font-semibold text-foreground">
									Pattern recognition training
								</h3>
							</div>
							<p className="text-muted-foreground text-sm leading-relaxed">
								Expert geometers see hidden structures: cyclic quadrilaterals,
								similar triangles, and symmetric configurations. Newton trains
								your eye by surfacing these patterns progressively, building the
								intuition that makes hard problems feel approachable.
							</p>
						</div>
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
						{[
							"Why does the inscribed angle theorem work?",
							"How do I know which congruence shortcut to use?",
							"Walk me through proving two triangles are similar",
							"What is Power of a Point and when should I use it?",
							"How do I find the center of a circle with a compass?",
							"Why do the altitudes of a triangle always meet at one point?",
							"Help me write a two-column proof for this problem",
							"What auxiliary line should I draw here?",
						].map((question) => (
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
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="rounded-2xl bg-primary/5 border p-10 lg:p-16 text-center">
						<HugeiconsIcon
							icon={TriangleIcon}
							className="size-10 text-primary mx-auto mb-6"
							strokeWidth={1.5}
						/>
						<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Stop memorizing. Start understanding.
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
							Geometry makes sense when you can see it, explain it, and connect
							it to everything else. Whether you are proving your first triangle
							congruence or training for national competitions, Newton is ready
							to help.
						</p>
						<div className="flex flex-col sm:flex-row gap-3 justify-center">
							<Link href="/practice?subject=geometry">
								<Button size="lg" className="gap-2">
									Start learning geometry
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-4"
										strokeWidth={1.5}
									/>
								</Button>
							</Link>
							<Link href="/ask">
								<Button size="lg" variant="outline" className="gap-2">
									Ask Newton anything
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
		</main>
	);
}
