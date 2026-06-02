import {
	BrainIcon,
	Camera01Icon,
	ChartLineData02Icon,
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

export const topics = [
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

export const struggles = [
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

export const faqs = [
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

export const howItWorksFeatures = [
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
];

export const practiceTypes = [
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
];
