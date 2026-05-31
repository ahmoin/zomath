import {
	Bug02Icon,
	GraduationScrollIcon,
	HeadphonesIcon,
	LightbulbOffIcon,
} from "@hugeicons/core-free-icons";

export const contactReasons = [
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

export const whatHappensSteps = [
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

export const faqItems = [
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
