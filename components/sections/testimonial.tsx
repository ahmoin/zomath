import { FiveStars } from "@/components/five-stars";

export function TestimonialSection({
	quote,
	name,
	title,
}: {
	quote: string;
	name: string;
	title: string;
}) {
	return (
		<section className="w-full py-24 lg:py-32">
			<div className="mx-auto max-w-lg px-4 text-center">
				<div className="flex justify-center gap-2 text-primary mb-6">
					<FiveStars className="size-7 fill-current" />
				</div>
				<p className="text-2xl font-medium text-balance leading-snug mb-4">
					"{quote}"
				</p>
				<p className="text-sm text-muted-foreground">
					{name}, {title}
				</p>
			</div>
		</section>
	);
}
