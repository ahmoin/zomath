export function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 w-full bg-background">
			<div className="container-wrapper px-6 group-has-data-[slot=designer]/layout:max-w-none 3xl:fixed:px-0">
				<div className="flex h-(--header-height) items-center **:data-[slot=separator]:h-4! group-has-data-[slot=designer]/layout:fixed:max-w-none 3xl:fixed:container"></div>
			</div>
		</header>
	);
}
