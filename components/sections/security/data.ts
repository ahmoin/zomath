import {
	AiBrain02Icon,
	AnonymousIcon,
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
	SevenZ02Icon,
	Shield01Icon,
	TeacherIcon,
	TransparencyIcon,
} from "@hugeicons/core-free-icons";

export const heroStats = [
	{ label: "Uptime", value: "99.99%" },
	{ label: "Data encrypted", value: "100%" },
	{ label: "Breach response", value: "< 72 hrs" },
	{ label: "Annual audits", value: "SOC 2 + GDPR" },
];

export const principles = [
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
];

export const protectionItems = [
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
];

export const dataTableRows = [
	{
		type: "Account info (email, display name)",
		purpose: "Authentication, account recovery, progress sync",
		retention: "Until you delete your account",
	},
	{
		type: "Solve photo uploads",
		purpose: "Extract and solve the math problem you photographed",
		retention: "Encrypted and stored until you delete the problem",
	},
	{
		type: "Ask Newton conversations",
		purpose: "Provide real-time tutoring responses",
		retention: "Encrypted and stored until you clear history",
	},
	{
		type: "Practice answers and scores",
		purpose: "Track mastery, recommend targeted drills, update Concept Map",
		retention: "Until you delete your account",
	},
	{
		type: "Concept Map progress",
		purpose: "Visualize your knowledge graph and identify gaps",
		retention: "Until you delete your account",
	},
	{
		type: "Usage analytics (anonymized)",
		purpose: "Improve features, fix bugs, understand feature adoption",
		retention: "Aggregated after 90 days",
	},
	{
		type: "Device and session info",
		purpose: "Security, fraud prevention, session management",
		retention: "30 days after session ends",
	},
];

export const newtonPrivacyItems = [
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
];

export const complianceCerts = [
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
];

export const ownershipChecklist = [
	"Export all your data in standard formats (JSON, CSV) at any time",
	"Delete your account and all data permanently with one click",
	"No data retention after deletion, not even anonymized aggregates",
	"No training AI models on your personal conversations",
	"No sharing data with schools, employers, or third parties",
	"Clear history for any individual feature independently",
];

export const dataRights = [
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
		description: "Permanently delete your data from all systems",
	},
	{
		label: "Right to Portability",
		description: "Download your data in machine-readable format",
	},
	{
		label: "Right to Restrict Processing",
		description: "Limit how we process your data at any time",
	},
	{
		label: "Right to Object",
		description: "Object to processing based on legitimate interest",
	},
];

export const educatorFeatures = [
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
];

export const faqItems = [
	{
		value: "item-1",
		question: "Does Zomath sell my data?",
		answer:
			"Never. Zomath does not sell, rent, or share personal data with third parties for advertising or any other commercial purpose. Your learning data, including your Practice scores, Concept Map progress, and Ask Newton conversations, is used solely to improve your experience and the quality of Newton's tutoring. We have turned down partnerships that required data sharing, and we will do it again.",
	},
	{
		value: "item-2",
		question: "Can Zomath employees read my conversations with Newton?",
		answer:
			"No. Your conversations with Newton are encrypted and processed automatically. Zomath staff cannot browse, search, or access your chat history. The only exception is if you explicitly submit a support ticket that includes conversation details. In that case, only authorized support personnel can view the specific messages you chose to share, and access is logged and time-limited.",
	},
	{
		value: "item-3",
		question: "Is my photo data stored when I use Solve?",
		answer:
			"Photos uploaded to Solve are processed by our machine vision pipeline to extract the math problem, then encrypted and stored temporarily so you can revisit your solutions. You can delete any individual problem image or all photo data at any time from your account settings. We do not use uploaded photos for any purpose beyond solving your math problems. We do not run facial recognition, extract metadata beyond what is needed for image processing, or share images with any third party.",
	},
	{
		value: "item-4",
		question: "How is my Progress and Concept Map data used?",
		answer:
			"Your progress tracking and Concept Map data are used exclusively to personalize your learning experience. For example, they help us recommend Practice drills at the right difficulty, identify knowledge gaps in your Concept Map, and help Newton tailor explanations to what you already understand. This data is never shared with third parties, and we never use it to build behavioral profiles for advertising. Schools see only aggregate progress, never individual Newton conversations.",
	},
	{
		value: "item-5",
		question: "What happens to my data if I delete my account?",
		answer:
			"When you delete your account, all your personal data, conversation history, problem submissions, and progress records are permanently removed from our primary systems immediately, and purged from all backups within 30 days. We do not retain anonymized versions of your data. Once deletion is complete, it cannot be reversed. We send you a confirmation email so you know it is done.",
	},
	{
		value: "item-6",
		question: "Is Zomath safe for users under 13?",
		answer:
			"Yes. Zomath complies with COPPA and offers a limited experience for users under 13 with verified parental consent. We collect only the minimum information necessary, disable social features for under-13 accounts, and provide parents with full visibility and control over their child's account, including the ability to review data and request deletion. No advertising is shown to any student accounts, regardless of age.",
	},
	{
		value: "item-7",
		question: "Does Zomath train AI models on my personal data?",
		answer:
			"No. We do not train our AI models on your personal conversations or problem submissions. Any model improvement uses only aggregated, anonymized data that cannot be traced back to individual users. You can opt out of even this anonymized aggregation in your privacy settings, and Newton will still work exactly the same for you.",
	},
	{
		value: "item-8",
		question: "How do I report a security vulnerability?",
		answer:
			"We appreciate responsible disclosure. If you discover a security vulnerability in Zomath, please email security@zomath.com with details. We acknowledge reports within 24 hours and aim to resolve critical issues within 72 hours. We also maintain a bug bounty program for qualifying findings, with rewards ranging from $100 to $5,000 depending on severity and impact. We ask that you do not publicly disclose the vulnerability until we have had a reasonable time to address it.",
	},
	{
		value: "item-9",
		question: "What third parties have access to my data?",
		answer:
			"Very few. We use a SOC 2 certified cloud provider for infrastructure hosting. We use an encrypted email service for transactional emails like password resets. We do not use analytics platforms that share data externally, no advertising SDKs, and no social login providers that track you across the web. Every sub-processor is listed in our privacy policy, and we notify users before adding new ones.",
	},
	{
		value: "item-10",
		question: "Can my school see my Newton conversations?",
		answer:
			"No. Even if your school provides your Zomath account, your Ask Newton conversations are private. Teachers and administrators can see aggregate progress data, like which topics you have practiced and your Concept Map completion, but they cannot read your individual chats with Newton. We believe students learn best when they can ask questions without fear of judgment, and privacy is essential for that.",
	},
];
