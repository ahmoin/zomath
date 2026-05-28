import { useState } from "react";

export function useLocalStorage<T>(key: string, defaultValue: T) {
	const [value, setValue] = useState<T>(() => {
		try {
			const item = localStorage.getItem(key);
			return item !== null ? (JSON.parse(item) as T) : defaultValue;
		} catch {
			return defaultValue;
		}
	});

	function set(next: T) {
		try {
			localStorage.setItem(key, JSON.stringify(next));
		} catch {}
		setValue(next);
	}

	return [value, set] as const;
}
