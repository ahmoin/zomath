import {
	Cancel01Icon,
	CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function ComparisonRow({
	traditional,
	zomath,
}: {
	traditional: string;
	zomath: string;
}) {
	return (
		<>
			<div className="rounded-lg bg-muted/50 p-4 flex items-start gap-2">
				<HugeiconsIcon
					icon={Cancel01Icon}
					className="size-4 text-muted-foreground shrink-0 mt-0.5"
					strokeWidth={1.5}
				/>
				<span className="text-sm text-muted-foreground">{traditional}</span>
			</div>
			<div className="rounded-lg bg-primary/5 border border-primary/20 p-4 flex items-start gap-2">
				<HugeiconsIcon
					icon={CheckmarkCircle02Icon}
					className="size-4 text-primary shrink-0 mt-0.5"
					strokeWidth={1.5}
				/>
				<span className="text-sm text-foreground">{zomath}</span>
			</div>
		</>
	);
}
