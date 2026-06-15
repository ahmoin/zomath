"use client";

import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { contactOptions } from "@/components/sections/help/data";

export function Contact() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="text-center mb-16">
					<p className="text-sm font-medium text-primary mb-2">Contact us</p>
					<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
						Still need help?
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Our team is here for you. Reach out through any of the channels
						below and we will get you back on track.
					</p>
				</div>
				<div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
					{contactOptions.map((option) => (
						<div
							key={option.title}
							className="p-6 rounded-2xl border bg-card text-center hover:border-primary/30 transition-colors"
						>
							<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
								<HugeiconsIcon
									icon={option.icon}
									className="size-6 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<h3 className="text-lg font-semibold text-foreground mb-1">
								{option.title}
							</h3>
							<p className="text-sm text-muted-foreground mb-5">
								{option.description}
							</p>
							<Link href={option.href}>
								<Button variant="outline" className="gap-2">
									{option.action}
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-4"
										strokeWidth={1.5}
									/>
								</Button>
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
