"use client";

import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Cta() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12 lg:p-16 text-center">
					<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
						Start understanding math today
					</h2>
					<p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
						Join thousands of students who are learning math the right way.
						Not by memorizing, but by truly understanding.
					</p>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<Link href="/pricing">
							<Button size="lg" className="group">
								Get started free
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-4 ml-1 group-hover:translate-x-0.5 transition-transform"
									strokeWidth={1.5}
								/>
							</Button>
						</Link>
						<Link href="/solve">
							<Button variant="outline" size="lg">
								Try Solve
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
