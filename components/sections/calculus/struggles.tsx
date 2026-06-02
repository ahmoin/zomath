"use client";

import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { struggles } from "@/components/sections/calculus/data";

export function Struggles() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="grid lg:grid-cols-2 gap-16 items-start">
					<div>
						<p className="text-sm font-medium text-primary mb-3">
							Why calculus is hard
						</p>
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
							The real reasons students get stuck
						</h2>
						<p className="text-muted-foreground text-lg leading-relaxed mb-6">
							Calculus is not inherently harder than other math. But it
							exposes gaps in understanding that earlier courses let you hide.
							Newton identifies those gaps and helps you fill them for good.
						</p>
						<Button variant="outline" asChild>
							<Link href="/ask">
								Ask Newton for help
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-4"
									strokeWidth={1.5}
								/>
							</Link>
						</Button>
					</div>
					<div className="flex flex-col gap-6">
						{struggles.map((struggle) => (
							<div key={struggle.title} className="flex gap-4">
								<div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
									<HugeiconsIcon
										icon={struggle.icon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<div>
									<h3 className="text-base font-semibold text-foreground mb-1">
										{struggle.title}
									</h3>
									<p className="text-sm text-muted-foreground leading-relaxed">
										{struggle.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
