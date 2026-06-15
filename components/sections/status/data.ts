import {
	AlertCircleIcon,
	BrainIcon,
	Camera02Icon,
	CancelCircleIcon,
	ChartBarLineIcon,
	CheckmarkCircle02Icon,
	Clock01Icon,
	InformationCircleIcon,
	Shield01Icon,
	TangentIcon,
	Tap01Icon,
} from "@hugeicons/core-free-icons";

export const services = [
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

export const incidents = [
	{
		id: "inc-024",
		title: "Site experiencing slow responses",
		date: "May 5, 2026",
		severity: "degraded" as const,
		resolved: true,
		timeline: [
			{
				time: "2:15 PM UTC",
				label: "Investigating",
				detail:
					"We detected increased latency in site responses. Average response time rose from 0.8s to 3.5s.",
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
					"Site is fully operational. Response times are back to expected levels. We are adjusting our rollout strategy to prevent recurrence.",
			},
		],
	},
];

export const uptimeHistory = [{ month: "May", uptime: 99.96 }];

export type StatusType = "operational" | "degraded" | "major" | "maintenance";

export function getStatusConfig(status: string) {
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
