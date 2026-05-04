"use client";

import {
	AiBrain02Icon,
	AnonymousIcon,
	ArrowRight02Icon,
	AutoConversationsIcon,
	Book02Icon,
	Bug02Icon,
	Certificate01Icon,
	CheckmarkCircle02Icon,
	Clock01Icon,
	DatabaseSyncIcon,
	Delete02Icon,
	EarOffIcon,
	EyeIcon,
	FingerPrintScanIcon,
	Globe02Icon,
	Image02Icon,
	MailSend02Icon,
	SevenZ02Icon,
	Shield01Icon,
	TeacherIcon,
	TransparencyIcon,
	UserGroupIcon,
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

export default function SecurityPage() {
	return (
		<main className="flex flex-col">
			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-3xl mx-auto text-center">
						<div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground mb-6">
							<HugeiconsIcon
								icon={Shield01Icon}
								className="size-4"
								strokeWidth={1.5}
							/>
							Trust and Safety
						</div>
						<h1 className="text-4xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]">
							Your Learning. Your Data.{" "}
							<span className="text-primary">Protected.</span>
						</h1>
						<p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
							At Zomath, we believe understanding math should never come at the
							cost of your privacy. Every feature, from Newton to Concept Map,
							is built with security at its foundation, not bolted on as an
							afterthought.
						</p>
						<div className="mt-8 flex flex-wrap items-center justify-center gap-4">
							<Button asChild size="lg">
								<Link href="/security#faq">
									View Security FAQ
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-4 ml-1"
										strokeWidth={1.5}
									/>
								</Link>
							</Button>
							<Button variant="outline" size="lg" asChild>
								<Link href="mailto:security@zomath.com">
									<HugeiconsIcon
										icon={MailSend02Icon}
										className="size-4 mr-1.5"
										strokeWidth={1.5}
									/>
									Report an Issue
								</Link>
							</Button>
						</div>
					</div>
					<div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
						{[
							{ label: "Uptime", value: "99.99%" },
							{ label: "Data encrypted", value: "100%" },
							{ label: "Breach response", value: "< 72 hrs" },
							{ label: "Annual audits", value: "SOC 2 + GDPR" },
						].map((stat) => (
							<div
								key={stat.label}
								className="text-center rounded-xl border bg-card p-5"
							>
								<p className="text-2xl font-semibold text-foreground">
									{stat.value}
								</p>
								<p className="text-xs text-muted-foreground mt-1">
									{stat.label}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="text-center mb-16">
						<p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
							Our Principles
						</p>
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
							Security is not an afterthought
						</h2>
						<p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
							These core principles guide every decision we make about how your
							data is collected, stored, and used. They are non-negotiable.
						</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{
								icon: Book02Icon,
								title: "Encrypted by Default",
								description:
									"All data is encrypted in transit with TLS 1.3 and at rest with AES-256. Your problem history, conversations with Newton, and personal information are never stored in plain text.",
							},
							{
								icon: AnonymousIcon,
								title: "Minimal Data Collection",
								description:
									"We only collect what we need to improve your learning. No invasive tracking pixels, no selling data to third parties, no behavioral profiling for advertising. Ever.",
							},
							{
								icon: Delete02Icon,
								title: "You Own Your Data",
								description:
									"Export everything in standard formats at any time. Delete your account and all associated data permanently. No lock-in, no retention tricks, no questions asked.",
							},
							{
								icon: TransparencyIcon,
								title: "Transparent Practices",
								description:
									"No hidden permissions, no vague policies written by lawyers for lawyers. Our privacy practices are in plain language, and we publish regular transparency reports.",
							},
						].map((principle) => (
							<div
								key={principle.title}
								className="rounded-xl border bg-card p-6 hover:border-primary/30 transition-colors"
							>
								<div className="inline-flex items-center justify-center rounded-lg bg-primary/10 p-3 mb-4">
									<HugeiconsIcon
										icon={principle.icon}
										className="size-6 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="text-lg font-semibold text-foreground mb-2">
									{principle.title}
								</h3>
								<p className="text-sm text-muted-foreground leading-relaxed">
									{principle.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted/30">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="grid lg:grid-cols-2 gap-16 items-start">
						<div>
							<p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
								How We Protect You
							</p>
							<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
								Built for the classroom and beyond
							</h2>
							<p className="mt-4 text-muted-foreground leading-relaxed">
								Zomath is used by students as young as 13, and many features are
								designed with younger learners in mind. That responsibility
								shapes every technical and policy decision we make, from how
								Newton processes your questions to how we store your uploaded
								photos.
							</p>
							<p className="mt-4 text-muted-foreground leading-relaxed">
								We treat every user as if they are our most vulnerable one. If a
								feature is not safe for a 13-year-old working through algebra at
								their kitchen table, it is not safe for anyone.
							</p>
						</div>
						<div className="space-y-6">
							{[
								{
									icon: FingerPrintScanIcon,
									title: "End-to-End Encryption",
									description:
										"Your conversations with Newton, your Practice history, and uploaded problem images are protected with AES-256 encryption at rest and TLS 1.3 in transit. Even if a server were physically compromised, your data would remain unreadable.",
								},
								{
									icon: Shield01Icon,
									title: "COPPA and FERPA Compliant",
									description:
										"We comply with the Children's Online Privacy Protection Act and the Family Educational Rights and Privacy Act. Parental consent flows are built in for users under 13, and we never advertise to students of any age.",
								},
								{
									icon: SevenZ02Icon,
									title: "Secure Infrastructure",
									description:
										"Hosted on SOC 2 Type II certified cloud infrastructure with continuous monitoring, automated threat detection, and regular third-party penetration testing. Our security team runs internal audits quarterly.",
								},
								{
									icon: EyeIcon,
									title: "No Human Reads Your Data",
									description:
										"Newton's AI processes your questions automatically. Zomath employees never read your chat history or problem submissions unless you explicitly share them in a support request, and even then only authorized personnel can access them.",
								},
							].map((item) => (
								<div key={item.title} className="flex gap-4">
									<div className="flex-shrink-0 inline-flex items-center justify-center rounded-lg bg-primary/10 p-2.5 h-fit">
										<HugeiconsIcon
											icon={item.icon}
											className="size-5 text-primary"
											strokeWidth={1.5}
										/>
									</div>
									<div>
										<h3 className="font-semibold text-foreground mb-1">
											{item.title}
										</h3>
										<p className="text-sm text-muted-foreground leading-relaxed">
											{item.description}
										</p>
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
						<p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
							What We Collect
						</p>
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
							Honest about what we see and why
						</h2>
						<p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
							We believe you should never be surprised by what a service knows
							about you. Here is every category of data Zomath collects, what we
							use it for, and how long we keep it.
						</p>
					</div>
					<div className="max-w-4xl mx-auto">
						<div className="rounded-2xl border bg-card overflow-hidden">
							<div className="grid grid-cols-3 gap-4 px-6 py-4 bg-muted/50 border-b text-sm font-medium text-muted-foreground">
								<span>Data Type</span>
								<span>Purpose</span>
								<span>Retention</span>
							</div>
							{[
								{
									type: "Account info (email, display name)",
									purpose: "Authentication, account recovery, progress sync",
									retention: "Until you delete your account",
								},
								{
									type: "Solve photo uploads",
									purpose:
										"Extract and solve the math problem you photographed",
									retention:
										"Encrypted and stored until you delete the problem",
								},
								{
									type: "Ask Newton conversations",
									purpose: "Provide real-time tutoring responses",
									retention: "Encrypted and stored until you clear history",
								},
								{
									type: "Practice answers and scores",
									purpose:
										"Track mastery, recommend targeted drills, update Concept Map",
									retention: "Until you delete your account",
								},
								{
									type: "Concept Map progress",
									purpose: "Visualize your knowledge graph and identify gaps",
									retention: "Until you delete your account",
								},
								{
									type: "Usage analytics (anonymized)",
									purpose:
										"Improve features, fix bugs, understand feature adoption",
									retention: "Aggregated after 90 days",
								},
								{
									type: "Device and session info",
									purpose: "Security, fraud prevention, session management",
									retention: "30 days after session ends",
								},
							].map((row) => (
								<div
									key={row.type}
									className="grid grid-cols-3 gap-4 px-6 py-4 border-b last:border-0 text-sm"
								>
									<span className="text-foreground font-medium">
										{row.type}
									</span>
									<span className="text-muted-foreground">{row.purpose}</span>
									<span className="text-muted-foreground">{row.retention}</span>
								</div>
							))}
						</div>
						<p className="mt-4 text-xs text-muted-foreground text-center">
							We never collect keystroke patterns, browsing history outside
							Zomath, contact lists, or location data. If it is not on this
							list, we do not have it.
						</p>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted/30">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="grid lg:grid-cols-2 gap-16 items-start">
						<div>
							<p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
								Newton and AI Privacy
							</p>
							<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
								Your AI tutor respects your boundaries
							</h2>
							<p className="mt-4 text-muted-foreground leading-relaxed">
								Newton is the heart of Zomath. It is also the feature that
								handles your most personal learning moments: the questions you
								are embarrassed to ask in class, the mistakes you make when
								nobody is watching, the concepts that just will not click. We
								take that trust seriously.
							</p>
							<p className="mt-4 text-muted-foreground leading-relaxed">
								Newton processes your questions in real time and responds
								without human oversight of your individual conversations. The AI
								model that powers Newton is not trained on your personal chats.
								Any model improvement uses only aggregated, anonymized patterns
								that cannot be traced back to you.
							</p>
						</div>
						<div className="space-y-4">
							{[
								{
									icon: AiBrain02Icon,
									title: "No training on your conversations",
									description:
										"Your Ask Newton chats are never used as training data. Model improvements use only anonymized, aggregated signals that cannot be reverse-engineered to identify you.",
								},
								{
									icon: AutoConversationsIcon,
									title: "Conversations stay private",
									description:
										"Newton conversations are encrypted at rest. No Zomath employee can read your chat history. You can clear your Newton history at any time from settings, and it is gone from all our systems.",
								},
								{
									icon: Image02Icon,
									title: "Photo processing is automatic",
									description:
										"When you use Solve, your photo is processed by machine vision to extract the math problem. The image itself is encrypted and stored only so you can revisit your solution. You can delete individual photos or all of them anytime.",
								},
								{
									icon: EarOffIcon,
									title: "Opt out of anonymized aggregation",
									description:
										"Even our anonymized usage signals are optional. You can disable anonymized data sharing in your privacy settings, and Newton will still work exactly the same for you.",
								},
							].map((item) => (
								<div
									key={item.title}
									className="rounded-xl border bg-card p-5 hover:border-primary/30 transition-colors"
								>
									<div className="flex items-start gap-3">
										<div className="flex-shrink-0 inline-flex items-center justify-center rounded-lg bg-primary/10 p-2">
											<HugeiconsIcon
												icon={item.icon}
												className="size-5 text-primary"
												strokeWidth={1.5}
											/>
										</div>
										<div>
											<h3 className="font-semibold text-foreground mb-1">
												{item.title}
											</h3>
											<p className="text-sm text-muted-foreground leading-relaxed">
												{item.description}
											</p>
										</div>
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
						<p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
							Compliance
						</p>
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
							Standards we meet and exceed
						</h2>
						<p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
							Zomath is designed to meet the strictest requirements for
							educational technology, because students and educators deserve
							nothing less.
						</p>
					</div>
					<div className="grid md:grid-cols-3 gap-6">
						{[
							{
								icon: Certificate01Icon,
								name: "SOC 2 Type II",
								detail:
									"Our cloud infrastructure and internal processes are audited annually against the AICPA Trust Services Criteria for security, availability, and confidentiality. The latest report is available upon request under NDA.",
							},
							{
								icon: Globe02Icon,
								name: "GDPR",
								detail:
									"European users have full data portability, the right to be forgotten, and explicit consent mechanisms. We process data only where lawful bases exist, and our DPO is available at privacy@zomath.com.",
							},
							{
								icon: CheckmarkCircle02Icon,
								name: "COPPA and FERPA",
								detail:
									"Verified parental consent for under-13 users. Educational records are protected under FERPA. No advertising to children, no behavioral profiling, no commercial exploitation of student data.",
							},
						].map((cert) => (
							<div
								key={cert.name}
								className="rounded-xl border bg-card p-8 text-center hover:border-primary/30 transition-colors"
							>
								<div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-4 mb-5">
									<HugeiconsIcon
										icon={cert.icon}
										className="size-8 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="text-xl font-semibold text-foreground mb-3">
									{cert.name}
								</h3>
								<p className="text-sm text-muted-foreground leading-relaxed">
									{cert.detail}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted/30">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="grid lg:grid-cols-2 gap-16">
						<div>
							<p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
								Data Ownership
							</p>
							<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
								Your math journey belongs to you
							</h2>
							<p className="mt-4 text-muted-foreground leading-relaxed">
								Every problem you solve, every concept you master, every
								conversation with Newton is yours. We help you learn, but the
								record of your growth is your property. That is not a slogan. It
								is a commitment.
							</p>
							<div className="mt-8 space-y-4">
								{[
									"Export all your data in standard formats (JSON, CSV) at any time",
									"Delete your account and all data permanently with one click",
									"No data retention after deletion, not even anonymized aggregates",
									"No training AI models on your personal conversations",
									"No sharing data with schools, employers, or third parties",
									"Clear history for any individual feature independently",
								].map((item) => (
									<div key={item} className="flex items-start gap-3">
										<HugeiconsIcon
											icon={CheckmarkCircle02Icon}
											className="size-5 text-primary flex-shrink-0 mt-0.5"
											strokeWidth={1.5}
										/>
										<span className="text-sm text-muted-foreground">
											{item}
										</span>
									</div>
								))}
							</div>
						</div>
						<div className="rounded-2xl border bg-card p-8 flex flex-col justify-center">
							<h3 className="text-lg font-semibold text-foreground mb-6">
								Your Data Rights
							</h3>
							<div className="space-y-0">
								{[
									{
										label: "Right to Access",
										description: "See every piece of data we hold about you",
									},
									{
										label: "Right to Rectification",
										description: "Correct any inaccurate personal information",
									},
									{
										label: "Right to Erasure",
										description:
											"Permanently delete your data from all systems",
									},
									{
										label: "Right to Portability",
										description:
											"Download your data in machine-readable format",
									},
									{
										label: "Right to Restrict Processing",
										description: "Limit how we process your data at any time",
									},
									{
										label: "Right to Object",
										description:
											"Object to processing based on legitimate interest",
									},
								].map((right, i) => (
									<div
										key={right.label}
										className={`flex items-center justify-between py-3 ${i < 5 ? "border-b" : ""}`}
									>
										<div>
											<p className="text-sm font-medium text-foreground">
												{right.label}
											</p>
											<p className="text-xs text-muted-foreground mt-0.5">
												{right.description}
											</p>
										</div>
										<Button variant="outline" size="sm" asChild>
											<Link href="/account/privacy">Exercise</Link>
										</Button>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="text-center mb-16">
						<p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
							For Educators
						</p>
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
							Safe for classrooms, trusted by schools
						</h2>
						<p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
							Zomath meets the requirements school districts need, from data
							processing agreements to administrative controls that respect both
							teacher oversight and student privacy.
						</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{
								icon: TeacherIcon,
								title: "Teacher Dashboard Controls",
								description:
									"Educators can manage student rosters, control feature access, and monitor aggregate progress. Teachers never see private conversation history with Newton, because that trust belongs to the student.",
							},
							{
								icon: DatabaseSyncIcon,
								title: "Data Processing Agreements",
								description:
									"We sign DPAs with school districts and comply with state student privacy laws including SOPIPA, FERPA, and COPPA. Our standard DPA is available for review on request.",
							},
							{
								icon: EarOffIcon,
								title: "No Advertising to Students",
								description:
									"Zomath will never show ads to student accounts. No behavioral tracking for ad targeting. No selling data to marketing companies. No exceptions, no loopholes, no premium ad tiers.",
							},
							{
								icon: AnonymousIcon,
								title: "Minimal Account Requirements",
								description:
									"Students can use Zomath with minimal personal information. We do not require full names, dates of birth, or email addresses for basic access. A display name is enough to get started.",
							},
							{
								icon: Clock01Icon,
								title: "Audit Logging",
								description:
									"Administrative actions are logged and auditable. Schools can request detailed reports on who accessed what data and when, so you always know exactly how student information is being handled.",
							},
							{
								icon: Bug02Icon,
								title: "Breach Notification",
								description:
									"In the unlikely event of a data breach, affected users and institutions are notified within 72 hours, in full compliance with GDPR and state breach notification laws. No delays, no cover-ups.",
							},
						].map((feature) => (
							<div
								key={feature.title}
								className="rounded-xl border bg-card p-6 hover:border-primary/30 transition-colors"
							>
								<div className="inline-flex items-center justify-center rounded-lg bg-primary/10 p-2.5 mb-4">
									<HugeiconsIcon
										icon={feature.icon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="font-semibold text-foreground mb-2">
									{feature.title}
								</h3>
								<p className="text-sm text-muted-foreground leading-relaxed">
									{feature.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted/30">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-3xl mx-auto">
						<div className="text-center mb-12">
							<p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
								FAQ
							</p>
							<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
								Common security questions
							</h2>
							<p className="mt-4 text-muted-foreground max-w-xl mx-auto">
								We would rather over-communicate about security than leave you
								guessing. If your question is not here, reach out directly.
							</p>
						</div>
						<Accordion type="single" collapsible className="w-full">
							<AccordionItem value="item-1">
								<AccordionTrigger>Does Zomath sell my data?</AccordionTrigger>
								<AccordionContent>
									Never. Zomath does not sell, rent, or share personal data with
									third parties for advertising or any other commercial purpose.
									Your learning data, including your Practice scores, Concept
									Map progress, and Ask Newton conversations, is used solely to
									improve your experience and the quality of Newton's tutoring.
									We have turned down partnerships that required data sharing,
									and we will do it again.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-2">
								<AccordionTrigger>
									Can Zomath employees read my conversations with Newton?
								</AccordionTrigger>
								<AccordionContent>
									No. Your conversations with Newton are encrypted and processed
									automatically. Zomath staff cannot browse, search, or access
									your chat history. The only exception is if you explicitly
									submit a support ticket that includes conversation details. In
									that case, only authorized support personnel can view the
									specific messages you chose to share, and access is logged and
									time-limited.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-3">
								<AccordionTrigger>
									Is my photo data stored when I use Solve?
								</AccordionTrigger>
								<AccordionContent>
									Photos uploaded to Solve are processed by our machine vision
									pipeline to extract the math problem, then encrypted and
									stored temporarily so you can revisit your solutions. You can
									delete any individual problem image or all photo data at any
									time from your account settings. We do not use uploaded photos
									for any purpose beyond solving your math problems. We do not
									run facial recognition, extract metadata beyond what is needed
									for image processing, or share images with any third party.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-4">
								<AccordionTrigger>
									How is my Progress and Concept Map data used?
								</AccordionTrigger>
								<AccordionContent>
									Your progress tracking and Concept Map data are used
									exclusively to personalize your learning experience. For
									example, they help us recommend Practice drills at the right
									difficulty, identify knowledge gaps in your Concept Map, and
									help Newton tailor explanations to what you already
									understand. This data is never shared with third parties, and
									we never use it to build behavioral profiles for advertising.
									Schools see only aggregate progress, never individual Newton
									conversations.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-5">
								<AccordionTrigger>
									What happens to my data if I delete my account?
								</AccordionTrigger>
								<AccordionContent>
									When you delete your account, all your personal data,
									conversation history, problem submissions, and progress
									records are permanently removed from our primary systems
									immediately, and purged from all backups within 30 days. We do
									not retain anonymized versions of your data. Once deletion is
									complete, it cannot be reversed. We send you a confirmation
									email so you know it is done.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-6">
								<AccordionTrigger>
									Is Zomath safe for users under 13?
								</AccordionTrigger>
								<AccordionContent>
									Yes. Zomath complies with COPPA and offers a limited
									experience for users under 13 with verified parental consent.
									We collect only the minimum information necessary, disable
									social features for under-13 accounts, and provide parents
									with full visibility and control over their child's account,
									including the ability to review data and request deletion. No
									advertising is shown to any student accounts, regardless of
									age.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-7">
								<AccordionTrigger>
									Does Zomath train AI models on my personal data?
								</AccordionTrigger>
								<AccordionContent>
									No. We do not train our AI models on your personal
									conversations or problem submissions. Any model improvement
									uses only aggregated, anonymized data that cannot be traced
									back to individual users. You can opt out of even this
									anonymized aggregation in your privacy settings, and Newton
									will still work exactly the same for you.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-8">
								<AccordionTrigger>
									How do I report a security vulnerability?
								</AccordionTrigger>
								<AccordionContent>
									We appreciate responsible disclosure. If you discover a
									security vulnerability in Zomath, please email
									security@zomath.com with details. We acknowledge reports
									within 24 hours and aim to resolve critical issues within 72
									hours. We also maintain a bug bounty program for qualifying
									findings, with rewards ranging from $100 to $5,000 depending
									on severity and impact. We ask that you do not publicly
									disclose the vulnerability until we have had a reasonable time
									to address it.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-9">
								<AccordionTrigger>
									What third parties have access to my data?
								</AccordionTrigger>
								<AccordionContent>
									Very few. We use a SOC 2 certified cloud provider for
									infrastructure hosting. We use an encrypted email service for
									transactional emails like password resets. We do not use
									analytics platforms that share data externally, no advertising
									SDKs, and no social login providers that track you across the
									web. Every sub-processor is listed in our privacy policy, and
									we notify users before adding new ones.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-10">
								<AccordionTrigger>
									Can my school see my Newton conversations?
								</AccordionTrigger>
								<AccordionContent>
									No. Even if your school provides your Zomath account, your Ask
									Newton conversations are private. Teachers and administrators
									can see aggregate progress data, like which topics you have
									practiced and your Concept Map completion, but they cannot
									read your individual chats with Newton. We believe students
									learn best when they can ask questions without fear of
									judgment, and privacy is essential for that.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="rounded-2xl border bg-card p-8 lg:p-16 text-center">
						<div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-4 mb-6">
							<HugeiconsIcon
								icon={MailSend02Icon}
								className="size-8 text-primary"
								strokeWidth={1.5}
							/>
						</div>
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
							Have a security concern?
						</h2>
						<p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
							Our security team is here to help. Whether you have found a
							vulnerability, have questions about our practices, or need
							assistance exercising your data rights, we want to hear from you.
							We respond to every inquiry.
						</p>
						<div className="mt-8 flex flex-wrap items-center justify-center gap-4">
							<Button asChild size="lg">
								<Link href="mailto:security@zomath.com">
									Contact Security Team
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-4 ml-1"
										strokeWidth={1.5}
									/>
								</Link>
							</Button>
							<Button variant="outline" size="lg" asChild>
								<Link href="/privacy">Read Our Privacy Policy</Link>
							</Button>
						</div>
						<p className="mt-6 text-xs text-muted-foreground">
							For general support, visit{" "}
							<Link
								href="/help"
								className="underline underline-offset-4 hover:text-foreground transition-colors"
							>
								help.zomath.com
							</Link>
							. For vulnerability reports, please use{" "}
							<Link
								href="mailto:security@zomath.com"
								className="underline underline-offset-4 hover:text-foreground transition-colors"
							>
								security@zomath.com
							</Link>
							.
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
