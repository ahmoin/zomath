import { HeroSection } from "@/components/sections/hero";

export default function Page() {
	return (
		<div className="flex min-h-svh p-6">
			<div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
				<HeroSection />
			</div>
		</div>
	);
}
