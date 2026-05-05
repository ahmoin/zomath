"use client";

import {
	ArrowRight02Icon,
	BookOpen02Icon,
	Brain02Icon,
	Calendar02Icon,
	Camera02Icon,
	Clock01Icon,
	Mail01Icon,
	Rocket02Icon,
	Search01Icon,
	SparklesIcon,
	Target03Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const categories = [
	{ id: "all", label: "All Posts" },
	{ id: "learning-tips", label: "Learning Tips" },
	{ id: "product", label: "Product Updates" },
	{ id: "competition", label: "Competition Math" },
	{ id: "deep-dives", label: "Deep Dives" },
	{ id: "study-strategies", label: "Study Strategies" },
];

const posts = [
	{
		slug: "release",
		title: "release",
		excerpt:
			"Release",
		category: "deep-dives",
		date: "2026-05-05",
		readTime: "8 min read",
		featured: true,
		icon: Brain02Icon,
	},
];

const topicCards = [
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

function formatDate(dateStr: string): string {
	return new Date(dateStr).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}

export default function BlogPage() {
	const [activeCategory, setActiveCategory] = useState("all");
	const [searchQuery, setSearchQuery] = useState("");

	const featuredPost = posts.find((p) => p.featured);

	const filteredPosts = posts.filter((post) => {
		const matchesCategory =
			activeCategory === "all" || post.category === activeCategory;
		const matchesSearch =
			searchQuery === "" ||
			post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
		return matchesCategory && matchesSearch;
	});

	const showFeatured = activeCategory === "all" && searchQuery === "";

	const gridPosts = showFeatured
		? filteredPosts.filter((p) => !p.featured)
		: filteredPosts;

	return (
		<main>
			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-3xl">
						<div className="flex items-center gap-2 mb-6">
							<HugeiconsIcon
								icon={SparklesIcon}
								className="size-5 text-primary"
								strokeWidth={1.5}
							/>
							<span className="text-sm font-medium text-primary">
								Zomath Blog
							</span>
						</div>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]">
							Learn better, think deeper
						</h1>
						<p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
							Insights on math learning, AI-powered education, competition prep,
							and the ideas shaping how students understand mathematics.
						</p>
					</div>
					<div className="mt-10 max-w-xl">
						<div className="relative">
							<HugeiconsIcon
								icon={Search01Icon}
								className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground"
								strokeWidth={1.5}
							/>
							<input
								type="text"
								placeholder="Search articles..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
							/>
						</div>
					</div>
				</div>
			</section>

			{showFeatured && featuredPost && (
				<section className="pb-16">
					<div className="max-w-7xl mx-auto px-4 lg:px-12">
						<Link href={`/blog/${featuredPost.slug}`} className="group block">
							<div className="grid lg:grid-cols-2 gap-0 rounded-2xl border border-border bg-muted/30 overflow-hidden">
								<div className="aspect-video lg:aspect-auto bg-primary/5 flex items-center justify-center min-h-[240px]">
									<HugeiconsIcon
										icon={featuredPost.icon}
										className="size-16 text-primary/30"
										strokeWidth={1.5}
									/>
								</div>
								<div className="p-8 lg:p-12 flex flex-col justify-center">
									<div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
										<span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-xs">
											Featured
										</span>
										<span className="capitalize">
											{featuredPost.category.replace("-", " ")}
										</span>
									</div>
									<h2 className="text-2xl lg:text-3xl font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
										{featuredPost.title}
									</h2>
									<p className="mt-4 text-muted-foreground leading-relaxed">
										{featuredPost.excerpt}
									</p>
									<div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
										<span className="flex items-center gap-1.5">
											<HugeiconsIcon
												icon={Calendar02Icon}
												className="size-4"
												strokeWidth={1.5}
											/>
											{formatDate(featuredPost.date)}
										</span>
										<span className="flex items-center gap-1.5">
											<HugeiconsIcon
												icon={Clock01Icon}
												className="size-4"
												strokeWidth={1.5}
											/>
											{featuredPost.readTime}
										</span>
									</div>
									<div className="mt-6">
										<span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
											Read article
											<HugeiconsIcon
												icon={ArrowRight02Icon}
												className="size-4"
												strokeWidth={1.5}
											/>
										</span>
									</div>
								</div>
							</div>
						</Link>
					</div>
				</section>
			)}

			<section className="py-16 lg:py-24">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="flex flex-wrap gap-2 mb-12">
						{categories.map((cat) => (
							<button
								key={cat.id}
								type="button"
								onClick={() => setActiveCategory(cat.id)}
								className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
									activeCategory === cat.id
										? "bg-primary text-primary-foreground"
										: "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
								}`}
							>
								{cat.label}
							</button>
						))}
					</div>

					{gridPosts.length === 0 ? (
						<div className="text-center py-20">
							<HugeiconsIcon
								icon={Search01Icon}
								className="size-12 text-muted-foreground/40 mx-auto mb-4"
								strokeWidth={1.5}
							/>
							<p className="text-lg text-muted-foreground">
								No articles found. Try a different search or category.
							</p>
						</div>
					) : (
						<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{gridPosts.map((post) => (
								<Link
									key={post.slug}
									href={`/blog/${post.slug}`}
									className="group"
								>
									<article className="h-full rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-colors">
										<div className="aspect-video bg-muted/50 flex items-center justify-center">
											<HugeiconsIcon
												icon={post.icon}
												className="size-10 text-muted-foreground/30"
												strokeWidth={1.5}
											/>
										</div>
										<div className="p-6">
											<div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
												<span className="capitalize">
													{post.category.replace("-", " ")}
												</span>
												<span aria-hidden="true">&middot;</span>
												<span>{post.readTime}</span>
											</div>
											<h3 className="font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
												{post.title}
											</h3>
											<p className="mt-2 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
												{post.excerpt}
											</p>
											<div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
												<HugeiconsIcon
													icon={Calendar02Icon}
													className="size-3.5"
													strokeWidth={1.5}
												/>
												{formatDate(post.date)}
											</div>
										</div>
									</article>
								</Link>
							))}
						</div>
					)}
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-muted/30">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mb-12">
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
							Topics we cover
						</h2>
						<p className="mt-4 text-muted-foreground text-lg leading-relaxed">
							Whether you are looking for study tips, product news, or deep
							mathematical explorations, we have something for you.
						</p>
					</div>
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{topicCards.map((topic) => (
							<button
								key={topic.title}
								type="button"
								onClick={() => {
									setActiveCategory(topic.categoryId);
									window.scrollTo({ top: 0, behavior: "smooth" });
								}}
								className="text-left p-6 rounded-xl border border-border bg-background hover:border-primary/30 transition-colors group"
							>
								<div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
									<HugeiconsIcon
										icon={topic.icon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
									{topic.title}
								</h3>
								<p className="mt-2 text-sm text-muted-foreground leading-relaxed">
									{topic.description}
								</p>
								<p className="mt-3 text-xs text-muted-foreground">
									{topic.postCount} article{topic.postCount !== 1 ? "s" : ""}
								</p>
							</button>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-2xl mx-auto text-center">
						<div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
							<HugeiconsIcon
								icon={Mail01Icon}
								className="size-6 text-primary"
								strokeWidth={1.5}
							/>
						</div>
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
							Stay in the loop
						</h2>
						<p className="mt-4 text-muted-foreground text-lg leading-relaxed">
							Get our best articles on math learning, product updates, and
							competition tips delivered to your inbox. No spam, just math.
						</p>
						<form
							onSubmit={(e) => e.preventDefault()}
							className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
						>
							<input
								type="email"
								placeholder="your@email.com"
								className="flex-1 px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
							/>
							<Button size="lg" className="rounded-xl whitespace-nowrap">
								Subscribe
							</Button>
						</form>
						<p className="mt-3 text-xs text-muted-foreground">
							Join 2,000+ students. Unsubscribe anytime.
						</p>
					</div>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-primary/5">
				<div className="max-w-7xl mx-auto px-4 lg:px-12 text-center">
					<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
						Ready to learn math differently?
					</h2>
					<p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
						Start for free and see how Newton, Concept Maps, and targeted
						practice can change the way you understand math.
					</p>
					<div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
						<Link href="/sign-up">
							<Button size="lg" className="rounded-xl">
								Get started free
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-4 ml-2"
									strokeWidth={1.5}
								/>
							</Button>
						</Link>
						<Link href="/ask">
							<Button size="lg" variant="outline" className="rounded-xl">
								Try Newton
							</Button>
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
