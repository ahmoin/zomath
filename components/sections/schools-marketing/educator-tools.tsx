"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { educatorTools } from "@/components/sections/schools-marketing/data";

export function EducatorTools() {
	return (
		<section className="py-24 lg:py-32 bg-muted/50">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
					<div>
						<h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
							Built for Educators, Not Just Students
						</h2>
						<p className="mb-8 text-lg text-muted-foreground">
							Zomath is not just a student tool. We built powerful features
							specifically for teachers and administrators to make your job
							easier and your impact greater.
						</p>
						<div className="space-y-6">
							{educatorTools.map((tool) => (
								<div key={tool.title} className="flex gap-4">
									<div className="mt-1 flex-shrink-0">
										<div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
											<HugeiconsIcon
												icon={tool.icon}
												className="size-5 text-primary"
												strokeWidth={1.5}
											/>
										</div>
									</div>
									<div>
										<h3 className="font-semibold text-foreground">
											{tool.title}
										</h3>
										<p className="text-sm text-muted-foreground leading-relaxed">
											{tool.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="relative">
						<div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-muted border overflow-hidden">
							<div className="absolute inset-4 rounded-lg bg-background shadow-lg p-5">
								<div className="flex items-center gap-2 mb-4">
									<div className="size-3 rounded-full bg-red-400" />
									<div className="size-3 rounded-full bg-yellow-400" />
									<div className="size-3 rounded-full bg-green-400" />
									<span className="ml-2 text-xs text-muted-foreground">
										Zomath Dashboard
									</span>
								</div>
								<div className="space-y-3">
									<div className="flex items-center justify-between">
										<div className="h-3 w-24 rounded bg-muted" />
										<div className="h-3 w-16 rounded bg-primary/20" />
									</div>
									<div className="space-y-2">
										{(["w-3/4", "w-1/2", "w-[85%]"] as const).map((w, i) => (
											<div
												key={i}
												className="flex items-center gap-3 rounded-lg bg-muted/50 p-2.5"
											>
												<div className="size-8 rounded-full bg-primary/20" />
												<div className="flex-1 space-y-1.5">
													<div className="h-2.5 w-20 rounded bg-muted" />
													<div className="h-1.5 w-full rounded-full bg-muted">
														<div
															className={`h-1.5 ${w} rounded-full bg-primary/40`}
														/>
													</div>
												</div>
												<div className="h-4 w-10 rounded bg-primary/10" />
											</div>
										))}
									</div>
									<div className="grid grid-cols-3 gap-2 pt-2">
										{[
											{ hw: "w-8", lw: "w-12" },
											{ hw: "w-6", lw: "w-10" },
											{ hw: "w-10", lw: "w-14" },
										].map(({ hw, lw }, i) => (
											<div
												key={i}
												className="rounded-lg bg-primary/5 p-2 text-center"
											>
												<div
													className={`h-3 ${hw} mx-auto rounded bg-primary/20`}
												/>
												<div
													className={`h-2 ${lw} mx-auto rounded bg-muted mt-1.5`}
												/>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
