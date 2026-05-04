import { StarIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

interface TestimonialProps {
	quote: string;
	name: string;
	role: string;
}

export function TestimonialSection({ quote, name, role }: TestimonialProps) {
	return (
		<section className="w-full py-24 lg:py-32">
			<div className="mx-auto max-w-lg px-4 text-center">
				<div className="flex justify-center gap-2 text-primary mb-6">
					{Array.from({ length: 5 }).map((_, i) => (
						<HugeiconsIcon
							key={i}
							icon={StarIcon}
							size={28}
							strokeWidth={0}
							style={{ fill: "currentColor" }}
						/>
					))}
				</div>
				<p className="text-2xl font-medium text-balance leading-snug mb-4">
					"{quote}"
				</p>
				<p className="text-sm text-muted-foreground">
					{name}, {role}
				</p>
			</div>
		</section>
	);
}
