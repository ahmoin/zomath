import { PuzzleMascots } from "@/components/sections/puzzle-mascots";

export function WhySection() {
	return (
		<section className="w-full py-24 lg:py-32">
			<div className="mx-auto max-w-4xl px-4 text-center">
				<h2 className="text-balance text-4xl font-medium lg:text-5xl mb-16">
					AI that helps you understand, not just answer
				</h2>
				<PuzzleMascots />
			</div>
		</section>
	);
}
