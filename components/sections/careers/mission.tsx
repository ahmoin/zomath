"use client";

import { BrainIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function Mission() {
	return (
		<section className="py-24 lg:py-32 bg-muted/50">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-3xl mx-auto text-center">
					<HugeiconsIcon
						icon={BrainIcon}
						className="size-12 text-primary mx-auto mb-6"
						strokeWidth={1.5}
					/>
					<h2 className="text-2xl lg:text-3xl font-medium tracking-tight mb-6">
						Math confidence changes everything
					</h2>
					<p className="text-lg text-muted-foreground leading-relaxed">
						When students truly understand math, doors open. College admissions,
						career options, problem-solving skills that last a lifetime. We're
						not just building an app, we're building the infrastructure for
						mathematical understanding at scale.
					</p>
				</div>
			</div>
		</section>
	);
}
