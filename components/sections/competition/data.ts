import {
	BrainIcon,
	CheckmarkCircle02Icon,
	CrownIcon,
	LayerIcon,
	LightbulbOffIcon,
	Pen01Icon,
	Rocket02Icon,
	StarIcon,
	Tap01Icon,
	Target01Icon,
	Timer02Icon,
} from "@hugeicons/core-free-icons";

export const competitions = [
	{
		title: "AMC 8 / 10 / 12",
		description:
			"The starting line. Build speed, accuracy, and foundational problem-solving with contest-style questions that test what you know and how you think.",
		icon: Target01Icon,
	},
	{
		title: "AIME",
		description:
			"The proving ground. Master the multi-step reasoning and creative leaps that separate qualifiers from the rest of the field.",
		icon: LightbulbOffIcon,
	},
	{
		title: "USA(J)MO",
		description:
			"The big stage. Train on proof-writing, deep connections between topics, and the elegant arguments that olympiad problems demand.",
		icon: CrownIcon,
	},
	{
		title: "MathCounts",
		description:
			"Speed meets precision. Drill the quick-fire problems and learn the shortcuts and strategies that win at every round.",
		icon: Timer02Icon,
	},
];

export const trainingSteps = [
	{
		step: "01",
		title: "Assess your level",
		description:
			"Newton evaluates your current skill across every competition topic, from basic counting to advanced number theory. No wasted time on what you already know.",
		icon: Target01Icon,
	},
	{
		step: "02",
		title: "Get your training plan",
		description:
			"Receive a personalized curriculum targeting your weakest areas and the highest-value skills for your target competition.",
		icon: Tap01Icon,
	},
	{
		step: "03",
		title: "Practice with purpose",
		description:
			"Work through competition-style problems with Newton's strategic hints. He nudges you toward the key insight instead of handing you the answer.",
		icon: Pen01Icon,
	},
	{
		step: "04",
		title: "Review and level up",
		description:
			"After every problem, analyze your approach, learn alternative solutions, and build the pattern recognition that competitors rely on under pressure.",
		icon: Rocket02Icon,
	},
];

export const features = [
	{
		title: "Timed Practice Modes",
		description:
			"Simulate real contest conditions with countdown timers, scoring rules, and problem sets matched to your target competition format.",
		icon: Timer02Icon,
	},
	{
		title: "Strategic Hints from Newton",
		description:
			"Newton teaches you how competitors think about problems, offering strategic framings and nudges that sharpen your instincts over time.",
		icon: BrainIcon,
	},
	{
		title: "Pattern Recognition Training",
		description:
			"Competition math runs on patterns. Newton helps you spot recurring structures and shared techniques across hundreds of problems.",
		icon: LayerIcon,
	},
	{
		title: "Connected Concept Maps",
		description:
			"See how topics link together. The number theory you learn for AMC 10 might be the key insight for an AIME geometry problem.",
		icon: Tap01Icon,
	},
	{
		title: "Multiple Solution Paths",
		description:
			"Every problem comes with several approaches, not just the one the author had in mind. Learn to be flexible and creative when the clock is ticking.",
		icon: LightbulbOffIcon,
	},
	{
		title: "Detailed Progress Tracking",
		description:
			"Know exactly where you stand for each competition level and topic. Track your improvement over time and see what to focus on next.",
		icon: StarIcon,
	},
];

export const topics = [
	{
		title: "Number Theory",
		content:
			"Divisibility rules, modular arithmetic, prime factorization, Euler's totient theorem, Chinese Remainder Theorem, Diophantine equations, and the clever manipulations that show up in every competition from AMC to USAMO.",
	},
	{
		title: "Combinatorics & Probability",
		content:
			"Counting principles, inclusion-exclusion, generating functions, expected value, conditional probability, and the systematic casework that turns impossible-looking problems into manageable ones.",
	},
	{
		title: "Geometry",
		content:
			"Similar triangles, power of a point, coordinate geometry, transformations, trigonometric identities, and the elegant synthetic arguments that make competition geometry so rewarding.",
	},
	{
		title: "Algebra & Functions",
		content:
			"Functional equations, sequences and series, inequalities, complex numbers, polynomial roots, and the algebraic tricks that show up in every competition at every level.",
	},
];

export const benefits = [
	"Deep problem-solving skills that transfer to every area of math and science",
	"Stronger college applications, especially at schools like MIT and Caltech",
	"Mathematical maturity that makes higher-level courses feel natural",
	"Creative thinking and the ability to approach unfamiliar situations with confidence",
	"Persistence and grit, the habits that compound over a lifetime",
	"A community of driven peers who push each other to think harder",
];

export const testimonials = [
	{
		quote:
			"I went from scoring 60 on the AMC 10 to making AIME in one season. Newton's hints taught me to see the structure in problems I used to stare at blankly.",
		name: "Anya K.",
		detail: "AIME Qualifier, California",
	},
	{
		quote:
			"The pattern recognition training changed everything. Problems that looked random started feeling familiar, and I could approach them with a plan instead of just guessing.",
		name: "David C.",
		detail: "USAMO Qualifier, Texas",
	},
	{
		quote:
			"I tried other prep platforms, but they just gave me answers. Newton actually taught me how to think about each problem, which made me faster and more confident on contest day.",
		name: "Meera S.",
		detail: "MathCounts State Champion, New Jersey",
	},
];
