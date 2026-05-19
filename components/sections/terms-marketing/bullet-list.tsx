export function BulletList({ items }: { items: string[] }) {
	return (
		<ul className="space-y-3">
			{items.map((item) => (
				<li
					key={item}
					className="flex gap-3 text-muted-foreground leading-relaxed"
				>
					<span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
					{item}
				</li>
			))}
		</ul>
	);
}
