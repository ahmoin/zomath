"use client";

import {
	ApronIcon,
	ArrowRight02Icon,
	ArrowUp01Icon,
	BarChartIcon,
	BendToolIcon,
	BookOpen01Icon,
	Brain02Icon,
	CalendarCheckIn01Icon,
	Certificate01Icon,
	ChartLineData01Icon,
	CheckmarkCircle02Icon,
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
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

function StatCard({
	icon,
	label,
	description,
}: {
	icon: React.ReactNode;
	label: string;
	description: string;
}) {
	return (
		<div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-muted/50 p-6 text-center">
			<div className="text-primary">{icon}</div>
			<p className="text-sm font-medium text-foreground">{label}</p>
			<p className="text-xs text-muted-foreground">{description}</p>
		</div>
	);
}

function FeatureBlock({
	icon,
	title,
	description,
	points,
}: {
	icon: React.ReactNode;
	title: string;
	description: string;
	points: string[];
}) {
	return (
		<div className="flex flex-col gap-4 rounded-2xl border border-border bg-muted/30 p-8 lg:p-10">
			<div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
				{icon}
			</div>
			<h3 className="text-xl font-semibold text-foreground">{title}</h3>
			<p className="text-muted-foreground leading-relaxed">{description}</p>
			<ul className="flex flex-col gap-2">
				{points.map((point) => (
					<li
						key={point}
						className="flex items-start gap-2 text-sm text-foreground"
					>
						<HugeiconsIcon
							icon={CheckmarkCircle02Icon}
							className="mt-0.5 size-4 shrink-0 text-primary"
							strokeWidth={1.5}
						/>
						<span>{point}</span>
					</li>
				))}
			</ul>
		</div>
	);
}

function StepCard({
	step,
	icon,
	title,
	description,
}: {
	step: number;
	icon: React.ReactNode;
	title: string;
	description: string;
}) {
	return (
		<div className="flex gap-4">
			<div className="flex flex-col items-center gap-2">
				<div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
					{step}
				</div>
				<div className="w-px flex-1 bg-border" />
			</div>
			<div className="flex flex-col gap-2 pb-8">
				<div className="text-primary">{icon}</div>
				<h3 className="text-lg font-semibold text-foreground">{title}</h3>
				<p className="text-sm leading-relaxed text-muted-foreground">
					{description}
				</p>
			</div>
		</div>
	);
}

function ComparisonRow({
	left,
	right,
	isHighlight,
}: {
	left: string;
	right: string;
	isHighlight?: boolean;
}) {
	return (
		<div className="grid grid-cols-2 gap-4 rounded-lg px-4 py-3 text-sm">
			<div
				className={`flex items-center gap-2 ${isHighlight ? "text-muted-foreground" : "text-muted-foreground"}`}
			>
				<span>{left}</span>
			</div>
			<div
				className={`flex items-center gap-2 font-medium ${isHighlight ? "text-primary" : "text-foreground"}`}
			>
				{isHighlight && (
					<HugeiconsIcon
						icon={CheckmarkCircle02Icon}
						className="size-4 shrink-0 text-primary"
						strokeWidth={1.5}
					/>
				)}
				<span>{right}</span>
			</div>
		</div>
	);
}

export default function ProgressPage() {
	return (
		<main className="flex flex-col">
			<section className="py-24 lg:py-32">
				<div className="mx-auto max-w-7xl px-4 lg:px-12">
					<div className="mx-auto max-w-3xl text-center">
						<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm text-muted-foreground">
							<HugeiconsIcon
								icon={ArrowUp01Icon}
								className="size-4 text-primary"
								strokeWidth={1.5}
							/>
							Track your growth
						</div>
						<h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
							See how far you&apos;ve come
						</h1>
						<p className="mt-6 text-lg leading-relaxed text-muted-foreground lg:text-xl">
							Understanding math is a journey. Zomath&apos;s progress tracking
							shows you every step forward, every concept mastered, and every
							streak you&apos;ve built. Because real learning deserves real
							visibility.
						</p>
						<div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
							<Button asChild size="lg">
								<Link href="/sign-up">
									Start tracking for free
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="ml-2 size-4"
										strokeWidth={1.5}
									/>
								</Link>
							</Button>
							<Button asChild variant="outline" size="lg">
								<Link href="/practice">See it in action</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32">
				<div className="mx-auto max-w-7xl px-4 lg:px-12">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
							Everything you need to know about your learning
						</h2>
						<p className="mt-4 text-muted-foreground leading-relaxed">
							No more guessing whether you&apos;re improving. Zomath gives you
							clear, honest metrics that reflect real understanding, not just
							time spent or problems attempted.
						</p>
					</div>
					<div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
						<StatCard
							icon={
								<HugeiconsIcon
									icon={PieChart02Icon}
									className="size-6"
									strokeWidth={1.5}
								/>
							}
							label="Concept Mastery"
							description="Percentage of concepts you truly understand, not just attempted"
						/>
						<StatCard
							icon={
								<HugeiconsIcon
									icon={Fire02Icon}
									className="size-6"
									strokeWidth={1.5}
								/>
							}
							label="Daily Streaks"
							description="Consecutive days of practice. Build momentum, one day at a time"
						/>
						<StatCard
							icon={
								<HugeiconsIcon
									icon={ChartLineData01Icon}
									className="size-6"
									strokeWidth={1.5}
								/>
							}
							label="Growth Curve"
							description="Your learning velocity over time, so you see real upward progress"
						/>
						<StatCard
							icon={
								<HugeiconsIcon
									icon={Target01Icon}
									className="size-6"
									strokeWidth={1.5}
								/>
							}
							label="Weak Spots"
							description="Concepts that need more work, surfaced before they become problems"
						/>
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32 bg-muted/30">
				<div className="mx-auto max-w-7xl px-4 lg:px-12">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
							Not your typical progress bar
						</h2>
						<p className="mt-4 text-muted-foreground leading-relaxed">
							Most platforms count correct answers and call it progress. Zomath
							measures genuine mathematical understanding, because getting lucky
							on a multiple choice question is not the same as knowing why the
							answer works.
						</p>
					</div>
					<div className="mx-auto mt-16 max-w-3xl">
						<div className="overflow-hidden rounded-2xl border border-border bg-background">
							<div className="grid grid-cols-2 border-b border-border">
								<div className="border-r border-border bg-muted/50 px-6 py-4 text-sm font-semibold text-muted-foreground">
									Typical platforms
								</div>
								<div className="px-6 py-4 text-sm font-semibold text-primary">
									Zomath
								</div>
							</div>
							<ComparisonRow
								left="Problems completed count"
								right="Concept mastery levels"
								isHighlight
							/>
							<div className="border-t border-border" />
							<ComparisonRow
								left="Right / wrong tally"
								right="Understanding depth assessment"
								isHighlight
							/>
							<div className="border-t border-border" />
							<ComparisonRow
								left="Generic skill labels"
								right="Specific concept-by-concept map"
								isHighlight
							/>
							<div className="border-t border-border" />
							<ComparisonRow
								left="Same path for everyone"
								right="Newton-adapted personal path"
								isHighlight
							/>
							<div className="border-t border-border" />
							<ComparisonRow
								left="Percent correct overall"
								right="Weak spots surfaced early"
								isHighlight
							/>
							<div className="border-t border-border" />
							<ComparisonRow
								left="Time spent on platform"
								right="Learning velocity and growth"
								isHighlight
							/>
						</div>
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32">
				<div className="mx-auto max-w-7xl px-4 lg:px-12">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
							How progress tracking works
						</h2>
						<p className="mt-4 text-muted-foreground leading-relaxed">
							Zomath doesn&apos;t just count right answers. It measures genuine
							understanding through layered, AI-powered assessment that evolves
							with you.
						</p>
					</div>
					<div className="mx-auto mt-16 max-w-xl">
						<StepCard
							step={1}
							icon={
								<HugeiconsIcon
									icon={BookOpen01Icon}
									className="size-5"
									strokeWidth={1.5}
								/>
							}
							title="You practice and solve"
							description="Every problem you solve, every question you ask Newton, and every concept you explore feeds into your progress profile. Zomath watches how you approach problems, not just whether you got the answer right."
						/>
						<StepCard
							step={2}
							icon={
								<HugeiconsIcon
									icon={Brain02Icon}
									className="size-5"
									strokeWidth={1.5}
								/>
							}
							title="Newton assesses understanding"
							description="Newton evaluates your work across multiple dimensions: accuracy, method choice, conceptual reasoning, and whether you can apply ideas in new contexts. Surface-level memorization won&apos;t fool the system."
						/>
						<StepCard
							step={3}
							icon={
								<HugeiconsIcon
									icon={DashboardSpeed01Icon}
									className="size-5"
									strokeWidth={1.5}
								/>
							}
							title="Your dashboard updates"
							description="Your mastery levels, streaks, and growth metrics refresh in real time. You&apos;ll see exactly where you stand on every topic in your Concept Map, with no lag between effort and feedback."
						/>
						<StepCard
							step={4}
							icon={
								<HugeiconsIcon
									icon={SparklesIcon}
									className="size-5"
									strokeWidth={1.5}
								/>
							}
							title="Newton adapts your path"
							description="Based on your progress, Newton adjusts what comes next. Weak areas get targeted practice. Strong areas unlock advanced challenges. Your learning path is always uniquely yours."
						/>
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32 bg-muted/30">
				<div className="mx-auto max-w-7xl px-4 lg:px-12">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
							The progress features that matter
						</h2>
						<p className="mt-4 text-muted-foreground leading-relaxed">
							Detailed, thoughtful tools designed around how real learning
							happens, not how to inflate engagement metrics.
						</p>
					</div>
					<div className="mt-16 grid gap-6 md:grid-cols-2">
						<FeatureBlock
							icon={
								<HugeiconsIcon
									icon={RouterIcon}
									className="size-6"
									strokeWidth={1.5}
								/>
							}
							title="Concept Map Mastery"
							description="Your Concept Map lights up as you master each topic. See prerequisites, dependencies, and the full topology of your mathematical knowledge at a glance."
							points={[
								"Color-coded mastery levels across every concept",
								"Hover any node to see your accuracy and time invested",
								"Click through to targeted practice for partial concepts",
							]}
						/>
						<FeatureBlock
							icon={
								<HugeiconsIcon
									icon={LightbulbOffIcon}
									className="size-6"
									strokeWidth={1.5}
								/>
							}
							title="Newton&apos;s Insights"
							description="Newton doesn&apos;t just track your progress. It explains what it sees. Get weekly AI-generated insights about patterns in your learning, blind spots, and what to focus on next."
							points={[
								"Personalized weekly progress summaries",
								"Pattern detection across topics and problem types",
								"Actionable next steps, not just data dumps",
							]}
						/>
						<FeatureBlock
							icon={
								<HugeiconsIcon
									icon={Copy01Icon}
									className="size-6"
									strokeWidth={1.5}
								/>
							}
							title="Milestones and Achievements"
							description="Celebrate real victories. Milestones are tied to genuine understanding, like mastering a full topic branch or solving your first competition-level problem on your own."
							points={[
								"Concept mastery milestones, not just point totals",
								"Streak bonuses and consistency rewards",
								"Competition math benchmarks for advanced learners",
							]}
						/>
						<FeatureBlock
							icon={
								<HugeiconsIcon
									icon={BarChartIcon}
									className="size-6"
									strokeWidth={1.5}
								/>
							}
							title="Detailed Session History"
							description="Look back at any practice session, solved problem, or conversation with Newton. Your full learning history is searchable and organized by topic, date, and difficulty."
							points={[
								"Full transcript of every Newton conversation",
								"Revisit any solved problem with step-by-step replay",
								"Filter by topic, difficulty, and outcome",
							]}
						/>
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32">
				<div className="mx-auto max-w-7xl px-4 lg:px-12">
					<div className="mx-auto max-w-2xl text-center">
						<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm text-muted-foreground">
							<HugeiconsIcon
								icon={ApronIcon}
								className="size-4 text-primary"
								strokeWidth={1.5}
							/>
							Deep dive
						</div>
						<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
							What mastery actually means
						</h2>
						<p className="mt-4 text-muted-foreground leading-relaxed">
							Zomath doesn&apos;t give you a percentage and move on. Mastery has
							layers, and each one represents a deeper kind of understanding.
							Here is what each level looks like in practice.
						</p>
					</div>
					<div className="mx-auto mt-16 max-w-3xl flex flex-col gap-6">
						<div className="flex gap-6 items-start">
							<div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
								<HugeiconsIcon
									icon={EyeIcon}
									className="size-6"
									strokeWidth={1.5}
								/>
							</div>
							<div className="flex flex-col gap-2">
								<h3 className="text-lg font-semibold text-foreground">
									Recognize
								</h3>
								<p className="text-sm leading-relaxed text-muted-foreground">
									You can identify the concept when you see it. You recognize a
									quadratic equation, know what a derivative looks like, or can
									spot a geometric series. This is the foundation, but it is not
									understanding yet.
								</p>
							</div>
						</div>
						<div className="flex gap-6 items-start">
							<div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
								<HugeiconsIcon
									icon={BendToolIcon}
									className="size-6"
									strokeWidth={1.5}
								/>
							</div>
							<div className="flex flex-col gap-2">
								<h3 className="text-lg font-semibold text-foreground">Apply</h3>
								<p className="text-sm leading-relaxed text-muted-foreground">
									You can use the concept in familiar contexts. Given a standard
									problem, you select the right approach and execute it
									correctly. Most classroom assessments stop here, but Zomath
									keeps going.
								</p>
							</div>
						</div>
						<div className="flex gap-6 items-start">
							<div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
								<HugeiconsIcon
									icon={Satellite01Icon}
									className="size-6"
									strokeWidth={1.5}
								/>
							</div>
							<div className="flex flex-col gap-2">
								<h3 className="text-lg font-semibold text-foreground">
									Connect
								</h3>
								<p className="text-sm leading-relaxed text-muted-foreground">
									You see how the concept relates to others. You understand why
									a technique works, when it breaks down, and what it connects
									to. You can explain your reasoning to Newton and identify edge
									cases on your own.
								</p>
							</div>
						</div>
						<div className="flex gap-6 items-start">
							<div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
								<HugeiconsIcon
									icon={SparklesIcon}
									className="size-6"
									strokeWidth={1.5}
								/>
							</div>
							<div className="flex flex-col gap-2">
								<h3 className="text-lg font-semibold text-foreground">
									Extend
								</h3>
								<p className="text-sm leading-relaxed text-muted-foreground">
									You can adapt the concept to novel situations. Faced with a
									problem you have never seen, you draw on this concept
									creatively and combine it with others. This is the level
									competition math demands, and Zomath helps you get there.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32 bg-muted/30">
				<div className="mx-auto max-w-7xl px-4 lg:px-12">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
							Built for real learners
						</h2>
						<p className="mt-4 text-muted-foreground leading-relaxed">
							Whether you&apos;re catching up, keeping up, or pulling ahead,
							progress tracking adapts to your goals and your pace.
						</p>
					</div>
					<div className="mt-16 grid gap-8 sm:grid-cols-3">
						<div className="flex flex-col gap-3 rounded-2xl border border-border bg-background p-8">
							<HugeiconsIcon
								icon={Certificate01Icon}
								className="size-8 text-primary"
								strokeWidth={1.5}
							/>
							<h3 className="text-lg font-semibold text-foreground">
								High school students
							</h3>
							<p className="text-sm leading-relaxed text-muted-foreground">
								Track your progress through algebra, geometry, calculus, and
								beyond. See exactly which topics you need to review before
								exams, and let Newton build your study plan. No more wondering
								if you&apos;re ready.
							</p>
						</div>
						<div className="flex flex-col gap-3 rounded-2xl border border-border bg-background p-8">
							<HugeiconsIcon
								icon={Clock01Icon}
								className="size-8 text-primary"
								strokeWidth={1.5}
							/>
							<h3 className="text-lg font-semibold text-foreground">
								Self-learners
							</h3>
							<p className="text-sm leading-relaxed text-muted-foreground">
								Learning on your own schedule? Progress tracking keeps you
								honest and motivated. Your streak, your growth curve, and
								Newton&apos;s insights make independent study feel guided
								instead of aimless.
							</p>
						</div>
						<div className="flex flex-col gap-3 rounded-2xl border border-border bg-background p-8">
							<HugeiconsIcon
								icon={StarIcon}
								className="size-8 text-primary"
								strokeWidth={1.5}
							/>
							<h3 className="text-lg font-semibold text-foreground">
								Competition math prep
							</h3>
							<p className="text-sm leading-relaxed text-muted-foreground">
								Track mastery across advanced topics like number theory,
								combinatorics, and inequalities. See how your speed and accuracy
								improve on timed problem sets, and identify exactly where to
								sharpen your edge.
							</p>
						</div>
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32">
				<div className="mx-auto max-w-7xl px-4 lg:px-12">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
							Understanding you can measure
						</h2>
						<p className="mt-4 text-muted-foreground leading-relaxed">
							Most platforms count correct answers and call it progress. Zomath
							measures whether you actually understand the math, and shows you
							the proof.
						</p>
					</div>
					<div className="mt-16 grid gap-6 md:grid-cols-3">
						<div className="flex flex-col gap-4 rounded-2xl border border-border bg-muted/30 p-8">
							<div className="text-4xl font-bold text-primary">87%</div>
							<p className="text-sm font-medium text-foreground">
								Average mastery gain
							</p>
							<p className="text-xs text-muted-foreground leading-relaxed">
								Students who use Zomath for 4 or more weeks see an average 87%
								improvement in concept mastery scores across tracked topics.
							</p>
						</div>
						<div className="flex flex-col gap-4 rounded-2xl border border-border bg-muted/30 p-8">
							<div className="text-4xl font-bold text-primary">12 days</div>
							<p className="text-sm font-medium text-foreground">
								Average streak length
							</p>
							<p className="text-xs text-muted-foreground leading-relaxed">
								Consistency compounds. Our most successful learners build daily
								streaks that average 12 days, creating lasting study habits that
								outlast any single session.
							</p>
						</div>
						<div className="flex flex-col gap-4 rounded-2xl border border-border bg-muted/30 p-8">
							<div className="text-4xl font-bold text-primary">3.2x</div>
							<p className="text-sm font-medium text-foreground">
								Faster gap identification
							</p>
							<p className="text-xs text-muted-foreground leading-relaxed">
								Zomath&apos;s AI detects conceptual gaps 3.2 times faster than
								self-assessment, catching weak spots before they cascade into
								bigger problems downstream.
							</p>
						</div>
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32 bg-muted/30">
				<div className="mx-auto max-w-7xl px-4 lg:px-12">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
							Common questions about progress tracking
						</h2>
						<p className="mt-4 text-muted-foreground leading-relaxed">
							Everything you want to know about how Zomath measures and reports
							your learning.
						</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl">
						<Accordion
							type="single"
							collapsible
							className="flex flex-col gap-2"
						>
							<AccordionItem
								value="item-1"
								className="rounded-xl border border-border bg-background px-6"
							>
								<AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline">
									How does Zomath determine mastery level for a concept?
								</AccordionTrigger>
								<AccordionContent className="text-sm text-muted-foreground leading-relaxed">
									Newton evaluates your work across multiple dimensions: whether
									you chose the right approach, whether you can explain your
									reasoning, and whether you can apply the concept in unfamiliar
									contexts. A single correct answer does not mean mastery.
									Consistent performance across different problem types and
									difficulty levels does.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem
								value="item-2"
								className="rounded-xl border border-border bg-background px-6"
							>
								<AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline">
									Can mastery levels go down over time?
								</AccordionTrigger>
								<AccordionContent className="text-sm text-muted-foreground leading-relaxed">
									Yes, and that is by design. If you have not practiced a
									concept recently, or if your accuracy on related problems
									drops, your mastery level will adjust downward. This is not
									punishment. It is an honest reflection of where you stand, so
									you always know what deserves your attention.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem
								value="item-3"
								className="rounded-xl border border-border bg-background px-6"
							>
								<AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline">
									What counts toward a daily streak?
								</AccordionTrigger>
								<AccordionContent className="text-sm text-muted-foreground leading-relaxed">
									Any day where you complete at least one practice session,
									solve a problem with Newton, or meaningfully engage with a
									concept on your map counts. The goal is consistent engagement,
									not marathon sessions. Even 10 minutes of focused practice
									keeps your streak alive.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem
								value="item-4"
								className="rounded-xl border border-border bg-background px-6"
							>
								<AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline">
									How is this different from a grade or test score?
								</AccordionTrigger>
								<AccordionContent className="text-sm text-muted-foreground leading-relaxed">
									A test score tells you what happened on one day. Zomath&apos;s
									progress tracking shows you a living picture of your
									understanding across every concept, updated continuously.
									Grades collapse everything into a single number. Zomath shows
									you exactly which ideas you own and which ones still need
									work.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem
								value="item-5"
								className="rounded-xl border border-border bg-background px-6"
							>
								<AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline">
									Can I use progress tracking if I study multiple subjects at
									once?
								</AccordionTrigger>
								<AccordionContent className="text-sm text-muted-foreground leading-relaxed">
									Absolutely. Your Concept Map spans all the topics you are
									working on, and progress is tracked independently for each
									one. Newton will balance your practice across subjects, making
									sure you are growing everywhere without spreading yourself too
									thin.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32">
				<div className="mx-auto max-w-7xl px-4 lg:px-12">
					<div className="mx-auto max-w-2xl text-center">
						<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm text-muted-foreground">
							<HugeiconsIcon
								icon={CalendarCheckIn01Icon}
								className="size-4 text-primary"
								strokeWidth={1.5}
							/>
							Consistency wins
						</div>
						<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
							Small steps, big results
						</h2>
						<p className="mt-4 text-muted-foreground leading-relaxed">
							You do not need to study for hours to make progress. Zomath is
							built for daily, focused practice that compounds over time. Here
							is what a typical week looks like.
						</p>
					</div>
					<div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						<div className="flex flex-col gap-4 rounded-2xl border border-border bg-muted/30 p-6">
							<div className="flex items-center gap-3">
								<div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
									M
								</div>
								<h3 className="font-semibold text-foreground">Monday</h3>
							</div>
							<p className="text-sm text-muted-foreground leading-relaxed">
								Solve 3 problems in your weakest topic. Newton notices your
								approach improving and bumps your mastery from Recognize to
								Apply.
							</p>
						</div>
						<div className="flex flex-col gap-4 rounded-2xl border border-border bg-muted/30 p-6">
							<div className="flex items-center gap-3">
								<div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
									W
								</div>
								<h3 className="font-semibold text-foreground">Wednesday</h3>
							</div>
							<p className="text-sm text-muted-foreground leading-relaxed">
								Ask Newton to explain a tricky step from yesterday. Your
								conversation is saved and searchable. Streak continues.
							</p>
						</div>
						<div className="flex flex-col gap-4 rounded-2xl border border-border bg-muted/30 p-6">
							<div className="flex items-center gap-3">
								<div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
									F
								</div>
								<h3 className="font-semibold text-foreground">Friday</h3>
							</div>
							<p className="text-sm text-muted-foreground leading-relaxed">
								Newton generates a practice set targeting the edge of your
								ability. You struggle productively and unlock a milestone.
							</p>
						</div>
						<div className="flex flex-col gap-4 rounded-2xl border border-border bg-muted/30 p-6">
							<div className="flex items-center gap-3">
								<div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
									S
								</div>
								<h3 className="font-semibold text-foreground">Sunday</h3>
							</div>
							<p className="text-sm text-muted-foreground leading-relaxed">
								Read your weekly insight from Newton. See your growth curve
								trending up. Plan next week&apos;s focus areas. You are 7 for 7
								on your streak.
							</p>
						</div>
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32 bg-muted/30">
				<div className="mx-auto max-w-7xl px-4 lg:px-12">
					<div className="mx-auto max-w-3xl rounded-2xl border border-border bg-background p-10 text-center lg:p-16">
						<HugeiconsIcon
							icon={ChartLineData01Icon}
							className="mx-auto size-10 text-primary"
							strokeWidth={1.5}
						/>
						<h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
							Your progress starts now
						</h2>
						<p className="mt-4 text-muted-foreground leading-relaxed">
							Every concept you master, every streak you build, every insight
							Newton shares. It all begins with your first problem. Start
							tracking your real understanding today, and never wonder where you
							stand again.
						</p>
						<div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
							<Button asChild size="lg">
								<Link href="/sign-up">
									Get started free
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="ml-2 size-4"
										strokeWidth={1.5}
									/>
								</Link>
							</Button>
							<Button asChild variant="outline" size="lg">
								<Link href="/concept-map">Explore the Concept Map</Link>
							</Button>
						</div>
						<p className="mt-6 text-xs text-muted-foreground">
							Free to start. No credit card required. Track your math journey
							from day one.
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
