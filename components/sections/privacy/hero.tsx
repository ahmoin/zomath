"use client";

import { MobileProtectionIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function Hero() {
	return (
		<section className="py-24 lg:py-32 relative overflow-hidden">
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-primary)/5%_0%,_transparent_60%)]" />
			<div className="max-w-7xl mx-auto px-4 lg:px-12 relative">
				<div className="max-w-3xl">
					<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary mb-6">
						<HugeiconsIcon
							icon={MobileProtectionIcon}
							className="size-4"
							strokeWidth={1.5}
						/>
						<span className="text-sm font-medium">Privacy Policy</span>
					</div>
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight">
						Your learning data belongs to you.
					</h1>
					<p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
						Zomath exists to help you understand math more deeply, and that
						requires trust. This policy explains what data we collect, why we
						collect it, how we protect it, and the control you always have
						over your information.
					</p>
					<div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
						<span>Effective date: May 5, 2026</span>
						<span className="size-1 rounded-full bg-muted-foreground/40" />
						<span>Last updated: May 5, 2026</span>
					</div>
				</div>
			</div>
		</section>
	);
}
