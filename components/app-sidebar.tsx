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
import { Icons } from "@/components/icons";
import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { siteConfig } from "@/lib/config";

const data = {
	navMain: [
		{
			title: "Dashboard",
			url: "/",
			icon: <HugeiconsIcon icon={DashboardSquare01Icon} strokeWidth={2} />,
		},
		{
			title: "History",
			url: "#",
			icon: <HugeiconsIcon icon={Clock01Icon} strokeWidth={2} />,
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
			url: "#",
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
				<NavMain items={data.navMain} />
				<NavDocuments items={data.documents} />
				<NavSecondary items={data.navSecondary} className="mt-auto" />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={user} />
			</SidebarFooter>
		</Sidebar>
	);
}
