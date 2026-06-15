import {
	ArtboardIcon,
	Camera01Icon,
	Cancel01Icon,
	Chart02Icon,
	Edit02Icon,
	HeadphonesIcon,
	ImageUploadIcon,
	Mail01Icon,
	ReloadIcon,
	Settings02Icon,
	Tap01Icon,
	Target03Icon,
	User02Icon,
} from "@hugeicons/core-free-icons";

export const quickStartSteps = [
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

export const browseCategories = [
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

export const featureHelp = [
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

export const troubleshootItems = [
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

export const powerUserTips = [
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

export const faqItems = [
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

export const contactOptions = [
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
