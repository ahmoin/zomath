"use client";

import { CallUnlocked02Icon, TangentIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function ConceptChain() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
						Concepts unlock concepts
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Every concept you master opens doors to new ones. The map makes
						these chains of dependency visible and navigable.
					</p>
				</div>
				<div className="max-w-4xl mx-auto">
					<div className="relative flex flex-col items-center gap-0">
						<div className="flex items-center gap-4 w-full">
							<div className="flex-1 rounded-xl border bg-background p-5">
								<div className="flex items-center gap-3 mb-2">
									<HugeiconsIcon
										icon={CallUnlocked02Icon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
									<span className="font-semibold text-foreground text-sm">
										Mastered
									</span>
								</div>
								<p className="text-foreground font-medium">
									Solving linear equations
								</p>
								<p className="text-sm text-muted-foreground mt-1">
									The foundation. Everything in algebra starts here.
								</p>
							</div>
						</div>
						<div className="w-px h-8 bg-border" />
						<svg
							className="size-6 text-muted-foreground/40"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
						>
							<path d="M12 4v16m0-16l-4 4m4-4l4 4" />
						</svg>
						<div className="w-px h-4 bg-border" />
						<div className="flex items-center gap-4 w-full">
							<div className="flex-1 rounded-xl border bg-background p-5">
								<div className="flex items-center gap-3 mb-2">
									<HugeiconsIcon
										icon={CallUnlocked02Icon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
									<span className="font-semibold text-foreground text-sm">
										Mastered
									</span>
								</div>
								<p className="text-foreground font-medium">
									Graphing linear functions
								</p>
								<p className="text-sm text-muted-foreground mt-1">
									Equations become pictures. Slope and intercept take on
									meaning.
								</p>
							</div>
						</div>
						<div className="w-px h-8 bg-border" />
						<svg
							className="size-6 text-muted-foreground/40"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
						>
							<path d="M12 4v16m0-16l-4 4m4-4l4 4" />
						</svg>
						<div className="w-px h-4 bg-border" />
						<div className="flex items-center gap-4 w-full">
							<div className="flex-1 rounded-xl border bg-primary/5 border-primary/30 p-5">
								<div className="flex items-center gap-3 mb-2">
									<HugeiconsIcon
										icon={TangentIcon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
									<span className="font-semibold text-primary text-sm">
										Next up
									</span>
								</div>
								<p className="text-foreground font-medium">
									Systems of equations
								</p>
								<p className="text-sm text-muted-foreground mt-1">
									Multiple equations, multiple unknowns. Combine your skills to
									solve them.
								</p>
							</div>
						</div>
						<div className="w-px h-8 bg-border" />
						<svg
							className="size-6 text-muted-foreground/40"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
						>
							<path d="M12 4v16m0-16l-4 4m4-4l4 4" />
						</svg>
						<div className="w-px h-4 bg-border" />
						<div className="flex items-center gap-4 w-full">
							<div className="flex-1 rounded-xl border bg-muted/50 p-5 opacity-60">
								<div className="flex items-center gap-3 mb-2">
									<HugeiconsIcon
										icon={CallUnlocked02Icon}
										className="size-5 text-muted-foreground"
										strokeWidth={1.5}
									/>
									<span className="font-semibold text-muted-foreground text-sm">
										Unlocks
									</span>
								</div>
								<p className="text-foreground font-medium">
									Linear programming and optimization
								</p>
								<p className="text-sm text-muted-foreground mt-1">
									Apply systems to real world constraints and find optimal
									solutions.
								</p>
							</div>
						</div>
					</div>
					<p className="text-sm text-muted-foreground text-center mt-8">
						This is one chain of many. The full map shows dozens of
						interconnected paths like this, branching across subjects.
					</p>
				</div>
			</div>
		</section>
	);
}
