"use client";

import {
	AiChipIcon,
	ArrowLeft02Icon,
	AuctionIcon,
	BandageIcon,
	Bookmark02Icon,
	Brain03Icon,
	Calendar03Icon,
	Cancel01Icon,
	CreditCardIcon,
	EyeIcon,
	File02Icon,
	LockPasswordIcon,
	MailAtSign01Icon,
	Menu01Icon,
	Notification01Icon,
	PenTool01Icon,
	PlateIcon,
	SecurityCheckIcon,
	Share01Icon,
	Shield01Icon,
	UserSquareIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

function TableOfContents({ activeId }: { activeId?: string }) {
	const sections = [
		{ id: "summary", label: "Key Points", icon: Bookmark02Icon },
		{ id: "acceptance", label: "Acceptance of Terms", icon: Shield01Icon },
		{ id: "service", label: "Description of Service", icon: AiChipIcon },
		{ id: "accounts", label: "Accounts & Registration", icon: UserSquareIcon },
		{ id: "conduct", label: "User Conduct", icon: Share01Icon },
		{ id: "ai-disclaimer", label: "AI Tutor Disclaimers", icon: AiChipIcon },
		{ id: "intellectual", label: "Intellectual Property", icon: PenTool01Icon },
		{ id: "user-content", label: "User Content & Privacy", icon: EyeIcon },
		{ id: "payments", label: "Payments & Subscriptions", icon: CreditCardIcon },
		{ id: "liability", label: "Limitation of Liability", icon: Shield01Icon },
		{ id: "termination", label: "Termination", icon: Cancel01Icon },
		{ id: "disputes", label: "Dispute Resolution", icon: BandageIcon },
		{ id: "changes", label: "Changes to Terms", icon: PlateIcon },
		{ id: "contact", label: "Contact Us", icon: MailAtSign01Icon },
	];

	return (
		<nav className="space-y-0.5">
			{sections.map((section) => (
				<a
					key={section.id}
					href={`#${section.id}`}
					className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
						activeId === section.id
							? "bg-primary/10 text-primary font-medium"
							: "text-muted-foreground hover:bg-muted hover:text-foreground"
					}`}
				>
					<HugeiconsIcon
						icon={section.icon}
						className="size-4 shrink-0"
						strokeWidth={1.5}
					/>
					{section.label}
				</a>
			))}
		</nav>
	);
}

function CalloutBox({
	children,
	variant = "info",
}: {
	children: React.ReactNode;
	variant?: "info" | "warning" | "important";
}) {
	const styles = {
		info: "border-primary/30 bg-primary/5",
		warning: "border-amber-500/40 bg-amber-500/5 dark:bg-amber-500/10",
		important: "border-primary/50 bg-muted/60",
	};

	return (
		<div className={`rounded-lg border-l-4 p-5 ${styles[variant]}`}>
			{children}
		</div>
	);
}

export default function TermsPage() {
	const [mobileTocOpen, setMobileTocOpen] = useState(false);

	return (
		<main className="min-h-svh">
			<section className="border-b bg-muted/30 py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-3xl">
						<Link
							href="/"
							className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground mb-8"
						>
							<HugeiconsIcon
								icon={ArrowLeft02Icon}
								className="size-4"
								strokeWidth={1.5}
							/>
							Back to Home
						</Link>
						<div className="flex items-center gap-3 mb-4">
							<div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
								<HugeiconsIcon
									icon={File02Icon}
									className="size-5 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
								Legal
							</p>
						</div>
						<h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-4">
							Terms of Service
						</h1>
						<p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
							These terms govern your use of Zomath and our AI tutor Newton. We
							wrote them to be clear and straightforward, because we respect
							your time as much as we respect your math journey.
						</p>
						<div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-muted-foreground">
							<span className="flex items-center gap-2">
								<HugeiconsIcon
									icon={Calendar03Icon}
									className="size-4"
									strokeWidth={1.5}
								/>
								Effective: June 15, 2025
							</span>
							<span className="hidden sm:block size-1 rounded-full bg-border" />
							<span className="flex items-center gap-2">
								<HugeiconsIcon
									icon={PlateIcon}
									className="size-4"
									strokeWidth={1.5}
								/>
								Last updated: June 15, 2025
							</span>
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="grid lg:grid-cols-[260px_1fr] gap-12 lg:gap-16">
						<aside className="hidden lg:block">
							<div className="sticky top-24">
								<p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
									On this page
								</p>
								<TableOfContents />
								<Separator className="my-4" />
								<div className="space-y-3">
									<Link
										href="/privacy"
										className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
									>
										<HugeiconsIcon
											icon={LockPasswordIcon}
											className="size-4"
											strokeWidth={1.5}
										/>
										Privacy Policy
									</Link>
									<Link
										href="/#contact"
										className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
									>
										<HugeiconsIcon
											icon={MailAtSign01Icon}
											className="size-4"
											strokeWidth={1.5}
										/>
										Get in Touch
									</Link>
								</div>
							</div>
						</aside>

						<div className="max-w-3xl">
							<div className="lg:hidden mb-8">
								<Button
									variant="outline"
									className="w-full justify-between"
									onClick={() => setMobileTocOpen(!mobileTocOpen)}
								>
									<span className="flex items-center gap-2">
										<HugeiconsIcon
											icon={Menu01Icon}
											className="size-4"
											strokeWidth={1.5}
										/>
										Table of Contents
									</span>
									<HugeiconsIcon
										icon={ArrowLeft02Icon}
										className={`size-4 transition-transform ${mobileTocOpen ? "-rotate-90" : "rotate-90"}`}
										strokeWidth={1.5}
									/>
								</Button>
								{mobileTocOpen && (
									<div className="mt-3 rounded-lg border p-3">
										<TableOfContents />
									</div>
								)}
							</div>

							<div className="space-y-16">
								<div id="summary" className="scroll-mt-24">
									<h2 className="text-2xl font-semibold tracking-tight mb-4">
										Key Points at a Glance
									</h2>
									<p className="text-muted-foreground leading-relaxed mb-6">
										We know legal documents can be dense. Here are the most
										important things to know before you dive into the full
										details.
									</p>
									<div className="grid sm:grid-cols-2 gap-4">
										<div className="rounded-lg border p-4">
											<div className="flex items-center gap-2 mb-2">
												<HugeiconsIcon
													icon={AiChipIcon}
													className="size-4 text-primary"
													strokeWidth={1.5}
												/>
												<p className="font-medium text-foreground text-sm">
													Newton is AI, not a person
												</p>
											</div>
											<p className="text-xs text-muted-foreground leading-relaxed">
												Newton can make mistakes. Always verify important
												results and use your own critical thinking.
											</p>
										</div>
										<div className="rounded-lg border p-4">
											<div className="flex items-center gap-2 mb-2">
												<HugeiconsIcon
													icon={SecurityCheckIcon}
													className="size-4 text-primary"
													strokeWidth={1.5}
												/>
												<p className="font-medium text-foreground text-sm">
													Your data stays yours
												</p>
											</div>
											<p className="text-xs text-muted-foreground leading-relaxed">
												We never sell your content. We only process it to
												provide and improve the service you signed up for.
											</p>
										</div>
										<div className="rounded-lg border p-4">
											<div className="flex items-center gap-2 mb-2">
												<HugeiconsIcon
													icon={Share01Icon}
													className="size-4 text-primary"
													strokeWidth={1.5}
												/>
												<p className="font-medium text-foreground text-sm">
													Learn, don&apos;t cheat
												</p>
											</div>
											<p className="text-xs text-muted-foreground leading-relaxed">
												Zomath is a learning tool. Using it to violate your
												school&apos;s academic integrity policies is not okay.
											</p>
										</div>
										<div className="rounded-lg border p-4">
											<div className="flex items-center gap-2 mb-2">
												<HugeiconsIcon
													icon={CreditCardIcon}
													className="size-4 text-primary"
													strokeWidth={1.5}
												/>
												<p className="font-medium text-foreground text-sm">
													Cancel anytime
												</p>
											</div>
											<p className="text-xs text-muted-foreground leading-relaxed">
												Paid subscriptions can be cancelled at any time. You
												keep access through the end of your billing period.
											</p>
										</div>
										<div className="rounded-lg border p-4">
											<div className="flex items-center gap-2 mb-2">
												<HugeiconsIcon
													icon={Notification01Icon}
													className="size-4 text-primary"
													strokeWidth={1.5}
												/>
												<p className="font-medium text-foreground text-sm">
													30 days notice on changes
												</p>
											</div>
											<p className="text-xs text-muted-foreground leading-relaxed">
												We give you at least 30 days notice before any material
												changes to these terms take effect.
											</p>
										</div>
										<div className="rounded-lg border p-4">
											<div className="flex items-center gap-2 mb-2">
												<HugeiconsIcon
													icon={UserSquareIcon}
													className="size-4 text-primary"
													strokeWidth={1.5}
												/>
												<p className="font-medium text-foreground text-sm">
													Under 18? Parental consent required
												</p>
											</div>
											<p className="text-xs text-muted-foreground leading-relaxed">
												If you are under 18, a parent or guardian must review
												and agree to these terms on your behalf.
											</p>
										</div>
									</div>
								</div>

								<Separator />

								<div id="acceptance" className="scroll-mt-24">
									<h2 className="text-2xl font-semibold tracking-tight mb-4">
										1. Acceptance of Terms
									</h2>
									<p className="text-muted-foreground leading-relaxed mb-4">
										By accessing or using Zomath (the &ldquo;Service&rdquo;),
										you agree to be bound by these Terms of Service
										(&ldquo;Terms&rdquo;). If you do not agree to these Terms,
										please do not use the Service.
									</p>
									<p className="text-muted-foreground leading-relaxed mb-4">
										These Terms apply to all visitors, users, and others who
										access or use the Service, including students,
										self-learners, and competition math participants. By
										creating an account or using any Zomath feature, including
										Solve, Ask Newton, Concept Map, or Practice, you acknowledge
										that you have read, understood, and agree to these Terms.
									</p>
									<CalloutBox variant="important">
										<p className="text-sm text-foreground leading-relaxed">
											<span className="font-semibold">For users under 18:</span>{" "}
											You must have your parent or legal guardian review and
											agree to these Terms before you use the Service. By using
											Zomath, you represent that either you are at least 18
											years old or that your parent or guardian has agreed to
											these Terms on your behalf.
										</p>
									</CalloutBox>
								</div>

								<Separator />

								<div id="service" className="scroll-mt-24">
									<h2 className="text-2xl font-semibold tracking-tight mb-4">
										2. Description of Service
									</h2>
									<p className="text-muted-foreground leading-relaxed mb-4">
										Zomath is an AI-powered math learning platform designed to
										help students genuinely understand mathematics. Our Service
										includes the following core features:
									</p>
									<div className="space-y-3 mb-6">
										<div className="rounded-lg border p-4">
											<div className="flex items-center gap-2 mb-1.5">
												<HugeiconsIcon
													icon={AiChipIcon}
													className="size-4 text-primary"
													strokeWidth={1.5}
												/>
												<p className="font-medium text-foreground">Solve</p>
											</div>
											<p className="text-sm text-muted-foreground leading-relaxed">
												Upload a photo of a math problem and receive a detailed,
												step-by-step solution that explains the reasoning behind
												each step, not just the final answer.
											</p>
										</div>
										<div className="rounded-lg border p-4">
											<div className="flex items-center gap-2 mb-1.5">
												<HugeiconsIcon
													icon={AiChipIcon}
													className="size-4 text-primary"
													strokeWidth={1.5}
												/>
												<p className="font-medium text-foreground">
													Ask Newton
												</p>
											</div>
											<p className="text-sm text-muted-foreground leading-relaxed">
												Chat with Newton, our AI tutor, who can answer
												questions, clarify concepts, provide hints, and guide
												you through problems without simply giving away
												solutions.
											</p>
										</div>
										<div className="rounded-lg border p-4">
											<div className="flex items-center gap-2 mb-1.5">
												<HugeiconsIcon
													icon={AiChipIcon}
													className="size-4 text-primary"
													strokeWidth={1.5}
												/>
												<p className="font-medium text-foreground">
													Concept Map
												</p>
											</div>
											<p className="text-sm text-muted-foreground leading-relaxed">
												Visualize how mathematical concepts connect to each
												other, identify gaps in your understanding, and discover
												what you need to learn next.
											</p>
										</div>
										<div className="rounded-lg border p-4">
											<div className="flex items-center gap-2 mb-1.5">
												<HugeiconsIcon
													icon={AiChipIcon}
													className="size-4 text-primary"
													strokeWidth={1.5}
												/>
												<p className="font-medium text-foreground">Practice</p>
											</div>
											<p className="text-sm text-muted-foreground leading-relaxed">
												Targeted drills and exercises that adapt to your skill
												level, helping you build fluency and confidence in
												specific areas of mathematics.
											</p>
										</div>
										<div className="rounded-lg border p-4">
											<div className="flex items-center gap-2 mb-1.5">
												<HugeiconsIcon
													icon={AiChipIcon}
													className="size-4 text-primary"
													strokeWidth={1.5}
												/>
												<p className="font-medium text-foreground">
													Progress Tracking
												</p>
											</div>
											<p className="text-sm text-muted-foreground leading-relaxed">
												Monitor your learning journey over time, see your
												strengths and areas for improvement, and celebrate your
												growth as a mathematician.
											</p>
										</div>
									</div>
									<p className="text-muted-foreground leading-relaxed">
										We may update, modify, or discontinue any part of the
										Service at any time, with or without notice. We will make
										reasonable efforts to notify you of material changes that
										affect your use of the platform.
									</p>
								</div>

								<Separator />

								<div id="accounts" className="scroll-mt-24">
									<h2 className="text-2xl font-semibold tracking-tight mb-4">
										3. Accounts & Registration
									</h2>
									<p className="text-muted-foreground leading-relaxed mb-4">
										To access the full features of Zomath, you must create an
										account. When you register, you agree to:
									</p>
									<ul className="space-y-3 mb-4">
										{[
											"Provide accurate, current, and complete information during registration.",
											"Keep your account information updated and accurate at all times.",
											"Maintain the security and confidentiality of your login credentials.",
											"Accept responsibility for all activities that occur under your account.",
											"Notify us immediately if you suspect unauthorized use of your account.",
										].map((item, i) => (
											<li
												key={i}
												className="flex gap-3 text-muted-foreground leading-relaxed"
											>
												<span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
												{item}
											</li>
										))}
									</ul>
									<p className="text-muted-foreground leading-relaxed">
										You may not create multiple accounts for the purpose of
										abusing promotions, circumventing restrictions, or any other
										fraudulent activity. We reserve the right to suspend or
										terminate accounts that violate this policy.
									</p>
								</div>

								<Separator />

								<div id="conduct" className="scroll-mt-24">
									<h2 className="text-2xl font-semibold tracking-tight mb-4">
										4. User Conduct
									</h2>
									<p className="text-muted-foreground leading-relaxed mb-4">
										Zomath is built on the belief that every student deserves a
										supportive learning environment. When using the Service, you
										agree not to:
									</p>
									<ul className="space-y-3 mb-6">
										{[
											"Use the Service to cheat on homework, exams, or assessments in ways that violate your school's academic integrity policies.",
											"Attempt to reverse-engineer, decompile, or extract the underlying technology or data behind Newton or any other feature.",
											"Upload content that is abusive, harassing, hateful, or otherwise harmful to other users or our community.",
											"Use automated tools, bots, or scripts to access the Service in ways that exceed normal usage patterns.",
											"Share your account credentials with others or resell access to the Service.",
											"Upload content that infringes on the intellectual property rights of others, including copyrighted textbook problems shared without permission.",
											"Attempt to bypass, disable, or interfere with security features, rate limits, or access controls.",
											"Use the Service for any unlawful purpose or in violation of any applicable regulations.",
										].map((item, i) => (
											<li
												key={i}
												className="flex gap-3 text-muted-foreground leading-relaxed"
											>
												<span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
												{item}
											</li>
										))}
									</ul>
									<CalloutBox variant="info">
										<p className="text-sm text-foreground leading-relaxed">
											Zomath is designed to help you learn, not to help you
											shortcut your education. Newton will guide you toward
											understanding, not just hand you answers. We trust you to
											use this tool with the same integrity you bring to your
											studies.
										</p>
									</CalloutBox>
								</div>

								<Separator />

								<div id="ai-disclaimer" className="scroll-mt-24">
									<h2 className="text-2xl font-semibold tracking-tight mb-4">
										5. AI Tutor Disclaimers
									</h2>
									<CalloutBox variant="warning">
										<div className="flex items-start gap-3">
											<HugeiconsIcon
												icon={AuctionIcon}
												className="size-5 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0"
												strokeWidth={1.5}
											/>
											<p className="text-sm text-foreground leading-relaxed">
												<span className="font-semibold">
													Newton is an AI system, not a human tutor or certified
													teacher.
												</span>{" "}
												While we strive for accuracy and pedagogical quality,
												Newton may occasionally make mistakes or present
												incomplete explanations.
											</p>
										</div>
									</CalloutBox>
									<p className="text-muted-foreground leading-relaxed mt-6 mb-4">
										You acknowledge and agree that:
									</p>
									<ul className="space-y-3 mb-6">
										{[
											"Newton's responses are generated by artificial intelligence and may contain errors, inaccuracies, or misleading information, particularly in edge cases or advanced topics.",
											"Solutions provided through the Solve feature are meant as learning tools, not guaranteed-correct answers. Always verify important results using your own reasoning and other trusted sources.",
											"The Service is not a replacement for qualified math instruction, tutoring, or professional academic advice. It is a supplementary learning tool.",
											"Newton's guidance is based on general pedagogical principles and may not always align with the specific approach your teacher or curriculum expects.",
											"We continuously improve Newton's accuracy and teaching quality, but no AI system is infallible. Critical mathematical thinking remains your most important skill.",
										].map((item, i) => (
											<li
												key={i}
												className="flex gap-3 text-muted-foreground leading-relaxed"
											>
												<span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
												{item}
											</li>
										))}
									</ul>
									<p className="text-muted-foreground leading-relaxed">
										If you notice an error in Newton's responses, we encourage
										you to report it through the feedback mechanism within the
										app. Your reports help us improve and benefit the entire
										Zomath community.
									</p>
								</div>

								<Separator />

								<div id="intellectual" className="scroll-mt-24">
									<h2 className="text-2xl font-semibold tracking-tight mb-4">
										6. Intellectual Property
									</h2>
									<p className="text-muted-foreground leading-relaxed mb-4">
										The Service and its original content, features, and
										functionality are owned by Zomath and are protected by
										international copyright, trademark, patent, trade secret,
										and other intellectual property laws. This includes, but is
										not limited to:
									</p>
									<ul className="space-y-3 mb-4">
										{[
											"The Zomath name, logo, and all associated branding and visual design.",
											"The design and implementation of Newton and our AI tutoring technology.",
											"The Concept Map visualizations, data structures, and pedagogical frameworks.",
											"Our curated problem sets, solution explanations, and learning content.",
											"The software, algorithms, and infrastructure that power the Service.",
										].map((item, i) => (
											<li
												key={i}
												className="flex gap-3 text-muted-foreground leading-relaxed"
											>
												<span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
												{item}
											</li>
										))}
									</ul>
									<p className="text-muted-foreground leading-relaxed">
										You are granted a limited, non-exclusive, non-transferable,
										revocable license to use the Service for your personal,
										non-commercial educational purposes. You may not reproduce,
										distribute, modify, or create derivative works from the
										Service without our express written permission.
									</p>
								</div>

								<Separator />

								<div id="user-content" className="scroll-mt-24">
									<h2 className="text-2xl font-semibold tracking-tight mb-4">
										7. User Content & Privacy
									</h2>
									<p className="text-muted-foreground leading-relaxed mb-4">
										&ldquo;User Content&rdquo; refers to any materials you
										submit to the Service, including photos of math problems,
										chat messages with Newton, practice responses, and any other
										data you provide.
									</p>
									<p className="text-muted-foreground leading-relaxed mb-4">
										You retain ownership of your User Content. By submitting
										content to Zomath, you grant us a limited license to use,
										process, and store that content solely for the purpose of
										providing and improving the Service. This includes:
									</p>
									<ul className="space-y-3 mb-6">
										{[
											"Processing photos you upload through Solve to generate step-by-step solutions.",
											"Storing your conversations with Newton to maintain chat history and provide continuity.",
											"Tracking your practice responses to measure progress and adapt future exercises.",
											"Using anonymized and aggregated data to improve our AI models and learning algorithms.",
										].map((item, i) => (
											<li
												key={i}
												className="flex gap-3 text-muted-foreground leading-relaxed"
											>
												<span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
												{item}
											</li>
										))}
									</ul>
									<CalloutBox variant="info">
										<div className="flex items-start gap-3">
											<HugeiconsIcon
												icon={EyeIcon}
												className="size-5 text-primary mt-0.5 shrink-0"
												strokeWidth={1.5}
											/>
											<div className="text-sm text-foreground leading-relaxed">
												<span className="font-semibold">
													We will never sell your User Content to third parties.
												</span>{" "}
												We will not use your specific problem submissions,
												conversations, or practice data in ways that could
												identify you individually without your explicit consent.
												For full details, please review our{" "}
												<Link
													href="/privacy"
													className="text-primary underline underline-offset-2 hover:text-primary/80"
												>
													Privacy Policy
												</Link>
												.
											</div>
										</div>
									</CalloutBox>
								</div>

								<Separator />

								<div id="payments" className="scroll-mt-24">
									<h2 className="text-2xl font-semibold tracking-tight mb-4">
										8. Payments & Subscriptions
									</h2>
									<p className="text-muted-foreground leading-relaxed mb-4">
										Zomath offers both free and premium subscription plans. The
										features available to you depend on your current plan. The
										following terms apply to paid subscriptions:
									</p>
									<ul className="space-y-3 mb-6">
										{[
											"Subscription fees are billed in advance on a monthly or annual basis, depending on the plan you select.",
											"You authorize us to charge your selected payment method for the subscription amount at the beginning of each billing period.",
											"Annual subscriptions are discounted compared to monthly billing and are charged as a single upfront payment for the full year.",
											"You may upgrade or downgrade your plan at any time. Upgrades take effect immediately, and prorated charges may apply. Downgrades take effect at the end of your current billing period.",
											"You may cancel your subscription at any time. Upon cancellation, you will retain access to premium features until the end of your current billing period.",
											"We reserve the right to modify subscription pricing with 30 days advance notice. Continued use after a price change constitutes acceptance of the new pricing.",
										].map((item, i) => (
											<li
												key={i}
												className="flex gap-3 text-muted-foreground leading-relaxed"
											>
												<span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
												{item}
											</li>
										))}
									</ul>
									<CalloutBox variant="important">
										<p className="text-sm text-foreground leading-relaxed">
											<span className="font-semibold">Refund policy:</span>{" "}
											Refund requests are considered on a case-by-case basis.
											For annual subscriptions, refund requests must be made
											within 14 days of purchase. We are unable to provide
											refunds for partially used monthly billing periods in most
											circumstances, but please reach out if you believe an
											exception is warranted.
										</p>
									</CalloutBox>
								</div>

								<Separator />

								<div id="liability" className="scroll-mt-24">
									<h2 className="text-2xl font-semibold tracking-tight mb-4">
										9. Limitation of Liability
									</h2>
									<p className="text-muted-foreground leading-relaxed mb-4">
										To the maximum extent permitted by applicable law, Zomath
										and its officers, directors, employees, and agents shall not
										be liable for any indirect, incidental, special,
										consequential, or punitive damages, including but not
										limited to:
									</p>
									<ul className="space-y-3 mb-4">
										{[
											"Loss of grades, academic standing, or educational opportunities resulting from reliance on Newton's answers or explanations.",
											"Any errors or inaccuracies in AI-generated solutions, explanations, or practice problems.",
											"Interruption or cessation of the Service for any reason, including server maintenance or technical failures.",
											"Any unauthorized access to or alteration of your user data or content.",
											"Any conduct or content of third parties on the Service, if applicable in the future.",
										].map((item, i) => (
											<li
												key={i}
												className="flex gap-3 text-muted-foreground leading-relaxed"
											>
												<span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
												{item}
											</li>
										))}
									</ul>
									<p className="text-muted-foreground leading-relaxed">
										In no event shall our total cumulative liability to you
										exceed the amount you have paid to Zomath in the twelve
										months preceding the claim. This limitation applies
										regardless of the legal theory on which the claim is based.
									</p>
								</div>

								<Separator />

								<div id="termination" className="scroll-mt-24">
									<h2 className="text-2xl font-semibold tracking-tight mb-4">
										10. Termination
									</h2>
									<p className="text-muted-foreground leading-relaxed mb-4">
										We may terminate or suspend your account and access to the
										Service immediately, without prior notice, for conduct that
										we determine, in our sole discretion, violates these Terms,
										is harmful to other users or the Service, or for any other
										reason we deem appropriate.
									</p>
									<p className="text-muted-foreground leading-relaxed mb-4">
										You may terminate your account at any time by contacting us
										or using the account settings within the Service. Upon
										termination:
									</p>
									<ul className="space-y-3 mb-4">
										{[
											"Your right to use the Service will cease immediately.",
											"We will retain your data for a reasonable period as described in our Privacy Policy, after which it will be deleted or anonymized.",
											"Provisions of these Terms that by their nature should survive termination will remain in effect, including intellectual property provisions, disclaimers, and limitation of liability.",
											"No refunds will be provided for any remaining portion of a prepaid subscription, except as required by applicable law or as described in Section 8.",
										].map((item, i) => (
											<li
												key={i}
												className="flex gap-3 text-muted-foreground leading-relaxed"
											>
												<span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
												{item}
											</li>
										))}
									</ul>
									<CalloutBox variant="info">
										<div className="flex items-start gap-3">
											<HugeiconsIcon
												icon={Brain03Icon}
												className="size-5 text-primary mt-0.5 shrink-0"
												strokeWidth={1.5}
											/>
											<p className="text-sm text-foreground leading-relaxed">
												If you want your data deleted upon termination, you can
												submit a deletion request through your account settings
												or by contacting us at support@zomath.com. We will
												process such requests in accordance with our Privacy
												Policy and applicable law.
											</p>
										</div>
									</CalloutBox>
								</div>

								<Separator />

								<div id="disputes" className="scroll-mt-24">
									<h2 className="text-2xl font-semibold tracking-tight mb-4">
										11. Dispute Resolution
									</h2>
									<p className="text-muted-foreground leading-relaxed mb-4">
										We hope you never have a dispute with us, but if you do, we
										want to resolve it as efficiently and fairly as possible.
									</p>
									<p className="text-muted-foreground leading-relaxed mb-4">
										Before filing any legal claim, you agree to first contact us
										at legal@zomath.com and attempt to resolve the dispute
										informally. We will attempt to resolve the dispute within 30
										days of receiving your notice. If we cannot resolve it
										within that period, either party may proceed with formal
										dispute resolution.
									</p>
									<p className="text-muted-foreground leading-relaxed mb-4">
										Any disputes arising out of or related to these Terms or the
										Service shall be resolved through binding arbitration in
										accordance with the rules of the American Arbitration
										Association, rather than in court. The arbitration shall be
										conducted in English, and the arbitrator&apos;s decision
										shall be final and binding.
									</p>
									<p className="text-muted-foreground leading-relaxed">
										You agree that any claims must be brought within one year of
										the date the claim arose, or they are forever barred. This
										does not apply to claims that cannot be limited by
										applicable law.
									</p>
								</div>

								<Separator />

								<div id="changes" className="scroll-mt-24">
									<h2 className="text-2xl font-semibold tracking-tight mb-4">
										12. Changes to Terms
									</h2>
									<p className="text-muted-foreground leading-relaxed mb-4">
										We may update these Terms from time to time to reflect
										changes in our Service, legal requirements, or best
										practices. When we make material changes, we will:
									</p>
									<ul className="space-y-3 mb-6">
										{[
											"Post the updated Terms on this page with a revised effective date.",
											"Notify you via email or through a prominent notice within the Service at least 30 days before the changes take effect.",
											"For significant changes that affect your rights, provide an opportunity to review and accept the new Terms before they apply to you.",
										].map((item, i) => (
											<li
												key={i}
												className="flex gap-3 text-muted-foreground leading-relaxed"
											>
												<span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
												{item}
											</li>
										))}
									</ul>
									<CalloutBox variant="important">
										<p className="text-sm text-foreground leading-relaxed">
											Your continued use of the Service after the effective date
											of any changes constitutes your acceptance of the revised
											Terms. If you do not agree to the updated Terms, you
											should discontinue use of the Service and, if applicable,
											cancel your subscription.
										</p>
									</CalloutBox>
								</div>

								<Separator />

								<div id="contact" className="scroll-mt-24">
									<h2 className="text-2xl font-semibold tracking-tight mb-4">
										13. Contact Us
									</h2>
									<p className="text-muted-foreground leading-relaxed mb-6">
										If you have any questions, concerns, or feedback about these
										Terms, we would love to hear from you. You can reach us
										through any of the following channels:
									</p>
									<div className="space-y-3 mb-8">
										<div className="rounded-lg border p-4 flex items-start gap-4">
											<HugeiconsIcon
												icon={MailAtSign01Icon}
												className="size-5 text-primary mt-0.5 shrink-0"
												strokeWidth={1.5}
											/>
											<div>
												<p className="font-medium text-foreground">Email</p>
												<p className="text-sm text-muted-foreground">
													legal@zomath.com for legal inquiries
												</p>
												<p className="text-sm text-muted-foreground">
													support@zomath.com for general help
												</p>
											</div>
										</div>
										<div className="rounded-lg border p-4 flex items-start gap-4">
											<HugeiconsIcon
												icon={AiChipIcon}
												className="size-5 text-primary mt-0.5 shrink-0"
												strokeWidth={1.5}
											/>
											<div>
												<p className="font-medium text-foreground">In-App</p>
												<p className="text-sm text-muted-foreground">
													Use the feedback option in your Zomath account
													settings to reach our team directly
												</p>
											</div>
										</div>
									</div>
									<p className="text-muted-foreground leading-relaxed">
										We typically respond to inquiries within two business days.
										For urgent legal matters, please use the legal@zomath.com
										address and include &ldquo;URGENT&rdquo; in the subject
										line.
									</p>
								</div>

								<Separator />

								<div className="rounded-xl bg-muted/50 border p-8 lg:p-10">
									<div className="text-center max-w-lg mx-auto">
										<div className="flex size-12 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
											<HugeiconsIcon
												icon={BandageIcon}
												className="size-6 text-primary"
												strokeWidth={1.5}
											/>
										</div>
										<h3 className="text-lg font-semibold text-foreground mb-2">
											Thank you for reading
										</h3>
										<p className="text-sm text-muted-foreground leading-relaxed mb-6">
											By using Zomath, you acknowledge that you have read,
											understood, and agree to be bound by these Terms of
											Service. We are here to help you learn, grow, and discover
											the beauty of mathematics.
										</p>
										<div className="flex items-center justify-center gap-3">
											<Link href="/privacy">
												<Button variant="outline" size="sm">
													Privacy Policy
												</Button>
											</Link>
											<Link href="/">
												<Button size="sm">Start Learning</Button>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="border-t py-12">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
						<p>Last updated: June 15, 2025</p>
						<div className="flex items-center gap-4">
							<Link
								href="/privacy"
								className="hover:text-foreground transition-colors"
							>
								Privacy Policy
							</Link>
							<Link
								href="/"
								className="hover:text-foreground transition-colors"
							>
								zomath.com
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
