"use client";

import {
	ArrowRight02Icon,
	GraduationScrollIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/components/ui/button";

export function Cta() {
	return (
		<section className="py-24 lg:py-32 bg-primary text-primary-foreground">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
						Ready to Transform Your Math Program?
					</h2>
					<p className="mb-8 text-lg opacity-90">
						Join the growing number of schools helping every student genuinely
						understand math. It starts with a conversation.
					</p>
					<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
						<Button
							size="lg"
							variant="secondary"
							className="gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
						>
							Schedule a Demo
							<HugeiconsIcon
								icon={ArrowRight02Icon}
								className="size-4"
								strokeWidth={1.5}
							/>
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
						>
							<HugeiconsIcon
								icon={GraduationScrollIcon}
								className="size-4"
								strokeWidth={1.5}
							/>
							View Case Studies
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
