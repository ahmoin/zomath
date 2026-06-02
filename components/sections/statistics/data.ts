import {
	BrainIcon,
	CheckmarkCircle02Icon,
	LayerIcon,
	LightbulbOffIcon,
	Pen01Icon,
	Rocket02Icon,
	Target01Icon,
	Timer02Icon,
} from "@hugeicons/core-free-icons";

export const features = [
	{
		title: "Interactive Distributions",
		description:
			"Stop blindly reading z-score tables. Newton helps you visualize normal, binomial, and geometric distributions so you genuinely understand the area under the curve.",
		icon: LayerIcon,
	},
	{
		title: "Step-by-Step Inference",
		description:
			"Hypothesis testing has a lot of moving parts. We guide you through naming the test, checking conditions, calculating statistics, and writing the final conclusion in context.",
		icon: Target01Icon,
	},
	{
		title: "Real-World Context",
		description:
			"Statistics is the math of reality. Practice with problems based on real data sets, scientific studies, and everyday scenarios that make abstract concepts click.",
		icon: LightbulbOffIcon,
	},
	{
		title: "Targeted AP Prep",
		description:
			"Gearing up for the AP Statistics exam? Practice with timed multiple-choice questions and full-length free response questions graded instantly by Newton.",
		icon: Timer02Icon,
	},
];

export const learningSteps = [
	{
		step: "01",
		title: "Deconstruct the prompt",
		description:
			"Word problems in statistics can be overwhelming. Newton teaches you how to identify the variables, the sample, and exactly what the question is asking.",
		icon: BrainIcon,
	},
	{
		step: "02",
		title: "Check your conditions",
		description:
			"Before running any test, you need to ensure the data allows it. Learn to intuitively verify randomness, independence, and normality without just memorizing a checklist.",
		icon: CheckmarkCircle02Icon,
	},
	{
		step: "03",
		title: "Crunch the numbers",
		description:
			"Calculate standard errors, test statistics, and p-values. If you make an arithmetic mistake, Newton points it out before you derail your entire solution.",
		icon: Pen01Icon,
	},
	{
		step: "04",
		title: "Interpret the results",
		description:
			"The most important part of statistics is the conclusion. Newton reviews your written interpretations to ensure you use the precise language graders look for.",
		icon: Rocket02Icon,
	},
];

export const topics = [
	{
		title: "Exploring Data",
		content:
			"Master the foundations of descriptive statistics. Learn to analyze categorical and quantitative data, calculate measures of center and spread, identify outliers, and interpret scatterplots, correlation, and least-squares regression lines.",
	},
	{
		title: "Experimental Design",
		content:
			"Understand how data is collected. Dive into sampling methods, sources of bias, observational studies versus experiments, and the principles of experimental design like randomization, replication, and control.",
	},
	{
		title: "Probability & Random Variables",
		content:
			"Demystify the rules of probability. From basic independent events to conditional probability and Bayes' Theorem. Explore discrete and continuous random variables, including in-depth work with binomial and geometric distributions.",
	},
	{
		title: "Sampling Distributions",
		content:
			"The bridge between probability and inference. Grasp the Central Limit Theorem, understand how sample proportions and means behave, and learn why sampling distributions are the key to unlocking hypothesis testing.",
	},
	{
		title: "Statistical Inference",
		content:
			"Make claims about populations with confidence. Master confidence intervals and significance tests for proportions and means. Move on to advanced topics like chi-square tests for categorical data and inference for regression.",
	},
];

export const benefits = [
	"Understand what a p-value actually means, rather than just comparing it to 0.05",
	"Develop the exact phrasing and vocabulary needed to score a 5 on the AP Exam",
	"Build a strong foundation for college-level data science and research courses",
	"Learn to spot flawed statistics and misleading graphs in the real world",
	"Overcome the fear of word-heavy math problems through guided practice",
	"Master your calculator's statistical functions with targeted tips and shortcuts",
];

export const testimonials = [
	{
		quote:
			"I used to get entirely lost in hypothesis testing. There were too many conditions to remember. Newton walked me through the logic behind each one, and suddenly it all made sense. I got an A in my college stats class.",
		name: "Sarah M.",
		detail: "College Freshman",
	},
	{
		quote:
			"The way Zomath handles AP Statistics free response questions is incredible. Newton grades my written conclusions and tells me exactly which required keywords I missed.",
		name: "Julian T.",
		detail: "AP Statistics Student",
	},
	{
		quote:
			"Probability was my worst subject. I could never figure out when to multiply, add, or use combinations. The visual concept maps and step-by-step hints finally rewired my brain.",
		name: "Elena R.",
		detail: "High School Junior",
	},
];
