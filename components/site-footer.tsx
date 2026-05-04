import Link from "next/link";
import { Icons } from "@/components/icons";
import { ModeSwitcher } from "@/components/mode-switcher";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/config";

const FOOTER_SECTIONS = [
	{
		title: "Product",
		links: [
			{ title: "Solve", href: "/solve" },
			{ title: "Concept Map", href: "/concepts" },
			{ title: "Practice", href: "/practice" },
			{ title: "Progress", href: "/progress" },
			{ title: "Meet Newton", href: "/newton" },
		],
	},
	{
		title: "Topics",
		links: [
			{ title: "Algebra", href: "/algebra" },
			{ title: "Geometry", href: "/geometry" },
			{ title: "Calculus", href: "/calculus" },
			{ title: "Statistics", href: "/statistics" },
			{ title: "Competition Math", href: "/competition" },
		],
	},
	{
		title: "Plans",
		links: [
			{ title: "Pricing", href: "/pricing" },
			{ title: "For Students", href: "/students" },
			{ title: "For Schools", href: "/schools" },
			{ title: "Contact Sales", href: "/contact" },
		],
	},
	{
		title: "Help",
		links: [
			{ title: "Help Center", href: "/help" },
			{ title: "Community", href: "/community" },
			{ title: "Status", href: "/status" },
			{ title: "Security", href: "/security" },
		],
	},
	{
		title: "Company",
		links: [
			{ title: "About", href: "/about" },
			{ title: "Blog", href: "/blog" },
			{ title: "Careers", href: "/careers" },
			{ title: "Press", href: "/press" },
		],
	},
];

export function SiteFooter() {
	return (
		<div className="flex flex-col">
			<footer className="border-t">
				<div className="mx-auto max-w-(--breakpoint-xl)">
					<div className="grid grid-cols-2 gap-x-8 gap-y-10 px-6 py-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 xl:px-0">
						<div className="col-span-full xl:col-span-2">
							<Link href="/" className="flex items-center gap-2 shrink-0">
								<Icons.logo className="size-8" />
								<span className="font-medium text-base">{siteConfig.name}</span>
							</Link>

							<p className="mt-4 text-muted-foreground">
								AI-powered math learning that builds real understanding, not
								just answers.
							</p>
						</div>

						{FOOTER_SECTIONS.map(({ title, links }) => (
							<div key={title}>
								<h6 className="font-medium">{title}</h6>
								<ul className="mt-6 space-y-2">
									{links.map(({ title, href }) => (
										<li key={title}>
											<Button variant="ghost" asChild>
												<Link
													className="text-muted-foreground hover:text-foreground"
													href={href}
												>
													{title}
												</Link>
											</Button>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
					<Separator />
					<div className="flex flex-col-reverse items-center justify-between gap-x-2 gap-y-5 px-6 py-8 sm:flex-row xl:px-0">
						<div className="flex items-center gap-1 text-muted-foreground">
							<Button variant="ghost" size="icon-sm" asChild>
								<Link href="https://x.com/ZomathHQ" target="_blank">
									{/* <Icons.x className="size-4" /> */}
								</Link>
							</Button>
							<Button variant="ghost" size="icon-sm" asChild>
								<Link
									href="https://linkedin.com/company/zomathhq"
									target="_blank"
								>
									{/* <Icons.linkedin className="size-4" /> */}
								</Link>
							</Button>
							<Button variant="ghost" size="icon-sm" asChild>
								<Link href="https://www.youtube.com/@ZomathHQ" target="_blank">
									{/* <Icons.youtube className="size-4" /> */}
								</Link>
							</Button>
							<Button variant="ghost" size="icon-sm" asChild>
								<Link href="https://www.instagram.com/zomathhq" target="_blank">
									{/* <Icons.instagram className="size-4" /> */}
								</Link>
							</Button>
							<Button variant="ghost" size="icon-sm" asChild>
								<Link href="https://www.tiktok.com/@ZomathHQ" target="_blank">
									{/* <Icons.tiktok className="size-4" /> */}
								</Link>
							</Button>
							<Button variant="ghost" size="icon-sm" asChild>
								<Link href="https://www.pinterest.com/zomathhq" target="_blank">
									{/* <Icons.pinterest className="size-4" /> */}
								</Link>
							</Button>
						</div>

						<div className="flex items-center gap-2">
							<ModeSwitcher />
						</div>

						<div className="flex items-center gap-5">
							<Button variant="ghost" asChild>
								<Link href="/privacy" target="_blank">
									Privacy
								</Link>
							</Button>
							<Button variant="ghost" asChild>
								<Link href="/terms" target="_blank">
									Terms
								</Link>
							</Button>
							<span className="text-muted-foreground">
								&copy; {new Date().getFullYear()}{" "}
								<Link href="/" target="_blank">
									Zomath.
								</Link>{" "}
								All rights reserved.
							</span>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
