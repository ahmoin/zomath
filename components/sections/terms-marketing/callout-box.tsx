import type { ReactNode } from "react";

const styles = {
	info: "border-primary/30 bg-primary/5",
	warning: "border-amber-500/40 bg-amber-500/5 dark:bg-amber-500/10",
	important: "border-primary/50 bg-muted/60",
};

export function CalloutBox({
	children,
	variant = "info",
}: {
	children: ReactNode;
	variant?: "info" | "warning" | "important";
}) {
	return (
		<div className={`rounded-lg border-l-4 p-5 ${styles[variant]}`}>
			{children}
		</div>
	);
}
