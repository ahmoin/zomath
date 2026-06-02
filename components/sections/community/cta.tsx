"use client";

import { ArrowRight02Icon, Rocket02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Cta() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="rounded-2xl bg-primary/5 border p-12 lg:p-16 text-center">
					<HugeiconsIcon
						icon={Rocket02Icon}
						className="size-10 text-primary mx-auto mb-6"
						strokeWidth={1.5}
					/>
					<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
						Ready to find your math people?
					</h2>
					<p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto mb-8">
						Join thousands of learners who are making math social, supportive,
						and genuinely fun. Your next breakthrough is waiting.
					</p>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
						<Button size="lg" variant="outline" asChild>
							<Link href="/community/explore">Explore community</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
