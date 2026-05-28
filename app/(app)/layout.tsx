export default async function AppLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div
			data-slot="layout"
			className="bg-background relative z-10 flex h-svh flex-col overflow-hidden"
		>
			<main className="flex flex-1 flex-col overflow-hidden">{children}</main>
		</div>
	);
}
