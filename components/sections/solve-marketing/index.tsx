"use client";

import {
	ApplePieIcon,
	ArrowRight02Icon,
	BookOpen01Icon,
	BrainIcon,
	Camera02Icon,
	Cancel01Icon,
	CardExchange01Icon,
	CheckmarkCircle01Icon,
	ForkIcon,
	Layers01Icon,
	LightbulbOffIcon,
	PencilEdit01Icon,
	RefreshIcon,
	SmartphoneNfcIcon,
	SparklesIcon,
	Target01Icon,
	Upload01Icon,
	Video01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { FiveStars } from "@/components/five-stars";
import {
	comparisonItems,
	coverageCategories,
	faqs,
	testimonials,
} from "@/components/sections/solve-marketing/data";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export function SolveMarketing() {
	return (
		<main className="flex min-h-svh flex-col">
			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-3xl mx-auto text-center">
						<div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm text-muted-foreground mb-8">
							<HugeiconsIcon
								icon={Camera02Icon}
								className="size-4"
								strokeWidth={1.5}
							/>
							Powered by Newton
						</div>
						<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-foreground leading-[1.1]">
							Snap a photo.
							<br />
							Understand the math.
						</h1>
						<p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
							Zomath Solve doesn't just give you the answer. Newton walks you
							through every step, explains the reasoning, and makes sure you
							actually get it.
						</p>
						<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
							<Button size="lg" className="text-base px-8 h-12" asChild>
								<Link href="/sign-up">
									Try Solve free
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-5 ml-1"
										strokeWidth={1.5}
									/>
								</Link>
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="text-base px-8 h-12"
								asChild
							>
								<Link href="/demo">See how it works</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="text-center mb-16">
						<p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
							How it works
						</p>
						<h2 className="text-3xl lg:text-5xl font-medium tracking-tight text-foreground">
							Three steps to clarity
						</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
						{[
							{
								icon: Upload01Icon,
								title: "Snap or upload",
								body: "Take a photo of any math problem, from algebra homework to competition proofs. Handwriting, printed text, even messy whiteboard scribbles all work.",
								n: "1",
							},
							{
								icon: BrainIcon,
								title: "Newton analyzes",
								body: "Newton identifies the problem type, relevant concepts, and the right approach. Not just pattern matching. Real mathematical reasoning.",
								n: "2",
							},
							{
								icon: LightbulbOffIcon,
								title: "Actually learn",
								body: "Get a clear step-by-step walkthrough with the why behind each step. Ask follow-up questions. Practice similar problems. Walk away understanding it.",
								n: "3",
							},
						].map(({ icon, title, body, n }) => (
							<div
								key={title}
								className="relative flex flex-col items-center text-center"
							>
								<div className="flex items-center justify-center size-14 rounded-2xl bg-primary text-primary-foreground mb-6">
									<HugeiconsIcon
										icon={icon}
										className="size-6"
										strokeWidth={1.5}
									/>
								</div>
								<span className="absolute top-4 left-1/2 ml-20 text-6xl font-light text-border select-none hidden lg:block">
									{n}
								</span>
								<h3 className="text-xl font-medium text-foreground mb-3">
									{title}
								</h3>
								<p className="text-muted-foreground leading-relaxed">{body}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mb-16">
						<p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
							Not just answers
						</p>
						<h2 className="text-3xl lg:text-5xl font-medium tracking-tight text-foreground">
							Why Solve is different
						</h2>
						<p className="mt-4 text-lg text-muted-foreground leading-relaxed">
							Most math apps hand you the answer and call it a day. Newton does
							the opposite: the answer is almost beside the point. The
							understanding is the whole point.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
						{[
							{
								icon: PencilEdit01Icon,
								title: "Every step, explained",
								body: 'No skipped steps. No "it follows that." Newton writes out every algebraic move, every substitution, every logical leap, and tells you why it works. If a step feels mysterious, tap it and Newton explains in plain language.',
							},
							{
								icon: SparklesIcon,
								title: "Connected to concepts",
								body: "Every solution links back to the concepts in your Zomath Concept Map. See where quadratic equations connect to parabolas, where the chain rule links back to product rule. Understanding grows in networks, not in isolation.",
							},
							{
								icon: RefreshIcon,
								title: "Ask follow-ups",
								body: '"Why did you factor here?" "What if the coefficient was negative?" "Can you show another method?" Newton keeps the conversation going until you\'re satisfied. No question is too small or too silly.',
							},
							{
								icon: Video01Icon,
								title: "Multiple solution paths",
								body: "There's often more than one way to solve a problem. Newton shows you the most instructive approach first, then offers alternative methods so you build flexible thinking instead of rigid formulas.",
							},
						].map(({ icon, title, body }) => (
							<div
								key={title}
								className="rounded-2xl border border-border p-8 bg-background"
							>
								<div className="flex items-center gap-3 mb-4">
									<HugeiconsIcon
										icon={icon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
									<h3 className="text-lg font-medium text-foreground">
										{title}
									</h3>
								</div>
								<p className="text-muted-foreground leading-relaxed">{body}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="text-center mb-16">
						<p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
							Not another answer key
						</p>
						<h2 className="text-3xl lg:text-5xl font-medium tracking-tight text-foreground">
							Solve vs. the typical math app
						</h2>
						<p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
							Most tools stop at the answer. Newton starts there.
						</p>
					</div>
					<div className="max-w-4xl mx-auto">
						<div className="hidden md:grid grid-cols-[1fr_1fr_1fr] gap-4 mb-4 px-6">
							<span className="text-sm font-medium text-muted-foreground" />
							<span className="text-sm font-medium text-primary text-center">
								Zomath Solve
							</span>
							<span className="text-sm font-medium text-muted-foreground text-center">
								Typical app
							</span>
						</div>
						<div className="space-y-3">
							{comparisonItems.map((item) => (
								<div
									key={item.feature}
									className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-3 md:gap-4 rounded-2xl border border-border bg-background p-6 md:px-8"
								>
									<div className="font-medium text-foreground flex items-center gap-2">
										{item.feature}
									</div>
									<div className="flex items-start gap-2">
										<HugeiconsIcon
											icon={CheckmarkCircle01Icon}
											className="size-5 text-primary flex-shrink-0 mt-0.5"
											strokeWidth={1.5}
										/>
										<span className="text-sm text-foreground">
											{item.zomath}
										</span>
									</div>
									<div className="flex items-start gap-2">
										<HugeiconsIcon
											icon={Cancel01Icon}
											className="size-5 text-muted-foreground flex-shrink-0 mt-0.5"
											strokeWidth={1.5}
										/>
										<span className="text-sm text-muted-foreground">
											{item.typical}
										</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="text-center mb-16">
						<p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
							Built for the real world
						</p>
						<h2 className="text-3xl lg:text-5xl font-medium tracking-tight text-foreground">
							Works with what you have
						</h2>
						<p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
							Real homework is messy. Real classrooms are messy. Newton handles
							it.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{[
							{
								icon: CardExchange01Icon,
								title: "Messy handwriting",
								body: "Newton reads cursive, cramped digits, hastily written fractions, and that one variable you can barely tell is a 6 or a b.",
							},
							{
								icon: SmartphoneNfcIcon,
								title: "Bad photos",
								body: "Angled shots, dim lighting, partial framing. Newton works with the photo you actually take, not the one you wish you took.",
							},
							{
								icon: ApplePieIcon,
								title: "Multiple problems",
								body: "Photograph a whole page of homework. Newton detects each problem separately so you can choose which one to work on.",
							},
							{
								icon: ForkIcon,
								title: "Mixed notation",
								body: "Fractions written as a/b or stacked, exponents tiny or full size, Greek letters, matrix brackets. Newton understands the math regardless of format.",
							},
						].map(({ icon, title, body }) => (
							<div
								key={title}
								className="flex flex-col items-center text-center p-6"
							>
								<div className="flex items-center justify-center size-14 rounded-2xl bg-primary/10 text-primary mb-5">
									<HugeiconsIcon
										icon={icon}
										className="size-6"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="text-lg font-medium text-foreground mb-2">
									{title}
								</h3>
								<p className="text-sm text-muted-foreground leading-relaxed">
									{body}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="text-center mb-16">
						<p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
							Coverage
						</p>
						<h2 className="text-3xl lg:text-5xl font-medium tracking-tight text-foreground">
							What can you solve?
						</h2>
						<p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
							From middle school fundamentals to university proofs. If it's
							math, Newton can help.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
						{coverageCategories.map((cat) => (
							<div
								key={cat.title}
								className="rounded-2xl border border-border bg-background p-6 hover:border-primary/50 transition-colors"
							>
								<h3 className="text-lg font-medium text-foreground mb-2">
									{cat.title}
								</h3>
								<p className="text-sm text-muted-foreground leading-relaxed">
									{cat.examples}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
						<div>
							<p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
								Beyond Solve
							</p>
							<h2 className="text-3xl lg:text-5xl font-medium tracking-tight text-foreground">
								Solve is just the start
							</h2>
							<p className="mt-4 text-lg text-muted-foreground leading-relaxed">
								A solved problem is a foothold. Newton helps you climb from
								there.
							</p>
							<div className="mt-8 space-y-6">
								{[
									{
										icon: BookOpen01Icon,
										title: "Practice what you just learned",
										body: "After solving, Newton generates targeted practice problems at the right difficulty. Spaced repetition makes the knowledge stick.",
									},
									{
										icon: Layers01Icon,
										title: "See the bigger picture",
										body: "Each solution updates your Concept Map, showing how the problem you just solved connects to everything else you're learning.",
									},
									{
										icon: Target01Icon,
										title: "Track real progress",
										body: "Not just problems solved, but concepts understood. Your Progress dashboard shows where you're strong and where you need more work.",
									},
								].map(({ icon, title, body }) => (
									<div key={title} className="flex gap-4">
										<div className="flex-shrink-0 flex items-center justify-center size-10 rounded-xl bg-primary/10 text-primary">
											<HugeiconsIcon
												icon={icon}
												className="size-5"
												strokeWidth={1.5}
											/>
										</div>
										<div>
											<h4 className="font-medium text-foreground mb-1">
												{title}
											</h4>
											<p className="text-muted-foreground text-sm leading-relaxed">
												{body}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className="rounded-2xl border border-border bg-muted p-8 lg:p-12">
							<div className="space-y-6">
								<div className="rounded-xl bg-background border border-border p-5">
									<div className="flex items-center gap-2 mb-3">
										<div className="size-2 rounded-full bg-primary" />
										<span className="text-sm font-medium text-foreground">
											Newton
										</span>
									</div>
									<p className="text-sm text-muted-foreground leading-relaxed">
										Great question! The reason we complete the square here is
										that it transforms the quadratic into vertex form, which
										immediately reveals the minimum value and axis of symmetry.
										Want me to show you the geometric interpretation?
									</p>
								</div>
								<div className="rounded-xl bg-background border border-border p-5">
									<div className="flex items-center gap-2 mb-3">
										<div className="size-2 rounded-full bg-chart-3" />
										<span className="text-sm font-medium text-foreground">
											You
										</span>
									</div>
									<p className="text-sm text-muted-foreground leading-relaxed">
										Yes please! And can I get a few more problems like this one
										to practice?
									</p>
								</div>
								<div className="rounded-xl bg-primary/5 border border-primary/20 p-5">
									<p className="text-sm text-primary font-medium">
										3 practice problems generated based on this solution.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="text-center mb-16">
						<p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
							From students like you
						</p>
						<h2 className="text-3xl lg:text-5xl font-medium tracking-tight text-foreground">
							Real results, real understanding
						</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{testimonials.map((t) => (
							<div
								key={t.name}
								className="rounded-2xl border border-border bg-background p-8 flex flex-col"
							>
								<div className="flex gap-1 mb-4">
									<FiveStars className="size-4 text-primary fill-current" />
								</div>
								<p className="text-foreground leading-relaxed mb-6 flex-1">
									"{t.quote}"
								</p>
								<div>
									<p className="font-medium text-foreground text-sm">
										{t.name}
									</p>
									<p className="text-xs text-muted-foreground">{t.detail}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mx-auto">
						<div className="text-center mb-12">
							<p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
								FAQ
							</p>
							<h2 className="text-3xl lg:text-5xl font-medium tracking-tight text-foreground">
								Common questions
							</h2>
						</div>
						<Accordion type="single" collapsible className="space-y-3">
							{faqs.map((faq) => (
								<AccordionItem
									key={faq.question}
									value={faq.question}
									className="border border-border rounded-2xl px-6 data-[state=open]:bg-muted transition-colors"
								>
									<AccordionTrigger className="text-left text-foreground font-medium hover:no-underline py-5">
										{faq.question}
									</AccordionTrigger>
									<AccordionContent className="text-muted-foreground leading-relaxed pb-5">
										{faq.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted">
				<div className="max-w-7xl mx-auto px-4 lg:px-12 text-center">
					<h2 className="text-3xl lg:text-5xl font-medium tracking-tight text-foreground">
						Stop staring. Start understanding.
					</h2>
					<p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
						Your next math breakthrough is a photo away. Try Solve now and see
						what it feels like to actually get it.
					</p>
					<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
						<Button size="lg" className="text-base px-8 h-12" asChild>
							<Link href="/sign-up">
								Try Solve free
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-5 ml-1"
									strokeWidth={1.5}
								/>
							</Link>
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="text-base px-8 h-12"
							asChild
						>
							<Link href="/ask">Talk to Newton</Link>
						</Button>
					</div>
					<p className="mt-6 text-sm text-muted-foreground">
						Free to start. No credit card required.
					</p>
				</div>
			</section>
		</main>
	);
}
