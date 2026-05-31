"use client";

import {
	ArrowRight02Icon,
	AutoConversationsIcon,
	BookOpen01Icon,
	CommandIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export function Resources() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="mb-16">
					<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
						Other ways to connect
					</h2>
					<p className="text-muted-foreground text-lg max-w-xl">
						Sometimes the fastest answer is already out there. These resources
						might help right now, no waiting required.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="bg-muted border border-border rounded-xl p-6">
						<div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
							<HugeiconsIcon
								icon={AutoConversationsIcon}
								className="size-5"
								strokeWidth={1.5}
							/>
						</div>
						<h3 className="text-lg font-semibold text-foreground mb-2">
							Ask Newton
						</h3>
						<p className="text-muted-foreground text-sm leading-relaxed mb-4">
							For math questions, Newton is your fastest path to a clear
							explanation. Snap a photo of a problem, type your question, or
							explore your Concept Map to find the topic you need help with.
							Available 24/7, no ticket required.
						</p>
						<Link
							href="/app"
							className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
						>
							Open Newton
							<HugeiconsIcon
								icon={ArrowRight02Icon}
								className="size-3.5"
								strokeWidth={2}
							/>
						</Link>
					</div>
					<div className="bg-muted border border-border rounded-xl p-6">
						<div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
							<HugeiconsIcon
								icon={CommandIcon}
								className="size-5"
								strokeWidth={1.5}
							/>
						</div>
						<h3 className="text-lg font-semibold text-foreground mb-2">
							Community
						</h3>
						<p className="text-muted-foreground text-sm leading-relaxed mb-4">
							Join thousands of Zomath learners on Discord. Share solutions,
							work through competition problems together, swap study strategies,
							and chat with the Zomath team. We also host weekly problem
							challenges with leaderboards.
						</p>
						<a
							href="https://discord.gg/zomath"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
						>
							Join Discord
							<HugeiconsIcon
								icon={ArrowRight02Icon}
								className="size-3.5"
								strokeWidth={2}
							/>
						</a>
					</div>
					<div className="bg-muted border border-border rounded-xl p-6">
						<div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
							<HugeiconsIcon
								icon={BookOpen01Icon}
								className="size-5"
								strokeWidth={1.5}
							/>
						</div>
						<h3 className="text-lg font-semibold text-foreground mb-2">
							Help Center
						</h3>
						<p className="text-muted-foreground text-sm leading-relaxed mb-4">
							Browse step-by-step guides on getting started, using the Concept
							Map, setting up practice sessions, understanding your progress
							stats, and making the most of every study session. Updated
							regularly based on what you ask us most.
						</p>
						<Link
							href="/help"
							className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
						>
							Browse guides
							<HugeiconsIcon
								icon={ArrowRight02Icon}
								className="size-3.5"
								strokeWidth={2}
							/>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
