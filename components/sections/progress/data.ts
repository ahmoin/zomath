import {
	BarChartIcon,
	BendToolIcon,
	BookOpen01Icon,
	Brain02Icon,
	Certificate01Icon,
	ChartLineData01Icon,
	Clock01Icon,
	Copy01Icon,
	DashboardSpeed01Icon,
	EyeIcon,
	Fire02Icon,
	LightbulbOffIcon,
	PieChart02Icon,
	RouterIcon,
	Satellite01Icon,
	SparklesIcon,
	StarIcon,
	Target01Icon,
} from "@hugeicons/core-free-icons";

export const metrics = [
	{
		icon: PieChart02Icon,
		label: "Concept Mastery",
		description:
			"Percentage of concepts you truly understand, not just attempted",
	},
	{
		icon: Fire02Icon,
		label: "Daily Streaks",
		description:
			"Consecutive days of practice. Build momentum, one day at a time",
	},
	{
		icon: ChartLineData01Icon,
		label: "Growth Curve",
		description:
			"Your learning velocity over time, so you see real upward progress",
	},
	{
		icon: Target01Icon,
		label: "Weak Spots",
		description:
			"Concepts that need more work, surfaced before they become problems",
	},
];

export const comparisonRows = [
	{
		left: "Problems completed count",
		right: "Concept mastery levels",
	},
	{
		left: "Right / wrong tally",
		right: "Understanding depth assessment",
	},
	{
		left: "Generic skill labels",
		right: "Specific concept-by-concept map",
	},
	{
		left: "Same path for everyone",
		right: "Newton-adapted personal path",
	},
	{
		left: "Percent correct overall",
		right: "Weak spots surfaced early",
	},
	{
		left: "Time spent on platform",
		right: "Learning velocity and growth",
	},
];

export const steps = [
	{
		step: 1,
		icon: BookOpen01Icon,
		title: "You practice and solve",
		description:
			"Every problem you solve, every question you ask Newton, and every concept you explore feeds into your progress profile. Zomath watches how you approach problems, not just whether you got the answer right.",
	},
	{
		step: 2,
		icon: Brain02Icon,
		title: "Newton assesses understanding",
		description:
			"Newton evaluates your work across multiple dimensions: accuracy, method choice, conceptual reasoning, and whether you can apply ideas in new contexts. Surface-level memorization won't fool the system.",
	},
	{
		step: 3,
		icon: DashboardSpeed01Icon,
		title: "Your dashboard updates",
		description:
			"Your mastery levels, streaks, and growth metrics refresh in real time. You'll see exactly where you stand on every topic in your Concept Map, with no lag between effort and feedback.",
	},
	{
		step: 4,
		icon: SparklesIcon,
		title: "Newton adapts your path",
		description:
			"Based on your progress, Newton adjusts what comes next. Weak areas get targeted practice. Strong areas unlock advanced challenges. Your learning path is always uniquely yours.",
	},
];

export const featureBlocks = [
	{
		icon: RouterIcon,
		title: "Concept Map Mastery",
		description:
			"Your Concept Map lights up as you master each topic. See prerequisites, dependencies, and the full topology of your mathematical knowledge at a glance.",
		points: [
			"Color-coded mastery levels across every concept",
			"Hover any node to see your accuracy and time invested",
			"Click through to targeted practice for partial concepts",
		],
	},
	{
		icon: LightbulbOffIcon,
		title: "Newton's Insights",
		description:
			"Newton doesn't just track your progress. It explains what it sees. Get weekly AI-generated insights about patterns in your learning, blind spots, and what to focus on next.",
		points: [
			"Personalized weekly progress summaries",
			"Pattern detection across topics and problem types",
			"Actionable next steps, not just data dumps",
		],
	},
	{
		icon: Copy01Icon,
		title: "Milestones and Achievements",
		description:
			"Celebrate real victories. Milestones are tied to genuine understanding, like mastering a full topic branch or solving your first competition-level problem on your own.",
		points: [
			"Concept mastery milestones, not just point totals",
			"Streak bonuses and consistency rewards",
			"Competition math benchmarks for advanced learners",
		],
	},
	{
		icon: BarChartIcon,
		title: "Detailed Session History",
		description:
			"Look back at any practice session, solved problem, or conversation with Newton. Your full learning history is searchable and organized by topic, date, and difficulty.",
		points: [
			"Full transcript of every Newton conversation",
			"Revisit any solved problem with step-by-step replay",
			"Filter by topic, difficulty, and outcome",
		],
	},
];

