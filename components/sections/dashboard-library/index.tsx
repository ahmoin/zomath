"use client";

import { GridIcon, LayoutList } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
import { JournalsSection } from "@/components/sections/dashboard-library/journals-section";
import { ProjectsSection } from "@/components/sections/dashboard-library/projects-section";
import { Button } from "@/components/ui/button";
import type { Journal, Project, ViewMode } from "@/lib/types";

export function DashboardLibrary({
	projects = [],
	journals = [],
}: {
	projects?: Project[];
	journals?: Journal[];
}) {
	const [view, setView] = useState<ViewMode>("grid");

	return (
		<div className="flex flex-col gap-10 px-4 lg:px-6 pb-8">
			<div className="flex items-center justify-end gap-1">
				<Button
					variant={view === "grid" ? "outline" : "ghost"}
					size="sm"
					onClick={() => setView("grid")}
				>
					<HugeiconsIcon icon={GridIcon} className="size-4" strokeWidth={2} />
					Grid
				</Button>
				<Button
					variant={view === "list" ? "outline" : "ghost"}
					size="sm"
					onClick={() => setView("list")}
				>
					<HugeiconsIcon icon={LayoutList} className="size-4" strokeWidth={2} />
					List
				</Button>
			</div>
			<ProjectsSection projects={projects} view={view} />
			<JournalsSection journals={journals} view={view} />
		</div>
	);
}
