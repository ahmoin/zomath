"use client";

import { SmartPhone01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { powerUserTips } from "@/components/sections/help/data";

export function Shortcuts() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="grid lg:grid-cols-2 gap-16 items-start">
					<div>
						<p className="text-sm font-medium text-primary mb-2">Power user</p>
						<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Keyboard shortcuts
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed mb-6">
							Speed up your workflow with these keyboard shortcuts. They work
							on desktop browsers from any page in Zomath.
						</p>
						<div className="p-5 rounded-2xl border bg-muted/50">
							<div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
								<HugeiconsIcon
									icon={SmartPhone01Icon}
									className="size-4"
									strokeWidth={1.5}
								/>
								On mobile
							</div>
							<p className="text-sm text-muted-foreground leading-relaxed">
								Keyboard shortcuts are not available on mobile, but you can
								access all the same features through the bottom navigation
								bar. Tap the camera icon for Solve, the chat icon for Newton,
								and the map icon for your Concept Map.
							</p>
						</div>
					</div>
					<div className="space-y-1">
						{powerUserTips.map((tip) => (
							<div
								key={tip.label}
								className="flex items-center justify-between gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors"
							>
								<div className="min-w-0">
									<p className="text-sm font-medium text-foreground">
										{tip.label}
									</p>
									<p className="text-xs text-muted-foreground mt-0.5">
										{tip.description}
									</p>
								</div>
								<kbd className="shrink-0 px-2.5 py-1 rounded-md border bg-muted text-xs font-mono text-muted-foreground">
									{tip.shortcut}
								</kbd>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
