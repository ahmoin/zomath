export function GeometryDiagram({ className }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 400 300"
			className={className}
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				cx="200"
				cy="150"
				r="100"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
			/>
			<polygon
				points="200,50 300,230 100,230"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
			/>
			<line
				x1="100"
				y1="230"
				x2="200"
				y2="50"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
			<line
				x1="300"
				y1="230"
				x2="200"
				y2="50"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
			<line
				x1="100"
				y1="230"
				x2="300"
				y2="230"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
			<line
				x1="200"
				y1="50"
				x2="200"
				y2="150"
				stroke="currentColor"
				strokeWidth="1"
				strokeDasharray="6,4"
			/>
			<line
				x1="150"
				y1="140"
				x2="250"
				y2="140"
				stroke="currentColor"
				strokeWidth="1"
				strokeDasharray="6,4"
			/>
			<circle cx="200" cy="150" r="3" fill="currentColor" />
			<circle cx="200" cy="50" r="3" fill="currentColor" />
			<circle cx="300" cy="230" r="3" fill="currentColor" />
			<circle cx="100" cy="230" r="3" fill="currentColor" />
			<line
				x1="300"
				y1="230"
				x2="100"
				y2="230"
				stroke="currentColor"
				strokeWidth="1"
				strokeDasharray="3,3"
			/>
		</svg>
	);
}
