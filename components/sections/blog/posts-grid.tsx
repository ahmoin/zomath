"use client";

import { Calendar02Icon, Search01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { formatDate } from "@/components/sections/blog/data";
import type { categories, posts } from "@/components/sections/blog/data";

type Post = (typeof posts)[number];
type Category = (typeof categories)[number];

interface PostsGridProps {
	gridPosts: Post[];
	categories: Category[];
	activeCategory: string;
	onCategoryChange: (id: string) => void;
}

export function PostsGrid({ gridPosts, categories, activeCategory, onCategoryChange }: PostsGridProps) {
	return (
		<section className="py-16 lg:py-24">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="flex flex-wrap gap-2 mb-12">
					{categories.map((cat) => (
						<button
							key={cat.id}
							type="button"
							onClick={() => onCategoryChange(cat.id)}
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
						<HugeiconsIcon icon={Search01Icon} className="size-12 text-muted-foreground/40 mx-auto mb-4" strokeWidth={1.5} />
						<p className="text-lg text-muted-foreground">
							No articles found. Try a different search or category.
						</p>
					</div>
				) : (
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{gridPosts.map((post) => (
							<Link key={post.slug} href={`/blog/${post.slug}`} className="group">
								<article className="h-full rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-colors">
									<div className="aspect-video bg-muted/50 flex items-center justify-center">
										<HugeiconsIcon icon={post.icon} className="size-10 text-muted-foreground/30" strokeWidth={1.5} />
									</div>
									<div className="p-6">
										<div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
											<span className="capitalize">{post.category.replace("-", " ")}</span>
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
											<HugeiconsIcon icon={Calendar02Icon} className="size-3.5" strokeWidth={1.5} />
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
	);
}
