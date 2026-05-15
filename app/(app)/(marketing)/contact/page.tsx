"use client";

import {
	ArrowRight02Icon,
	AutoConversationsIcon,
	BookOpen01Icon,
	Bug02Icon,
	CheckmarkCircle02Icon,
	Clock01Icon,
	CommandIcon,
	GraduationScrollIcon,
	HeadphonesIcon,
	LightbulbOffIcon,
	Mail01Icon,
	MapPinIcon,
	Menu01Icon,
	QuestionIcon,
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

const contactReasons = [
	{
		icon: HeadphonesIcon,
		title: "General Support",
		description:
			"Account questions, billing issues, subscription changes, or anything else you need help with. No question is too small.",
		detail: "Average response under 12 hours",
		email: "support@zomath.com",
	},
	{
		icon: Bug02Icon,
		title: "Report a Bug",
		description:
			"Something not working right? Whether Newton gave a confusing explanation or a button is misbehaving, we want to know about it.",
		detail: "Critical bugs triaged within 4 hours",
		email: "bugs@zomath.com",
	},
	{
		icon: LightbulbOffIcon,
		title: "Feature Requests",
		description:
			"Have an idea that would make Zomath better for you or other learners? We read every suggestion and the best ones shape our roadmap.",
		detail: "Popular requests get built",
		email: "ideas@zomath.com",
	},
	{
		icon: GraduationScrollIcon,
		title: "Schools & Partnerships",
		description:
			"Bring Zomath into your classroom, school, or district. We offer dashboards for teachers, volume pricing, and dedicated onboarding.",
		detail: "Dedicated partnerships team",
		email: "partnerships@zomath.com",
	},
];

const whatHappensSteps = [
	{
		step: 1,
		title: "We confirm receipt",
		description:
			"You will get an automatic confirmation email within a minute. If you do not see it, check your spam folder or reach out again.",
	},
	{
		step: 2,
		title: "Your message is routed",
		description:
			"Based on the topic you selected, your message goes straight to the team member best equipped to help. No generic inboxes.",
	},
	{
		step: 3,
		title: "You hear back, fast",
		description:
			"We respond within 24 hours on business days, usually much sooner. Premium subscribers get priority placement in our queue.",
	},
];

const faqItems = [
	{
		question: "How quickly will I get a response?",
		answer:
			"We aim to respond to all inquiries within 24 hours on business days. For urgent account or billing issues, you will typically hear back much faster, often within a few hours. Premium subscribers have their requests automatically prioritized. On weekends and holidays, responses may take slightly longer, but we never leave you waiting long.",
	},
	{
		question: "Can Newton help me with my support question?",
		answer:
			"Newton is your AI tutor for math questions and learning support. He can walk you through problems, explain concepts, and help you practice. For account, billing, or technical issues, though, you will need our human support team. Use the form on this page or email us directly. Newton is always available in the app for math help.",
	},
	{
		question: "I found an error in a solution. How do I report it?",
		answer:
			"Accuracy matters enormously to us. You can report errors two ways: use the flag icon directly on any solution in the app, which is the fastest method since it includes context automatically, or use the Report a Bug channel above. Our content team reviews every single report and corrects errors quickly. Please never hesitate to flag something, even if you are only slightly unsure. Every report makes Newton better for everyone.",
	},
	{
		question: "Do you offer support for teachers and schools?",
		answer:
			"Yes. We have a dedicated partnerships team that works with individual teachers, schools, and entire districts. We can help you set up classrooms, configure progress dashboards, align content to your curriculum, and work out volume pricing. Many schools use Zomath alongside their existing math curriculum to give students personalized practice and instant help. Reach out through the Schools and Partnerships channel above.",
	},
	{
		question: "Is there a community forum or group?",
		answer:
			"We have an active Discord community with thousands of Zomath learners. It is a great place to share solution strategies, discuss competition math problems, get study tips from fellow students, and occasionally talk directly with the Zomath team. We also run weekly problem-solving events there. Join through the Community link in the section above.",
	},
	{
		question: "Can I request a specific math topic or course?",
		answer:
			"Absolutely, and we encourage it. Use the Feature Requests channel to tell us what you need, whether it is a specific topic like linear algebra, a competition category like number theory, or an entire course path. We prioritize new content based on learner demand, and your request genuinely influences what we build next. Some of our most popular practice sets started as a single student suggestion.",
	},
	{
		question: "What if I need help outside business hours?",
		answer:
			"Newton is available 24/7 in the app for any math question. For account or technical issues outside business hours, you can still submit the form or send an email, and we will respond as soon as we are back online. Our help center also has guides that cover the most common questions, so you might find your answer there right away.",
	},
];

export default function ContactPage() {
	const [formState, setFormState] = useState<"idle" | "submitting" | "sent">(
		"idle",
	);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		category: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setFormState("submitting");
		setTimeout(() => {
			setFormState("sent");
		}, 1500);
	};

	return (
		<main className="flex flex-col">
			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl">
						<div className="flex items-center gap-2 mb-6">
							<div className="size-2 rounded-full bg-primary" />
							<span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
								Contact
							</span>
						</div>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
							We are here to help
						</h1>
						<p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-8">
							Newton can answer your math questions any time, day or night. For
							everything else, account issues, feedback, partnerships, our human
							team is ready. We typically respond within 24 hours.
						</p>
						<div className="flex flex-wrap items-center gap-3">
							<Button asChild>
								<Link href="#contact-form">
									Send a message
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-4 ml-2"
										strokeWidth={1.5}
									/>
								</Link>
							</Button>
							<Button variant="outline" asChild>
								<Link href="/help">Browse help center</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="mb-16">
						<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
							Reach the right team
						</h2>
						<p className="text-muted-foreground text-lg max-w-xl">
							Pick the channel that matches your need so we can connect you with
							the person who can help fastest.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{contactReasons.map((reason) => (
							<div
								key={reason.title}
								className="group bg-background border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
							>
								<div className="flex items-start gap-4">
									<div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
										<HugeiconsIcon
											icon={reason.icon}
											className="size-5"
											strokeWidth={1.5}
										/>
									</div>
									<div className="flex-1 min-w-0">
										<h3 className="text-lg font-semibold text-foreground mb-1">
											{reason.title}
										</h3>
										<p className="text-muted-foreground text-sm leading-relaxed mb-3">
											{reason.description}
										</p>
										<div className="flex items-center gap-3 flex-wrap">
											<a
												href={`mailto:${reason.email}`}
												className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
											>
												{reason.email}
												<HugeiconsIcon
													icon={ArrowRight02Icon}
													className="size-3.5"
													strokeWidth={2}
												/>
											</a>
											<span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
												{reason.detail}
											</span>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32" id="contact-form">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
						<div className="lg:col-span-2">
							<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
								Send us a message
							</h2>
							<p className="text-muted-foreground text-lg leading-relaxed mb-10">
								Fill out the form and we will get back to you as soon as
								possible. The more detail you share, the faster we can resolve
								your question.
							</p>

							<div className="space-y-6">
								<div className="flex items-start gap-4">
									<div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
										<HugeiconsIcon
											icon={Mail01Icon}
											className="size-5"
											strokeWidth={1.5}
										/>
									</div>
									<div>
										<p className="font-medium text-foreground text-sm">
											General inquiries
										</p>
										<p className="text-muted-foreground text-sm">
											hello@zomath.com
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
										<HugeiconsIcon
											icon={MapPinIcon}
											className="size-5"
											strokeWidth={1.5}
										/>
									</div>
									<div>
										<p className="font-medium text-foreground text-sm">
											Office
										</p>
										<p className="text-muted-foreground text-sm">
											San Francisco, CA
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
										<HugeiconsIcon
											icon={Clock01Icon}
											className="size-5"
											strokeWidth={1.5}
										/>
									</div>
									<div>
										<p className="font-medium text-foreground text-sm">
											Support hours
										</p>
										<p className="text-muted-foreground text-sm">
											Monday through Friday, 9am to 6pm PT
										</p>
									</div>
								</div>
							</div>

							<Separator className="my-8" />

							<div className="bg-muted rounded-lg p-4">
								<div className="flex items-start gap-3">
									<HugeiconsIcon
										icon={CheckmarkCircle02Icon}
										className="size-5 text-primary shrink-0 mt-0.5"
										strokeWidth={1.5}
									/>
									<div>
										<p className="text-sm font-medium text-foreground mb-1">
											Premium priority support
										</p>
										<p className="text-xs text-muted-foreground leading-relaxed">
											If you are a Zomath Premium subscriber, your support
											requests are automatically prioritized. Mention your
											account email in the form and we will fast-track your
											response.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="lg:col-span-3">
							{formState === "sent" ? (
								<div className="flex flex-col items-center justify-center text-center py-16 border border-border rounded-xl bg-muted/30">
									<div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
										<HugeiconsIcon
											icon={CheckmarkCircle02Icon}
											className="size-7"
											strokeWidth={1.5}
										/>
									</div>
									<h3 className="text-xl font-semibold text-foreground mb-2">
										Message sent
									</h3>
									<p className="text-muted-foreground max-w-sm">
										Thanks for reaching out. We will get back to you within 24
										hours, usually sooner. In the meantime, Newton is always
										available in the app for any math questions.
									</p>
									<Button
										variant="outline"
										className="mt-8"
										onClick={() => {
											setFormState("idle");
											setFormData({
												name: "",
												email: "",
												subject: "",
												category: "",
												message: "",
											});
										}}
									>
										Send another message
									</Button>
								</div>
							) : (
								<form
									onSubmit={handleSubmit}
									className="border border-border rounded-xl p-6 md:p-8 space-y-6"
								>
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
										<div className="space-y-2">
											<Label htmlFor="name">Name</Label>
											<Input
												id="name"
												placeholder="Your name"
												value={formData.name}
												onChange={(e) =>
													setFormData({ ...formData, name: e.target.value })
												}
												required
											/>
										</div>
										<div className="space-y-2">
											<Label htmlFor="email">Email</Label>
											<Input
												id="email"
												type="email"
												placeholder="you@example.com"
												value={formData.email}
												onChange={(e) =>
													setFormData({ ...formData, email: e.target.value })
												}
												required
											/>
										</div>
									</div>

									<div className="space-y-2">
										<Label htmlFor="category">What is this about?</Label>
										<Select
											value={formData.category}
											onValueChange={(value) =>
												setFormData({ ...formData, category: value })
											}
										>
											<SelectTrigger>
												<SelectValue placeholder="Choose a topic" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="support">General Support</SelectItem>
												<SelectItem value="bug">Report a Bug</SelectItem>
												<SelectItem value="feature">Feature Request</SelectItem>
												<SelectItem value="partnership">
													School or Partnership
												</SelectItem>
												<SelectItem value="press">Press Inquiry</SelectItem>
												<SelectItem value="other">Other</SelectItem>
											</SelectContent>
										</Select>
									</div>

									<div className="space-y-2">
										<Label htmlFor="subject">Subject</Label>
										<Input
											id="subject"
											placeholder="Brief summary of your message"
											value={formData.subject}
											onChange={(e) =>
												setFormData({ ...formData, subject: e.target.value })
											}
											required
										/>
									</div>

									<div className="space-y-2">
										<Label htmlFor="message">Message</Label>
										<Textarea
											id="message"
											placeholder="Tell us more. If you are reporting an issue, include the steps to reproduce it and what device or browser you are using. If you have a feature idea, describe what you want and why it would help you learn math better."
											rows={6}
											value={formData.message}
											onChange={(e) =>
												setFormData({ ...formData, message: e.target.value })
											}
											required
										/>
									</div>

									<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
										<p className="text-xs text-muted-foreground">
											Your information is never shared with third parties.
										</p>
										<Button type="submit" disabled={formState === "submitting"}>
											{formState === "submitting" ? (
												<span className="flex items-center gap-2">
													<span className="size-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
													Sending
												</span>
											) : (
												<span className="flex items-center gap-2">
													<HugeiconsIcon
														icon={Menu01Icon}
														className="size-4"
														strokeWidth={1.5}
													/>
													Send message
												</span>
											)}
										</Button>
									</div>
								</form>
							)}
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="text-center mb-16">
						<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
							What happens after you reach out
						</h2>
						<p className="text-muted-foreground text-lg max-w-xl mx-auto">
							We believe support should be transparent. Here is exactly what to
							expect after you hit send.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
						<div className="hidden md:block absolute top-10 left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] h-px bg-border" />
						{whatHappensSteps.map((item) => (
							<div key={item.step} className="relative text-center">
								<div className="flex size-10 mx-auto items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm mb-6 relative z-10">
									{item.step}
								</div>
								<h3 className="text-lg font-semibold text-foreground mb-2">
									{item.title}
								</h3>
								<p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
									{item.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="mb-16">
						<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
							Other ways to connect
						</h2>
						<p className="text-muted-foreground text-lg max-w-xl">
							Sometimes the fastest answer is already out there. These resources
							might help right now, no waiting required.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="bg-muted border border-border rounded-xl p-6">
							<div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
								<HugeiconsIcon
									icon={AutoConversationsIcon}
									className="size-5"
									strokeWidth={1.5}
								/>
							</div>
							<h3 className="text-lg font-semibold text-foreground mb-2">
								Ask Newton
							</h3>
							<p className="text-muted-foreground text-sm leading-relaxed mb-4">
								For math questions, Newton is your fastest path to a clear
								explanation. Snap a photo of a problem, type your question, or
								explore your Concept Map to find the topic you need help with.
								Available 24/7, no ticket required.
							</p>
							<Link
								href="/app"
								className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
							>
								Open Newton
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-3.5"
									strokeWidth={2}
								/>
							</Link>
						</div>

						<div className="bg-muted border border-border rounded-xl p-6">
							<div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
								<HugeiconsIcon
									icon={CommandIcon}
									className="size-5"
									strokeWidth={1.5}
								/>
							</div>
							<h3 className="text-lg font-semibold text-foreground mb-2">
								Community
							</h3>
							<p className="text-muted-foreground text-sm leading-relaxed mb-4">
								Join thousands of Zomath learners on Discord. Share solutions,
								work through competition problems together, swap study
								strategies, and chat with the Zomath team. We also host weekly
								problem challenges with leaderboards.
							</p>
							<a
								href="https://discord.gg/zomath"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
							>
								Join Discord
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-3.5"
									strokeWidth={2}
								/>
							</a>
						</div>

						<div className="bg-muted border border-border rounded-xl p-6">
							<div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
								<HugeiconsIcon
									icon={BookOpen01Icon}
									className="size-5"
									strokeWidth={1.5}
								/>
							</div>
							<h3 className="text-lg font-semibold text-foreground mb-2">
								Help Center
							</h3>
							<p className="text-muted-foreground text-sm leading-relaxed mb-4">
								Browse step-by-step guides on getting started, using the Concept
								Map, setting up practice sessions, understanding your progress
								stats, and making the most of every study session. Updated
								regularly based on what you ask us most.
							</p>
							<Link
								href="/help"
								className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
							>
								Browse guides
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-3.5"
									strokeWidth={2}
								/>
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
						<div className="lg:col-span-2">
							<div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
								<HugeiconsIcon
									icon={QuestionIcon}
									className="size-5"
									strokeWidth={1.5}
								/>
							</div>
							<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
								Frequently asked questions
							</h2>
							<p className="text-muted-foreground text-lg leading-relaxed">
								Before you write, check if your question is answered below. We
								keep this list updated based on what learners ask most often.
							</p>
						</div>

						<div className="lg:col-span-3">
							<Accordion type="single" collapsible className="w-full">
								{faqItems.map((item) => (
									<AccordionItem key={item.question} value={item.question}>
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
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-primary">
				<div className="max-w-7xl mx-auto px-4 lg:px-12 text-center">
					<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary-foreground mb-4">
						Ready to understand math, not just pass it?
					</h2>
					<p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-10">
						Start learning with Newton today. Your first week is completely
						free, no credit card required. See how it feels to actually get
						math.
					</p>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<Button
							size="lg"
							variant="secondary"
							className="text-base px-8"
							asChild
						>
							<Link href="/sign-up">
								Start free trial
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-4 ml-2"
									strokeWidth={1.5}
								/>
							</Link>
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
							asChild
						>
							<Link href="/pricing">View pricing</Link>
						</Button>
					</div>
				</div>
			</section>
		</main>
	);
}
