"use client";

import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-3xl">
					<p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">
						For students
					</p>
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
						Stop memorizing.
						<br />
						Start understanding.
					</h1>
					<p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
						Zomath does not give you shortcuts or copied answers. Newton, your
						AI tutor, helps you build real understanding so you can walk into
						any exam knowing you get it, not just remember it.
					</p>
					<div className="mt-8 flex flex-col sm:flex-row gap-3">
						<Button size="lg" asChild>
							<Link href="/sign-up">
								Start learning for free
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-4 ml-1"
									strokeWidth={1.5}
								/>
							</Link>
						</Button>
						<Button size="lg" variant="outline" asChild>
							<Link href="/features">See how it works</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
