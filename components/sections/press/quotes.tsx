"use client";

import { QuoteDownIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Separator } from "@/components/ui/separator";
import { quotes } from "@/components/sections/press/data";

export function Quotes() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-2xl mx-auto text-center mb-16">
					<HugeiconsIcon
						icon={QuoteDownIcon}
						className="size-10 text-primary mx-auto mb-6"
						strokeWidth={1.5}
					/>
					<blockquote className="text-2xl md:text-3xl font-medium text-foreground tracking-tight leading-snug">
						We do not want to build a faster calculator. We want to build a
						world where every student can look at a math problem and actually
						understand what is happening.
					</blockquote>
					<div className="mt-6">
						<p className="font-medium text-foreground">Elena Vasquez</p>
						<p className="text-sm text-muted-foreground">
							Co-founder and CEO of Zomath
						</p>
					</div>
				</div>
				<Separator className="my-0" />
				<div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-border">
					{quotes.map((item) => (
						<div
							key={item.attribution}
							className="py-8 md:py-10 md:px-8 first:pt-0 md:first:pl-0 md:first:pr-8 last:pb-0 md:last:pr-0 md:last:pl-8"
						>
							<p className="text-lg font-medium text-foreground leading-snug mb-3">
								{item.quote}
							</p>
							<p className="text-sm text-muted-foreground">
								{item.attribution}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
