"use client";

import { ArrowRight02Icon, GraduationScrollIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Cta() {
	return (
		<section className="py-24 lg:py-32 bg-primary/5">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-2xl mx-auto text-center">
					<HugeiconsIcon
						icon={GraduationScrollIcon}
						className="size-10 text-primary mx-auto mb-6"
						strokeWidth={1.5}
					/>
					<h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
						Ready to finally get math?
					</h2>
					<p className="mt-4 text-muted-foreground text-lg leading-relaxed">
						Join thousands of students who stopped memorizing and started
						understanding. Zomath is free to start, no credit card required.
					</p>
					<div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
						<Button size="lg" asChild>
							<Link href="/sign-up">
								Create your free account
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-4 ml-1"
									strokeWidth={1.5}
								/>
							</Link>
						</Button>
						<Button size="lg" variant="outline" asChild>
							<Link href="/features">Explore features</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
