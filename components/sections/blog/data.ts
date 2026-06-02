import { Brain02Icon, Rocket02Icon } from "@hugeicons/core-free-icons";

export const categories = [
	{ id: "all", label: "All Posts" },
	{ id: "learning-tips", label: "Learning Tips" },
	{ id: "product", label: "Product Updates" },
	{ id: "competition", label: "Competition Math" },
	{ id: "deep-dives", label: "Deep Dives" },
	{ id: "study-strategies", label: "Study Strategies" },
];

export const posts = [
	{
		slug: "release",
		title: "release",
		excerpt: "Release",
		category: "deep-dives",
		date: "2026-05-05",
		readTime: "8 min read",
		featured: true,
		icon: Brain02Icon,
	},
];

export const topicCards = [
	{
		title: "Learning Tips",
		description:
			"Practical strategies for studying math more effectively and avoiding common pitfalls.",
		icon: Brain02Icon,
		postCount: 3,
		categoryId: "learning-tips",
	},
	{
		title: "Product Updates",
		description:
			"New features, improvements, and behind-the-scenes looks at how Zomath works.",
		icon: Rocket02Icon,
		postCount: 4,
		categoryId: "product",
	},
	{
		title: "Competition Math",
		description:
			"Preparation guides, strategies, and insights for AMC, AIME, and beyond.",
		icon: Brain02Icon,
		postCount: 2,
		categoryId: "competition",
	},
	{
		title: "Deep Dives",
		description:
			"In-depth explorations of mathematical concepts, AI in education, and learning science.",
		icon: Brain02Icon,
		postCount: 2,
		categoryId: "deep-dives",
	},
];

export function formatDate(dateStr: string): string {
	return new Date(dateStr).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}
