"use client";

import { Contact } from "@/components/sections/status/contact";
import { Hero } from "@/components/sections/status/hero";
import { IncidentHistory } from "@/components/sections/status/incident-history";
import { Maintenance } from "@/components/sections/status/maintenance";
import { ServiceHealth } from "@/components/sections/status/service-health";
import { Subscribe } from "@/components/sections/status/subscribe";
import { UptimeOverview } from "@/components/sections/status/uptime-overview";

export function StatusSection() {
	return (
		<main className="min-h-svh">
			<Hero />
			<ServiceHealth />
			<UptimeOverview />
			<IncidentHistory />
			<Maintenance />
			<Subscribe />
			<Contact />
		</main>
	);
}
