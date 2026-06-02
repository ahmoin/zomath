"use client";

import { Download04Icon, Mail02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-3xl">
					<p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">
						Press & Media
					</p>
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]">
						The story behind how we make math make sense
					</h1>
					<p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
						Zomath helps students genuinely understand mathematics, not just
						get answers. Powered by an AI tutor named Newton, we are building
						a world where every learner can build real conceptual mastery at
						their own pace.
					</p>
					<div className="mt-8 flex flex-wrap gap-3">
						<Button asChild size="lg">
							<a href="mailto:press@zomath.com">
								<HugeiconsIcon
									icon={Mail02Icon}
									className="size-5 mr-2"
									strokeWidth={1.5}
								/>
								Contact Press Team
							</a>
						</Button>
						<Button asChild variant="outline" size="lg">
							<Link href="#press-kit">
								<HugeiconsIcon
									icon={Download04Icon}
									className="size-5 mr-2"
									strokeWidth={1.5}
								/>
								Download Press Kit
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
