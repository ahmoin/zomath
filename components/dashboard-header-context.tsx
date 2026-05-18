"use client";

import {
	createContext,
	type ReactNode,
	useCallback,
	useContext,
	useMemo,
	useState,
} from "react";

const HeaderSlotContext = createContext<{
	right: ReactNode;
	setRight: (node: ReactNode) => void;
} | null>(null);

export function HeaderSlotProvider({ children }: { children: ReactNode }) {
	const [right, setRightState] = useState<ReactNode>(null);
	const setRight = useCallback((node: ReactNode) => setRightState(node), []);
	const value = useMemo(() => ({ right, setRight }), [right, setRight]);
	return (
		<HeaderSlotContext.Provider value={value}>
			{children}
		</HeaderSlotContext.Provider>
	);
}

const fallback = { right: null, setRight: () => {} };

export function useHeaderSlot() {
	return useContext(HeaderSlotContext) ?? fallback;
}
