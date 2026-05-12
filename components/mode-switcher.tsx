"use client";

import { Monitor, Moon, Sun } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Script from "next/script";
import { useTheme } from "next-themes";
import type { ComponentProps } from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export const DARK_MODE_FORWARD_TYPE = "dark-mode-forward";

const options = [
	{ value: "system", icon: Monitor, label: "System" },
	{ value: "light", icon: Sun, label: "Light" },
	{ value: "dark", icon: Moon, label: "Dark" },
] as const;

interface ModeSwitcherProps extends ComponentProps<"div"> {
	variant?: "default" | "select";
}

export function ModeSwitcher({
	variant = "default",
	className,
	...props
}: ModeSwitcherProps) {
	const { setTheme, theme } = useTheme();

	if (variant === "select") {
		return (
			<Select value={theme} onValueChange={setTheme}>
				<SelectTrigger
					className={cn("w-32", className)}
					{...(props as React.ComponentPropsWithoutRef<typeof SelectTrigger>)}
				>
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					{options.map(({ value, label }) => (
						<SelectItem key={value} value={value}>
							{label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		);
	}

	return (
		<div
			className={cn(
				"flex w-fit items-center border border-border bg-background p-0.5 rounded-full",
				className,
			)}
			{...props}
		>
			{options.map(({ value, icon: Icon, label }) => (
				<span key={value}>
					<input
						className="peer sr-only"
						type="radio"
						id={`theme-switch-${value}`}
						value={value}
						checked={theme === value}
						onChange={(e) => setTheme(e.target.value)}
					/>
					<label
						htmlFor={`theme-switch-${value}`}
						className="relative flex size-7 cursor-pointer items-center justify-center text-muted-foreground transition-colors peer-checked:bg-muted peer-checked:text-foreground hover:text-foreground rounded-full"
						title={label}
					>
						<HugeiconsIcon icon={Icon} className="size-4" />
					</label>
				</span>
			))}
		</div>
	);
}
