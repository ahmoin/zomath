import { PlusSignIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function EmptySection({
	label,
	onClick,
	disabled,
}: {
	label: string;
	onClick?: () => void;
	disabled?: boolean;
}) {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className="group flex min-h-[80px] flex-col items-center justify-center gap-1.5 rounded-2xl border-2 border-dashed border-muted-foreground/25 bg-transparent transition-colors hover:border-primary/40 hover:bg-muted/40 disabled:opacity-50"
		>
			<HugeiconsIcon
				icon={PlusSignIcon}
				className="size-4 text-muted-foreground group-hover:text-primary transition-colors"
				strokeWidth={2}
			/>
			<span className="text-xs text-muted-foreground">{label}</span>
		</button>
	);
}
