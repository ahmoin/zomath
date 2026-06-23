"use client";

import {
	ArrowRight02Icon,
	CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Cta() {
	return (
		<section className="py-24 lg:py-32 bg-muted/30">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-3xl text-center mx-auto">
					<div className="inline-flex items-center justify-center size-16 rounded-2xl bg-primary/10 mb-6">
						<HugeiconsIcon
							icon={CheckmarkCircle02Icon}
							className="size-8 text-primary"
							strokeWidth={1.5}
						/>
					</div>
					<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
						You are always in control.
					</h2>
					<p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
						Your learning journey is yours. Zomath uses your data to teach you
						better, not to profile you, advertise to you, or sell your
						information. If you ever want to review, download, or delete your
						data, we make it straightforward.
					</p>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<Button asChild size="lg">
							<Link href="/sign-up">
								Start learning with Newton
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-4 ml-1.5"
									strokeWidth={1.5}
								/>
							</Link>
						</Button>
						<Button asChild variant="outline" size="lg">
							<Link href="/terms">View our Terms of Service</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
