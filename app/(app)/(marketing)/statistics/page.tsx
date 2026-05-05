import {
	AnalyticsUpIcon,
	ArrowRight02Icon,
	BrainIcon,
	CheckmarkCircle02Icon,
	CrownIcon,
	LayerIcon,
	LightbulbOffIcon,
	Pen01Icon,
	Rocket02Icon,
	StarIcon,
	Target01Icon,
	Timer02Icon,
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

const features = [
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

const learningSteps = [
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

const topics = [
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

const benefits = [
	"Understand what a p-value actually means, rather than just comparing it to 0.05",
	"Develop the exact phrasing and vocabulary needed to score a 5 on the AP Exam",
	"Build a strong foundation for college-level data science and research courses",
	"Learn to spot flawed statistics and misleading graphs in the real world",
	"Overcome the fear of word-heavy math problems through guided practice",
	"Master your calculator's statistical functions with targeted tips and shortcuts",
];

const testimonials = [
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

export default function StatisticsPage() {
	return (
		<main>
			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-3xl">
						<div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-sm text-muted-foreground mb-6">
							<HugeiconsIcon
								icon={AnalyticsUpIcon}
								className="size-4"
								strokeWidth={1.5}
							/>
							Statistics & Probability
						</div>
						<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-6">
							Make sense of the noise.
						</h1>
						<p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
							Statistics is the math of the real world. Master probability,
							distributions, and hypothesis testing with Newton. From AP Stats
							to college-level data analysis, genuinely understand the story
							behind the numbers.
						</p>
						<div className="flex flex-wrap gap-3">
							<Button asChild size="lg">
								<Link href="/practice">
									Start Learning
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-4 ml-1"
										strokeWidth={1.5}
									/>
								</Link>
							</Button>
							<Button asChild variant="outline" size="lg">
								<Link href="#topics">View Syllabus</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="mb-12">
						<p className="text-sm font-medium text-primary mb-3">
							The Zomath Advantage
						</p>
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
							Stop memorizing. Start analyzing.
						</h2>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
						{features.map((feature) => (
							<div
								key={feature.title}
								className="rounded-xl border border-border bg-background p-6 lg:p-8"
							>
								<div className="flex size-10 items-center justify-center rounded-lg bg-muted mb-4">
									<HugeiconsIcon
										icon={feature.icon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
								<p className="text-muted-foreground text-sm leading-relaxed">
									{feature.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="mb-12">
						<p className="text-sm font-medium text-primary mb-3">
							How It Works
						</p>
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
							A systematic approach to data.
						</h2>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{learningSteps.map((step) => (
							<div
								key={step.step}
								className="rounded-xl border border-border p-6 lg:p-8"
							>
								<div className="text-4xl font-bold text-muted-foreground/20 mb-4">
									{step.step}
								</div>
								<HugeiconsIcon
									icon={step.icon}
									className="size-6 text-primary mb-3"
									strokeWidth={1.5}
								/>
								<h3 className="text-lg font-semibold mb-2">{step.title}</h3>
								<p className="text-muted-foreground text-sm leading-relaxed">
									{step.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section id="topics" className="py-24 lg:py-32 bg-muted">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
						<div>
							<p className="text-sm font-medium text-primary mb-3">
								Comprehensive Syllabus
							</p>
							<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
								Everything from the mean to the margin of error.
							</h2>
							<p className="text-muted-foreground leading-relaxed">
								Whether you are building a foundation in probability or
								preparing for the rigor of the AP Statistics exam, our
								curriculum is designed to connect the dots between data
								collection and statistical inference.
							</p>
						</div>
						<div>
							<Accordion type="single" collapsible className="w-full">
								{topics.map((topic, i) => (
									<AccordionItem key={topic.title} value={`topic-${i}`}>
										<AccordionTrigger className="text-lg font-semibold">
											{topic.title}
										</AccordionTrigger>
										<AccordionContent className="text-muted-foreground leading-relaxed">
											{topic.content}
										</AccordionContent>
									</AccordionItem>
								))}
							</Accordion>
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
						<div>
							<p className="text-sm font-medium text-primary mb-3">
								Why Learn Statistics?
							</p>
							<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-6">
								The most applicable math you will ever learn.
							</h2>
							<p className="text-muted-foreground leading-relaxed">
								Statistics is unique. It requires less algebra and more critical
								reading. It is the backbone of modern science, business, and
								medicine. When you master statistics, you learn how to evaluate
								the truth in a data-driven world.
							</p>
						</div>
						<div>
							<ul className="space-y-4">
								{benefits.map((benefit) => (
									<li key={benefit} className="flex items-start gap-3">
										<HugeiconsIcon
											icon={CheckmarkCircle02Icon}
											className="size-5 text-primary mt-0.5 shrink-0"
											strokeWidth={1.5}
										/>
										<span className="text-foreground">{benefit}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="mb-12">
						<p className="text-sm font-medium text-primary mb-3">
							Student Success
						</p>
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
							Don't just take our word for it.
						</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{testimonials.map((testimonial) => (
							<div
								key={testimonial.name}
								className="rounded-xl border border-border bg-background p-6 lg:p-8"
							>
								<div className="flex gap-0.5 mb-4">
									{[...Array(5)].map((_, i) => (
										<HugeiconsIcon
											key={i}
											icon={StarIcon}
											className="size-4 text-primary"
											strokeWidth={1.5}
										/>
									))}
								</div>
								<p className="text-foreground text-sm leading-relaxed mb-4">
									{testimonial.quote}
								</p>
								<div>
									<p className="font-semibold text-sm">{testimonial.name}</p>
									<p className="text-muted-foreground text-xs">
										{testimonial.detail}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="rounded-2xl border border-border bg-muted p-12 lg:p-16 text-center">
						<HugeiconsIcon
							icon={CrownIcon}
							className="size-12 text-primary mx-auto mb-6"
							strokeWidth={1.5}
						/>
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Ready to conquer statistics?
						</h2>
						<p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl mx-auto">
							Join the thousands of students using Newton to demystify
							probability, ace their AP exams, and build real mathematical
							intuition.
						</p>
						<Button asChild size="lg">
							<Link href="/practice">
								Start Learning for Free
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-4 ml-1"
									strokeWidth={1.5}
								/>
							</Link>
						</Button>
					</div>
				</div>
			</section>
		</main>
	);
}
