import {
	Analytics01Icon,
	Book02Icon,
	BrainIcon,
	Camera01Icon,
	ChartLineData02Icon,
	Clock01Icon,
	PlayCircleIcon,
	PuzzleIcon,
	ShieldKeyIcon,
	Target03Icon,
	TaskDaily01Icon,
	UserMultipleIcon,
} from "@hugeicons/core-free-icons";

export const stats = [
	{ value: "2.3x", label: "Faster concept mastery" },
	{ value: "85%", label: "Students report deeper understanding" },
	{ value: "12 hrs", label: "Teacher prep time saved weekly" },
	{ value: "500+", label: "Schools across 38 states" },
];

export const features = [
	{
		icon: UserMultipleIcon,
		title: "Differentiated Learning at Scale",
		description:
			"Newton adapts to each student's pace and understanding in real time. Advanced students get challenged while struggling learners get the foundational support they need, all from the same classroom.",
	},
	{
		icon: ChartLineData02Icon,
		title: "Real-Time Progress Analytics",
		description:
			"Track class-wide trends and individual progress with detailed dashboards. Spot gaps early, identify patterns across sections, and celebrate breakthroughs the moment they happen.",
	},
	{
		icon: ShieldKeyIcon,
		title: "Curriculum Aligned from Day One",
		description:
			"Content aligned with Common Core, state standards, and popular textbooks including Big Ideas Math, Eureka Math, and Illustrative Mathematics. Zomath integrates with your curriculum, not against it.",
	},
	{
		icon: Clock01Icon,
		title: "Save Hours Every Week",
		description:
			"Generate targeted practice sets, quizzes, and homework in minutes. Newton handles the repetitive explanation and differentiation so you can focus on the parts of teaching that matter most.",
	},
];

export const studentFeatures = [
	{
		icon: Camera01Icon,
		title: "Solve",
		description:
			"Students snap a photo of any problem and Newton walks them through it step by step, asking guiding questions instead of giving away answers.",
	},
	{
		icon: BrainIcon,
		title: "Ask Newton",
		description:
			"A conversational AI tutor that remembers where each student struggled last time. Newton explains concepts in multiple ways until something clicks.",
	},
	{
		icon: PuzzleIcon,
		title: "Concept Map",
		description:
			"Students see their personal map of mathematical understanding, including which prerequisites are strong and which need reinforcement before moving forward.",
	},
	{
		icon: Target03Icon,
		title: "Practice",
		description:
			"Targeted drills that adapt difficulty in real time. Every problem is chosen to address the specific gaps that student has, not generic worksheets.",
	},
];

export const educatorTools = [
	{
		icon: Analytics01Icon,
		title: "Teacher Dashboard",
		description:
			"Monitor all your classes from one interface. See who's struggling, who's excelling, and where the class needs more support, updated in real time as students work.",
	},
	{
		icon: TaskDaily01Icon,
		title: "Smart Assignments",
		description:
			"Create assignments that automatically adjust difficulty based on each student's performance. Set it once and Zomath handles the differentiation for every learner.",
	},
	{
		icon: PuzzleIcon,
		title: "Concept Map Insights",
		description:
			"Visualize student understanding across prerequisite concepts at a glance. Spot gaps before they become obstacles to new material, for individuals or the whole class.",
	},
	{
		icon: PlayCircleIcon,
		title: "Live Session Mode",
		description:
			"Use Zomath during class for interactive problem solving. Newton works alongside you as a teaching assistant, providing hints and alternate explanations while you lead.",
	},
];

export const integrations = [
	"Google Classroom",
	"Canvas",
	"Schoology",
	"Clever",
	"ClassLink",
	"Google SSO",
	"Microsoft SSO",
];

export const complianceBadges = [
	{
		icon: ShieldKeyIcon,
		label: "COPPA Compliant",
		description: "Full compliance with children's online privacy requirements.",
	},
	{
		icon: Book02Icon,
		label: "FERPA Compliant",
		description:
			"Student education records handled with strict FERPA standards.",
	},
	{
		icon: ShieldKeyIcon,
		label: "SOC 2 Type II",
		description: "Independently audited security and data handling practices.",
	},
];

export const implementationSteps = [
	{
		step: "01",
		title: "Schedule a Demo",
		description:
			"See Zomath in action with a personalized walkthrough for your math department or administrative team. We tailor the session to your school's specific needs.",
	},
	{
		step: "02",
		title: "Pilot Program",
		description:
			"Start with a 4-week pilot in select classrooms. We provide training materials, set up your LMS integration, and offer dedicated support throughout.",
	},
	{
		step: "03",
		title: "School-Wide Rollout",
		description:
			"Expand to your full school with onboarding sessions for every teacher and student. We handle roster sync, LMS setup, and the heavy lifting.",
	},
	{
		step: "04",
		title: "Ongoing Partnership",
		description:
			"Regular check-ins, data reviews, training updates, and a dedicated success manager. We treat your outcomes as our outcomes.",
	},
];

