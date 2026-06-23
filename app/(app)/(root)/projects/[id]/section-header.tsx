import { HugeiconsIcon } from "@hugeicons/react";

export function SectionHeader({
	icon,
	label,
	count,
	children,
}: {
	icon: React.ComponentProps<typeof HugeiconsIcon>["icon"];
	label: string;
	count: number;
	children?: React.ReactNode;
}) {
	return (
		<div className="flex items-center justify-between">
			<div className="flex items-center gap-2">
				<HugeiconsIcon
					icon={icon}
					className="size-4 text-muted-foreground"
					strokeWidth={2}
				/>
				<h2 className="text-sm font-semibold tracking-tight">{label}</h2>
				{count > 0 && (
					<span className="flex size-5 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground">
						{count}
					</span>
				)}
			</div>
			<div className="flex items-center gap-2">{children}</div>
		</div>
	);
}
