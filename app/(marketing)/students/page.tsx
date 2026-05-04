"use client";

import {
	Analytics01Icon,
	ArrowRight02Icon,
	Book01Icon,
	BookOpen02Icon,
	Brain01Icon,
	Camera01Icon,
	Chat01Icon,
	FlashIcon,
	GraduationScrollIcon,
	SparklesIcon,
	Sun03Icon,
	Tap03Icon,
	Target01Icon,
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
		icon: Camera01Icon,
		title: "Solve",
		description:
			"Snap a photo of any problem. Zomath breaks it down step by step, showing you the why behind every move, not just the final answer.",
		accent: "from-violet-500/20 to-violet-500/5",
	},
	{
		icon: Chat01Icon,
		title: "Ask Newton",
		description:
			"Stuck on something? Chat with Newton, your AI tutor. Ask follow-up questions, request different explanations, or explore related ideas until it clicks.",
		accent: "from-amber-500/20 to-amber-500/5",
	},
	{
		icon: Tap03Icon,
		title: "Concept Map",
		description:
			"See how every topic connects. Trace a concept back to its foundations or forward to where it leads, so you never learn in isolation.",
		accent: "from-emerald-500/20 to-emerald-500/5",
	},
	{
		icon: Target01Icon,
		title: "Practice",
		description:
			"Targeted drills that adapt to your level. Practice what you just learned, fill gaps from earlier topics, or push ahead into new territory.",
		accent: "from-sky-500/20 to-sky-500/5",
	},
	{
		icon: Analytics01Icon,
		title: "Progress",
		description:
			"Track what you have mastered and where you need more work. Clear visibility into your growth keeps you motivated and on track.",
		accent: "from-rose-500/20 to-rose-500/5",
	},
];

const subjects = [
	"Pre-Algebra",
	"Algebra I & II",
	"Geometry",
	"Trigonometry",
	"Precalculus",
	"Calculus AB & BC",
	"Statistics",
	"Linear Algebra",
	"Number Theory",
	"Competition Math",
];

const steps = [
	{
		icon: Camera01Icon,
		step: "01",
		title: "Bring any problem",
		description:
			"Type it out or snap a photo. Zomath recognizes handwritten equations, textbook problems, and competition questions alike.",
	},
	{
		icon: Brain01Icon,
		step: "02",
		title: "Understand the reasoning",
		description:
			"Newton walks you through the solution step by step. Ask questions at any point. Get alternative approaches. See the bigger picture.",
	},
	{
		icon: Target01Icon,
		step: "03",
		title: "Practice and master",
		description:
			"Reinforce what you learned with targeted practice problems. Newton adapts difficulty to your level and tracks your mastery over time.",
	},
];

const testimonials = [
	{
		quote:
			"I used to memorize formulas and hope for the best on tests. Newton actually showed me why the quadratic formula works and now I can derive it from scratch. That changed everything for me.",
		name: "Priya S.",
		detail: "11th grade, preparing for AP Calculus",
	},
	{
		quote:
			"The concept map is unreal. I finally see how algebra connects to calculus. It is not just random topics anymore, it is one big picture. My tutor charges $80/hour and never showed me that.",
		name: "Marcus T.",
		detail: "10th grade, self-studying for AMC 10",
	},
	{
		quote:
			"I am a returning student who hadn't done math in 6 years. Zomath met me where I was and built me back up. I went from dreading math to actually looking forward to my study sessions.",
		name: "Elena R.",
		detail: "Community college, placement exam prep",
	},
];

const faqItems = [
	{
		question: "Is Zomath just another homework cheat tool?",
		answer:
			"No. Zomath is built for genuine understanding. Every solution comes with step-by-step reasoning, and Newton encourages you to ask questions and work through problems yourself. The goal is not to give you answers, it is to help you develop real mathematical thinking.",
	},
	{
		question: "What math levels does Zomath cover?",
		answer:
			"We cover everything from pre-algebra through calculus, statistics, linear algebra, and competition math. Whether you are in 8th grade or preparing for university exams, Newton adapts to your level and needs.",
	},
	{
		question: "How is this different from watching tutorial videos?",
		answer:
			"Videos are passive. Zomath is interactive. Newton responds to your specific questions, identifies your misconceptions, and adjusts explanations in real time. Plus, Practice gives you immediate feedback so you can learn by doing, not just watching.",
	},
	{
		question: "Can I use Zomath for competition math prep?",
		answer:
			"Absolutely. Newton can work through AMC, AIME, and olympiad-style problems. The Concept Map helps you see the connections between competition math topics, and Practice drills target the specific problem types you need to strengthen.",
	},
	{
		question: "How much time should I spend on Zomath each day?",
		answer:
			"Even 15 to 20 minutes a day makes a difference. A focused session might be solving one problem deeply with Newton, then doing a short Practice set. Consistency beats cramming, and Progress tracking helps you see the gains from your daily effort.",
	},
	{
		question: "Does Zomath replace my teacher or tutor?",
		answer:
			"Zomath is a powerful complement to classroom learning and tutoring. Many students use it to get unstuck between tutoring sessions, prepare for exams, or go deeper into topics their class rushed through. Think of Newton as a tutor who is available 24/7 and infinitely patient.",
	},
];

