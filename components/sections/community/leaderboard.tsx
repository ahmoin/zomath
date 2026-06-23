"use client";

import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { leaderboard } from "@/components/sections/community/data";

export function Leaderboard() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="grid lg:grid-cols-2 gap-16 items-start">
					<div>
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Community leaderboard
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed mb-6">
							Top contributors earn points by solving challenges, helping others
							in forums, and maintaining daily learning streaks. Every
							interaction counts.
						</p>
						<p className="text-muted-foreground leading-relaxed mb-8">
							Rankings reset monthly so new members always have a fair shot.
							Earn badges, unlock titles, and see your name climb the board as
							you grow.
						</p>
						<Button variant="outline" asChild>
							<Link href="/community/leaderboard">
								View full leaderboard
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-4 ml-1"
									strokeWidth={1.5}
								/>
							</Link>
						</Button>
					</div>
					<div className="rounded-xl border bg-card overflow-hidden">
						<div className="grid grid-cols-[2rem_1fr_auto_auto] gap-x-4 items-center px-6 py-3 border-b bg-muted/50 text-xs font-medium text-muted-foreground">
							<span>#</span>
							<span>Learner</span>
							<span>Points</span>
							<span>Streak</span>
						</div>
						{leaderboard.map((entry) => (
							<div
								key={entry.rank}
								className="grid grid-cols-[2rem_1fr_auto_auto] gap-x-4 items-center px-6 py-3.5 border-b last:border-b-0"
							>
								<span className="text-sm font-semibold text-foreground">
									{entry.rank}
								</span>
								<span className="text-sm font-medium text-foreground">
									{entry.name}
								</span>
								<span className="text-sm text-muted-foreground tabular-nums">
									{entry.points.toLocaleString()}
								</span>
								<span className="text-sm text-muted-foreground tabular-nums">
									{entry.streak}d
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
