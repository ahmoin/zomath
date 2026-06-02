"use client";

import { SparklesIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function Hero() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-3xl mx-auto text-center">
					<div className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-1.5 mb-6">
						<HugeiconsIcon
							icon={SparklesIcon}
							className="size-4 text-primary"
							strokeWidth={1.5}
						/>
						<span className="text-sm font-medium text-muted-foreground">
							Powered by Newton
						</span>
					</div>
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-6">
						Everything you need to master math
					</h1>
					<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
						Zomath is not another calculator or answer key. It is a complete
						learning platform built around one principle: genuine
						understanding. Here is what that looks like in practice.
					</p>
				</div>
			</div>
		</section>
	);
}
