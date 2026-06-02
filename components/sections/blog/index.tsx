"use client";

import { useState } from "react";
import { categories, posts } from "@/components/sections/blog/data";
import { Cta } from "@/components/sections/blog/cta";
import { FeaturedPost } from "@/components/sections/blog/featured-post";
import { Hero } from "@/components/sections/blog/hero";
import { Newsletter } from "@/components/sections/blog/newsletter";
import { PostsGrid } from "@/components/sections/blog/posts-grid";
import { TopicCards } from "@/components/sections/blog/topic-cards";

export function BlogSection() {
	const [activeCategory, setActiveCategory] = useState("all");
	const [searchQuery, setSearchQuery] = useState("");

	const featuredPost = posts.find((p) => p.featured);
	const showFeatured = activeCategory === "all" && searchQuery === "";

	const filteredPosts = posts.filter((post) => {
		const matchesCategory = activeCategory === "all" || post.category === activeCategory;
		const matchesSearch =
			searchQuery === "" ||
			post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
		return matchesCategory && matchesSearch;
	});

	const gridPosts = showFeatured ? filteredPosts.filter((p) => !p.featured) : filteredPosts;

	return (
		<main>
			<Hero searchQuery={searchQuery} onSearchChange={setSearchQuery} />
			{showFeatured && featuredPost && <FeaturedPost post={featuredPost} />}
			<PostsGrid
				gridPosts={gridPosts}
				categories={categories}
				activeCategory={activeCategory}
				onCategoryChange={setActiveCategory}
			/>
			<TopicCards onCategorySelect={setActiveCategory} />
			<Newsletter />
			<Cta />
		</main>
	);
}
