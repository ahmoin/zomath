"use client";

import { ArrowRight02Icon, DiscordIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getStatusConfig, incidents } from "@/components/sections/status/data";

export function IncidentHistory() {
	const [showAllIncidents, setShowAllIncidents] = useState(false);

	const displayedIncidents = showAllIncidents
		? incidents
		: incidents.slice(0, 2);

	return (
		<section className="pb-24 lg:pb-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="flex items-center gap-3 mb-8">
					<HugeiconsIcon
						icon={DiscordIcon}
						className="size-5 text-muted-foreground"
						strokeWidth={1.5}
					/>
					<h2 className="text-2xl font-semibold tracking-tight">
						Incident History
					</h2>
				</div>
				<div className="space-y-4">
					{displayedIncidents.map((incident) => {
						const severityConfig = getStatusConfig(incident.severity);
						return (
							<div
								key={incident.id}
								className="rounded-xl border bg-card overflow-hidden"
							>
								<Accordion type="single" collapsible>
									<AccordionItem value={incident.id} className="border-none">
										<AccordionTrigger className="px-6 py-5 hover:no-underline">
											<div className="flex items-center gap-4 text-left flex-1">
												<div
													className={`rounded-lg ${severityConfig.bgClass} p-2 shrink-0`}
												>
													<HugeiconsIcon
														icon={severityConfig.icon}
														className={`size-4 ${severityConfig.colorClass}`}
														strokeWidth={1.5}
													/>
												</div>
												<div className="flex-1 min-w-0">
													<div className="flex items-center gap-3 flex-wrap">
														<p className="font-medium text-foreground">
															{incident.title}
														</p>
														{incident.resolved && (
															<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
																Resolved
															</span>
														)}
													</div>
													<div className="flex items-center gap-3 mt-1">
														<span className="text-sm text-muted-foreground">
															{incident.date}
														</span>
														<span className={`text-sm font-medium ${severityConfig.colorClass}`}>
															{severityConfig.label}
														</span>
													</div>
												</div>
											</div>
										</AccordionTrigger>
										<AccordionContent className="px-6 pb-6">
											<Separator className="mb-6" />
											<div className="space-y-0 ml-11">
												{incident.timeline.map((event) => (
													<div
														key={event.time}
														className="flex gap-4 pb-6 last:pb-0 relative"
													>
														<div className="flex flex-col items-center">
															<div className="size-2.5 rounded-full bg-primary mt-1.5 shrink-0" />
															<div className="w-px flex-1 bg-border mt-1 [div:last-child_&]:hidden" />
														</div>
														<div className="flex-1 -mt-0.5">
															<div className="flex items-center gap-3 flex-wrap">
																<span className="text-sm font-semibold text-foreground">
																	{event.label}
																</span>
																<span className="text-xs text-muted-foreground">
																	{event.time}
																</span>
															</div>
															<p className="text-sm text-muted-foreground mt-1 leading-relaxed">
																{event.detail}
															</p>
														</div>
													</div>
												))}
											</div>
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							</div>
						);
					})}
				</div>
				{incidents.length > 2 && (
					<div className="mt-6 text-center">
						<Button
							variant="ghost"
							onClick={() => setShowAllIncidents(!showAllIncidents)}
							className="gap-2"
						>
							{showAllIncidents ? "Show Less" : "View All Incidents"}
							<HugeiconsIcon
								icon={ArrowRight02Icon}
								className={`size-4 transition-transform ${
									showAllIncidents ? "-rotate-90" : "rotate-90"
								}`}
								strokeWidth={1.5}
							/>
						</Button>
					</div>
				)}
			</div>
		</section>
	);
}
