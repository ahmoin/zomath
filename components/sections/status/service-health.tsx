"use client";

import { DatabaseSyncIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { getStatusConfig, services } from "@/components/sections/status/data";

export function ServiceHealth() {
	return (
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
	);
}
