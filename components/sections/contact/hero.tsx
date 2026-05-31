"use client";

import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-2xl">
					<div className="flex items-center gap-2 mb-6">
						<div className="size-2 rounded-full bg-primary" />
						<span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
							Contact
						</span>
					</div>
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
						We are here to help
					</h1>
					<p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-8">
						Newton can answer your math questions any time, day or night. For
						everything else, account issues, feedback, partnerships, our human
						team is ready. We typically respond within 24 hours.
					</p>
					<div className="flex flex-wrap items-center gap-3">
						<Button asChild>
							<Link href="#contact-form">
								Send a message
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-4 ml-2"
									strokeWidth={1.5}
								/>
							</Link>
						</Button>
						<Button variant="outline" asChild>
							<Link href="/help">Browse help center</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
