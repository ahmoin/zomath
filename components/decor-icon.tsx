import { cn } from "@/lib/utils";

type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right";

const positionClasses: Record<Position, string> = {
	"top-left": "-top-2 -left-2",
	"top-right": "-top-2 -right-2",
	"bottom-left": "-bottom-2 -left-2",
	"bottom-right": "-bottom-2 -right-2",
};

export function DecorIcon({
	position,
	className,
}: {
	position: Position;
	className?: string;
}) {
	return (
		<div
			aria-hidden="true"
			className={cn(
				"absolute size-4 border border-border bg-background",
				positionClasses[position],
				className,
			)}
		/>
	);
}
