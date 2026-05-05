"use client";

import {
	Analytics01Icon,
	Camera01Icon,
	ChartHistogramIcon,
	CommandIcon,
	DashboardSquare01Icon,
	Database01Icon,
	File01Icon,
	Folder01Icon,
	HelpCircleIcon,
	Menu01Icon,
	SearchIcon,
	Settings05Icon,
	UserGroupIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type * as React from "react";
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

const data = {
	navMain: [
		{
			title: "Dashboard",
			url: "#",
			icon: <HugeiconsIcon icon={DashboardSquare01Icon} strokeWidth={2} />,
		},
		{
			title: "Lifecycle",
			url: "#",
			icon: <HugeiconsIcon icon={Menu01Icon} strokeWidth={2} />,
		},
		{
			title: "Analytics",
			url: "#",
			icon: <HugeiconsIcon icon={ChartHistogramIcon} strokeWidth={2} />,
		},
		{
			title: "Projects",
			url: "#",
			icon: <HugeiconsIcon icon={Folder01Icon} strokeWidth={2} />,
		},
		{
			title: "Team",
			url: "#",
			icon: <HugeiconsIcon icon={UserGroupIcon} strokeWidth={2} />,
		},
	],
	navClouds: [
		{
			title: "Capture",
			icon: <HugeiconsIcon icon={Camera01Icon} strokeWidth={2} />,
			isActive: true,
			url: "#",
			items: [
				{
					title: "Active Proposals",
					url: "#",
				},
				{
					title: "Archived",
					url: "#",
				},
			],
		},
		{
			title: "Proposal",
			icon: <HugeiconsIcon icon={File01Icon} strokeWidth={2} />,
			url: "#",
			items: [
				{
					title: "Active Proposals",
					url: "#",
				},
				{
					title: "Archived",
					url: "#",
				},
			],
		},
		{
			title: "Prompts",
			icon: <HugeiconsIcon icon={File01Icon} strokeWidth={2} />,
			url: "#",
			items: [
				{
					title: "Active Proposals",
					url: "#",
				},
				{
					title: "Archived",
					url: "#",
				},
			],
		},
	],
	navSecondary: [
		{
			title: "Settings",
			url: "#",
			icon: <HugeiconsIcon icon={Settings05Icon} strokeWidth={2} />,
		},
		{
			title: "Get Help",
			url: "#",
			icon: <HugeiconsIcon icon={HelpCircleIcon} strokeWidth={2} />,
		},
		{
			title: "Search",
			url: "#",
			icon: <HugeiconsIcon icon={SearchIcon} strokeWidth={2} />,
		},
	],
	documents: [
		{
			name: "Data Library",
			url: "#",
			icon: <HugeiconsIcon icon={Database01Icon} strokeWidth={2} />,
		},
		{
			name: "Reports",
			url: "#",
			icon: <HugeiconsIcon icon={Analytics01Icon} strokeWidth={2} />,
		},
		{
			name: "Word Assistant",
			url: "#",
			icon: <HugeiconsIcon icon={File01Icon} strokeWidth={2} />,
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
							<a href="#">
								<HugeiconsIcon
									icon={CommandIcon}
									strokeWidth={2}
									className="size-5!"
								/>
								<span className="text-base font-semibold">Acme Inc.</span>
							</a>
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
