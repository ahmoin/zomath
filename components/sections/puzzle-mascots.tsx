const PIECES = [
	{
		src: "/assets/personal.svg",
		rotate: "-5deg",
		heading: "Personal",
		description: "Spots your exact misconception, not a generic explanation.",
	},
	{
		src: "/assets/patient.svg",
		rotate: "5deg",
		heading: "Patient",
		description: "Never rushes, never judges. Guides at your pace.",
	},
	{
		src: "/assets/smart.svg",
		rotate: "-5deg",
		heading: "Smart",
		description: "Knows what to explain next before you even ask.",
	},
	{
		src: "/assets/clear.svg",
		rotate: "5deg",
		heading: "Clear",
		description: "Breaks down anything until it finally clicks.",
	},
];

export function PuzzleMascots() {
	return (
		<>
			<style>{`
				@keyframes puzzle-bounce {
					0%   { transform: translateY(0); }
					10%  { transform: translateY(0) scale(1.1, 0.9); }
					30%  { transform: translateY(-20px) scale(0.95, 1.05); }
					40%  { transform: translateY(0) scale(1.05, 0.95); }
					50%  { transform: translateY(-10px) scale(0.98, 1.02); }
					70%  { transform: translateY(0) scale(1.02, 0.98); }
					100% { transform: translateY(0); }
				}
				.puzzle-widget {
					width: clamp(6rem, 21dvw, 10rem);
					height: clamp(6rem, 21dvw, 10rem);
					background-repeat: no-repeat;
					background-size: contain;
					background-position: top center;
					cursor: pointer;
					flex-shrink: 0;
				}
				.puzzle-widget:hover {
					animation: puzzle-bounce 0.8s;
				}
			`}</style>
			<div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
				{PIECES.map(({ src, rotate, heading, description }) => (
					<div key={src} className="flex flex-col items-center text-center">
						<div
							className="puzzle-widget"
							style={{ backgroundImage: `url(${src})`, rotate }}
						/>
						<h3 className="mt-3 text-xl font-medium">{heading}</h3>
						<p className="mt-1 text-sm text-muted-foreground text-balance max-w-[16ch]">
							{description}
						</p>
					</div>
				))}
			</div>
		</>
	);
}
