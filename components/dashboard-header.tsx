import { SidebarTrigger } from "@/components/ui/sidebar";

function getGreeting() {
	const hour = new Date().getHours();
	if (hour < 12) return "Good morning";
	if (hour < 18) return "Good afternoon";
	return "Good evening";
}

export function DashboardHeader({ name }: { name: string }) {
	return (
		<header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
			<div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
				<SidebarTrigger className="-ml-1" />
				<span className="ml-2 text-sm text-muted-foreground">
					{getGreeting()}, {name.split(" ")[0]}
				</span>
			</div>
		</header>
	);
}
