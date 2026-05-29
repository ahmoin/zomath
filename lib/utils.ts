import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDistanceToNow } from "date-fns";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string) {
	return new Date(date).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
	});
}

export function timeAgo(date: Date) {
	return formatDistanceToNow(date, { addSuffix: true });
}
