"use client";

import {
	ArrowDown01Icon,
	ArrowRight02Icon,
	ArtboardIcon,
	BookOpen01Icon,
	Camera01Icon,
	Cancel01Icon,
	Chart02Icon,
	Clock01Icon,
	Edit02Icon,
	EllipseSelectionIcon,
	GridViewIcon,
	HeadphonesIcon,
	HelpCircleIcon,
	ImageUploadIcon,
	LightbulbOffIcon,
	Link02Icon,
	Mail01Icon,
	Notification03Icon,
	ReloadIcon,
	Search01Icon,
	Settings02Icon,
	Shield01Icon,
	SmartPhone01Icon,
	SparklesIcon,
	Tap01Icon,
	Target03Icon,
	TextTrackingIcon,
	Undo02Icon,
	User02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { useState } from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const quickStartSteps = [
	{
		step: "01",
		icon: Camera01Icon,
		title: "Snap a Problem",
		description:
			"Take a photo of any math problem, from algebra to calculus. Zomath reads handwritten and printed equations alike, so you can work straight from your homework or textbook.",
	},
	{
		step: "02",
		icon: Chart02Icon,
		title: "Learn with Newton",
		description:
			"Newton, your AI tutor, walks you through the solution step by step. Ask follow-up questions, request different approaches, or dive deeper into the reasoning behind each step.",
	},
	{
		step: "03",
		icon: Target03Icon,
		title: "Practice and Grow",
		description:
			"Newton generates targeted practice problems based on what you have been working on. Track your progress on your Concept Map and watch your understanding expand over time.",
	},
];

const browseCategories = [
	{
		icon: Camera01Icon,
		title: "Solve",
		description:
			"Photo scanning, equation recognition, and solution walkthroughs",
		href: "#feature-guides",
	},
	{
		icon: Chart02Icon,
		title: "Ask Newton",
		description:
			"Chatting with your AI tutor, asking better questions, getting deeper explanations",
		href: "#feature-guides",
	},
	{
		icon: Tap01Icon,
		title: "Concept Map",
		description:
			"Understanding your knowledge landscape, reading mastery levels, navigating topics",
		href: "#feature-guides",
	},
	{
		icon: Target03Icon,
		title: "Practice",
		description:
			"Targeted drills, difficulty settings, review sessions, and performance tracking",
		href: "#feature-guides",
	},
	{
		icon: ArtboardIcon,
		title: "Progress and Stats",
		description:
			"Viewing your history, tracking streaks, understanding your growth over time",
		href: "#faq",
	},
	{
		icon: Settings02Icon,
		title: "Account and Billing",
		description:
			"Managing your subscription, updating preferences, linked accounts for parents",
		href: "#faq",
	},
];

const featureHelp = [
	{
		icon: Camera01Icon,
		title: "Solve",
		subtitle: "Photo to solution",
		description:
			"Point your camera at any math problem and get an instant breakdown. Solve supports arithmetic, algebra, trigonometry, calculus, statistics, and more. It handles printed text and handwriting, and you can crop the image to focus on just the problem you need.",
		tips: [
			"Make sure the problem is well lit and in focus for best results",
			"Crop tightly around the problem to avoid picking up nearby equations",
			"If the solution looks off, try retaking the photo at a different angle",
			"You can always edit the recognized equation manually before submitting",
		],
	},
	{
		icon: Chart02Icon,
		title: "Ask Newton",
		subtitle: "AI chat tutor",
		description:
			"Newton is your personal math tutor, available any time. It does not just give answers, it explains the thinking behind each step. Ask Newton to clarify a concept, walk through an alternative method, or connect ideas across topics you have been learning.",
		tips: [
			"Be specific with your questions for the most helpful responses",
			"Ask Newton 'why?' at any step to understand the reasoning",
			"Request alternative solution methods to build deeper intuition",
			"Use the conversation history to revisit past explanations anytime",
		],
	},
	{
		icon: Tap01Icon,
		title: "Concept Map",
		subtitle: "Your knowledge landscape",
		description:
			"The Concept Map visualizes what you know and what you are ready to learn next. Each node is a math concept, colored by your mastery level. As you solve problems and practice, your map grows and connections form between related topics.",
		tips: [
			"Click any node to see prerequisite and follow-up concepts",
			"Grey nodes show concepts you are ready to start learning",
			"Your map updates in real time as you work through problems",
			"Hover over a connection line to see how two concepts relate",
		],
	},
	{
		icon: Target03Icon,
		title: "Practice",
		subtitle: "Targeted drills",
		description:
			"Practice mode generates problems tailored to what you need to work on. Newton selects difficulty levels that challenge you without overwhelming you, and adapts as you improve. Each practice session feeds back into your Concept Map and progress tracking.",
		tips: [
			"Start with recommended problems for the most efficient practice",
			"Use the difficulty slider to adjust challenge level on the fly",
			"Review mistakes with Newton to turn errors into understanding",
			"Complete a full session for the most accurate Concept Map update",
		],
	},
];

const troubleshootItems = [
	{
		icon: ImageUploadIcon,
		title: "Solve is not reading my problem correctly",
		steps: [
			"Make sure the photo is well lit and the text is in focus",
			"Crop the image tightly around just the problem you want solved",
			"If handwriting is involved, write clearly and avoid overlapping characters",
			"Use the manual equation editor to correct any misread parts before submitting",
			"Try a different angle or remove shadows that may be obscuring the text",
		],
	},
	{
		icon: Cancel01Icon,
		title: "Newton is giving an incorrect solution",
		steps: [
			"Double check that the input equation matches your original problem",
			"Tell Newton explicitly which step seems wrong and ask it to re-evaluate",
			"Try rephrasing your question with more context about the topic or chapter",
			"If the issue persists, report it using the flag icon so we can improve the model",
		],
	},
	{
		icon: ReloadIcon,
		title: "My Concept Map is not updating",
		steps: [
			"Concept Map updates require completing a full solve or practice session",
			"Check your internet connection, the map syncs with our servers after each activity",
			"Try refreshing the page, sometimes cached data needs a manual reload",
			"If nodes remain grey after multiple correct solves, contact support for a map recalculation",
		],
	},
	{
		icon: Edit02Icon,
		title: "Practice problems are too easy or too hard",
		steps: [
			"Use the difficulty slider in Practice mode to adjust the challenge level",
			"Complete a few sessions at your current level so Newton can calibrate accurately",
			"Try the recommended problems, which are selected based on your Concept Map data",
			"If problems feel stuck at one level, ask Newton to explain what concepts you need to strengthen",
		],
	},
];

const powerUserTips = [
	{
		label: "Quick solve",
		shortcut: "Ctrl + S",
		description: "Open the camera directly from any page",
	},
	{
		label: "Ask Newton",
		shortcut: "Ctrl + K",
		description: "Jump straight to a new Newton conversation",
	},
	{
		label: "Practice mode",
		shortcut: "Ctrl + P",
		description: "Start a practice session for your weakest topics",
	},
	{
		label: "Concept Map",
		shortcut: "Ctrl + M",
		description: "Open your Concept Map to review progress",
	},
	{
		label: "Format math",
		shortcut: "Ctrl + Shift + M",
		description: "Toggle math formatting in Newton chat input",
	},
	{
		label: "Screenshot solve",
		shortcut: "Ctrl + Shift + S",
		description: "Paste a screenshot from your clipboard into Solve",
	},
];

const faqItems = [
	{
		question: "What math topics does Zomath cover?",
		answer:
			"Zomath covers everything from middle school pre-algebra through AP Calculus and competition math. This includes algebra, geometry, trigonometry, precalculus, calculus, statistics, number theory, combinatorics, and more. We are always expanding our topic coverage based on what students ask for most.",
	},
	{
		question: "Is Zomath free to use?",
		answer:
			"Zomath offers a generous free tier that includes a limited number of solves and Newton conversations per day. Zomath Plus unlocks unlimited solves, extended Newton conversations, detailed progress analytics, and priority access to new features. You can start learning right now at no cost.",
	},
	{
		question: "How is Zomath different from a calculator or answer key?",
		answer:
			"Zomath is built around understanding, not shortcuts. Instead of handing you an answer, Newton walks you through the reasoning step by step, answers your follow-up questions, and connects the problem to broader concepts. The goal is that you walk away knowing how to solve similar problems on your own.",
	},
	{
		question: "Can I use Zomath for competition math preparation?",
		answer:
			"Absolutely. Newton can work through AMC, AIME, and Olympiad-style problems, explain elegant solution paths, and help you build the problem-solving instincts that competitions demand. Practice mode can target the specific topic areas that show up most often in competitions.",
	},
	{
		question: "Does Zomath work offline?",
		answer:
			"You need an internet connection for Solve, Ask Newton, and Practice since they rely on our AI models. However, your Concept Map and progress history are cached locally, so you can review what you have learned even without a connection.",
	},
	{
		question: "How does my Concept Map update over time?",
		answer:
			"Every problem you solve and every practice session you complete feeds data into your Concept Map. Concepts turn from grey to colored as you demonstrate understanding, and new nodes appear when you are ready for the next challenge. The more you use Zomath, the more accurate and useful your map becomes.",
	},
	{
		question: "Can parents or teachers see student progress?",
		answer:
			"Yes. Zomath offers a linked account feature where parents and teachers can view a student's Concept Map, practice history, and areas of difficulty. This helps adults provide targeted support without needing to be math experts themselves.",
	},
	{
		question: "What should I do if Solve misreads my problem?",
		answer:
			"First, try retaking the photo with better lighting and a tighter crop around the problem. If that does not help, you can type or edit the equation directly in the input field after scanning. Newton will pick up from the corrected version. We are constantly improving our recognition and appreciate your patience.",
	},
	{
		question: "How does Zomath protect my data and privacy?",
		answer:
			"We take student privacy seriously. All problem images are processed and then deleted from our servers, they are not stored or used for training. Conversation history with Newton is encrypted and only accessible from your account. We comply with COPPA and FERPA regulations, and we never sell personal data to third parties.",
	},
	{
		question: "Can I use Zomath on my phone and computer?",
		answer:
			"Yes. Zomath works in any modern browser on desktop, tablet, and mobile. Your Concept Map, conversation history, and progress sync automatically across devices. The camera-based Solve feature works especially well on mobile, while the Concept Map is easiest to explore on a larger screen.",
	},
	{
		question: "What happens if I run out of free solves?",
		answer:
			"Your daily free allotment resets every 24 hours. If you find yourself running out regularly, Zomath Plus provides unlimited solves along with extended Newton conversations and detailed analytics. You can upgrade at any time from your account settings.",
	},
	{
		question: "How do I reset my Concept Map and start fresh?",
		answer:
			"You can reset your Concept Map from Settings under the Progress section. This clears all mastery data and practice history. Be aware this action is irreversible, so we recommend exporting your progress data first if you want to keep a record of your learning journey.",
	},
];

const contactOptions = [
	{
		icon: Mail01Icon,
		title: "Email Us",
		description: "Get a response within 24 hours",
		action: "support@zomath.com",
		href: "mailto:support@zomath.com",
	},
	{
		icon: HeadphonesIcon,
		title: "Live Chat",
		description: "Available Monday through Friday, 9am to 6pm ET",
		action: "Start a conversation",
		href: "#",
	},
	{
		icon: User02Icon,
		title: "Community Forum",
		description: "Connect with other learners and share tips",
		action: "Visit the forum",
		href: "#",
	},
];

export default function HelpPage() {
	const [searchQuery, setSearchQuery] = useState("");

	const filteredFaq = faqItems.filter(
		(item) =>
			item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
			item.answer.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	return (
		<main className="flex flex-col">
			<section className="py-24 lg:py-32 bg-muted/50">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mx-auto text-center">
						<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
							<HugeiconsIcon
								icon={HelpCircleIcon}
								className="size-4"
								strokeWidth={1.5}
							/>
							Help Center
						</div>
						<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-4">
							How can we help?
						</h1>
						<p className="text-lg text-muted-foreground mb-8">
							Everything you need to get the most out of Zomath, from your first
							photo to mastering new concepts.
						</p>
						<div className="relative max-w-md mx-auto">
							<HugeiconsIcon
								icon={Search01Icon}
								className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-muted-foreground"
								strokeWidth={1.5}
							/>
							<input
								type="text"
								placeholder="Search for a topic or question..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="w-full pl-10 pr-4 py-3 rounded-xl border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Browse by topic
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Jump straight to the guide you need. Each section covers a
							different part of the Zomath experience.
						</p>
					</div>
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{browseCategories.map((category) => (
							<Link
								key={category.title}
								href={category.href}
								className="group p-5 rounded-2xl border bg-card hover:border-primary/30 transition-colors"
							>
								<div className="flex items-start gap-4">
									<div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
										<HugeiconsIcon
											icon={category.icon}
											className="size-5 text-primary"
											strokeWidth={1.5}
										/>
									</div>
									<div className="min-w-0">
										<div className="flex items-center gap-1.5 mb-1">
											<h3 className="text-base font-semibold text-foreground">
												{category.title}
											</h3>
											<HugeiconsIcon
												icon={ArrowRight02Icon}
												className="size-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all"
												strokeWidth={1.5}
											/>
										</div>
										<p className="text-sm text-muted-foreground leading-relaxed">
											{category.description}
										</p>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted/50">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="text-center mb-16">
						<p className="text-sm font-medium text-primary mb-2">
							Getting started
						</p>
						<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Learn Zomath in three steps
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							From your first problem to genuine understanding, here is how
							Zomath fits into your learning routine.
						</p>
					</div>
					<div className="grid md:grid-cols-3 gap-8">
						{quickStartSteps.map((step, index) => (
							<div
								key={step.step}
								className="relative p-8 rounded-2xl border bg-card hover:border-primary/30 transition-colors group"
							>
								<span className="text-6xl font-bold text-primary/8 absolute top-4 right-6 select-none">
									{step.step}
								</span>
								<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
									<HugeiconsIcon
										icon={step.icon}
										className="size-6 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="text-xl font-semibold text-foreground mb-3">
									{step.title}
								</h3>
								<p className="text-muted-foreground leading-relaxed">
									{step.description}
								</p>
								{index < quickStartSteps.length - 1 && (
									<div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
										<HugeiconsIcon
											icon={ArrowRight02Icon}
											className="size-8 text-muted-foreground/30"
											strokeWidth={1.5}
										/>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</section>

			<section id="feature-guides" className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="text-center mb-16">
						<p className="text-sm font-medium text-primary mb-2">
							Feature guides
						</p>
						<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
							How each feature works
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Learn how each part of Zomath works so you can spend less time
							figuring out the app and more time understanding math.
						</p>
					</div>
					<div className="grid md:grid-cols-2 gap-8">
						{featureHelp.map((feature) => (
							<div
								key={feature.title}
								className="p-8 rounded-2xl border bg-card hover:border-primary/20 transition-colors"
							>
								<div className="flex items-start gap-4 mb-5">
									<div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
										<HugeiconsIcon
											icon={feature.icon}
											className="size-5 text-primary"
											strokeWidth={1.5}
										/>
									</div>
									<div>
										<h3 className="text-xl font-semibold text-foreground">
											{feature.title}
										</h3>
										<p className="text-sm text-muted-foreground">
											{feature.subtitle}
										</p>
									</div>
								</div>
								<p className="text-muted-foreground leading-relaxed mb-5">
									{feature.description}
								</p>
								<Separator className="mb-5" />
								<div>
									<div className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
										<HugeiconsIcon
											icon={LightbulbOffIcon}
											className="size-4 text-primary"
											strokeWidth={1.5}
										/>
										Tips
									</div>
									<ul className="space-y-2">
										{feature.tips.map((tip, i) => (
											<li
												key={i}
												className="text-sm text-muted-foreground pl-5 relative before:content-[''] before:absolute before:left-1.5 before:top-2 before:size-1.5 before:rounded-full before:bg-primary/40"
											>
												{tip}
											</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted/50">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="text-center mb-16">
						<p className="text-sm font-medium text-primary mb-2">
							Troubleshooting
						</p>
						<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Common issues and fixes
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Running into something unexpected? Here are step-by-step solutions
							for the issues students encounter most.
						</p>
					</div>
					<div className="grid md:grid-cols-2 gap-6">
						{troubleshootItems.map((item) => (
							<div key={item.title} className="p-6 rounded-2xl border bg-card">
								<div className="flex items-start gap-3 mb-4">
									<div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
										<HugeiconsIcon
											icon={item.icon}
											className="size-4.5 text-primary"
											strokeWidth={1.5}
										/>
									</div>
									<h3 className="text-base font-semibold text-foreground pt-1">
										{item.title}
									</h3>
								</div>
								<ol className="space-y-2.5 ml-1">
									{item.steps.map((step, i) => (
										<li
											key={i}
											className="text-sm text-muted-foreground pl-7 relative leading-relaxed"
										>
											<span className="absolute left-0 top-0 text-xs font-semibold text-primary/60 tabular-nums">
												{String(i + 1).padStart(2, "0")}
											</span>
											{step}
										</li>
									))}
								</ol>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="grid lg:grid-cols-2 gap-16 items-start">
						<div>
							<p className="text-sm font-medium text-primary mb-2">
								Power user
							</p>
							<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
								Keyboard shortcuts
							</h2>
							<p className="text-lg text-muted-foreground leading-relaxed mb-6">
								Speed up your workflow with these keyboard shortcuts. They work
								on desktop browsers from any page in Zomath.
							</p>
							<div className="p-5 rounded-2xl border bg-muted/50">
								<div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
									<HugeiconsIcon
										icon={SmartPhone01Icon}
										className="size-4"
										strokeWidth={1.5}
									/>
									On mobile
								</div>
								<p className="text-sm text-muted-foreground leading-relaxed">
									Keyboard shortcuts are not available on mobile, but you can
									access all the same features through the bottom navigation
									bar. Tap the camera icon for Solve, the chat icon for Newton,
									and the map icon for your Concept Map.
								</p>
							</div>
						</div>
						<div className="space-y-1">
							{powerUserTips.map((tip) => (
								<div
									key={tip.label}
									className="flex items-center justify-between gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors"
								>
									<div className="min-w-0">
										<p className="text-sm font-medium text-foreground">
											{tip.label}
										</p>
										<p className="text-xs text-muted-foreground mt-0.5">
											{tip.description}
										</p>
									</div>
									<kbd className="shrink-0 px-2.5 py-1 rounded-md border bg-muted text-xs font-mono text-muted-foreground">
										{tip.shortcut}
									</kbd>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section id="faq" className="py-24 lg:py-32 bg-muted/50">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="text-center mb-12">
						<p className="text-sm font-medium text-primary mb-2">FAQ</p>
						<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Frequently asked questions
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Quick answers to the things students and parents ask us most.
						</p>
					</div>
					<div className="max-w-3xl mx-auto">
						<Accordion type="single" collapsible className="space-y-3">
							{(searchQuery ? filteredFaq : faqItems).map((item, index) => (
								<AccordionItem
									key={index}
									value={`faq-${index}`}
									className="border rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:bg-card transition-colors"
								>
									<AccordionTrigger className="text-left text-foreground font-medium hover:no-underline py-4">
										{item.question}
									</AccordionTrigger>
									<AccordionContent className="text-muted-foreground leading-relaxed pb-4">
										{item.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
						{searchQuery && filteredFaq.length === 0 && (
							<div className="text-center py-16">
								<div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
									<HugeiconsIcon
										icon={Search01Icon}
										className="size-5 text-muted-foreground"
										strokeWidth={1.5}
									/>
								</div>
								<p className="text-base font-medium text-foreground mb-1">
									No results found for &quot;{searchQuery}&quot;
								</p>
								<p className="text-sm text-muted-foreground">
									Try different keywords or browse all questions above by
									clearing your search.
								</p>
							</div>
						)}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="text-center mb-16">
						<p className="text-sm font-medium text-primary mb-2">Contact us</p>
						<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Still need help?
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Our team is here for you. Reach out through any of the channels
							below and we will get you back on track.
						</p>
					</div>
					<div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
						{contactOptions.map((option) => (
							<div
								key={option.title}
								className="p-6 rounded-2xl border bg-card text-center hover:border-primary/30 transition-colors"
							>
								<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
									<HugeiconsIcon
										icon={option.icon}
										className="size-6 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="text-lg font-semibold text-foreground mb-1">
									{option.title}
								</h3>
								<p className="text-sm text-muted-foreground mb-5">
									{option.description}
								</p>
								<Link href={option.href}>
									<Button variant="outline" className="gap-2">
										{option.action}
										<HugeiconsIcon
											icon={ArrowRight02Icon}
											className="size-4"
											strokeWidth={1.5}
										/>
									</Button>
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted/50">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mx-auto text-center">
						<div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
							<HugeiconsIcon
								icon={SparklesIcon}
								className="size-7 text-primary"
								strokeWidth={1.5}
							/>
						</div>
						<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Ready to understand math, not just get answers?
						</h2>
						<p className="text-lg text-muted-foreground mb-8">
							Start your first session with Newton and see how learning feels
							when the focus is on genuine understanding.
						</p>
						<div className="flex flex-col sm:flex-row items-center justify-center gap-3">
							<Link href="/solve">
								<Button size="lg" className="gap-2">
									Start learning for free
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-5"
										strokeWidth={1.5}
									/>
								</Button>
							</Link>
							<Link href="/concept-map">
								<Button size="lg" variant="outline">
									Explore the Concept Map
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