export const masteryLevels = [
	{
		icon: EyeIcon,
		title: "Recognize",
		description:
			"You can identify the concept when you see it. You recognize a quadratic equation, know what a derivative looks like, or can spot a geometric series. This is the foundation, but it is not understanding yet.",
	},
	{
		icon: BendToolIcon,
		title: "Apply",
		description:
			"You can use the concept in familiar contexts. Given a standard problem, you select the right approach and execute it correctly. Most classroom assessments stop here, but Zomath keeps going.",
	},
	{
		icon: Satellite01Icon,
		title: "Connect",
		description:
			"You see how the concept relates to others. You understand why a technique works, when it breaks down, and what it connects to. You can explain your reasoning to Newton and identify edge cases on your own.",
	},
	{
		icon: SparklesIcon,
		title: "Extend",
		description:
			"You can adapt the concept to novel situations. Faced with a problem you have never seen, you draw on this concept creatively and combine it with others. This is the level competition math demands, and Zomath helps you get there.",
	},
];

export const learnerTypes = [
	{
		icon: Certificate01Icon,
		title: "High school students",
		description:
			"Track your progress through algebra, geometry, calculus, and beyond. See exactly which topics you need to review before exams, and let Newton build your study plan. No more wondering if you're ready.",
	},
	{
		icon: Clock01Icon,
		title: "Self-learners",
		description:
			"Learning on your own schedule? Progress tracking keeps you honest and motivated. Your streak, your growth curve, and Newton's insights make independent study feel guided instead of aimless.",
	},
	{
		icon: StarIcon,
		title: "Competition math prep",
		description:
			"Track mastery across advanced topics like number theory, combinatorics, and inequalities. See how your speed and accuracy improve on timed problem sets, and identify exactly where to sharpen your edge.",
	},
];

export const proofStats = [
	{
		value: "87%",
		label: "Average mastery gain",
		description:
			"Students who use Zomath for 4 or more weeks see an average 87% improvement in concept mastery scores across tracked topics.",
	},
	{
		value: "12 days",
		label: "Average streak length",
		description:
			"Consistency compounds. Our most successful learners build daily streaks that average 12 days, creating lasting study habits that outlast any single session.",
	},
	{
		value: "3.2x",
		label: "Faster gap identification",
		description:
			"Zomath's AI detects conceptual gaps 3.2 times faster than self-assessment, catching weak spots before they cascade into bigger problems downstream.",
	},
];

export const faqItems = [
	{
		value: "item-1",
		question: "How does Zomath determine mastery level for a concept?",
		answer:
			"Newton evaluates your work across multiple dimensions: whether you chose the right approach, whether you can explain your reasoning, and whether you can apply the concept in unfamiliar contexts. A single correct answer does not mean mastery. Consistent performance across different problem types and difficulty levels does.",
	},
	{
		value: "item-2",
		question: "Can mastery levels go down over time?",
		answer:
			"Yes, and that is by design. If you have not practiced a concept recently, or if your accuracy on related problems drops, your mastery level will adjust downward. This is not punishment. It is an honest reflection of where you stand, so you always know what deserves your attention.",
	},
	{
		value: "item-3",
		question: "What counts toward a daily streak?",
		answer:
			"Any day where you complete at least one practice session, solve a problem with Newton, or meaningfully engage with a concept on your map counts. The goal is consistent engagement, not marathon sessions. Even 10 minutes of focused practice keeps your streak alive.",
	},
	{
		value: "item-4",
		question: "How is this different from a grade or test score?",
		answer:
			"A test score tells you what happened on one day. Zomath's progress tracking shows you a living picture of your understanding across every concept, updated continuously. Grades collapse everything into a single number. Zomath shows you exactly which ideas you own and which ones still need work.",
	},
	{
		value: "item-5",
		question:
			"Can I use progress tracking if I study multiple subjects at once?",
		answer:
			"Absolutely. Your Concept Map spans all the topics you are working on, and progress is tracked independently for each one. Newton will balance your practice across subjects, making sure you are growing everywhere without spreading yourself too thin.",
	},
];

export const weeklyCards = [
	{
		day: "M",
		label: "Monday",
		description:
			"Solve 3 problems in your weakest topic. Newton notices your approach improving and bumps your mastery from Recognize to Apply.",
	},
	{
		day: "W",
		label: "Wednesday",
		description:
			"Ask Newton to explain a tricky step from yesterday. Your conversation is saved and searchable. Streak continues.",
	},
	{
		day: "F",
		label: "Friday",
		description:
			"Newton generates a practice set targeting the edge of your ability. You struggle productively and unlock a milestone.",
	},
	{
		day: "S",
		label: "Sunday",
		description:
			"Read your weekly insight from Newton. See your growth curve trending up. Plan next week's focus areas. You are 7 for 7 on your streak.",
	},
];
