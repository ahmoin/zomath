"use client";

import { Monitor, Moon, Sun } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Script from "next/script";
import { useTheme } from "next-themes";

export const DARK_MODE_FORWARD_TYPE = "dark-mode-forward";

export function ModeSwitcher() {
	const { setTheme, theme } = useTheme();

	const options = [
		{ value: "system", icon: Monitor, label: "System" },
		{ value: "light", icon: Sun, label: "Light" },
		{ value: "dark", icon: Moon, label: "Dark" },
	] as const;

	return (
		<div className="flex w-fit items-center border border-border bg-background p-0.5 rounded-full">
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

export function DarkModeScript() {
	return (
		// eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
		<Script
			id="dark-mode-listener"
			strategy="beforeInteractive"
			dangerouslySetInnerHTML={{
				__html: `
            (function() {
              // Forward D key
              document.addEventListener('keydown', function(e) {
                if ((e.key === 'd' || e.key === 'D') && !e.metaKey && !e.ctrlKey && !e.altKey) {
                  if (
                    (e.target instanceof HTMLElement && e.target.isContentEditable) ||
                    e.target instanceof HTMLInputElement ||
                    e.target instanceof HTMLTextAreaElement ||
                    e.target instanceof HTMLSelectElement
                  ) {
                    return;
                  }
                  e.preventDefault();
                  if (window.parent && window.parent !== window) {
                    window.parent.postMessage({
                      type: '${DARK_MODE_FORWARD_TYPE}',
                      key: e.key
                    }, '*');
                  }
                }
              });

            })();
          `,
			}}
		/>
	);
}
