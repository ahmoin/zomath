"use client";

import {
	ArrowRight02Icon,
	BrainIcon,
	Calendar01Icon,
	CallUnlocked02Icon,
	CheckmarkCircle02Icon,
	Compass01Icon,
	Copy01Icon,
	EyeIcon,
	FlowIcon,
	FolderTreeIcon,
	GraduateFemaleIcon,
	LightbulbOffIcon,
	Link02Icon,
	ListXIcon,
	PuzzleIcon,
	Rocket01Icon,
	RouterIcon,
	Search01Icon,
	SparklesIcon,
	TangentIcon,
	Tap02Icon,
	TradeUpIcon,
	ZoomIcon,
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

const subjectAreas = [
	{
		icon: FolderTreeIcon,
		title: "Algebra",
		description:
			"From linear equations to polynomial factoring, see how every algebraic concept builds on what came before.",
		concepts: [
			"Linear Equations",
			"Quadratic Functions",
			"Systems of Equations",
			"Polynomials",
			"Rational Expressions",
		],
	},
	{
		icon: SparklesIcon,
		title: "Geometry",
		description:
			"Understand how shapes, proofs, and spatial reasoning connect across Euclidean and analytic geometry.",
		concepts: [
			"Triangle Congruence",
			"Circle Theorems",
			"Coordinate Geometry",
			"Transformations",
			"Proof Strategies",
		],
	},
	{
		icon: TradeUpIcon,
		title: "Precalculus & Trigonometry",
		description:
			"Bridge the gap to calculus by mapping how functions, trig identities, and limits interrelate.",
		concepts: [
			"Function Families",
			"Trig Identities",
			"Polar Coordinates",
			"Sequences & Series",
			"Limits",
		],
	},
	{
		icon: BrainIcon,
		title: "Calculus",
		description:
			"Navigate derivatives, integrals, and theorems with full visibility into how each piece depends on the others.",
		concepts: [
			"Derivatives",
			"Integration",
			"Fundamental Theorem",
			"Series Convergence",
			"Multivariable Basics",
		],
	},
	{
		icon: PuzzleIcon,
		title: "Competition Math",
		description:
			"Connect competition techniques back to their foundational concepts so tricks become genuine understanding.",
		concepts: [
			"Number Theory",
			"Combinatorics",
			"Inequalities",
			"Functional Equations",
			"Geometric Transformations",
		],
	},
	{
		icon: TangentIcon,
		title: "Statistics & Probability",
		description:
			"Map distributions, hypothesis testing, and combinatorial counting to see the logic behind data analysis.",
		concepts: [
			"Distributions",
			"Expected Value",
			"Conditional Probability",
			"Hypothesis Testing",
			"Bayesian Thinking",
		],
	},
];

const conceptNodes = [
	{ label: "Quadratic Equations", x: "50%", y: "15%", size: "lg" },
	{ label: "Factoring", x: "25%", y: "35%", size: "md" },
	{ label: "Completing the Square", x: "75%", y: "35%", size: "md" },
	{ label: "Quadratic Formula", x: "50%", y: "55%", size: "lg" },
	{ label: "Discriminant", x: "30%", y: "75%", size: "sm" },
	{ label: "Parabolas", x: "70%", y: "75%", size: "md" },
];

const faqItems = [
	{
		question:
			"How is the Concept Map different from a textbook table of contents?",
		answer:
			"A textbook lists topics in a fixed sequence. The Concept Map shows how ideas actually depend on and relate to each other. You can see that understanding the discriminant requires the quadratic formula, which draws from both factoring and completing the square. It is a web of understanding, not a flat list.",
	},
	{
		question: "Does the Concept Map adapt to what I already know?",
		answer:
			"Yes. Concepts you have mastered are highlighted differently from ones you are still learning. Newton uses your practice history and quiz results to shade in your personal map, so you always know where you stand and what to tackle next.",
	},
	{
		question: "Can I use the Concept Map to plan what to study?",
		answer:
			"Absolutely. When you click any concept, Newton shows you the shortest learning path from where you are to where you want to be. It identifies any prerequisite gaps along the way and suggests targeted practice to fill them before you move forward.",
	},
	{
		question: "What math levels does the Concept Map cover?",
		answer:
			"The Concept Map spans from foundational algebra through competition level topics. It covers Algebra, Geometry, Precalculus, Trigonometry, Calculus, Statistics, Probability, and Competition Math. We are continuously adding more nodes and connections.",
	},
	{
		question: "How do I get started with the Concept Map?",
		answer:
			"After creating a free account, open the Concept Map from the sidebar. You will start with a broad view of all subject areas. Zoom into any area that interests you, and Newton will highlight your current progress. You can click any node to start learning or jump into a practice session.",
	},
	{
		question: "Can I jump between subjects on the map?",
		answer:
			"Yes. The Concept Map is fully connected across subjects. You can trace a path from algebra concepts into geometry, or see how trigonometry bridges into calculus. There are no artificial walls between subjects, because there are none in real mathematics.",
	},
	{
		question: "How does the Concept Map work with the Practice feature?",
		answer:
			"Every concept node on the map links directly to targeted practice problems. When Newton identifies a gap in your prerequisites, it generates practice sets specifically designed to strengthen that node. Practice results feed back into the map in real time, updating your mastery as you improve.",
	},
];

const useCases = [
	{
		icon: Copy01Icon,
		title: "Competition preparation",
		description:
			"Competition problems demand cross-topic fluency. The Concept Map reveals which foundational skills underpin advanced techniques, so you can train strategically instead of grinding problem sets blindly.",
	},
	{
		icon: Calendar01Icon,
		title: "Exam review",
		description:
			"Before a final or AP exam, use the map to audit your coverage at a glance. Dim nodes are gaps. Bright nodes are strengths. Build a review plan that targets exactly where you need the most work.",
	},
	{
		icon: Compass01Icon,
		title: "Self-directed learning",
		description:
			"No curriculum telling you what comes next? The Concept Map becomes your guide. Follow connections wherever your curiosity leads, and Newton ensures you never skip a critical stepping stone along the way.",
	},
	{
		icon: Rocket01Icon,
		title: "Acceleration",
		description:
			"Already comfortable with the basics? The map shows you the next cluster of concepts that unlocks from your current mastery. Skip ahead efficiently without the risk of building on shaky foundations.",
	},
];

export default function ConceptsPage() {
	return (
		<main className="flex flex-col">
			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-3xl mx-auto text-center">
						<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border bg-muted/50 text-sm text-muted-foreground mb-6">
							<HugeiconsIcon
								icon={Tap02Icon}
								className="size-4"
								strokeWidth={1.5}
							/>
							Concept Map
						</div>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
							See how every math concept connects
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
							Math is not a list of topics to check off. It is a web of ideas
							that build on each other. Zomath's Concept Map reveals the hidden
							structure behind everything you learn, so you never study in
							isolation again.
						</p>
						<div className="flex flex-col sm:flex-row gap-3 justify-center">
							<Button size="lg" asChild>
								<Link href="/sign-up">
									Explore the map
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-4 ml-1"
										strokeWidth={1.5}
									/>
								</Link>
							</Button>
							<Button variant="outline" size="lg" asChild>
								<Link href="/demo">Watch a demo</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted/30">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Your map. Your mastery.
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Every node is a concept. Every line is a connection. The more you
							learn, the more your map lights up with understanding.
						</p>
					</div>
					<div className="relative bg-background border rounded-2xl p-8 lg:p-12 overflow-hidden min-h-[480px]">
						<div
							className="absolute inset-0 opacity-[0.07]"
							style={{
								backgroundImage:
									"radial-gradient(circle, currentColor 1px, transparent 1px)",
								backgroundSize: "24px 24px",
							}}
						/>
						<svg
							className="absolute inset-0 w-full h-full"
							viewBox="0 0 100 100"
							preserveAspectRatio="none"
							fill="none"
							stroke="currentColor"
							strokeWidth="0.15"
							opacity="0.2"
						>
							<line x1="50" y1="15" x2="25" y2="35" />
							<line x1="50" y1="15" x2="75" y2="35" />
							<line x1="25" y1="35" x2="50" y2="55" />
							<line x1="75" y1="35" x2="50" y2="55" />
							<line x1="50" y1="55" x2="30" y2="75" />
							<line x1="50" y1="55" x2="70" y2="75" />
							<line x1="50" y1="15" x2="50" y2="55" />
						</svg>
						{conceptNodes.map((node) => (
							<div
								key={node.label}
								className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
								style={{ left: node.x, top: node.y }}
							>
								<div
									className={`flex flex-col items-center gap-1.5 ${node.size === "lg" ? "scale-110" : node.size === "sm" ? "scale-90" : ""}`}
								>
									<div
										className={`rounded-full border-2 border-primary/60 bg-primary/10 flex items-center justify-center ${node.size === "lg" ? "size-10" : node.size === "sm" ? "size-6" : "size-8"}`}
									>
										<div
											className={`rounded-full bg-primary ${node.size === "lg" ? "size-4" : node.size === "sm" ? "size-2" : "size-3"}`}
										/>
									</div>
									<span className="text-xs md:text-sm font-medium text-foreground whitespace-nowrap bg-background/80 px-2 py-0.5 rounded">
										{node.label}
									</span>
								</div>
							</div>
						))}
					</div>
					<p className="text-sm text-muted-foreground text-center mt-6">
						A simplified view of the quadratic equations cluster. The full map
						contains thousands of interconnected concepts.
					</p>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div>
							<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
								A map, not a table of contents
							</h2>
							<p className="text-lg text-muted-foreground leading-relaxed mb-8">
								Most math resources present topics in a straight line. Chapter
								1, then Chapter 2, then Chapter 3. But real understanding does
								not work that way. Ideas loop back. Concepts in geometry
								illuminate algebra. Trigonometry unlocks calculus. When you only
								see a list, you miss the connections that make math click.
							</p>
							<p className="text-lg text-muted-foreground leading-relaxed mb-8">
								The Concept Map replaces that flat list with a living, navigable
								graph of mathematical relationships. You can see the whole
								terrain at once, or zoom into a single neighborhood. Every
								connection is visible, every prerequisite accounted for, every
								shortcut revealed.
							</p>
						</div>
						<div className="space-y-6">
							<div className="rounded-2xl border bg-muted/30 p-6">
								<div className="flex items-center gap-3 mb-4">
									<div className="size-10 rounded-lg bg-destructive/10 flex items-center justify-center">
										<HugeiconsIcon
											icon={ListXIcon}
											className="size-5 text-destructive"
											strokeWidth={1.5}
										/>
									</div>
									<h3 className="font-semibold text-foreground">
										Traditional linear curriculum
									</h3>
								</div>
								<ul className="space-y-2 text-sm text-muted-foreground">
									<li className="flex items-start gap-2">
										<span className="text-destructive mt-1">&#x2717;</span>
										Topics ordered by convention, not by dependency
									</li>
									<li className="flex items-start gap-2">
										<span className="text-destructive mt-1">&#x2717;</span>
										No way to see what a new concept requires
									</li>
									<li className="flex items-start gap-2">
										<span className="text-destructive mt-1">&#x2717;</span>
										Connections between subjects remain hidden
									</li>
									<li className="flex items-start gap-2">
										<span className="text-destructive mt-1">&#x2717;</span>
										Students memorize without understanding context
									</li>
								</ul>
							</div>
							<div className="rounded-2xl border bg-primary/5 p-6">
								<div className="flex items-center gap-3 mb-4">
									<div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
										<HugeiconsIcon
											icon={FlowIcon}
											className="size-5 text-primary"
											strokeWidth={1.5}
										/>
									</div>
									<h3 className="font-semibold text-foreground">
										Zomath Concept Map
									</h3>
								</div>
								<ul className="space-y-2 text-sm text-foreground">
									<li className="flex items-start gap-2">
										<span className="text-primary mt-1">&#x2713;</span>
										Concepts arranged by how they actually depend on each other
									</li>
									<li className="flex items-start gap-2">
										<span className="text-primary mt-1">&#x2713;</span>
										Prerequisites and consequences visible at a glance
									</li>
									<li className="flex items-start gap-2">
										<span className="text-primary mt-1">&#x2713;</span>
										Cross-subject connections revealed naturally
									</li>
									<li className="flex items-start gap-2">
										<span className="text-primary mt-1">&#x2713;</span>
										Students build genuine, connected understanding
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
							How the Concept Map works
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Three layers of understanding that transform how you navigate
							mathematics.
						</p>
					</div>
					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								icon: EyeIcon,
								step: "01",
								title: "See the structure",
								description:
									"Zoom out to see entire branches of mathematics and how they relate. Zoom in to explore individual concepts and their immediate neighbors. The map adapts to your level of detail, from broad subject areas down to specific theorems and techniques.",
							},
							{
								icon: RouterIcon,
								step: "02",
								title: "Find your path",
								description:
									"Click any concept you want to learn and Newton traces the shortest path from your current knowledge. Prerequisites light up so you know exactly what to strengthen first. No more guessing why a topic feels out of reach.",
							},
							{
								icon: LightbulbOffIcon,
								step: "03",
								title: "Connect the dots",
								description:
									"As you master concepts, the map fills in with your progress. You start seeing patterns across topics, like how completing the square and the quadratic formula are really the same idea in two forms. That is when math starts making sense.",
							},
						].map((item) => (
							<div
								key={item.step}
								className="relative p-6 lg:p-8 rounded-2xl border bg-background"
							>
								<span className="text-5xl font-bold text-muted-foreground/20 absolute top-4 right-6">
									{item.step}
								</span>
								<div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
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

			<section className="py-24 lg:py-32 bg-muted/30">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Why a map beats a list
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Traditional curricula force you into a linear path. Math is not
							linear. The Concept Map reflects how understanding actually grows.
						</p>
					</div>
					<div className="grid md:grid-cols-2 gap-6">
						{[
							{
								icon: Link02Icon,
								title: "Prerequisites made visible",
								description:
									"No more guessing why a topic feels hard. The map shows you exactly which foundational concepts support what you are trying to learn, so you can shore up weaknesses before they cascade into frustration.",
							},
							{
								icon: ZoomIcon,
								title: "Zoom in, zoom out",
								description:
									"Start with the big picture of all mathematics, then drill down into a single topic cluster. The Concept Map is fully navigable at every scale, from broad subject areas to individual theorems and lemmas.",
							},
							{
								icon: Search01Icon,
								title: "Search and discover",
								description:
									"Look up any concept and instantly see its neighborhood. What leads into it, what it enables, and what surprising connections exist that your textbook never bothered to mention.",
							},
							{
								icon: GraduateFemaleIcon,
								title: "Personalized progress",
								description:
									"Your map is colored by your mastery. Concepts you have practiced glow brighter. Gaps are immediately obvious. You always know where to invest your time next for maximum growth.",
							},
						].map((item) => (
							<div
								key={item.title}
								className="flex gap-5 p-6 lg:p-8 rounded-2xl border bg-background"
							>
								<div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
									<HugeiconsIcon
										icon={item.icon}
										className="size-6 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<div>
									<h3 className="text-xl font-semibold text-foreground mb-2">
										{item.title}
									</h3>
									<p className="text-muted-foreground leading-relaxed">
										{item.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Every major subject, mapped
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							From first year algebra to competition problem solving, the
							Concept Map covers the territory you need.
						</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{subjectAreas.map((subject) => (
							<div
								key={subject.title}
								className="p-6 lg:p-8 rounded-2xl border bg-background"
							>
								<div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
									<HugeiconsIcon
										icon={subject.icon}
										className="size-6 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="text-xl font-semibold text-foreground mb-2">
									{subject.title}
								</h3>
								<p className="text-muted-foreground leading-relaxed mb-4">
									{subject.description}
								</p>
								<div className="flex flex-wrap gap-2">
									{subject.concepts.map((concept) => (
										<span
											key={concept}
											className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground border"
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

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Built for your goals
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							However you use math, the Concept Map adapts to your purpose and
							shows you the way forward.
						</p>
					</div>
					<div className="grid md:grid-cols-2 gap-6">
						{useCases.map((useCase) => (
							<div
								key={useCase.title}
								className="p-6 lg:p-8 rounded-2xl border bg-background"
							>
								<div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
									<HugeiconsIcon
										icon={useCase.icon}
										className="size-6 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="text-xl font-semibold text-foreground mb-2">
									{useCase.title}
								</h3>
								<p className="text-muted-foreground leading-relaxed">
									{useCase.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted/30">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div>
							<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
								Newton knows the way
							</h2>
							<p className="text-lg text-muted-foreground leading-relaxed mb-6">
								The Concept Map is not just a reference tool. It is the
								foundation for how Newton guides your learning. When you ask
								Newton a question, it does not just answer. It places that
								answer in context, showing you where the concept lives on the
								map and what you need to understand it deeply.
							</p>
							<div className="space-y-4 mb-8">
								{[
									"Newton traces learning paths between any two concepts on the map",
									"Prerequisites are automatically identified and sequenced for you",
									"Practice sessions target the specific nodes that will unlock your next goal",
									"Concept explanations reference connected ideas to build holistic understanding",
								].map((item) => (
									<div key={item} className="flex gap-3 items-start">
										<HugeiconsIcon
											icon={CheckmarkCircle02Icon}
											className="size-5 text-primary mt-0.5 shrink-0"
											strokeWidth={1.5}
										/>
										<span className="text-foreground leading-relaxed">
											{item}
										</span>
									</div>
								))}
							</div>
							<Button size="lg" asChild>
								<Link href="/sign-up">
									Start learning with Newton
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-4 ml-1"
										strokeWidth={1.5}
									/>
								</Link>
							</Button>
						</div>
						<div className="rounded-2xl border bg-muted/30 p-8 lg:p-10">
							<div className="rounded-xl border bg-background p-6 shadow-sm mb-4">
								<div className="flex items-center gap-2 mb-3">
									<div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center">
										<HugeiconsIcon
											icon={BrainIcon}
											className="size-4 text-primary"
											strokeWidth={1.5}
										/>
									</div>
									<span className="font-semibold text-foreground">Newton</span>
								</div>
								<p className="text-sm text-muted-foreground mb-4">
									You asked about the quadratic formula. Here is where it sits
									on your map:
								</p>
								<div className="space-y-2 text-sm">
									<div className="flex items-center gap-3">
										<div className="size-3 rounded-full bg-primary/30" />
										<span className="text-muted-foreground line-through">
											Factoring
										</span>
										<span className="text-xs text-primary font-medium">
											Mastered
										</span>
									</div>
									<div className="flex items-center gap-3">
										<div className="size-3 rounded-full bg-primary/30" />
										<span className="text-muted-foreground line-through">
											Completing the Square
										</span>
										<span className="text-xs text-primary font-medium">
											Mastered
										</span>
									</div>
									<div className="flex items-center gap-3">
										<div className="size-3 rounded-full bg-primary" />
										<span className="text-foreground font-medium">
											Quadratic Formula
										</span>
										<span className="text-xs text-primary font-medium">
											Ready to learn
										</span>
									</div>
									<div className="flex items-center gap-3">
										<div className="size-3 rounded-full bg-muted-foreground/20" />
										<span className="text-muted-foreground">Discriminant</span>
										<span className="text-xs text-muted-foreground">
											Locked
										</span>
									</div>
								</div>
							</div>
							<div className="rounded-xl border bg-background p-6 shadow-sm">
								<p className="text-sm text-foreground leading-relaxed">
									Since you have mastered both factoring and completing the
									square, you have all the prerequisites for the quadratic
									formula. Would you like me to walk you through the derivation,
									or jump straight into practice?
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Concepts unlock concepts
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Every concept you master opens doors to new ones. The map makes
							these chains of dependency visible and navigable.
						</p>
					</div>
					<div className="max-w-4xl mx-auto">
						<div className="relative flex flex-col items-center gap-0">
							<div className="flex items-center gap-4 w-full">
								<div className="flex-1 rounded-xl border bg-background p-5">
									<div className="flex items-center gap-3 mb-2">
										<HugeiconsIcon
											icon={CallUnlocked02Icon}
											className="size-5 text-primary"
											strokeWidth={1.5}
										/>
										<span className="font-semibold text-foreground text-sm">
											Mastered
										</span>
									</div>
									<p className="text-foreground font-medium">
										Solving linear equations
									</p>
									<p className="text-sm text-muted-foreground mt-1">
										The foundation. Everything in algebra starts here.
									</p>
								</div>
							</div>
							<div className="w-px h-8 bg-border" />
							<svg
								className="size-6 text-muted-foreground/40"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="1.5"
							>
								<path d="M12 4v16m0-16l-4 4m4-4l4 4" />
							</svg>
							<div className="w-px h-4 bg-border" />
							<div className="flex items-center gap-4 w-full">
								<div className="flex-1 rounded-xl border bg-background p-5">
									<div className="flex items-center gap-3 mb-2">
										<HugeiconsIcon
											icon={CallUnlocked02Icon}
											className="size-5 text-primary"
											strokeWidth={1.5}
										/>
										<span className="font-semibold text-foreground text-sm">
											Mastered
										</span>
									</div>
									<p className="text-foreground font-medium">
										Graphing linear functions
									</p>
									<p className="text-sm text-muted-foreground mt-1">
										Equations become pictures. Slope and intercept take on
										meaning.
									</p>
								</div>
							</div>
							<div className="w-px h-8 bg-border" />
							<svg
								className="size-6 text-muted-foreground/40"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="1.5"
							>
								<path d="M12 4v16m0-16l-4 4m4-4l4 4" />
							</svg>
							<div className="w-px h-4 bg-border" />
							<div className="flex items-center gap-4 w-full">
								<div className="flex-1 rounded-xl border bg-primary/5 border-primary/30 p-5">
									<div className="flex items-center gap-3 mb-2">
										<HugeiconsIcon
											icon={TangentIcon}
											className="size-5 text-primary"
											strokeWidth={1.5}
										/>
										<span className="font-semibold text-primary text-sm">
											Next up
										</span>
									</div>
									<p className="text-foreground font-medium">
										Systems of equations
									</p>
									<p className="text-sm text-muted-foreground mt-1">
										Multiple equations, multiple unknowns. Combine your skills
										to solve them.
									</p>
								</div>
							</div>
							<div className="w-px h-8 bg-border" />
							<svg
								className="size-6 text-muted-foreground/40"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="1.5"
							>
								<path d="M12 4v16m0-16l-4 4m4-4l4 4" />
							</svg>
							<div className="w-px h-4 bg-border" />
							<div className="flex items-center gap-4 w-full">
								<div className="flex-1 rounded-xl border bg-muted/50 p-5 opacity-60">
									<div className="flex items-center gap-3 mb-2">
										<HugeiconsIcon
											icon={CallUnlocked02Icon}
											className="size-5 text-muted-foreground"
											strokeWidth={1.5}
										/>
										<span className="font-semibold text-muted-foreground text-sm">
											Unlocks
										</span>
									</div>
									<p className="text-foreground font-medium">
										Linear programming and optimization
									</p>
									<p className="text-sm text-muted-foreground mt-1">
										Apply systems to real world constraints and find optimal
										solutions.
									</p>
								</div>
							</div>
						</div>
						<p className="text-sm text-muted-foreground text-center mt-8">
							This is one chain of many. The full map shows dozens of
							interconnected paths like this, branching across subjects.
						</p>
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-3xl mx-auto">
						<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4 text-center">
							Frequently asked questions
						</h2>
						<p className="text-lg text-muted-foreground text-center mb-12">
							Everything you want to know about the Concept Map.
						</p>
						<Accordion type="single" collapsible className="w-full">
							{faqItems.map((item) => (
								<AccordionItem key={item.question} value={item.question}>
									<AccordionTrigger className="text-left text-foreground font-medium">
										{item.question}
									</AccordionTrigger>
									<AccordionContent className="text-muted-foreground leading-relaxed">
										{item.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted/30">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-3xl mx-auto text-center">
						<div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
							<HugeiconsIcon
								icon={Tap02Icon}
								className="size-8 text-primary"
								strokeWidth={1.5}
							/>
						</div>
						<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Stop memorizing. Start connecting.
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed mb-8">
							The Concept Map is free to explore. Create your account and see
							the entire landscape of mathematics laid out before you. Your
							journey to genuine understanding starts with a single node.
						</p>
						<div className="flex flex-col sm:flex-row gap-3 justify-center">
							<Button size="lg" asChild>
								<Link href="/sign-up">
									Get started for free
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-4 ml-1"
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
		</main>
	);
}
