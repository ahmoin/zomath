"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Separator } from "@/components/ui/separator";
import { navExtras, policySections } from "@/components/sections/privacy/data";

export function PolicyContent() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="grid lg:grid-cols-[260px_1fr] gap-12 lg:gap-16">
					<nav className="hidden lg:block">
						<div className="sticky top-24">
							<p className="text-sm font-medium text-foreground mb-4">
								On this page
							</p>
							<ul className="space-y-1">
								{policySections.map((section) => (
									<li key={section.id}>
										<a
											href={`#${section.id}`}
											className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2.5 py-1.5 px-2 rounded-md hover:bg-muted/60"
										>
											<HugeiconsIcon
												icon={section.icon}
												className="size-4"
												strokeWidth={1.5}
											/>
											{section.title}
										</a>
									</li>
								))}
							</ul>
							<Separator className="my-4" />
							<ul className="space-y-1">
								{navExtras.map((item) => (
									<li key={item.id}>
										<a
											href={`#${item.id}`}
											className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2.5 py-1.5 px-2 rounded-md hover:bg-muted/60"
										>
											<HugeiconsIcon
												icon={item.icon}
												className="size-4"
												strokeWidth={1.5}
											/>
											{item.label}
										</a>
									</li>
								))}
							</ul>
						</div>
					</nav>

					<div className="max-w-3xl space-y-0">
						{policySections.map((section, idx) => (
							<article
								key={section.id}
								id={section.id}
								className="scroll-mt-24"
							>
								<div className="flex items-center gap-3 mb-6 pt-20 first:pt-0">
									<div className="flex items-center justify-center size-10 rounded-xl bg-primary/10">
										<HugeiconsIcon
											icon={section.icon}
											className="size-5 text-primary"
											strokeWidth={1.5}
										/>
									</div>
									<h2 className="text-2xl font-semibold tracking-tight text-foreground">
										{section.title}
									</h2>
								</div>
								<div className="space-y-5">
									{section.content.map((block, bIdx) => (
										<div key={bIdx}>
											{block.subtitle && (
												<h3 className="text-base font-medium text-foreground mb-1.5">
													{block.subtitle}
												</h3>
											)}
											<p className="text-muted-foreground leading-relaxed">
												{block.text}
											</p>
										</div>
									))}
								</div>
								{idx < policySections.length - 1 && (
									<Separator className="mt-16 mb-0" />
								)}
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
