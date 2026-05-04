"use client";

import {
	AnonymousIcon,
	ArrowRight02Icon,
	AuctionIcon,
	BeaterIcon,
	Camera01Icon,
	Cash02Icon,
	Chart02Icon,
	ChartIcon,
	CheckmarkCircle02Icon,
	Clock01Icon,
	CookieIcon,
	CreditCardIcon,
	DatabaseIcon,
	EyeIcon,
	FingerPrintIcon,
	LockIcon,
	Mail01Icon,
	MarketingIcon,
	MobileProtectionIcon,
	Shield01Icon,
	SquareIcon,
	UserShield01Icon,
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

const principles = [
	{
		icon: AnonymousIcon,
		title: "Privacy by design",
		description:
			"We build data protection into every feature from the start, not as an afterthought. Minimal collection, purposeful retention, and thoughtful defaults guide every decision we make.",
	},
	{
		icon: CreditCardIcon,
		title: "Never sold, ever",
		description:
			"Your personal information is never sold, rented, or traded to third parties for their own commercial purposes. This is a non-negotiable founding principle of Zomath.",
	},
	{
		icon: UserShield01Icon,
		title: "You own your data",
		description:
			"Every piece of your learning history, every conversation with Newton, every photo you upload belongs to you. You can view, download, or delete it at any time.",
	},
	{
		icon: MarketingIcon,
		title: "Extra care for young learners",
		description:
			"Many Zomath students are under 18. We follow COPPA and regional youth privacy laws, require parental consent for children under 13, and never serve targeted ads to any user.",
	},
];

const sections = [
	{
		id: "info-we-collect",
		title: "Information We Collect",
		icon: DatabaseIcon,
		content: [
			{
				subtitle: "Account Information",
				text: "When you create a Zomath account, we collect your name, email address, and a password (stored in hashed form). You may optionally provide your grade level, school, and math interests to help Newton personalize your experience.",
			},
			{
				subtitle: "Learning Data",
				text: "As you use Zomath, we collect information about your interactions with the platform: problems you solve, questions you ask Newton, concepts you explore in the Concept Map, practice drill results, and overall progress. This data is essential for providing you with a personalized learning experience and tracking your growth over time.",
			},
			{
				subtitle: "Photos and Documents",
				text: "When you use the Solve feature, you can upload photos of math problems. We process these images to extract and solve the problem. The images are retained only long enough to provide your solution and are then deleted from our servers within 30 days. Extracted problem text may be stored as part of your learning history.",
			},
			{
				subtitle: "Chat Conversations with Newton",
				text: "Your conversations with Newton, our AI tutor, are stored so that Newton can maintain context within a session and so you can review past explanations. You can delete individual conversations or your entire chat history at any time from your account settings.",
			},
			{
				subtitle: "Usage and Device Information",
				text: "We automatically collect certain technical information when you use Zomath, including your device type, operating system, browser type, IP address, and general usage patterns such as pages visited and features used. This helps us improve performance and diagnose issues.",
			},
		],
	},
	{
		id: "how-we-use",
		title: "How We Use Your Information",
		icon: EyeIcon,
		content: [
			{
				subtitle: null,
				text: "We use the information we collect for the following purposes:",
			},
			{
				subtitle: "To Provide and Improve Zomath",
				text: "Your learning data powers personalized recommendations, adaptive practice difficulty, and Newton's ability to tailor explanations to your level. We also use aggregated, anonymized usage data to identify which features are most helpful and where students commonly struggle.",
			},
			{
				subtitle: "To Communicate With You",
				text: "We may send you emails about your account, progress summaries, new features, or learning tips. You can opt out of non-essential communications at any time through your account settings or by clicking unsubscribe in any email.",
			},
			{
				subtitle: "To Protect and Maintain Our Service",
				text: "We use your information to detect and prevent fraud, abuse, or security issues, and to ensure Zomath runs smoothly for all users.",
			},
		],
	},
	{
		id: "ai-and-learning",
		title: "AI and Your Learning Data",
		icon: FingerPrintIcon,
		content: [
			{
				subtitle: null,
				text: "Because Zomath is an AI-powered learning platform, we want to be transparent about how AI interacts with your data.",
			},
			{
				subtitle: "Newton's Processing",
				text: "When you ask Newton a question or submit a problem through Solve, your input is sent to our AI systems to generate a response. These AI systems run on secure infrastructure and your data is not shared with third-party AI providers in a way that identifies you personally.",
			},
			{
				subtitle: "Training Our AI",
				text: "We may use anonymized and aggregated learning data to improve Newton's teaching abilities and the accuracy of our Solve feature. This means we strip all personally identifiable information and combine your data with data from many other students before using it for training. We never train AI models on your raw conversations or identifiable problem submissions without your consent.",
			},
			{
				subtitle: "You Stay in Control",
				text: "You can opt out of having your anonymized data used for AI training in your account settings. This opt-out does not affect your ability to use any Zomath features.",
			},
		],
	},
	{
		id: "data-sharing",
		title: "Data Sharing and Third Parties",
		icon: ChartIcon,
		content: [
			{
				subtitle: null,
				text: "We do not sell your personal information. We share data only in the following limited circumstances:",
			},
			{
				subtitle: "Service Providers",
				text: "We work with trusted vendors who help us operate Zomath, such as cloud hosting providers, analytics services, and email delivery. These providers are contractually obligated to handle your data securely and only process it according to our instructions.",
			},
			{
				subtitle: "Legal Requirements",
				text: "We may disclose your information if required by law, such as in response to a valid legal process or to protect the rights and safety of Zomath, our users, or the public.",
			},
			{
				subtitle: "With Your Consent",
				text: "In some cases, we may ask for your explicit consent before sharing your data for a specific purpose not described here.",
			},
		],
	},
	{
		id: "data-security",
		title: "Data Security and Storage",
		icon: LockIcon,
		content: [
			{
				subtitle: "Encryption",
				text: "Your data is encrypted in transit using TLS and at rest using industry-standard encryption algorithms. Passwords are hashed using bcrypt and are never stored in plain text.",
			},
			{
				subtitle: "Access Controls",
				text: "Only authorized Zomath team members with a legitimate need can access user data, and all access is logged and monitored. We conduct regular security reviews and penetration testing.",
			},
			{
				subtitle: "Data Storage Location",
				text: "Your data is stored on secure servers in the United States. If you are accessing Zomath from outside the US, please be aware that your data will be transferred to and processed in the US.",
			},
			{
				subtitle: "No System Is Perfect",
				text: "While we work hard to protect your information, no system is completely secure. We encourage you to use a strong, unique password and to enable two-factor authentication when available.",
			},
		],
	},
	{
		id: "your-rights",
		title: "Your Rights and Choices",
		icon: UserShield01Icon,
		content: [
			{
				subtitle: "Access and Download",
				text: "You can view and download a copy of your personal data and learning history at any time from your account settings.",
			},
			{
				subtitle: "Correction",
				text: "You can update your account information, including your name, email, and learning preferences, at any time.",
			},
			{
				subtitle: "Deletion",
				text: "You can request deletion of your account and all associated data. When you delete your account, we remove your personal information and learning data within 30 days, except where we are legally required to retain certain records. Anonymized data that has already been aggregated for research or AI training cannot be individually removed, but it no longer identifies you.",
			},
			{
				subtitle: "Opt-Out of AI Training",
				text: "You can opt out of having your anonymized data used for AI model training without affecting your access to any Zomath features.",
			},
			{
				subtitle: "Regional Rights",
				text: "If you are located in the European Economic Area, the United Kingdom, California, or other jurisdictions with data protection laws, you may have additional rights such as the right to restrict processing, the right to data portability, and the right to object to processing. Contact us at privacy@zomath.com to exercise any of these rights.",
			},
		],
	},
	{
		id: "childrens-privacy",
		title: "Children's Privacy",
		icon: Shield01Icon,
		content: [
			{
				subtitle: null,
				text: "Zomath is designed for students, including those under 18. We take extra care with young learners' data.",
			},
			{
				subtitle: "Parental Consent",
				text: "For students under 13 (or 16 in certain jurisdictions), we require parental or guardian consent before collecting personal information. Parents can review, modify, or delete their child's data at any time by contacting us at privacy@zomath.com.",
			},
			{
				subtitle: "Minimal Data Collection",
				text: "We collect only the data necessary to provide the Zomath learning experience. We do not collect social security numbers, financial information, or geolocation data from any users.",
			},
			{
				subtitle: "No Targeted Advertising",
				text: "We do not serve targeted advertisements to any users, and we never use children's data for advertising purposes of any kind.",
			},
		],
	},
	{
		id: "cookies",
		title: "Cookies and Tracking",
		icon: CookieIcon,
		content: [
			{
				subtitle: "Essential Cookies",
				text: "We use essential cookies to keep you logged in, remember your session, and ensure Zomath functions properly. These cannot be disabled without affecting core functionality.",
			},
			{
				subtitle: "Analytics Cookies",
				text: "We use analytics tools to understand how students use Zomath so we can improve the experience. You can opt out of analytics cookies through your browser settings or the cookie preferences banner.",
			},
			{
				subtitle: "No Third-Party Ad Tracking",
				text: "We do not allow third-party advertising networks to track you on Zomath. We do not use pixels, fingerprinting, or other cross-site tracking technologies for advertising purposes.",
			},
		],
	},
	{
		id: "data-retention",
		title: "Data Retention",
		icon: Clock01Icon,
		content: [
			{
				subtitle: null,
				text: "We retain your data for as long as your account is active or as needed to provide you with our services. Specifically:",
			},
			{
				subtitle: "Active Accounts",
				text: "All data is retained while your account is active so you can access your full learning history, progress, and past conversations with Newton.",
			},
			{
				subtitle: "Deleted Accounts",
				text: "When you delete your account, we remove your personal data and learning history within 30 days. Some anonymized, aggregated data may be retained indefinitely for research and improvement purposes.",
			},
			{
				subtitle: "Inactive Accounts",
				text: "If your account is inactive for more than 24 months, we may send you a notice before deleting your account and associated data. You can prevent this by logging in at least once within the notice period.",
			},
		],
	},
];

const faqItems = [
	{
		question: "Does Zomath sell my data?",
		answer:
			"No, never. We do not sell, rent, or trade your personal information to any third party for their own marketing or commercial purposes.",
	},
	{
		question: "Can my teacher or school see my Zomath data?",
		answer:
			"Only if you explicitly connect your Zomath account to a classroom or teacher account. By default, your learning data is private to you. If your school provides Zomath, they may set up a classroom integration, but you will always be informed before any data sharing occurs.",
	},
	{
		question: "What happens to photos I upload for Solve?",
		answer:
			"Photos you upload are processed to extract and solve the math problem. The image itself is deleted from our servers within 30 days. The extracted problem text may be stored as part of your learning history so you can review it later.",
	},
	{
		question: "Are my conversations with Newton private?",
		answer:
			"Yes. Your conversations with Newton are visible only to you within your account. Zomath staff do not read individual conversations. Anonymized patterns from many students may be used to improve Newton's teaching quality, but never in a way that identifies you.",
	},
	{
		question: "How do I delete my data?",
		answer:
			"You can delete individual conversations with Newton from within the chat interface. To delete your entire account and all associated data, go to Account Settings and select Delete Account, or contact us at privacy@zomath.com. Deletion is completed within 30 days.",
	},
	{
		question: "Does Zomath work with third-party AI companies like OpenAI?",
		answer:
			"We use a combination of proprietary and third-party AI infrastructure to power Newton and Solve. When third-party services are used, your data is processed under strict data protection agreements that prohibit the provider from storing or using your data for their own purposes. We are continually working to bring more of our AI stack in-house.",
	},
	{
		question: "What if I am under 13 and using Zomath?",
		answer:
			"If you are under 13, a parent or guardian must provide consent before you create a Zomath account. We limit the data we collect from young learners and never use it for advertising. Your parent can contact us at privacy@zomath.com to review or delete your data at any time.",
	},
];

const quickStats = [
	{
		icon: Camera01Icon,
		label: "Solve photos",
		detail: "Deleted within 30 days",
	},
	{ icon: Chart02Icon, label: "Newton chats", detail: "Visible only to you" },
	{
		icon: LockIcon,
		label: "Your password",
		detail: "bcrypt hashed, never stored in plain text",
	},
	{
		icon: BeaterIcon,
		label: "Data at rest",
		detail: "Industry-standard AES encryption",
	},
	{
		icon: Cash02Icon,
		label: "Account deletion",
		detail: "Full removal within 30 days",
	},
	{
		icon: ChartIcon,
		label: "Data sold",
		detail: "Never. This is non-negotiable.",
	},
];

export default function PrivacyPage() {
	return (
		<main className="flex flex-col">
			<section className="py-24 lg:py-32 relative overflow-hidden">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-primary)/5%_0%,_transparent_60%)]" />
				<div className="max-w-7xl mx-auto px-4 lg:px-12 relative">
					<div className="max-w-3xl">
						<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary mb-6">
							<HugeiconsIcon
								icon={MobileProtectionIcon}
								className="size-4"
								strokeWidth={1.5}
							/>
							<span className="text-sm font-medium">Privacy Policy</span>
						</div>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight">
							Your learning data belongs to you.
						</h1>
						<p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
							Zomath exists to help you understand math more deeply, and that
							requires trust. This policy explains what data we collect, why we
							collect it, how we protect it, and the control you always have
							over your information.
						</p>
						<div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
							<span>Effective date: June 15, 2025</span>
							<span className="size-1 rounded-full bg-muted-foreground/40" />
							<span>Last updated: June 15, 2025</span>
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted/30">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mb-12">
						<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
							Our privacy principles
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							These are not just words on a page. They are the foundation of
							every product decision we make at Zomath.
						</p>
					</div>
					<div className="grid md:grid-cols-2 gap-6">
						{principles.map((principle) => (
							<div
								key={principle.title}
								className="rounded-2xl border bg-background p-8 flex flex-col gap-4"
							>
								<div className="flex items-center justify-center size-12 rounded-xl bg-primary/10">
									<HugeiconsIcon
										icon={principle.icon}
										className="size-6 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="text-lg font-semibold text-foreground">
									{principle.title}
								</h3>
								<p className="text-muted-foreground leading-relaxed">
									{principle.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-16 lg:py-20">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mb-10">
						<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
							At a glance
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							The most important things to know about how Zomath handles your
							data, summarized.
						</p>
					</div>
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{quickStats.map((stat) => (
							<div
								key={stat.label}
								className="flex items-start gap-4 rounded-xl border bg-background p-5"
							>
								<div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 shrink-0">
									<HugeiconsIcon
										icon={stat.icon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<div className="min-w-0">
									<p className="text-sm font-medium text-foreground">
										{stat.label}
									</p>
									<p className="text-sm text-muted-foreground mt-0.5">
										{stat.detail}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="grid lg:grid-cols-[260px_1fr] gap-12 lg:gap-16">
						<nav className="hidden lg:block">
							<div className="sticky top-24">
								<p className="text-sm font-medium text-foreground mb-4">
									On this page
								</p>
								<ul className="space-y-1">
									{sections.map((section) => (
										<li key={section.id}>
											<a
												href={`#${section.id}`}
												className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2.5 py-1.5 px-2 rounded-md hover:bg-muted/60"
											>
												<HugeiconsIcon
													icon={section.icon}
													className="size-4"
													strokeWidth={1.5}
												/>
												{section.title}
											</a>
										</li>
									))}
								</ul>
								<Separator className="my-4" />
								<ul className="space-y-1">
									<li>
										<a
											href="#faq"
											className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2.5 py-1.5 px-2 rounded-md hover:bg-muted/60"
										>
											<HugeiconsIcon
												icon={AuctionIcon}
												className="size-4"
												strokeWidth={1.5}
											/>
											FAQ
										</a>
									</li>
									<li>
										<a
											href="#contact"
											className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2.5 py-1.5 px-2 rounded-md hover:bg-muted/60"
										>
											<HugeiconsIcon
												icon={Mail01Icon}
												className="size-4"
												strokeWidth={1.5}
											/>
											Contact Us
										</a>
									</li>
								</ul>
							</div>
						</nav>

						<div className="max-w-3xl space-y-0">
							{sections.map((section, idx) => (
								<article
									key={section.id}
									id={section.id}
									className="scroll-mt-24"
								>
									<div className="flex items-center gap-3 mb-6 pt-20 first:pt-0">
										<div className="flex items-center justify-center size-10 rounded-xl bg-primary/10">
											<HugeiconsIcon
												icon={section.icon}
												className="size-5 text-primary"
												strokeWidth={1.5}
											/>
										</div>
										<h2 className="text-2xl font-semibold tracking-tight text-foreground">
											{section.title}
										</h2>
									</div>
									<div className="space-y-5">
										{section.content.map((block, bIdx) => (
											<div key={bIdx}>
												{block.subtitle && (
													<h3 className="text-base font-medium text-foreground mb-1.5">
														{block.subtitle}
													</h3>
												)}
												<p className="text-muted-foreground leading-relaxed">
													{block.text}
												</p>
											</div>
										))}
									</div>
									{idx < sections.length - 1 && (
										<Separator className="mt-16 mb-0" />
									)}
								</article>
							))}
						</div>
					</div>
				</div>
			</section>

			<section id="faq" className="py-24 lg:py-32 bg-muted/30 scroll-mt-24">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-3xl">
						<div className="flex items-center gap-3 mb-4">
							<div className="flex items-center justify-center size-10 rounded-xl bg-primary/10">
								<HugeiconsIcon
									icon={AuctionIcon}
									className="size-5 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<h2 className="text-2xl font-semibold tracking-tight text-foreground">
								Frequently Asked Questions
							</h2>
						</div>
						<p className="text-muted-foreground mb-8">
							Common questions about how Zomath handles your data and privacy.
						</p>
						<Accordion type="single" collapsible className="w-full">
							{faqItems.map((item, idx) => (
								<AccordionItem key={idx} value={`faq-${idx}`}>
									<AccordionTrigger className="text-left text-foreground font-medium">
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

			<section id="contact" className="py-24 lg:py-32 scroll-mt-24">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="grid md:grid-cols-[1fr_1fr] gap-12 items-start">
						<div>
							<div className="flex items-center gap-3 mb-6">
								<div className="flex items-center justify-center size-10 rounded-xl bg-primary/10">
									<HugeiconsIcon
										icon={Mail01Icon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<h2 className="text-2xl font-semibold tracking-tight text-foreground">
									Contact Us
								</h2>
							</div>
							<p className="text-muted-foreground leading-relaxed mb-6">
								If you have any questions, concerns, or requests about this
								privacy policy or how your data is handled, we want to hear from
								you.
							</p>
							<p className="text-sm text-muted-foreground">
								We aim to respond to all privacy-related inquiries within 5
								business days. Data deletion requests are processed within 30
								days.
							</p>
						</div>
						<div className="rounded-2xl border bg-background p-8 space-y-5">
							<div className="flex items-start gap-3">
								<HugeiconsIcon
									icon={MobileProtectionIcon}
									className="size-5 text-primary mt-0.5 shrink-0"
									strokeWidth={1.5}
								/>
								<div>
									<p className="text-sm font-medium text-foreground">
										Privacy inquiries
									</p>
									<a
										href="mailto:privacy@zomath.com"
										className="text-sm text-primary hover:underline"
									>
										privacy@zomath.com
									</a>
								</div>
							</div>
							<Separator />
							<div className="flex items-start gap-3">
								<HugeiconsIcon
									icon={Cash02Icon}
									className="size-5 text-primary mt-0.5 shrink-0"
									strokeWidth={1.5}
								/>
								<div>
									<p className="text-sm font-medium text-foreground">
										Data deletion requests
									</p>
									<a
										href="mailto:privacy@zomath.com"
										className="text-sm text-primary hover:underline"
									>
										privacy@zomath.com
									</a>
								</div>
							</div>
							<Separator />
							<div className="flex items-start gap-3">
								<HugeiconsIcon
									icon={Mail01Icon}
									className="size-5 text-primary mt-0.5 shrink-0"
									strokeWidth={1.5}
								/>
								<div>
									<p className="text-sm font-medium text-foreground">
										General support
									</p>
									<a
										href="mailto:hello@zomath.com"
										className="text-sm text-primary hover:underline"
									>
										hello@zomath.com
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted/30">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-3xl text-center mx-auto">
						<div className="inline-flex items-center justify-center size-16 rounded-2xl bg-primary/10 mb-6">
							<HugeiconsIcon
								icon={CheckmarkCircle02Icon}
								className="size-8 text-primary"
								strokeWidth={1.5}
							/>
						</div>
						<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
							You are always in control.
						</h2>
						<p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
							Your learning journey is yours. Zomath uses your data to teach you
							better, not to profile you, advertise to you, or sell your
							information. If you ever want to review, download, or delete your
							data, we make it straightforward.
						</p>
						<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
							<Button asChild size="lg">
								<Link href="/signup">
									Start learning with Newton
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-4 ml-1.5"
										strokeWidth={1.5}
									/>
								</Link>
							</Button>
							<Button asChild variant="outline" size="lg">
								<Link href="/terms">View our Terms of Service</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			<section className="py-12 border-t">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-3xl">
						<p className="text-xs text-muted-foreground leading-relaxed">
							This privacy policy is effective as of June 15, 2025 and applies
							to all users of Zomath's website, mobile applications, and related
							services. We may update this policy from time to time. When we do,
							we will revise the "Last updated" date at the top of this page
							and, for material changes, notify you via email or an in-app
							notification. We encourage you to review this page periodically.
							Your continued use of Zomath after any changes constitutes your
							acceptance of the updated policy. If you do not agree with the
							changes, you may delete your account as described above.
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
