"use client";

import {
	BubbleChatIcon,
	Download04Icon,
	Link01Icon,
	Mail02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Cta() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-2xl mx-auto text-center">
					<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
						Other ways to reach us
					</h2>
					<p className="text-muted-foreground leading-relaxed mb-8">
						For non-press inquiries, here are the right channels to get in
						touch.
					</p>
					<div className="inline-flex flex-col gap-1 p-6 rounded-xl border border-border bg-muted/30 text-left">
						<p className="text-sm font-medium text-foreground mb-3">
							Contact by department
						</p>
						<div className="space-y-2 text-sm text-muted-foreground">
							<p className="flex items-center gap-2">
								<HugeiconsIcon
									icon={BubbleChatIcon}
									className="size-4 text-primary"
									strokeWidth={1.5}
								/>
								Student support:{" "}
								<a
									href="mailto:help@zomath.com"
									className="text-primary hover:underline"
								>
									help@zomath.com
								</a>
							</p>
							<p className="flex items-center gap-2">
								<HugeiconsIcon
									icon={Link01Icon}
									className="size-4 text-primary"
									strokeWidth={1.5}
								/>
								Partnerships:{" "}
								<a
									href="mailto:partners@zomath.com"
									className="text-primary hover:underline"
								>
									partners@zomath.com
								</a>
							</p>
							<p className="flex items-center gap-2">
								<HugeiconsIcon
									icon={Mail02Icon}
									className="size-4 text-primary"
									strokeWidth={1.5}
								/>
								General:{" "}
								<a
									href="mailto:hello@zomath.com"
									className="text-primary hover:underline"
								>
									hello@zomath.com
								</a>
							</p>
						</div>
					</div>
					<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
						<Button asChild variant="outline" size="lg">
							<a href="mailto:press@zomath.com">
								<HugeiconsIcon
									icon={Mail02Icon}
									className="size-5 mr-2"
									strokeWidth={1.5}
								/>
								Email Press Team
							</a>
						</Button>
						<Button asChild variant="outline" size="lg">
							<Link href="#press-kit">
								<HugeiconsIcon
									icon={Download04Icon}
									className="size-5 mr-2"
									strokeWidth={1.5}
								/>
								Get Press Kit
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
