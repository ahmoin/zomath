"use client";

import { ArrowRight02Icon, HashtagIcon, Target01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { challenges } from "@/components/sections/community/data";

export function Challenges() {
	return (
		<section className="py-24 lg:py-32 bg-muted/30">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
					<div className="max-w-2xl">
						<div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-1.5 text-sm text-muted-foreground mb-6">
							<HugeiconsIcon
								icon={HashtagIcon}
								className="size-4"
								strokeWidth={1.5}
							/>
							<span>This week&apos;s challenges</span>
						</div>
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Sharpen your skills with community challenges
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed">
							Newton picks fresh problems every week across topics and
							difficulty levels. Solve them, discuss strategies, and climb the
							leaderboard.
						</p>
					</div>
					<Button
						variant="outline"
						asChild
						className="shrink-0 self-start lg:self-auto"
					>
						<Link href="/community/challenges">
							View all challenges
							<HugeiconsIcon
								icon={ArrowRight02Icon}
								className="size-4 ml-1"
								strokeWidth={1.5}
							/>
						</Link>
					</Button>
				</div>
				<div className="grid md:grid-cols-3 gap-6">
					{challenges.map((challenge) => (
						<div
							key={challenge.title}
							className="rounded-xl border bg-card p-8 hover:shadow-md transition-shadow"
						>
							<div className="flex items-center justify-between mb-4">
								<span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
									{challenge.tag}
								</span>
								<span className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
									{challenge.difficulty}
								</span>
							</div>
							<h3 className="text-lg font-semibold text-foreground mb-2">
								{challenge.title}
							</h3>
							<p className="text-sm text-muted-foreground leading-relaxed mb-4">
								{challenge.description}
							</p>
							<div className="flex items-center gap-1.5 text-sm text-muted-foreground">
								<HugeiconsIcon
									icon={Target01Icon}
									className="size-4"
									strokeWidth={1.5}
								/>
								<span>{challenge.solvers} solvers</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
