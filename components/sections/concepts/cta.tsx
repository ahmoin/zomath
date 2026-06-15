"use client";

import { ArrowRight02Icon, Tap02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Cta() {
	return (
		<section className="py-24 lg:py-32 bg-muted/30">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-3xl mx-auto text-center">
					<div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
						<HugeiconsIcon
							icon={Tap02Icon}
							className="size-8 text-primary"
							strokeWidth={1.5}
						/>
					</div>
					<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
						Stop memorizing. Start connecting.
					</h2>
					<p className="text-lg text-muted-foreground leading-relaxed mb-8">
						The Concept Map is free to explore. Create your account and see
						the entire landscape of mathematics laid out before you. Your
						journey to genuine understanding starts with a single node.
					</p>
					<div className="flex flex-col sm:flex-row gap-3 justify-center">
						<Button size="lg" asChild>
							<Link href="/sign-up">
								Get started for free
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-4 ml-1"
									strokeWidth={1.5}
								/>
							</Link>
						</Button>
						<Button variant="outline" size="lg" asChild>
							<Link href="/ask">Ask Newton a question</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
