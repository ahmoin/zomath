"use client";

import { ArrowRight02Icon, Tap02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-3xl mx-auto text-center">
					<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border bg-muted/50 text-sm text-muted-foreground mb-6">
						<HugeiconsIcon
							icon={Tap02Icon}
							className="size-4"
							strokeWidth={1.5}
						/>
						Concept Map
					</div>
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
						See how every math concept connects
					</h1>
					<p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
						Math is not a list of topics to check off. It is a web of ideas
						that build on each other. Zomath's Concept Map reveals the hidden
						structure behind everything you learn, so you never study in
						isolation again.
					</p>
					<div className="flex flex-col sm:flex-row gap-3 justify-center">
						<Button size="lg" asChild>
							<Link href="/sign-up">
								Explore the map
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-4 ml-1"
									strokeWidth={1.5}
								/>
							</Link>
						</Button>
						<Button variant="outline" size="lg" asChild>
							<Link href="/demo">Watch a demo</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
