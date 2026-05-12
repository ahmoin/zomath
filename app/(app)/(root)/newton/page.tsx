import {
	AiBrain01Icon,
	ArrowRight02Icon,
	BookOpen01Icon,
	BrainIcon,
	CalculatorIcon,
	ChartBubble01Icon,
	ElearningExchangeIcon,
	GraduateFemaleIcon,
	LayerIcon,
	LightbulbOffIcon,
	QuoteDownIcon,
	SparklesIcon,
	TangentIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { headers } from "next/headers";
import Link from "next/link";
import { AppSidebar } from "@/components/app-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { NewtonHeroSection } from "@/components/sections/newton-hero";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { auth } from "@/lib/auth";

const capabilities = [
	{
		icon: ElearningExchangeIcon,
		title: "Asks you questions back",
		description:
			"Newton never just gives the answer. It asks guiding questions that lead you to your own insights, so you build real understanding.",
	},
	{
		icon: AiBrain01Icon,
		title: "Adapts to your level",
		description:
			"Whether you are learning algebra basics or tackling competition problems, Newton adjusts its explanations and hints to meet you where you are.",
	},
	{
		icon: LightbulbOffIcon,
		title: "Connects concepts together",
		description:
			"Newton spots when a problem relates to something you have learned before, building bridges between topics so nothing feels isolated.",
	},
	{
		icon: ChartBubble01Icon,
		title: "Conversations, not lectures",
		description:
			"Talk to Newton naturally. Ask follow-ups, say you are confused, or request a different explanation. It is a dialogue, not a textbook.",
	},
	{
		icon: CalculatorIcon,
		title: "Works through problems step by step",
		description:
			"Newton breaks down complex problems into manageable pieces, walking through each step with you rather than skipping to the end.",
	},
	{
		icon: LayerIcon,
		title: "Remembers your journey",
		description:
			"Newton keeps track of what you have worked on, where you struggled, and what you mastered, so every session builds on the last.",
	},
];

const steps = [
	{
		step: "01",
		title: "Ask anything",
		description:
			"Type a question, paste a problem, or describe what is confusing you. Newton understands math at every level from arithmetic to competition proofs.",
	},
	{
		step: "02",
		title: "Get guided, not given",
		description:
			"Newton responds with questions, hints, and partial explanations designed to make you think. You do the reasoning, Newton provides the scaffolding.",
	},
	{
		step: "03",
		title: "Explore freely",
		description:
			"Not clicking? Say so. Want another angle? Ask. Newton adapts in real time, following your curiosity instead of forcing a preset path.",
	},
	{
		step: "04",
		title: "Build lasting understanding",
		description:
			"Because you discovered the answer yourself, it sticks. Newton helps you build intuition and confidence that transfers to new problems.",
	},
];

const testimonials = [
	{
		quote:
			"I used to memorize formulas and forget them before the test. Newton makes me actually understand why things work, and now I barely need to study.",
		name: "Priya S.",
		detail: "AP Calculus student",
	},
	{
		quote:
			"My tutor costs $80 an hour and mostly just shows me how to solve problems. Newton costs way less and actually makes me solve them myself.",
		name: "Marcus T.",
		detail: "Competition math prep",
	},
	{
		quote:
			"I was embarrassed to ask 'stupid questions' in class. With Newton I can ask anything, as many times as I need, without feeling judged.",
		name: "Elena K.",
		detail: "Self-learner, returning to math",
	},
];

const faqs = [
	{
		question: "Is Newton just another ChatGPT wrapper?",
		answer:
			"No. Newton is purpose-built for math education. While it uses advanced language models as a foundation, it has been specifically trained and fine-tuned to teach through guided discovery, not direct answers. Its pedagogy is designed around research on how people actually learn mathematics.",
	},
	{
		question: "What math topics does Newton cover?",
		answer:
			"Newton covers everything from pre-algebra through multivariable calculus, linear algebra, number theory, combinatorics, and competition math. If it is mathematics, Newton can help you understand it.",
	},
	{
		question: "Can I use Newton for homework help?",
		answer:
			"Newton will never do your homework for you, but it will help you understand the concepts so you can do it yourself. That is the whole point. You will learn more and get better grades in the long run.",
	},
	{
		question: "How is Newton different from the Solve feature?",
		answer:
			"Solve is for when you have a specific problem and want to see it worked out. Newton is for when you want to understand the deeper concepts, explore ideas, or work through something step by step with guidance. They complement each other.",
	},
	{
		question: "Does Newton remember previous conversations?",
		answer:
			"Yes. Newton builds a learning profile over time, remembering topics you have covered, areas where you struggled, and concepts you have mastered. This lets it provide increasingly personalized guidance.",
	},
];

export default async function NewtonPage() {
	const session = await auth.api.getSession({ headers: await headers() });

	if (session) {
		return (
			<TooltipProvider>
				<SidebarProvider
					style={
						{
							"--sidebar-width": "calc(var(--spacing) * 72)",
							"--header-height": "calc(var(--spacing) * 12)",
						} as React.CSSProperties
					}
				>
					<AppSidebar
						variant="inset"
						user={{
							name: session.user.name,
							email: session.user.email,
							avatar: session.user.image,
						}}
					/>
					<SidebarInset>
						<DashboardHeader name={session.user.name} />
						<div className="flex flex-1 flex-col">
							<div className="@container/main flex flex-1 flex-col gap-2">
								<div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
									<NewtonHeroSection isAuthed />
								</div>
							</div>
						</div>
					</SidebarInset>
				</SidebarProvider>
			</TooltipProvider>
		);
	}

	return (
		<main className="flex flex-col">
			<NewtonHeroSection isAuthed={false} />

			<section className="py-24 lg:py-32 bg-muted">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mb-16">
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Not a search engine. A tutor.
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed">
							Most AI tools give you answers. Newton gives you understanding.
							Here is what makes it different.
						</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{capabilities.map((cap) => (
							<div
								key={cap.title}
								className="flex flex-col gap-4 p-6 rounded-xl border border-border bg-background"
							>
								<div className="flex items-center justify-center size-10 rounded-lg bg-primary/10">
									<HugeiconsIcon
										icon={cap.icon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="text-lg font-semibold text-foreground">
									{cap.title}
								</h3>
								<p className="text-muted-foreground leading-relaxed">
									{cap.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section id="how-it-works" className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mx-auto text-center mb-16">
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
							How Newton works
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed">
							A conversation with Newton is not like searching the web. It is
							like working with a patient, expert tutor who knows exactly how to
							help you think.
						</p>
					</div>
					<div className="max-w-3xl mx-auto">
						<div className="flex flex-col gap-12">
							{steps.map((item, i) => (
								<div key={item.step} className="flex gap-6">
									<div className="flex flex-col items-center">
										<div className="flex items-center justify-center size-10 rounded-full bg-primary text-primary-foreground text-sm font-semibold shrink-0">
											{item.step}
										</div>
										{i < steps.length - 1 && (
											<div className="w-px flex-1 bg-border mt-3" />
										)}
									</div>
									<div className="pt-1.5 pb-6">
										<h3 className="text-xl font-semibold text-foreground mb-2">
											{item.title}
										</h3>
										<p className="text-muted-foreground leading-relaxed">
											{item.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mx-auto text-center mb-16">
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
							A peek inside a Newton session
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed">
							Here is what it looks like when you work through a concept with
							Newton. Notice how it guides rather than tells.
						</p>
					</div>
					<div className="max-w-2xl mx-auto">
						<div className="rounded-xl border border-border bg-background overflow-hidden">
							<div className="px-6 py-4 border-b border-border bg-muted/50 flex items-center gap-2">
								<HugeiconsIcon
									icon={BrainIcon}
									className="size-4 text-primary"
									strokeWidth={1.5}
								/>
								<span className="text-sm font-medium text-foreground">
									Newton
								</span>
							</div>
							<div className="p-6 flex flex-col gap-6">
								<div className="flex justify-end">
									<div className="bg-primary text-primary-foreground rounded-2xl rounded-br-sm px-4 py-3 max-w-sm text-sm leading-relaxed">
										I keep getting confused about why a negative times a
										negative is positive. It feels arbitrary.
									</div>
								</div>
								<div className="flex justify-start">
									<div className="bg-muted rounded-2xl rounded-bl-sm px-4 py-3 max-w-sm text-sm leading-relaxed">
										That feeling makes total sense. Let me ask you this: what
										happens when you take away a debt? If someone forgives a $5
										debt you owe, are you richer or poorer?
									</div>
								</div>
								<div className="flex justify-end">
									<div className="bg-primary text-primary-foreground rounded-2xl rounded-br-sm px-4 py-3 max-w-sm text-sm leading-relaxed">
										Richer, I guess. I have $5 more than I would have.
									</div>
								</div>
								<div className="flex justify-start">
									<div className="bg-muted rounded-2xl rounded-bl-sm px-4 py-3 max-w-sm text-sm leading-relaxed">
										Exactly. Subtracting a negative is the same as adding a
										positive. Now, can you see how that idea connects to
										multiplying two negatives?
									</div>
								</div>
								<div className="flex justify-end">
									<div className="bg-primary text-primary-foreground rounded-2xl rounded-br-sm px-4 py-3 max-w-sm text-sm leading-relaxed">
										Oh wait. If -3 times -2 is like subtracting -3 twice, that
										is adding 3 twice, which is 6?
									</div>
								</div>
								<div className="flex justify-start">
									<div className="bg-muted rounded-2xl rounded-bl-sm px-4 py-3 max-w-sm text-sm leading-relaxed">
										You got it. You just proved it yourself using logic you
										already understood. That is the real rule, not an arbitrary
										one.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mx-auto text-center mb-16">
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Every math topic, covered
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed">
							Newton can help you with any math subject, from the fundamentals
							to the frontiers.
						</p>
					</div>
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
						{[
							{ icon: CalculatorIcon, label: "Algebra" },
							{ icon: TangentIcon, label: "Geometry" },
							{ icon: BookOpen01Icon, label: "Trigonometry" },
							{ icon: GraduateFemaleIcon, label: "Calculus" },
							{ icon: LayerIcon, label: "Linear Algebra" },
							{ icon: BrainIcon, label: "Number Theory" },
							{ icon: SparklesIcon, label: "Combinatorics" },
							{ icon: ChartBubble01Icon, label: "Proof Writing" },
						].map((subject) => (
							<div
								key={subject.label}
								className="flex items-center gap-3 p-4 rounded-xl border border-border"
							>
								<HugeiconsIcon
									icon={subject.icon}
									className="size-5 text-primary shrink-0"
									strokeWidth={1.5}
								/>
								<span className="text-foreground font-medium">
									{subject.label}
								</span>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mx-auto text-center mb-16">
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
							What students say
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed">
							Thousands of learners are building real understanding with Newton.
						</p>
					</div>
					<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
						{testimonials.map((t) => (
							<div
								key={t.name}
								className="flex flex-col gap-4 p-6 rounded-xl border border-border bg-background"
							>
								<HugeiconsIcon
									icon={QuoteDownIcon}
									className="size-6 text-primary/40"
									strokeWidth={1.5}
								/>
								<p className="text-foreground leading-relaxed flex-1">
									{t.quote}
								</p>
								<Separator />
								<div>
									<p className="text-foreground font-semibold text-sm">
										{t.name}
									</p>
									<p className="text-muted-foreground text-sm">{t.detail}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mx-auto">
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Frequently asked questions
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed mb-10">
							Everything you want to know about learning with Newton.
						</p>
						<Accordion type="single" collapsible className="w-full">
							{faqs.map((faq, i) => (
								<AccordionItem key={i} value={`faq-${i}`}>
									<AccordionTrigger className="text-left text-foreground">
										{faq.question}
									</AccordionTrigger>
									<AccordionContent className="text-muted-foreground leading-relaxed">
										{faq.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-primary">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mx-auto text-center">
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-primary-foreground mb-4">
							Ready to actually understand math?
						</h2>
						<p className="text-lg text-primary-foreground/80 leading-relaxed mb-10">
							Stop memorizing. Start discovering. Newton is here to guide you
							every step of the way.
						</p>
						<Link href="/sign-up">
							<Button size="lg" variant="secondary" className="text-base px-6">
								Get started for free
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-5 ml-1"
									strokeWidth={1.5}
								/>
							</Button>
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
