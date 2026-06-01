"use client";

import { CircleUser } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icons } from "@/components/icons";
import { ModeSwitcher } from "@/components/mode-switcher";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const FREE_LIMITS = { newton: 10, solve: 5, practice: 3 } as const;

const MONTHS = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const DAYS = Array.from({ length: 31 }, (_, i) => String(i + 1));

const YEARS = Array.from({ length: 100 }, (_, i) =>
	String(new Date().getFullYear() - i),
);

type UsageData = Record<"newton" | "solve" | "practice", number> | null;

const USAGE_LABELS: Record<"newton" | "solve" | "practice", string> = {
	newton: "Newton AI",
	solve: "Solve",
	practice: "Practice sessions",
};

export function SettingsSection({
	name,
	email,
	hasGithub,
	hasGoogle,
	plan = "free",
	usage,
}: {
	name: string;
	email: string;
	hasGithub: boolean;
	hasGoogle: boolean;
	plan?: string;
	usage?: UsageData;
}) {
	const [firstName, ...rest] = name.split(" ");
	const lastName = rest.join(" ");

	const systemReduced = useReducedMotion();
	const [reduceMotion, setReduceMotion] = useState(() => {
		if (typeof window !== "undefined") {
			const stored = localStorage.getItem("reduce-motion");
			return stored === "true";
		}
		return false;
	});

	useEffect(() => {
		document.documentElement.dataset.reducedMotion = String(
			reduceMotion || systemReduced,
		);
	}, [reduceMotion, systemReduced]);

	return (
		<div className="mx-auto w-full max-w-2xl px-4 py-8 md:px-6">
			<h1 className="mb-8 text-2xl font-semibold">Preferences</h1>

			<Card className="mb-10">
				<CardHeader>
					<CardTitle>Personal Information</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="mb-4 grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="first-name">First Name</Label>
							<Input id="first-name" defaultValue={firstName} />
						</div>
						<div className="space-y-2">
							<Label htmlFor="last-name">Last Name</Label>
							<Input id="last-name" defaultValue={lastName} />
						</div>
					</div>

					<div className="mb-4 space-y-2">
						<Label htmlFor="country">Country of Residence</Label>
						<Select defaultValue="us">
							<SelectTrigger id="country" className="w-full">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="us">United States</SelectItem>
								<SelectItem value="ca">Canada</SelectItem>
								<SelectItem value="gb">United Kingdom</SelectItem>
								<SelectItem value="au">Australia</SelectItem>
								<SelectItem value="de">Germany</SelectItem>
								<SelectItem value="fr">France</SelectItem>
								<SelectItem value="in">India</SelectItem>
								<SelectItem value="jp">Japan</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div className="space-y-2">
						<Label>Date of Birth</Label>
						<div className="grid grid-cols-3 gap-3">
							<Select>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Month" />
								</SelectTrigger>
								<SelectContent>
									{MONTHS.map((m) => (
										<SelectItem key={m} value={m.toLowerCase()}>
											{m}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<Select>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Day" />
								</SelectTrigger>
								<SelectContent>
									{DAYS.map((d) => (
										<SelectItem key={d} value={d}>
											{d}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<Select>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Year" />
								</SelectTrigger>
								<SelectContent>
									{YEARS.map((y) => (
										<SelectItem key={y} value={y}>
											{y}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
					</div>
				</CardContent>
				<CardFooter className="justify-end">
					<Button className="rounded-full">Save</Button>
				</CardFooter>
			</Card>

			<Card className="mb-10">
				<CardHeader>
					<CardTitle>General</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="flex items-center justify-between">
						<div>
							<p className="font-medium">Theme</p>
							<CardDescription>
								Override your browser's preferred theme settings
							</CardDescription>
						</div>
						<ModeSwitcher variant="select" />
					</div>
					<div className="flex items-center justify-between border-t pt-4">
						<div>
							<p className="font-medium">Motion</p>
							<CardDescription>
								Reduce motion effects throughout the interface
							</CardDescription>
						</div>
						<Switch
							checked={reduceMotion}
							onCheckedChange={(checked) => {
								localStorage.setItem("reduce-motion", String(checked));
								setReduceMotion(checked);
							}}
						/>
					</div>
				</CardContent>
			</Card>

			<Card className="mb-10">
				<CardHeader>
					<CardTitle>Authentication Methods</CardTitle>
				</CardHeader>
				<CardContent className="p-0 divide-y">
					<div className="flex items-center justify-between px-6 py-4">
						<div className="flex items-center gap-3">
							<Icons.gitHub className="size-5" />
							<div>
								<p className="font-medium">Connect GitHub</p>
								<p className="text-sm text-muted-foreground">
									Sync your profile and get a better experience.
								</p>
							</div>
						</div>
						<Button
							variant="outline"
							className="rounded-full"
							disabled={hasGithub}
						>
							{hasGithub ? "Connected" : "Connect"}
						</Button>
					</div>
					<div className="flex items-center justify-between px-6 py-4">
						<div className="flex items-center gap-3">
							<Icons.google className="size-5" />
							<div>
								<p className="font-medium">Connect Google</p>
								<p className="text-sm text-muted-foreground">
									Link your Google account for faster login.
								</p>
							</div>
						</div>
						<Button
							variant="outline"
							className="rounded-full"
							disabled={hasGoogle}
						>
							{hasGoogle ? "Connected" : "Connect"}
						</Button>
					</div>
					<div className="flex items-center justify-between px-6 py-4">
						<div className="flex items-center gap-3">
							{/* TODO: replace with email icon */}
							<CircleUser className="size-5" />
							<div>
								<p className="font-medium">{email}</p>
								<p className="text-sm text-muted-foreground">
									You can sign in with OTP codes sent to your email.
								</p>
							</div>
						</div>
						<Button variant="outline" className="rounded-full">
							Change Email
						</Button>
					</div>
				</CardContent>
			</Card>

			<Card className="mb-10">
				<CardHeader>
					<CardTitle>Notification Recipients</CardTitle>
					<CardDescription>
						Manage the devices which receive notifications
					</CardDescription>
				</CardHeader>
				<CardContent>
					<p className="text-sm text-muted-foreground">
						You don't have any active Notification Recipients.
					</p>
				</CardContent>
			</Card>

			<Card className="mb-10">
				<CardHeader className="flex flex-row items-center justify-between">
					<CardTitle>Daily Usage</CardTitle>
					<Badge
						variant={plan === "plus" ? "default" : "secondary"}
						className="capitalize"
					>
						{plan}
					</Badge>
				</CardHeader>
				<CardContent className="space-y-5">
					{plan === "plus" ? (
						<p className="text-sm text-muted-foreground">
							You&apos;re on Plus. All features are unlimited.
						</p>
					) : (
						<>
							{(Object.keys(FREE_LIMITS) as (keyof typeof FREE_LIMITS)[]).map(
								(feature) => {
									const used = usage?.[feature] ?? 0;
									const limit = FREE_LIMITS[feature];
									const pct = Math.min((used / limit) * 100, 100);
									return (
										<div key={feature} className="space-y-1.5">
											<div className="flex items-center justify-between text-sm">
												<span className="font-medium">
													{USAGE_LABELS[feature]}
												</span>
												<span className="text-muted-foreground">
													{used} / {limit}
												</span>
											</div>
											<Progress value={pct} className="h-2" />
										</div>
									);
								},
							)}
							<p className="text-xs text-muted-foreground pt-1">
								Resets daily at midnight UTC.
							</p>
							<Button asChild size="sm" className="rounded-full">
								<Link href="/pricing">
									Upgrade to Plus for unlimited access
								</Link>
							</Button>
						</>
					)}
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Danger Zone</CardTitle>
					<CardDescription>
						Irreversible actions for your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex items-center justify-between">
						<div>
							<p className="font-medium">Delete Account</p>
							<p className="text-sm text-muted-foreground">
								Permanently delete your account and all associated data. This
								action cannot be undone.
							</p>
						</div>
						<Button
							variant="destructive"
							className="rounded-full ml-4 shrink-0"
						>
							Delete
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
