"use client";

import {
	ArrowRight02Icon,
	MailSend02Icon,
	Shield01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { heroStats } from "@/components/sections/security/data";

export function Hero() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-3xl mx-auto text-center">
					<div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground mb-6">
						<HugeiconsIcon
							icon={Shield01Icon}
							className="size-4"
							strokeWidth={1.5}
						/>
						Trust and Safety
					</div>
					<h1 className="text-4xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]">
						Your Learning. Your Data.{" "}
						<span className="text-primary">Protected.</span>
					</h1>
					<p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
						At Zomath, we believe understanding math should never come at the
						cost of your privacy. Every feature, from Newton to Concept Map, is
						built with security at its foundation, not bolted on as an
						afterthought.
					</p>
					<div className="mt-8 flex flex-wrap items-center justify-center gap-4">
						<Button asChild size="lg">
							<Link href="/security#faq">
								View Security FAQ
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-4 ml-1"
									strokeWidth={1.5}
								/>
							</Link>
						</Button>
						<Button variant="outline" size="lg" asChild>
							<Link href="mailto:security@zomath.com">
								<HugeiconsIcon
									icon={MailSend02Icon}
									className="size-4 mr-1.5"
									strokeWidth={1.5}
								/>
								Report an Issue
							</Link>
						</Button>
					</div>
				</div>
				<div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
					{heroStats.map((stat) => (
						<div
							key={stat.label}
							className="text-center rounded-xl border bg-card p-5"
						>
							<p className="text-2xl font-semibold text-foreground">
								{stat.value}
							</p>
							<p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
