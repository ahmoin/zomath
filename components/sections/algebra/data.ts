import {
	AbacusIcon,
	Camera01Icon,
	TangentIcon,
	ViewIcon,
} from "@hugeicons/core-free-icons";

export const topics = [
	{
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

export const features = [
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

export const learningPath = [
	{ step: 1, title: "Foundations", topics: "Variables, expressions, order of operations", duration: "1-2 weeks" },
	{ step: 2, title: "Linear Equations", topics: "One-step through multi-step equations", duration: "2-3 weeks" },
	{ step: 3, title: "Inequalities", topics: "Solving and graphing inequalities", duration: "1-2 weeks" },
	{ step: 4, title: "Functions", topics: "Notation, graphing, linear functions", duration: "2-3 weeks" },
	{ step: 5, title: "Systems", topics: "Substitution, elimination, applications", duration: "2-3 weeks" },
	{ step: 6, title: "Polynomials", topics: "Operations, factoring, binomials", duration: "2-3 weeks" },
	{ step: 7, title: "Quadratics", topics: "Factoring, formula, completing the square", duration: "3-4 weeks" },
	{ step: 8, title: "Advanced", topics: "Rationals, radicals, exponent rules", duration: "3-4 weeks" },
];

export const stats = [
	{ value: "2.3M+", label: "Algebra problems solved" },
	{ value: "89%", label: "Students improve test scores" },
	{ value: "4.8", label: "Average rating from students" },
	{ value: "12 min", label: "Avg. time to a breakthrough" },
];

export const testimonials = [
	{
		quote:
			"I used to freeze on word problems because I could not set up the equation. Newton taught me to translate English into algebra step by step. Now I actually look forward to them.",
		name: "Sofia R.",
		detail: "10th grade, Algebra 2",
		icon: ViewIcon,
	},
	{
		quote:
			"My teacher moves fast and I was too embarrassed to ask questions. With Newton, I can ask the same thing five different ways until it makes sense. No judgment, just help.",
		name: "Jaylen M.",
		detail: "9th grade, Algebra 1",
		icon: ViewIcon,
	},
	{
		quote:
			"I was stuck on factoring for weeks. The Concept Map showed me I was missing a prerequisite skill, and once I went back and fixed that, factoring just clicked. Game changer.",
		name: "Aisha K.",
		detail: "Self-learner, preparing for college placement",
		icon: ViewIcon,
	},
];

export const faqs = [
	{
		question: "I keep making sign errors in algebra. Can Newton help with that?",
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
		question: "I am preparing for a math competition. Is Zomath useful for that?",
		answer:
			"Definitely. Competition math requires creative problem solving, not just following procedures. Newton can help you see alternative approaches, recognize patterns, and build the algebraic fluency that competition problems demand. Use Practice mode to drill specific techniques and Ask Newton to explore clever solutions to tough problems.",
	},
	{
		question: "How long does it take to get through algebra on Zomath?",
		answer:
			"It depends on your starting point and how consistently you practice. Most students who spend 20 to 30 minutes a day on Zomath see significant improvement within a few weeks. The Concept Map tracks your progress, so you always know what you have mastered and what to focus on next.",
	},
];
