"use client";

import {
	ArrowDown01Icon,
	ArrowLeft01Icon,
	ArrowLeftDoubleIcon,
	ArrowRight01Icon,
	ArrowRightDoubleIcon,
	BookOpen01Icon,
	CheckmarkCircle01Icon,
	LeftToRightListBulletIcon,
	Loading03Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
	type ColumnDef,
	type ColumnFiltersState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	type SortingState,
	useReactTable,
	type VisibilityState,
} from "@tanstack/react-table";
import * as React from "react";
import { z } from "zod";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export const schema = z.object({
	id: z.number(),
	problem: z.string(),
	subject: z.string(),
	difficulty: z.enum(["Easy", "Medium", "Hard"]),
	status: z.enum(["Solved", "In Progress"]),
	score: z.number(),
	date: z.string(),
});

const columns: ColumnDef<z.infer<typeof schema>>[] = [
	{
		accessorKey: "problem",
		header: "Problem",
		cell: ({ row }) => (
			<span className="font-medium">{row.original.problem}</span>
		),
		enableHiding: false,
	},
	{
		accessorKey: "subject",
		header: "Subject",
		cell: ({ row }) => (
			<Badge variant="outline" className="px-1.5 text-muted-foreground">
				{row.original.subject}
			</Badge>
		),
	},
	{
		accessorKey: "difficulty",
		header: "Difficulty",
		cell: ({ row }) => {
			const color =
				row.original.difficulty === "Easy"
					? "text-emerald-600"
					: row.original.difficulty === "Medium"
						? "text-amber-600"
						: "text-rose-600";
			return (
				<span className={`text-sm font-medium ${color}`}>
					{row.original.difficulty}
				</span>
			);
		},
	},
	{
		accessorKey: "status",
		header: "Status",
		cell: ({ row }) => (
			<Badge variant="outline" className="px-1.5 text-muted-foreground">
				{row.original.status === "Solved" ? (
					<HugeiconsIcon
						icon={CheckmarkCircle01Icon}
						strokeWidth={2}
						className="fill-green-500 dark:fill-green-400"
					/>
				) : (
					<HugeiconsIcon icon={Loading03Icon} strokeWidth={2} />
				)}
				{row.original.status}
			</Badge>
		),
	},
	{
		accessorKey: "score",
		header: () => <div className="w-full text-right">Score</div>,
		cell: ({ row }) => (
			<div className="text-right tabular-nums">{row.original.score}%</div>
		),
	},
	{
		accessorKey: "date",
		header: "Date",
		cell: ({ row }) => (
			<span className="text-muted-foreground text-sm">{row.original.date}</span>
		),
	},
];

export function DataTable({
	data: initialData,
}: {
	data: z.infer<typeof schema>[];
}) {
	const [data] = React.useState(() => initialData);
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({});
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[],
	);
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [pagination, setPagination] = React.useState({
		pageIndex: 0,
		pageSize: 10,
	});

	const table = useReactTable({
		data,
		columns,
		state: {
			sorting,
			columnVisibility,
			columnFilters,
			pagination,
		},
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		onColumnVisibilityChange: setColumnVisibility,
		onPaginationChange: setPagination,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
	});

	return (
		<div className="w-full flex-col justify-start gap-6 px-4 lg:px-6">
			<div className="flex items-center justify-between mb-4">
				<h2 className="font-semibold">Recent problems</h2>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline" size="sm">
							<HugeiconsIcon
								icon={LeftToRightListBulletIcon}
								strokeWidth={2}
								data-icon="inline-start"
							/>
							Columns
							<HugeiconsIcon
								icon={ArrowDown01Icon}
								strokeWidth={2}
								data-icon="inline-end"
							/>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end" className="w-32">
						{table
							.getAllColumns()
							.filter(
								(column) =>
									typeof column.accessorFn !== "undefined" &&
									column.getCanHide(),
							)
							.map((column) => (
								<DropdownMenuCheckboxItem
									key={column.id}
									className="capitalize"
									checked={column.getIsVisible()}
									onCheckedChange={(value) => column.toggleVisibility(!!value)}
								>
									{column.id}
								</DropdownMenuCheckboxItem>
							))}
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			<div className="overflow-hidden rounded-lg border">
				<Table>
					<TableHeader className="sticky top-0 z-10 bg-muted">
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<TableHead key={header.id} colSpan={header.colSpan}>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext(),
												)}
									</TableHead>
								))}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && "selected"}
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext(),
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-32 text-center"
								>
									<div className="flex flex-col items-center gap-2 text-muted-foreground">
										<HugeiconsIcon
											icon={BookOpen01Icon}
											className="size-8 opacity-30"
											strokeWidth={1.5}
										/>
										<p className="text-sm">No problems solved yet.</p>
										<p className="text-xs opacity-70">
											Start solving to see your history here.
										</p>
									</div>
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<div className="flex items-center justify-between mt-4 px-1">
				<div className="text-sm text-muted-foreground">
					{table.getFilteredRowModel().rows.length} problem(s)
				</div>
				<div className="flex items-center gap-4">
					<div className="hidden items-center gap-2 lg:flex">
						<Label htmlFor="rows-per-page" className="text-sm font-medium">
							Rows per page
						</Label>
						<Select
							value={`${table.getState().pagination.pageSize}`}
							onValueChange={(value) => table.setPageSize(Number(value))}
						>
							<SelectTrigger size="sm" className="w-20" id="rows-per-page">
								<SelectValue
									placeholder={table.getState().pagination.pageSize}
								/>
							</SelectTrigger>
							<SelectContent side="top">
								<SelectGroup>
									{[10, 20, 30].map((pageSize) => (
										<SelectItem key={pageSize} value={`${pageSize}`}>
											{pageSize}
										</SelectItem>
									))}
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
					<div className="flex w-fit items-center justify-center text-sm font-medium">
						Page {table.getState().pagination.pageIndex + 1} of{" "}
						{table.getPageCount() || 1}
					</div>
					<div className="flex items-center gap-2">
						<Button
							variant="outline"
							className="hidden size-8 lg:flex"
							size="icon"
							onClick={() => table.setPageIndex(0)}
							disabled={!table.getCanPreviousPage()}
						>
							<span className="sr-only">Go to first page</span>
							<HugeiconsIcon icon={ArrowLeftDoubleIcon} strokeWidth={2} />
						</Button>
						<Button
							variant="outline"
							className="size-8"
							size="icon"
							onClick={() => table.previousPage()}
							disabled={!table.getCanPreviousPage()}
						>
							<span className="sr-only">Go to previous page</span>
							<HugeiconsIcon icon={ArrowLeft01Icon} strokeWidth={2} />
						</Button>
						<Button
							variant="outline"
							className="size-8"
							size="icon"
							onClick={() => table.nextPage()}
							disabled={!table.getCanNextPage()}
						>
							<span className="sr-only">Go to next page</span>
							<HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} />
						</Button>
						<Button
							variant="outline"
							className="hidden size-8 lg:flex"
							size="icon"
							onClick={() => table.setPageIndex(table.getPageCount() - 1)}
							disabled={!table.getCanNextPage()}
						>
							<span className="sr-only">Go to last page</span>
							<HugeiconsIcon icon={ArrowRightDoubleIcon} strokeWidth={2} />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
