"use client"

import * as React from "react"
import {
  ArrowDownIcon,
  ArrowUpDownIcon,
  ArrowUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  DownloadIcon,
  EllipsisVerticalIcon,
  SearchIcon,
  SearchXIcon,
} from "lucide-react"
import {
  createColumnHelper,
  createPaginatedRowModel,
  createSortedRowModel,
  FlexRender,
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  tableFeatures,
  useTable,
  type SortingState,
} from "@tanstack/react-table"

import { Button } from "nooxit-design-system/components/button"
import { Checkbox } from "nooxit-design-system/components/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "nooxit-design-system/components/dropdown-menu"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "nooxit-design-system/components/empty"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "nooxit-design-system/components/input-group"
import { Label } from "nooxit-design-system/components/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "nooxit-design-system/components/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "nooxit-design-system/components/table"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "nooxit-design-system/components/tabs"
import { cn } from "nooxit-design-system/lib/utils"

import { AgentAvatar } from "./agent-avatar"
import { CaseSheet } from "./case-sheet"
import { useCockpit } from "./cockpit-store"
import {
  agentById,
  agents,
  formatAge,
  formatAmount,
  OVERDUE_HOURS,
  type AgentId,
  type Case,
  type CaseStatus,
} from "./data"
import { PageHeader } from "./page-header"
import { StatusBadge } from "./reason-badge"

const features = tableFeatures({
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  paginatedRowModel: createPaginatedRowModel(),
  sortedRowModel: createSortedRowModel(),
})

const columnHelper = createColumnHelper<typeof features, Case>()

function SortButton({
  label,
  sorted,
  onClick,
  align = "left",
}: {
  label: string
  sorted: false | "asc" | "desc"
  onClick: ((event: unknown) => void) | undefined
  align?: "left" | "right"
}) {
  const Icon =
    sorted === "asc"
      ? ArrowUpIcon
      : sorted === "desc"
        ? ArrowDownIcon
        : ArrowUpDownIcon
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "-mx-1 inline-flex items-center gap-1 rounded-sm px-1 outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary",
        align === "right" && "flex-row-reverse"
      )}
      aria-label={`Sort by ${label.toLowerCase()}`}
    >
      {label}
      <Icon className={cn("size-3.5", !sorted && "text-muted-foreground")} />
    </button>
  )
}

const columns = columnHelper.columns([
  columnHelper.display({
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all cases on this page"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        onClick={(event) => event.stopPropagation()}
        aria-label={`Select ${row.original.reference}`}
      />
    ),
    enableSorting: false,
  }),
  columnHelper.accessor("reference", {
    header: "Case",
    cell: ({ row }) => (
      <span className="flex min-w-0 flex-col">
        <span className="truncate font-mono text-xs leading-4 font-medium tabular-nums">
          {row.original.reference}
        </span>
        <span className="truncate text-sm leading-5 text-muted-foreground">
          {row.original.title}
        </span>
      </span>
    ),
    enableSorting: false,
  }),
  columnHelper.accessor("agent", {
    header: "Agent",
    cell: ({ row }) => (
      <span className="flex items-center gap-2 whitespace-nowrap">
        <AgentAvatar agent={row.original.agent} size="xs" />
        {agentById[row.original.agent].short}
      </span>
    ),
    enableSorting: false,
  }),
  columnHelper.accessor("supplier", {
    header: "Supplier",
    cell: ({ row }) => (
      <span className="block max-w-52 truncate text-muted-foreground">
        {row.original.supplier}
      </span>
    ),
    enableSorting: false,
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: ({ row }) => <StatusBadge value={row.original.status} />,
    enableSorting: false,
  }),
  columnHelper.accessor((row) => row.amount ?? 0, {
    id: "amount",
    header: ({ column }) => (
      <div className="text-right">
        <SortButton
          label="Impact"
          align="right"
          sorted={column.getIsSorted()}
          onClick={column.getToggleSortingHandler()}
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="text-right font-mono text-xs font-medium tabular-nums">
        {formatAmount(row.original.amount)}
      </div>
    ),
  }),
  columnHelper.accessor("hours", {
    header: ({ column }) => (
      <div className="text-right">
        <SortButton
          label="Age"
          align="right"
          sorted={column.getIsSorted()}
          onClick={column.getToggleSortingHandler()}
        />
      </div>
    ),
    cell: ({ row }) => {
      const { hours, status } = row.original
      const overdue = status === "waiting" && hours >= OVERDUE_HOURS
      return (
        <div
          className={cn(
            "text-right font-mono text-xs whitespace-nowrap tabular-nums",
            overdue ? "font-medium text-destructive" : "text-muted-foreground"
          )}
        >
          {formatAge(hours)}
          {overdue ? <span className="sr-only"> (overdue)</span> : null}
        </div>
      )
    },
  }),
  columnHelper.display({
    id: "actions",
    header: () => <span className="sr-only">Actions</span>,
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={(event) => event.stopPropagation()}
            aria-label={`Actions for ${row.original.reference}`}
          >
            <EllipsisVerticalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-44"
          onClick={(event) => event.stopPropagation()}
        >
          <DropdownMenuItem>Assign to…</DropdownMenuItem>
          <DropdownMenuItem>Copy reference</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Open in SAP</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    enableSorting: false,
  }),
])

