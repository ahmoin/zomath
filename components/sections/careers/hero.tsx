"use client";

import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-3xl">
					<Badge variant="secondary" className="mb-6">
						We're hiring
					</Badge>
					<h1 className="text-4xl lg:text-6xl font-medium tracking-tight mb-6">
						Help us change how the world learns math
					</h1>
					<p className="text-xl text-muted-foreground leading-relaxed mb-8">
						Every day, millions of students struggle with math not because they
						can't learn, but because they're not being taught in a way that
						makes sense. We're building something better.
					</p>
					<div className="flex flex-wrap gap-4">
						<Button asChild size="lg">
							<Link href="#openings">
								View open positions
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-5"
									strokeWidth={1.5}
								/>
							</Link>
						</Button>
						<Button variant="outline" size="lg" asChild>
							<Link href="#culture">Our culture</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
