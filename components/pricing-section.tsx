"use client";

import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { type FREQUENCY, FrequencyToggle } from "@/components/frequency-toggle";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle04Icon, StarIcon } from "@hugeicons/core-free-icons";

type Plan = {
	name: string;
	info: string;
	price: { monthly: number; yearly: number } | { display: string | null };
	features: string[];
	btn: {
		text: string;
		href: string;
	};
	highlighted?: boolean;
};

const plans: Plan[] = [
	{
		name: "Free",
		info: "Get started at no cost",
		price: { monthly: 0, yearly: 0 },
		features: [
			"Ask Newton up to 10 questions/day",
			"Solve up to 5 problems/day",
			"3 practice sessions/day",
			"Unlimited journals",
		],
		btn: {
			text: "Get started free",
			href: "/sign-up",
		},
	},
	{
		highlighted: true,
		name: "Plus",
		info: "For serious learners",
		price: { monthly: 10, yearly: 8 },
		features: [
			"Unlimited Newton conversations",
			"Unlimited Solve",
			"Full Concept Map with prerequisites",
			"Adaptive practice sets",
			"Progress dashboard",
			"Priority support",
		],
		btn: {
			text: "Get started",
			href: "/sign-up",
		},
	},
	{
		name: "Schools",
		info: "For schools and districts",
		price: { display: null },
		features: [
			"Everything in Plus for every student",
			"Teacher dashboard and analytics",
			"Smart assignments and differentiation",
			"LMS integration (Canvas, Schoology, Google Classroom)",
			"Clever and ClassLink SSO",
			"Dedicated success manager",
			"Custom pricing by teacher and student count",
		],
		btn: {
			text: "Contact sales",
			href: "#contact",
		},
	},
];

type PricingSectionProps = {
	title?: string;
	description?: string;
};

export function PricingSection({
	title = "Simple, Transparent Pricing",
	description = "Start free, upgrade when you're ready. No hidden fees.",
}: PricingSectionProps) {
	const [frequency, setFrequency] = React.useState<FREQUENCY>("monthly");

	return (
		<div className="flex w-full flex-col items-center justify-center space-y-7 p-4">
			<div className="mx-auto max-w-xl space-y-2">
				<h2 className="text-center font-bold text-2xl tracking-tight md:text-3xl lg:font-extrabold lg:text-4xl">
					{title}
				</h2>
				<p className="text-center text-muted-foreground text-sm md:text-base">
					{description}
				</p>
			</div>
			<FrequencyToggle frequency={frequency} setFrequency={setFrequency} />
			<div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
				{plans.map((plan) => (
					<PricingCard frequency={frequency} key={plan.name} plan={plan} />
				))}
			</div>
			<p className="text-center text-sm text-muted-foreground">
				All plans include full access to Newton, the AI tutor. Volume discounts
				available for multi-school and district-wide deployments.
			</p>
		</div>
	);
}

type PricingCardProps = React.ComponentProps<"div"> & {
	plan: Plan;
	frequency?: FREQUENCY;
};

export function PricingCard({
	plan,
	className,
	frequency = "monthly",
	...props
}: PricingCardProps) {
	const isNumeric = "monthly" in plan.price;
	const numericPrice = isNumeric
		? (plan.price as { monthly: number; yearly: number })[frequency]
		: null;
	const displayPrice = !isNumeric
		? (plan.price as { display: string | null }).display
		: null;

	const discountPct = isNumeric
		? (() => {
				const p = plan.price as { monthly: number; yearly: number };
				return p.monthly > 0 && p.yearly < p.monthly
					? Math.round(((p.monthly - p.yearly) / p.monthly) * 100)
					: 0;
			})()
		: 0;

	return (
		<div
			className={cn(
				"relative flex w-full flex-col overflow-hidden rounded-lg border shadow-xs",
				plan.highlighted && "scale-105",
				className,
			)}
			{...props}
		>
			<div
				className={cn(
					"border-b p-4",
					plan.highlighted && "bg-card dark:bg-card/80",
				)}
			>
				<AnimatePresence mode="wait">
					<div className="absolute top-2 right-2 z-10 flex items-center gap-2">
						{plan.highlighted && (
							<motion.div
								className="flex items-center gap-1 rounded-md border bg-background px-2 py-0.5 text-xs"
								key="popular-badge"
								layout
								transition={{ duration: 0.1 }}
							>
								<HugeiconsIcon
									icon={StarIcon}
									strokeWidth={2}
									className="size-3 fill-current"
								/>
								Popular
							</motion.div>
						)}
						{frequency === "yearly" && discountPct > 0 && (
							<motion.div
								animate={{ opacity: 1 }}
								className="flex items-center gap-1 rounded-md border bg-primary px-2 py-0.5 text-primary-foreground text-xs"
								exit={{ opacity: 0 }}
								initial={{ opacity: 0 }}
								key="discount-badge"
								layout
								transition={{ duration: 0.15 }}
							>
								{discountPct}% off
							</motion.div>
						)}
					</div>
				</AnimatePresence>
				<div className="font-medium text-lg">{plan.name}</div>
				<p className="font-normal text-muted-foreground text-sm">{plan.info}</p>
				<h3 className="mt-6 mb-1 flex w-max items-end gap-1">
					{isNumeric && numericPrice !== null ? (
						numericPrice === 0 ? (
							<span className="font-extrabold text-3xl tracking-tight">
								Free
							</span>
						) : (
							<NumberFlow
								className="font-extrabold text-3xl [&::part(suffix)]:font-normal [&::part(suffix)]:text-base [&::part(suffix)]:text-muted-foreground"
								format={{
									style: "currency",
									currency: "USD",
									notation: "compact",
								}}
								suffix="/month"
								value={numericPrice as number}
							/>
						)
					) : displayPrice ? (
						<span className="font-extrabold text-3xl tracking-tight">
							{displayPrice}
						</span>
					) : (
						<span className="font-extrabold text-3xl tracking-tight">
							Let&apos;s talk
						</span>
					)}
				</h3>
				<p className="mb-2 font-normal text-muted-foreground text-xs">
					{isNumeric && numericPrice === 0
						? "free to start"
						: isNumeric
							? `billed ${frequency}`
							: "custom pricing for your school"}
				</p>
			</div>
			<div
				className={cn(
					"space-y-3 px-4 pt-6 pb-8 text-muted-foreground text-sm",
					plan.highlighted && "bg-muted/10",
				)}
			>
				{plan.features.map((feature) => (
					<div className="flex items-center gap-2" key={feature}>
						<HugeiconsIcon
							icon={CheckmarkCircle04Icon}
							strokeWidth={2}
							className="size-3.5 text-foreground"
						/>
						<p>{feature}</p>
					</div>
				))}
			</div>
			<div
				className={cn(
					"mt-auto w-full border-t p-3",
					plan.highlighted && "bg-card dark:bg-card/80",
				)}
			>
				<Button
					asChild
					className="w-full"
					variant={plan.highlighted ? "default" : "outline"}
				>
					<Link href={plan.btn.href}>{plan.btn.text}</Link>
				</Button>
			</div>
		</div>
	);
}
