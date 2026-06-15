import {
	BrainIcon,
	Calendar01Icon,
	Compass01Icon,
	Copy01Icon,
	FolderTreeIcon,
	PuzzleIcon,
	Rocket01Icon,
	SparklesIcon,
	TangentIcon,
	TradeUpIcon,
} from "@hugeicons/core-free-icons";

export const subjectAreas = [
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

export const conceptNodes = [
	{ label: "Quadratic Equations", x: "50%", y: "15%", size: "lg" },
	{ label: "Factoring", x: "25%", y: "35%", size: "md" },
	{ label: "Completing the Square", x: "75%", y: "35%", size: "md" },
	{ label: "Quadratic Formula", x: "50%", y: "55%", size: "lg" },
	{ label: "Discriminant", x: "30%", y: "75%", size: "sm" },
	{ label: "Parabolas", x: "70%", y: "75%", size: "md" },
];

export const faqItems = [
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

export const useCases = [
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
