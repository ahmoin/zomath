"use client";

import {
	BookOpen01Icon,
	ChartHistogramIcon,
	Clock01Icon,
	DashboardSquare01Icon,
	HelpCircleIcon,
	Settings05Icon,
	SparklesIcon,
	Trophy,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import type * as React from "react";
import { useCallback, useState } from "react";
import { Icons } from "@/components/icons";
import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { authClient } from "@/lib/auth-client";
import { siteConfig } from "@/lib/config";
import type { RecentItem } from "@/lib/types";

function HistoryHoverItem() {
	const [items, setItems] = useState<RecentItem[]>([]);
	const [loaded, setLoaded] = useState(false);

	const load = useCallback(() => {
		if (loaded) return;
		fetch("/api/history")
			.then((r) => r.json())
			.then((data: { items: RecentItem[] }) => {
				setItems(data.items);
				setLoaded(true);
			})
			.catch(() => {});
	}, [loaded]);

	return (
		<HoverCard openDelay={300} closeDelay={100}>
			<HoverCardTrigger asChild onMouseEnter={load}>
				<SidebarMenuButton asChild tooltip="History">
					<Link href="/history">
						<HugeiconsIcon icon={Clock01Icon} strokeWidth={2} />
						<span>History</span>
					</Link>
				</SidebarMenuButton>
			</HoverCardTrigger>
			<HoverCardContent side="right" align="start" className="w-64 p-2">
				<p className="px-2 py-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
					Recent
				</p>
				{items.length === 0 ? (
					<p className="px-2 py-1 text-xs text-muted-foreground">Nothing yet</p>
				) : (
					<div className="flex flex-col">
						{items.map((item) => (
							<Link
								key={`${item.type}-${item.id}`}
								href={item.href}
								className="truncate rounded-lg px-2 py-1.5 text-sm hover:bg-muted"
							>
								{item.title}
							</Link>
						))}
					</div>
				)}
			</HoverCardContent>
		</HoverCard>
	);
}

const data = {
	navMain: [
		{
			title: "Dashboard",
			url: "/",
			icon: <HugeiconsIcon icon={DashboardSquare01Icon} strokeWidth={2} />,
		},
		{
			title: "Progress",
			url: "/progress",
			icon: <HugeiconsIcon icon={ChartHistogramIcon} strokeWidth={2} />,
		},
		{
			title: "Practice",
			url: "/practice",
			icon: <HugeiconsIcon icon={BookOpen01Icon} strokeWidth={2} />,
		},
	],
	navClouds: [],
	navSecondary: [
		{
			title: "Settings",
			url: "/settings",
			icon: <HugeiconsIcon icon={Settings05Icon} strokeWidth={2} />,
		},
		{
			title: "Help",
			url: "/help",
			icon: <HugeiconsIcon icon={HelpCircleIcon} strokeWidth={2} />,
		},
	],
	documents: [
		{
			name: "Newton AI",
			url: "/newton",
			icon: <HugeiconsIcon icon={SparklesIcon} strokeWidth={2} />,
		},
		{
			name: "Competitions",
			url: "/competition",
			icon: <HugeiconsIcon icon={Trophy} strokeWidth={2} />,
		},
	],
};

function UpgradeBanner() {
	const { data: session } = authClient.useSession();
	const isPlus =
		(session?.user as { plan?: string } | undefined)?.plan === "plus";

	if (isPlus) return null;

	return (
		<div className="group/upgrade relative overflow-hidden border-t p-4 text-xs">
			<div className="flex flex-col gap-1">
				<span className="font-medium text-foreground">
					Unlock unlimited access
				</span>
				<p className="text-muted-foreground leading-5">
					Newton, Solve &amp; Practice with no daily limits.
				</p>
			</div>
			<div className="h-0 overflow-hidden opacity-0 transition-[height,opacity] duration-200 sm:group-hover/upgrade:h-7 sm:group-hover/upgrade:opacity-100">
				<div className="pt-3">
					<Link
						href="/pricing"
						className="font-medium text-foreground underline-offset-2 hover:underline text-xs"
					>
						Upgrade to Plus →
					</Link>
				</div>
			</div>
		</div>
	);
}

export function AppSidebar({
	user,
	...props
}: React.ComponentProps<typeof Sidebar> & {
	user: {
		name: string;
		email: string;
		avatar?: string | null;
	};
}) {
	return (
		<Sidebar collapsible="offcanvas" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							asChild
							className="data-[slot=sidebar-menu-button]:p-1.5!"
						>
							<Link href="/">
								<Icons.logo className="size-5!" />
								<span className="text-base font-semibold">
									{siteConfig.name}
								</span>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} historySlot={<HistoryHoverItem />} />
				<NavDocuments items={data.documents} />
				<NavSecondary items={data.navSecondary} className="mt-auto" />
			</SidebarContent>
			<SidebarFooter>
				<UpgradeBanner />
				<NavUser user={user} />
			</SidebarFooter>
		</Sidebar>
	);
}
