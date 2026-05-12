import { StarIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { ComponentProps } from "react";

interface FiveStarsProps
	extends Omit<ComponentProps<typeof HugeiconsIcon>, "icon"> {}

export function FiveStars({ className, ...props }: FiveStarsProps) {
	return (
		<>
			<HugeiconsIcon icon={StarIcon} className={className} {...props} />
			<HugeiconsIcon icon={StarIcon} className={className} {...props} />
			<HugeiconsIcon icon={StarIcon} className={className} {...props} />
			<HugeiconsIcon icon={StarIcon} className={className} {...props} />
			<HugeiconsIcon icon={StarIcon} className={className} {...props} />
		</>
	);
}
