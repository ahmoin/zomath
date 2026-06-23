"use client";

import { ArrowRight02Icon, UserMultipleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-3xl mx-auto text-center">
					<div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground mb-8">
						<HugeiconsIcon
							icon={UserMultipleIcon}
							className="size-4"
							strokeWidth={1.5}
						/>
						<span>12,000+ learners and growing</span>
					</div>
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-6">
						Learn math better, <span className="text-primary">together</span>
					</h1>
					<p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-10">
						Math is not a solo sport. Join a community of curious learners who
						help each other understand deeply, celebrate breakthroughs, and make
						the hard parts a little less lonely.
					</p>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<Button size="lg" asChild>
							<Link href="/sign-up">
								Join the community
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-4 ml-1"
									strokeWidth={1.5}
								/>
							</Link>
						</Button>
						<Button size="lg" variant="outline" asChild>
							<Link href="/community/guidelines">Read our guidelines</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
