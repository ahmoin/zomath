"use client";

import { Compliance } from "@/components/sections/security/compliance";
import { Cta } from "@/components/sections/security/cta";
import { DataOwnership } from "@/components/sections/security/data-ownership";
import { DataTable } from "@/components/sections/security/data-table";
import { Faq } from "@/components/sections/security/faq";
import { ForEducators } from "@/components/sections/security/for-educators";
import { Hero } from "@/components/sections/security/hero";
import { NewtonPrivacy } from "@/components/sections/security/newton-privacy";
import { Principles } from "@/components/sections/security/principles";
import { Protection } from "@/components/sections/security/protection";
import { Separator } from "@/components/ui/separator";

export function SecuritySection() {
	return (
		<main className="flex flex-col">
			<Hero />
			<Separator />
			<Principles />
			<Protection />
			<DataTable />
			<NewtonPrivacy />
			<Compliance />
			<DataOwnership />
			<ForEducators />
			<Faq />
			<Cta />
		</main>
	);
}