export default function StudentsPage() {
	return (
		<main className="flex flex-col">
			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-3xl">
						<p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">
							For students
						</p>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
							Stop memorizing.
							<br />
							Start understanding.
						</h1>
						<p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
							Zomath does not give you shortcuts or copied answers. Newton, your
							AI tutor, helps you build real understanding so you can walk into
							any exam knowing you get it, not just remember it.
						</p>
						<div className="mt-8 flex flex-col sm:flex-row gap-3">
							<Button size="lg" asChild>
								<Link href="/signup">
									Start learning for free
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-4 ml-1"
										strokeWidth={1.5}
									/>
								</Link>
							</Button>
							<Button size="lg" variant="outline" asChild>
								<Link href="/features">See how it works</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted/50">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="text-center max-w-2xl mx-auto mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
							Everything you need, nothing you don't
						</h2>
						<p className="mt-4 text-muted-foreground text-lg">
							Five tools that work together to take you from confused to
							confident.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
						{features.map((feature, i) => (
							<div
								key={feature.title}
								className={`relative rounded-2xl border bg-background p-6 lg:p-8 flex flex-col ${
									i === 0 ? "md:col-span-2 lg:col-span-2" : ""
								}`}
							>
								<div
									className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.accent} opacity-50 pointer-events-none`}
								/>
								<div className="relative flex flex-col flex-1">
									<div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
										<HugeiconsIcon
											icon={feature.icon}
											className="size-5 text-primary"
											strokeWidth={1.5}
										/>
									</div>
									<h3 className="text-xl font-semibold text-foreground">
										{feature.title}
									</h3>
									<p className="mt-2 text-muted-foreground leading-relaxed flex-1">
										{feature.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
						<div>
							<p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">
								Meet Newton
							</p>
							<h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
								A tutor that actually gets you
							</h2>
							<p className="mt-4 text-muted-foreground text-lg leading-relaxed">
								Newton is not a search bar that spits out answers. It is an AI
								tutor that adapts to how you think. Ask it to explain something
								differently. Ask why a step works. Ask what would happen if the
								problem changed. Newton meets you where you are.
							</p>
							<div className="mt-8 space-y-4">
								{[
									{
										icon: SparklesIcon,
										text: "Explains the same concept in multiple ways until it lands",
									},
									{
										icon: Book01Icon,
										text: "Identifies misconceptions, not just wrong answers",
									},
									{
										icon: FlashIcon,
										text: "Available 24/7, no scheduling or waiting required",
									},
									{
										icon: Sun03Icon,
										text: "Infinitely patient, never judges, always encouraging",
									},
								].map((item) => (
									<div key={item.text} className="flex gap-3 items-start">
										<div className="size-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
											<HugeiconsIcon
												icon={item.icon}
												className="size-3.5 text-primary"
												strokeWidth={1.5}
											/>
										</div>
										<p className="text-foreground leading-relaxed">
											{item.text}
										</p>
									</div>
								))}
							</div>
						</div>
						<div className="rounded-2xl border bg-muted/30 p-6 lg:p-8">
							<div className="space-y-4">
								<div className="rounded-xl bg-background border p-4">
									<p className="text-sm text-muted-foreground mb-1">
										You asked:
									</p>
									<p className="text-foreground">
										Why does the derivative of sin(x) give cos(x)? My teacher
										just said "memorize it."
									</p>
								</div>
								<div className="rounded-xl bg-primary/5 border border-primary/20 p-4">
									<p className="text-sm font-medium text-primary mb-2">
										Newton:
									</p>
									<p className="text-foreground leading-relaxed">
										Great question. Let's derive it from the limit definition.
										Think of sin(x) on the unit circle. When you nudge x by a
										tiny amount, the y-coordinate changes horizontally by
										cos(x). Want me to walk through the algebra, or would the
										geometric intuition help more?
									</p>
								</div>
								<div className="rounded-xl bg-background border p-4">
									<p className="text-sm text-muted-foreground mb-1">
										You replied:
									</p>
									<p className="text-foreground">Geometric intuition please!</p>
								</div>
								<div className="rounded-xl bg-primary/5 border border-primary/20 p-4">
									<p className="text-sm font-medium text-primary mb-2">
										Newton:
									</p>
									<p className="text-foreground leading-relaxed">
										Picture the unit circle. sin(x) is the height. Move a tiny
										arc along the circle from angle x. The height changes by
										approximately cos(x) times that arc length. That is the
										derivative. Let me draw it out for you...
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted/50">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="text-center max-w-2xl mx-auto mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
							From stuck to confident in three steps
						</h2>
						<p className="mt-4 text-muted-foreground text-lg">
							A learning loop that actually builds lasting understanding.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{steps.map((step) => (
							<div key={step.step} className="relative text-center">
								<div className="size-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
									<HugeiconsIcon
										icon={step.icon}
										className="size-6 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<p className="text-xs font-semibold text-primary tracking-widest uppercase mb-2">
									Step {step.step}
								</p>
								<h3 className="text-xl font-semibold text-foreground mb-2">
									{step.title}
								</h3>
								<p className="text-muted-foreground leading-relaxed">
									{step.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
						<div>
							<p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">
								Subjects
							</p>
							<h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
								From basic algebra to competition math
							</h2>
							<p className="mt-4 text-muted-foreground text-lg leading-relaxed">
								Zomath covers the full range of middle school through university
								math. Whether you are catching up, keeping up, or getting ahead,
								Newton adapts to your level and goals.
							</p>
						</div>
						<div className="flex flex-wrap gap-2.5">
							{subjects.map((subject) => (
								<span
									key={subject}
									className="inline-flex items-center gap-1.5 rounded-full border bg-muted/50 px-4 py-2 text-sm font-medium text-foreground"
								>
									<HugeiconsIcon
										icon={BookOpen02Icon}
										className="size-3.5 text-primary"
										strokeWidth={1.5}
									/>
									{subject}
								</span>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted/50">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="text-center max-w-2xl mx-auto mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
							What students are saying
						</h2>
						<p className="mt-4 text-muted-foreground text-lg">
							Real feedback from real learners.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-6">
						{testimonials.map((testimonial) => (
							<div
								key={testimonial.name}
								className="rounded-2xl border bg-background p-6 lg:p-8 flex flex-col"
							>
								<p className="text-foreground leading-relaxed flex-1">
									&ldquo;{testimonial.quote}&rdquo;
								</p>
								<div className="mt-6 pt-4 border-t">
									<p className="font-semibold text-foreground">
										{testimonial.name}
									</p>
									<p className="text-sm text-muted-foreground">
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
					<div className="max-w-2xl mx-auto">
						<h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight text-center">
							Common questions
						</h2>
						<p className="mt-4 text-muted-foreground text-lg text-center mb-10">
							Everything you want to know before getting started.
						</p>
						<Accordion type="single" collapsible className="w-full">
							{faqItems.map((item, index) => (
								<AccordionItem key={index} value={`item-${index}`}>
									<AccordionTrigger className="text-left text-foreground">
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

			<section className="py-24 lg:py-32 bg-primary/5">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mx-auto text-center">
						<HugeiconsIcon
							icon={GraduationScrollIcon}
							className="size-10 text-primary mx-auto mb-6"
							strokeWidth={1.5}
						/>
						<h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
							Ready to finally get math?
						</h2>
						<p className="mt-4 text-muted-foreground text-lg leading-relaxed">
							Join thousands of students who stopped memorizing and started
							understanding. Zomath is free to start, no credit card required.
						</p>
						<div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
							<Button size="lg" asChild>
								<Link href="/signup">
									Create your free account
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-4 ml-1"
										strokeWidth={1.5}
									/>
								</Link>
							</Button>
							<Button size="lg" variant="outline" asChild>
								<Link href="/features">Explore features</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