type Tab = "all" | CaseStatus

const tabs: { value: Tab; label: string }[] = [
  { value: "all", label: "All" },
  { value: "waiting", label: "Waiting on you" },
  { value: "in-progress", label: "In progress" },
  { value: "done", label: "Done" },
  { value: "rejected", label: "Rejected" },
]

export function OperationsView() {
  const { cases, decide } = useCockpit()
  const [tab, setTab] = React.useState<Tab>("waiting")
  const [agent, setAgent] = React.useState<AgentId | "all">("all")
  const [query, setQuery] = React.useState("")
  const [openId, setOpenId] = React.useState<string | null>(null)
  const [sorting, setSorting] = React.useState<SortingState>([
    { id: "hours", desc: true },
  ])
  const [rowSelection, setRowSelection] = React.useState({})
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  })

  const counts = React.useMemo(() => {
    const byStatus = { all: cases.length } as Record<Tab, number>
    for (const t of tabs.slice(1))
      byStatus[t.value] = cases.filter((c) => c.status === t.value).length
    return byStatus
  }, [cases])

  const data = React.useMemo(() => {
    const needle = query.trim().toLowerCase()
    return cases.filter(
      (c) =>
        (tab === "all" || c.status === tab) &&
        (agent === "all" || c.agent === agent) &&
        (!needle ||
          [c.reference, c.title, c.supplier].some((field) =>
            field.toLowerCase().includes(needle)
          ))
    )
  }, [cases, tab, agent, query])

  // A new filter starts from the first page with nothing selected.
  React.useEffect(() => {
    setPagination((p) => ({ ...p, pageIndex: 0 }))
    setRowSelection({})
  }, [tab, agent, query])

  const table = useTable({
    features,
    data,
    columns,
    state: { sorting, rowSelection, pagination },
    getRowId: (row) => row.id,
    enableRowSelection: true,
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
  })

  const selected = table.getSelectedRowModel().rows.map((row) => row.original)
  const selectedWaiting = selected.filter((item) => item.status === "waiting")
  const openItem = cases.find((item) => item.id === openId) ?? null

  return (
    <div className="flex flex-col gap-6 p-4 @3xl/main:p-6 @5xl/main:p-8">
      <PageHeader
        title="Operations"
        actions={
          <Button variant="outline">
            <DownloadIcon data-icon="inline-start" />
            Export
          </Button>
        }
      >
        Every case your agents opened in the last 30 days. Open a case to see
        why it stopped and decide it.
      </PageHeader>

      <Tabs
        value={tab}
        onValueChange={(value) => setTab(value as Tab)}
        className="gap-4"
      >
        <div className="-mx-4 overflow-x-auto px-4 @3xl/main:mx-0 @3xl/main:px-0">
          <TabsList variant="line" className="w-max">
            {tabs.map((t) => (
              <TabsTrigger key={t.value} value={t.value}>
                {t.label}
                <span className="font-mono text-xs font-medium text-muted-foreground tabular-nums">
                  {counts[t.value]}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <div className="flex flex-col gap-3 @3xl/main:flex-row @3xl/main:items-center">
          <InputGroup className="@3xl/main:max-w-72">
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupInput
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search reference, title or supplier"
              aria-label="Search cases"
            />
          </InputGroup>
          <Label htmlFor="agent-filter" className="sr-only">
            Agent
          </Label>
          <Select
            value={agent}
            onValueChange={(value) => setAgent(value as AgentId | "all")}
          >
            <SelectTrigger id="agent-filter" className="w-full @3xl/main:w-56">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All agents</SelectItem>
              {agents.map((a) => (
                <SelectItem key={a.id} value={a.id}>
                  {a.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {selected.length > 0 ? (
            <div
              className="flex items-center gap-2 @3xl/main:ml-auto"
              role="status"
            >
              <span className="text-sm leading-5 text-muted-foreground">
                {selected.length} selected
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setRowSelection({})}
              >
                Clear
              </Button>
              <Button
                size="sm"
                disabled={selectedWaiting.length === 0}
                onClick={() => {
                  decide(
                    selectedWaiting.map((item) => item.id),
                    "accepted"
                  )
                  setRowSelection({})
                }}
              >
                Accept {selectedWaiting.length}
              </Button>
            </div>
          ) : null}
        </div>
      </Tabs>

      <div className="overflow-hidden rounded-lg border border-border">
        {data.length === 0 ? (
          <Empty className="py-16">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <SearchXIcon />
              </EmptyMedia>
              <EmptyTitle>No cases match</EmptyTitle>
              <EmptyDescription>
                Try another status or agent, or clear the search.
              </EmptyDescription>
            </EmptyHeader>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setQuery("")
                setAgent("all")
                setTab("all")
              }}
            >
              Clear filters
            </Button>
          </Empty>
        ) : (
          <Table>
            <TableHeader className="bg-muted">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="hover:bg-transparent">
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      className={cn(
                        header.column.id === "select" && "w-10 pl-4",
                        header.column.id === "actions" && "w-12 pr-4",
                        header.column.id === "supplier" &&
                          "hidden @4xl/main:table-cell",
                        header.column.id === "agent" &&
                          "hidden @3xl/main:table-cell",
                        header.column.id === "amount" &&
                          "hidden @5xl/main:table-cell",
                        header.column.id === "status" &&
                          "hidden @xl/main:table-cell"
                      )}
                    >
                      {header.isPlaceholder ? null : (
                        <FlexRender header={header} />
                      )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() ? "selected" : undefined}
                  className="cursor-pointer"
                  onClick={() => setOpenId(row.original.id)}
                  onKeyDown={(event) => {
                    if (
                      event.key === "Enter" &&
                      event.target === event.currentTarget
                    ) {
                      setOpenId(row.original.id)
                    }
                  }}
                  tabIndex={0}
                  aria-label={`${row.original.reference}: ${row.original.title}`}
                >
                  {row.getAllCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className={cn(
                        cell.column.id === "select" && "pl-4",
                        cell.column.id === "actions" && "pr-4",
                        cell.column.id === "supplier" &&
                          "hidden @4xl/main:table-cell",
                        cell.column.id === "agent" &&
                          "hidden @3xl/main:table-cell",
                        cell.column.id === "amount" &&
                          "hidden @5xl/main:table-cell",
                        cell.column.id === "status" &&
                          "hidden @xl/main:table-cell",
                        cell.column.id === "reference" &&
                          "w-full max-w-0 @3xl/main:w-auto @3xl/main:max-w-none"
                      )}
                    >
                      <FlexRender cell={cell} />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      {data.length > 0 ? (
        <div className="flex items-center justify-between gap-4">
          <p className="hidden text-sm leading-5 text-muted-foreground @3xl/main:block">
            {data.length} {data.length === 1 ? "case" : "cases"}
          </p>
          <div className="flex w-full items-center justify-end gap-6 @3xl/main:w-auto">
            <div className="hidden items-center gap-2 @3xl/main:flex">
              <Label
                htmlFor="rows-per-page"
                className="text-sm leading-5 font-medium"
              >
                Rows per page
              </Label>
              <Select
                value={`${pagination.pageSize}`}
                onValueChange={(value) => table.setPageSize(Number(value))}
              >
                <SelectTrigger size="sm" className="w-20" id="rows-per-page">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent side="top">
                  {[10, 20, 50].map((size) => (
                    <SelectItem key={size} value={`${size}`}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <span className="text-sm leading-5 font-medium tabular-nums">
              Page {pagination.pageIndex + 1} of {table.getPageCount()}
            </span>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon-sm"
                className="hidden @3xl/main:inline-flex"
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
                aria-label="First page"
              >
                <ChevronsLeftIcon />
              </Button>
              <Button
                variant="outline"
                size="icon-sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                aria-label="Previous page"
              >
                <ChevronLeftIcon />
              </Button>
              <Button
                variant="outline"
                size="icon-sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                aria-label="Next page"
              >
                <ChevronRightIcon />
              </Button>
              <Button
                variant="outline"
                size="icon-sm"
                className="hidden @3xl/main:inline-flex"
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
                aria-label="Last page"
              >
                <ChevronsRightIcon />
              </Button>
            </div>
          </div>
        </div>
      ) : null}

      <CaseSheet
        item={openItem}
        onOpenChange={(open) => !open && setOpenId(null)}
      />
    </div>
  )
}
