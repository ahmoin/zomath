"use client";

import { Mail01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/components/ui/button";

export function Newsletter() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-2xl mx-auto text-center">
					<div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
						<HugeiconsIcon icon={Mail01Icon} className="size-6 text-primary" strokeWidth={1.5} />
					</div>
					<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
						Stay in the loop
					</h2>
					<p className="mt-4 text-muted-foreground text-lg leading-relaxed">
						Get our best articles on math learning, product updates, and
						competition tips delivered to your inbox. No spam, just math.
					</p>
					<form
						onSubmit={(e) => e.preventDefault()}
						className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
					>
						<input
							type="email"
							placeholder="your@email.com"
							className="flex-1 px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
						/>
						<Button size="lg" className="rounded-xl whitespace-nowrap">
							Subscribe
						</Button>
					</form>
					<p className="mt-3 text-xs text-muted-foreground">
						Join 2,000+ students. Unsubscribe anytime.
					</p>
				</div>
			</div>
		</section>
	);
}