export const testimonials = [
	{
		quote:
			"We had students who hadn't passed a math test all year suddenly explaining concepts to their classmates. Newton gave them the confidence to engage with material they'd been avoiding.",
		author: "Dr. Sarah Chen",
		role: "Math Department Chair",
		school: "Lincoln High School, Portland",
	},
	{
		quote:
			"The analytics alone are worth it. I can see exactly where each student is struggling and adjust my lessons accordingly. It's like having a teaching assistant for every period.",
		author: "Marcus Williams",
		role: "Algebra II Teacher",
		school: "Riverside Academy, Austin",
	},
	{
		quote:
			"We piloted three math platforms last year. Zomath was the only one students actually asked to keep using. That told us everything we needed to know about which one works.",
		author: "Janet Rodriguez",
		role: "Principal",
		school: "Westfield Middle School, Denver",
	},
];

export const pricingTiers = [
	{
		name: "Classroom",
		target: "Individual Teachers",
		price: "Free trial, then contact us",
		features: [
			"Up to 35 students",
			"Full Newton AI tutor access",
			"Basic analytics dashboard",
			"Email support",
			"Self-service onboarding",
		],
		cta: "Start Free Trial",
		highlighted: false,
	},
	{
		name: "School",
		target: "Single School",
		price: "Custom pricing",
		features: [
			"Unlimited students",
			"Advanced analytics and reporting",
			"LMS integration (Canvas, Schoology, Google Classroom)",
			"Priority support with live chat",
			"Dedicated onboarding session",
			"Admin controls and school-wide settings",
			"Concept Map aggregate insights",
		],
		cta: "Request Quote",
		highlighted: true,
	},
	{
		name: "District",
		target: "School Districts",
		price: "Custom pricing",
		features: [
			"Multiple schools under one license",
			"District-wide analytics and comparison",
			"Clever and ClassLink integration",
			"Dedicated success manager",
			"Custom professional development sessions",
			"API access for custom integrations",
			"SIS integration and auto-rostering",
			"Data sharing agreements",
		],
		cta: "Contact Sales",
		highlighted: false,
	},
];

export const faqs = [
	{
		question: "How long does implementation typically take?",
		answer:
			"Most schools are fully up and running within 2 to 3 weeks. This includes account setup, LMS integration if needed, and teacher training sessions. Our onboarding process has been refined across hundreds of school deployments to minimize disruption to your schedule.",
	},
	{
		question: "Does Zomath replace teachers?",
		answer:
			"Not at all. Zomath is built to amplify what teachers do best. Newton handles the repetitive work of explaining concepts multiple ways and generating differentiated practice, freeing teachers to focus on meaningful interactions, complex problem solving, and the human elements of teaching that no AI can replicate. Teachers tell us they feel more effective, not less needed.",
	},
	{
		question: "What grade levels and math subjects does Zomath cover?",
		answer:
			"Zomath currently covers Pre-Algebra through Calculus, including Geometry, Statistics, AP courses, and competition math preparation. We align with Common Core and major state standards, and we're continuously expanding our content based on partner school feedback.",
	},
	{
		question: "How do you handle student data and privacy?",
		answer:
			"Student privacy is foundational to everything we build. Zomath is COPPA and FERPA compliant, and we're SOC 2 Type II certified. We never sell data, we use it only to improve each student's learning experience, and we offer data deletion on request. We're happy to sign school-specific data processing agreements and comply with state privacy laws like SOPIPA and CALEDPA.",
	},
	{
		question: "Can Zomath integrate with our existing systems?",
		answer:
			"Yes. We integrate with Google Classroom, Canvas, Schoology, Clever, and ClassLink out of the box. For district partners, we offer SIS integration and SSO via Google, Microsoft, or Clever. If you use a system not listed here, ask us. We add new integrations regularly based on partner requests.",
	},
	{
		question: "What kind of support do you offer during and after rollout?",
		answer:
			"All plans include email support with a 24-hour response time. School and District plans include priority support with live chat and a dedicated success manager who meets with your team regularly. We also offer optional professional development sessions tailored to your math department's needs.",
	},
	{
		question: "How does Newton differ from other AI math tools?",
		answer:
			"Most AI math tools give students answers. Newton is built to help students genuinely understand. When a student asks for help, Newton asks guiding questions, offers multiple explanation approaches, and identifies the prerequisite concepts the student might be missing. It's a tutor, not an answer key. Teachers can see every interaction Newton has with their students.",
	},
	{
		question: "What does the pilot program look like?",
		answer:
			"The standard pilot is 4 weeks in 2 to 4 classrooms. We provide full feature access, set up your LMS integration, train participating teachers, and collect data on student engagement and outcomes. At the end, you receive a detailed report and a clear recommendation on next steps. There's no obligation to continue.",
	},
];
