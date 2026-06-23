"use client";

import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { browseCategories } from "@/components/sections/help/data";

export function Browse() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
						Browse by topic
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Jump straight to the guide you need. Each section covers a different
						part of the Zomath experience.
					</p>
				</div>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{browseCategories.map((category) => (
						<Link
							key={category.title}
							href={category.href}
							className="group p-5 rounded-2xl border bg-card hover:border-primary/30 transition-colors"
						>
							<div className="flex items-start gap-4">
								<div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
									<HugeiconsIcon
										icon={category.icon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<div className="min-w-0">
									<div className="flex items-center gap-1.5 mb-1">
										<h3 className="text-base font-semibold text-foreground">
											{category.title}
										</h3>
										<HugeiconsIcon
											icon={ArrowRight02Icon}
											className="size-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all"
											strokeWidth={1.5}
										/>
									</div>
									<p className="text-sm text-muted-foreground leading-relaxed">
										{category.description}
									</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
