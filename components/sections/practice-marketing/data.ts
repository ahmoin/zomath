import {
	Analytics01Icon,
	BookOpen02Icon,
	BrainIcon,
	Cancel01Icon,
	ChartLineData02Icon,
	Clock01Icon,
	Copy01Icon,
	DashboardSpeed02Icon,
	EyeIcon,
	LayerIcon,
	Link01Icon,
	MarketingIcon,
	Mining02Icon,
	PuzzleIcon,
	RefreshIcon,
	SparklesIcon,
	StarIcon,
	TangentIcon,
} from "@hugeicons/core-free-icons";

export const categories = [
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

export const steps = [
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

export const differentiators = [
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

export const stats = [
	{ value: "890+", label: "Curated problems", icon: BookOpen02Icon },
	{ value: "12min", label: "Average session", icon: Clock01Icon },
	{ value: "3.2x", label: "Faster mastery vs. worksheets", icon: Mining02Icon },
	{ value: "94%", label: "Students recommend Zomath", icon: StarIcon },
];

export const sessionSteps = [
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

export const comparisons = [
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

export const faqs = [
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
