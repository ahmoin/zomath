"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";

export function SiteHeader() {
	const [visible, setVisible] = useState(true);
	const lastY = useRef(0);

	useEffect(() => {
		const onScroll = () => {
			const y = window.scrollY;
			setVisible(y < lastY.current || y < 10);
			lastY.current = y;
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header
			className="fixed top-0 z-50 w-full bg-background transition-transform duration-300"
			style={{ transform: visible ? "none" : "translateY(-100%)" }}
		>
			<div className="mx-auto max-w-7xl px-6">
				<div className="flex h-20 items-center justify-between">
					<Link href="/" className="flex items-center gap-2 shrink-0">
						<Icons.logo className="size-8" />
						<span className="font-medium text-base">{siteConfig.name}</span>
					</Link>

					<MainNav items={siteConfig.navItems} className="hidden lg:flex" />
					<MobileNav items={siteConfig.navItems} className="flex lg:hidden" />

					<div className="flex items-center gap-2">
						<Button asChild variant="outline" size="sm">
							<Link href="/signup">Get started free</Link>
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
}
