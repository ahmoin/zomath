"use client";

import {
	ArrowRight02Icon,
	Calendar02Icon,
	Clock01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { formatDate } from "@/components/sections/blog/data";
import type { posts } from "@/components/sections/blog/data";

type Post = (typeof posts)[number];

interface FeaturedPostProps {
	post: Post;
}

export function FeaturedPost({ post }: FeaturedPostProps) {
	return (
		<section className="pb-16">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<Link href={`/blog/${post.slug}`} className="group block">
					<div className="grid lg:grid-cols-2 gap-0 rounded-2xl border border-border bg-muted/30 overflow-hidden">
						<div className="aspect-video lg:aspect-auto bg-primary/5 flex items-center justify-center min-h-[240px]">
							<HugeiconsIcon
								icon={post.icon}
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
									{post.category.replace("-", " ")}
								</span>
							</div>
							<h2 className="text-2xl lg:text-3xl font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
								{post.title}
							</h2>
							<p className="mt-4 text-muted-foreground leading-relaxed">
								{post.excerpt}
							</p>
							<div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
								<span className="flex items-center gap-1.5">
									<HugeiconsIcon
										icon={Calendar02Icon}
										className="size-4"
										strokeWidth={1.5}
									/>
									{formatDate(post.date)}
								</span>
								<span className="flex items-center gap-1.5">
									<HugeiconsIcon
										icon={Clock01Icon}
										className="size-4"
										strokeWidth={1.5}
									/>
									{post.readTime}
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
	);
}
