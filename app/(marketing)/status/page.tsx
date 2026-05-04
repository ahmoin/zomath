"use client";

import {
	AlertCircleIcon,
	ArrowRight02Icon,
	BeaterIcon,
	BrainIcon,
	Calendar01Icon,
	Call02Icon,
	Camera02Icon,
	CancelCircleIcon,
	ChartBarLineIcon,
	CheckmarkBadge01Icon,
	CheckmarkCircle02Icon,
	Clock01Icon,
	CloudIcon,
	DatabaseSyncIcon,
	DiscordIcon,
	InformationCircleIcon,
	Notification01Icon,
	Shield01Icon,
	TangentIcon,
	Tap01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { useState } from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const services = [
	{
		name: "Newton AI Tutor",
		description: "AI-powered chat and step-by-step explanations",
		icon: BrainIcon,
		status: "operational" as const,
		uptime: 99.98,
		responseTime: "0.8s",
	},
	{
		name: "Solve (Photo Recognition)",
		description: "Image capture and math problem recognition",
		icon: Camera02Icon,
		status: "operational" as const,
		uptime: 99.95,
		responseTime: "1.2s",
	},
	{
		name: "Practice Engine",
		description: "Adaptive problem generation and scoring",
		icon: TangentIcon,
		status: "operational" as const,
		uptime: 99.99,
		responseTime: "0.3s",
	},
	{
		name: "Concept Map",
		description: "Knowledge graph and prerequisite tracking",
		icon: Tap01Icon,
		status: "operational" as const,
		uptime: 99.97,
		responseTime: "0.5s",
	},
	{
		name: "Progress Dashboard",
		description: "Analytics, streaks, and learning insights",
		icon: ChartBarLineIcon,
		status: "operational" as const,
		uptime: 99.99,
		responseTime: "0.4s",
	},
	{
		name: "Core Platform",
		description: "Authentication, sync, and account services",
		icon: Shield01Icon,
		status: "operational" as const,
		uptime: 99.99,
		responseTime: "0.2s",
	},
];

const incidents = [
	{
		id: "inc-024",
		title: "Newton AI experiencing slow responses",
		date: "June 12, 2025",
		severity: "degraded" as const,
		resolved: true,
		timeline: [
			{
				time: "2:15 PM UTC",
				label: "Investigating",
				detail:
					"We detected increased latency in Newton AI responses. Average response time rose from 0.8s to 3.5s.",
			},
			{
				time: "2:40 PM UTC",
				label: "Identified",
				detail:
					"Root cause identified as increased load on our primary inference cluster after a new model deployment.",
			},
			{
				time: "3:10 PM UTC",
				label: "Monitoring",
				detail:
					"Traffic has been rebalanced across inference clusters. Response times returning to normal.",
			},
			{
				time: "3:45 PM UTC",
				label: "Resolved",
				detail:
					"Newton AI is fully operational. Response times are back to expected levels. We are adjusting our rollout strategy to prevent recurrence.",
			},
		],
	},
	{
		id: "inc-023",
		title: "Solve photo recognition intermittent failures",
		date: "June 8, 2025",
		severity: "major" as const,
		resolved: true,
		timeline: [
			{
				time: "9:30 AM UTC",
				label: "Investigating",
				detail:
					"Multiple reports of photo recognition returning errors. Affecting approximately 15% of Solve requests.",
			},
			{
				time: "10:05 AM UTC",
				label: "Identified",
				detail:
					"A misconfigured image preprocessing pipeline was rejecting valid uploads above a certain resolution threshold.",
			},
			{
				time: "10:30 AM UTC",
				label: "Resolved",
				detail:
					"Fix deployed. Photo recognition is processing all image sizes correctly. We added additional automated tests for image pipeline configurations.",
			},
		],
	},
	{
		id: "inc-022",
		title: "Scheduled maintenance: database migration",
		date: "June 1, 2025",
		severity: "maintenance" as const,
		resolved: true,
		timeline: [
			{
				time: "6:00 AM UTC",
				label: "In Progress",
				detail:
					"Scheduled maintenance began. Read-only mode enabled for Progress Dashboard and Concept Map.",
			},
			{
				time: "6:22 AM UTC",
				label: "Completed",
				detail:
					"Database migration completed successfully. All services restored to full operation ahead of schedule.",
			},
		],
	},
];

const uptimeHistory = [
	{ month: "Jan", uptime: 99.96 },
	{ month: "Feb", uptime: 99.99 },
	{ month: "Mar", uptime: 99.94 },
	{ month: "Apr", uptime: 99.98 },
	{ month: "May", uptime: 99.97 },
	{ month: "Jun", uptime: 99.98 },
];

function getStatusConfig(status: string) {
	switch (status) {
		case "operational":
			return {
				label: "Operational",
				icon: CheckmarkCircle02Icon,
				colorClass: "text-emerald-500",
				bgClass: "bg-emerald-500/10",
				dotClass: "bg-emerald-500",
			};
		case "degraded":
			return {
				label: "Degraded Performance",
				icon: AlertCircleIcon,
				colorClass: "text-amber-500",
				bgClass: "bg-amber-500/10",
				dotClass: "bg-amber-500",
			};
		case "major":
			return {
				label: "Major Outage",
				icon: CancelCircleIcon,
				colorClass: "text-red-500",
				bgClass: "bg-red-500/10",
				dotClass: "bg-red-500",
			};
		case "maintenance":
			return {
				label: "Maintenance",
				icon: Clock01Icon,
				colorClass: "text-sky-500",
				bgClass: "bg-sky-500/10",
				dotClass: "bg-sky-500",
			};
		default:
			return {
				label: "Unknown",
				icon: InformationCircleIcon,
				colorClass: "text-muted-foreground",
				bgClass: "bg-muted",
				dotClass: "bg-muted-foreground",
			};
	}
}

function UptimeBar({ value }: { value: number }) {
	const days = 30;
	const bars = Array.from({ length: days }, (_, i) => {
		const hasIncident = Math.random() < (100 - value) / 100;
		return hasIncident && i > 20;
	});

	return (
		<div className="flex gap-px items-end h-8">
			{bars.map((incident, i) => (
				<div
					key={i}
					className={`flex-1 rounded-sm min-w-1 ${
						incident ? "bg-amber-400" : "bg-emerald-500"
					}`}
					style={{ height: "100%" }}
				/>
			))}
		</div>
	);
}

function OverallStatusBanner() {
	const allOperational = services.every((s) => s.status === "operational");

	return (
		<div
			className={`rounded-2xl p-6 lg:p-8 ${
				allOperational
					? "bg-emerald-500/10 border border-emerald-500/20"
					: "bg-amber-500/10 border border-amber-500/20"
			}`}
		>
			<div className="flex items-center gap-4">
				<div
					className={`rounded-full p-3 ${
						allOperational ? "bg-emerald-500/20" : "bg-amber-500/20"
					}`}
				>
					<HugeiconsIcon
						icon={allOperational ? CheckmarkBadge01Icon : AlertCircleIcon}
						className={`size-8 ${allOperational ? "text-emerald-500" : "text-amber-500"}`}
						strokeWidth={1.5}
					/>
				</div>
				<div>
					<p
						className={`text-xl font-semibold ${
							allOperational
								? "text-emerald-600 dark:text-emerald-400"
								: "text-amber-600 dark:text-amber-400"
						}`}
					>
						{allOperational
							? "All Systems Operational"
							: "Some Services Experiencing Issues"}
					</p>
					<p className="text-muted-foreground mt-1">
						{allOperational
							? "Every Zomath service is running smoothly. No incidents detected."
							: "We are aware of the issue and working on a fix. Check below for details."}
					</p>
				</div>
			</div>
		</div>
	);
}

export default function StatusPage() {
	const [showAllIncidents, setShowAllIncidents] = useState(false);

	const displayedIncidents = showAllIncidents
		? incidents
		: incidents.slice(0, 2);

	return (
		<main className="min-h-svh">
			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="max-w-3xl">
						<div className="flex items-center gap-3 mb-6">
							<div className="rounded-lg bg-primary/10 p-2">
								<HugeiconsIcon
									icon={BeaterIcon}
									className="size-5 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
								System Status
							</span>
						</div>
						<h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-4">
							Zomath Status
						</h1>
						<p className="text-lg text-muted-foreground leading-relaxed">
							Real-time information about Zomath service availability and
							performance. We track every incident transparently so you always
							know where things stand.
						</p>
					</div>

					<div className="mt-10">
						<OverallStatusBanner />
					</div>
				</div>
			</section>

			<section className="pb-24 lg:pb-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="flex items-center gap-3 mb-8">
						<HugeiconsIcon
							icon={DatabaseSyncIcon}
							className="size-5 text-muted-foreground"
							strokeWidth={1.5}
						/>
						<h2 className="text-2xl font-semibold tracking-tight">
							Service Health
						</h2>
					</div>

					<div className="grid gap-4">
						{services.map((service) => {
							const statusConfig = getStatusConfig(service.status);
							return (
								<div
									key={service.name}
									className="rounded-xl border bg-card p-5 lg:p-6 flex flex-col sm:flex-row sm:items-center gap-4"
								>
									<div className="flex items-center gap-4 flex-1 min-w-0">
										<div
											className={`rounded-lg ${statusConfig.bgClass} p-2.5 shrink-0`}
										>
											<HugeiconsIcon
												icon={service.icon}
												className={`size-5 ${statusConfig.colorClass}`}
												strokeWidth={1.5}
											/>
										</div>
										<div className="min-w-0">
											<p className="font-medium text-foreground truncate">
												{service.name}
											</p>
											<p className="text-sm text-muted-foreground truncate">
												{service.description}
											</p>
										</div>
									</div>

									<div className="flex items-center gap-6 sm:gap-8 pl-11.5 sm:pl-0">
										<div className="text-sm shrink-0">
											<span className="text-muted-foreground">Uptime </span>
											<span className="font-medium text-foreground">
												{service.uptime}%
											</span>
										</div>
										<div className="text-sm shrink-0 hidden md:block">
											<span className="text-muted-foreground">Avg. </span>
											<span className="font-medium text-foreground">
												{service.responseTime}
											</span>
										</div>
										<div className="flex items-center gap-2 shrink-0">
											<span
												className={`size-2 rounded-full ${statusConfig.dotClass}`}
											/>
											<span
												className={`text-sm font-medium ${statusConfig.colorClass}`}
											>
												{statusConfig.label}
											</span>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			<section className="pb-24 lg:pb-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="flex items-center gap-3 mb-8">
						<HugeiconsIcon
							icon={ChartBarLineIcon}
							className="size-5 text-muted-foreground"
							strokeWidth={1.5}
						/>
						<h2 className="text-2xl font-semibold tracking-tight">
							Uptime Overview
						</h2>
					</div>

					<div className="rounded-xl border bg-card p-6 lg:p-8">
						<div className="flex items-end justify-between mb-8">
							<div>
								<p className="text-3xl font-semibold text-foreground">99.97%</p>
								<p className="text-sm text-muted-foreground mt-1">
									Aggregate uptime over the last 6 months
								</p>
							</div>
							<div className="flex items-center gap-4 text-xs text-muted-foreground">
								<div className="flex items-center gap-1.5">
									<span className="size-2.5 rounded-sm bg-emerald-500" />
									<span>Operational</span>
								</div>
								<div className="flex items-center gap-1.5">
									<span className="size-2.5 rounded-sm bg-amber-400" />
									<span>Incident</span>
								</div>
							</div>
						</div>

						<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
							{uptimeHistory.map((month) => (
								<div key={month.month}>
									<UptimeBar value={month.uptime} />
									<div className="flex items-center justify-between mt-2">
										<span className="text-sm text-muted-foreground">
											{month.month}
										</span>
										<span className="text-sm font-medium text-foreground">
											{month.uptime}%
										</span>
									</div>
								</div>
							))}
						</div>

						<p className="text-xs text-muted-foreground mt-6">
							Uptime is measured across all core services. Each bar represents
							one day. Hover for details.
						</p>
					</div>
				</div>
			</section>

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
										<AccordionItem value={incident.id} border="none">
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
															<span
																className={`text-sm font-medium ${severityConfig.colorClass}`}
															>
																{severityConfig.label}
															</span>
														</div>
													</div>
												</div>
											</AccordionTrigger>
											<AccordionContent className="px-6 pb-6">
												<Separator className="mb-6" />
												<div className="space-y-0 ml-11">
													{incident.timeline.map((event, idx) => (
														<div
															key={idx}
															className="flex gap-4 pb-6 last:pb-0 relative"
														>
															<div className="flex flex-col items-center">
																<div className="size-2.5 rounded-full bg-primary mt-1.5 shrink-0" />
																{idx < incident.timeline.length - 1 && (
																	<div className="w-px flex-1 bg-border mt-1" />
																)}
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

			<section className="pb-24 lg:pb-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="flex items-center gap-3 mb-8">
						<HugeiconsIcon
							icon={Calendar01Icon}
							className="size-5 text-muted-foreground"
							strokeWidth={1.5}
						/>
						<h2 className="text-2xl font-semibold tracking-tight">
							Scheduled Maintenance
						</h2>
					</div>

					<div className="rounded-xl border bg-card p-6 lg:p-8">
						<div className="flex items-center gap-4">
							<div className="rounded-lg bg-sky-500/10 p-2.5">
								<HugeiconsIcon
									icon={Clock01Icon}
									className="size-5 text-sky-500"
									strokeWidth={1.5}
								/>
							</div>
							<div className="flex-1">
								<p className="font-medium text-foreground">
									No Scheduled Maintenance
								</p>
								<p className="text-sm text-muted-foreground mt-0.5">
									There are no planned maintenance windows. We perform rolling
									updates with zero downtime whenever possible.
								</p>
							</div>
						</div>

						<Separator className="my-6" />

						<div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
							<p className="text-sm text-muted-foreground">
								When maintenance is necessary, we schedule it during low-traffic
								hours and notify users at least 48 hours in advance.
							</p>
							<div className="flex items-center gap-2 shrink-0">
								<HugeiconsIcon
									icon={CloudIcon}
									className="size-4 text-muted-foreground"
									strokeWidth={1.5}
								/>
								<span className="text-sm text-muted-foreground">
									Last maintenance: June 1, 2025
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="pb-24 lg:pb-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="rounded-2xl bg-primary/5 border border-primary/10 p-8 lg:p-12">
						<div className="grid lg:grid-cols-2 gap-8 items-center">
							<div>
								<div className="flex items-center gap-3 mb-4">
									<HugeiconsIcon
										icon={Notification01Icon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
									<span className="text-sm font-medium text-primary uppercase tracking-wider">
										Stay Informed
									</span>
								</div>
								<h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-foreground mb-3">
									Get Notified About Status Changes
								</h2>
								<p className="text-muted-foreground leading-relaxed">
									Subscribe to real-time updates so you are the first to know
									when something changes. We only send notifications for actual
									incidents and resolutions, never spam.
								</p>
							</div>

							<div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
								<Button size="lg" className="gap-2">
									<HugeiconsIcon
										icon={Call02Icon}
										className="size-4"
										strokeWidth={1.5}
									/>
									Subscribe to Updates
								</Button>
								<Button variant="outline" size="lg" asChild>
									<Link href="/" className="gap-2">
										Back to Zomath
										<HugeiconsIcon
											icon={ArrowRight02Icon}
											className="size-4"
											strokeWidth={1.5}
										/>
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="pb-24 lg:pb-32">
				<div className="max-w-7xl mx-auto px-4 lg:px-12">
					<div className="text-center max-w-2xl mx-auto">
						<h2 className="text-2xl font-semibold tracking-tight text-foreground mb-3">
							Questions About Reliability?
						</h2>
						<p className="text-muted-foreground leading-relaxed mb-6">
							If you are experiencing an issue not listed here, or if you have
							questions about our infrastructure and reliability practices, we
							are here to help.
						</p>
						<div className="flex items-center justify-center gap-3">
							<Button asChild>
								<Link href="/contact" className="gap-2">
									Contact Support
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-4"
										strokeWidth={1.5}
									/>
								</Link>
							</Button>
							<Button variant="outline" asChild>
								<Link href="/help">Help Center</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
