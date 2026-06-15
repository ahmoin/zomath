"use client";

import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Contact() {
	return (
		<section className="pb-24 lg:pb-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="text-center max-w-2xl mx-auto">
					<h2 className="text-2xl font-semibold tracking-tight text-foreground mb-3">
						Questions About Reliability?
					</h2>
					<p className="text-muted-foreground leading-relaxed mb-6">
						If you are experiencing an issue not listed here, or if you have
						questions about our infrastructure and reliability practices, we
						are here to help.
					</p>
					<div className="flex items-center justify-center gap-3">
						<Button asChild>
							<Link href="/contact" className="gap-2">
								Contact Support
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-4"
									strokeWidth={1.5}
								/>
							</Link>
						</Button>
						<Button variant="outline" asChild>
							<Link href="/help">Help Center</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
