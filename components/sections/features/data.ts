import {
	BookOpen01Icon,
	BrainIcon,
	Camera01Icon,
	ChartBubble01Icon,
	ChartLineData01Icon,
	ChartUpIcon,
	Clock01Icon,
	GraduateFemaleIcon,
	LayerIcon,
	LightbulbOffIcon,
	Shield01Icon,
	SmartPhone01Icon,
	SparklesIcon,
	Target01Icon,
} from "@hugeicons/core-free-icons";

export const coreFeatures = [
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

export const differentiators = [
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

export const faqItems = [
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

export const newtonBullets = [
	{
		icon: LightbulbOffIcon,
		title: "Socratic method",
		description:
			"Newton asks questions before giving explanations. It helps you discover the answer yourself, which builds deeper and more lasting understanding.",
	},
	{
		icon: Clock01Icon,
		title: "Always available",
		description:
			"Stuck on homework at midnight? Need a quick review before class? Newton is there 24/7, patient and ready, no scheduling required.",
	},
	{
		icon: SmartPhone01Icon,
		title: "Works where you study",
		description:
			"Snap a photo from your phone, ask a question from your laptop, review concepts on your tablet. Zomath works seamlessly across all your devices.",
	},
];

export const audienceCards = [
	{
		icon: BookOpen01Icon,
		title: "High school students",
		description:
			"Struggling with a specific topic or just want to stay ahead? Zomath aligns with your curriculum and gives you the exact help you need, when you need it. No more blank stares at homework.",
	},
	{
		icon: GraduateFemaleIcon,
		title: "Self-learners",
		description:
			"Learning math on your own takes discipline and direction. The Concept Map gives you a clear path, Practice keeps you sharp, and Newton answers your questions so you never stay stuck.",
	},
];

export const competitionCard = {
	icon: SparklesIcon,
	title: "Competition math prep",
	description:
		"Preparing for AMC, AIME, or other competitions requires a different kind of practice. Zomath offers dedicated tracks with challenging problems, proof-based reasoning, and strategy coaching from Newton.",
	exams: [
		{ label: "AMC", sublabel: "10 & 12 prep" },
		{ label: "AIME", sublabel: "Advanced tracks" },
		{ label: "SAT", sublabel: "Math sections" },
		{ label: "AP", sublabel: "Calc & Stats" },
	],
};
