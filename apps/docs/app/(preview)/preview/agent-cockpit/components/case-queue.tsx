"use client"

import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  CheckmarkCircle01Icon,
} from "@hugeicons/core-free-icons"

import { Badge } from "nooxit-design-system/components/badge"
import { Button } from "nooxit-design-system/components/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "nooxit-design-system/components/card"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "nooxit-design-system/components/empty"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "nooxit-design-system/components/table"
import { cn } from "nooxit-design-system/lib/utils"

import { AgentAvatar } from "./agent-avatar"
import {
  agentById,
  formatAge,
  formatAmount,
  OVERDUE_HOURS,
  type AgentId,
  type Case,
} from "./data"
import { ReasonBadge } from "./reason-badge"

const VISIBLE = 6

export function CaseQueue({
  items,
  agent,
  selectedId,
  onSelect,
}: {
  items: Case[]
  agent: AgentId | null
  selectedId: string | null
  onSelect: (id: string) => void
}) {
  const visible = items.slice(0, VISIBLE)
  const hidden = items.length - visible.length

  return (
    <Card className="@container/queue gap-4 pb-0">
      <CardHeader>
        <CardTitle size="md" className="flex items-center gap-2">
          Waiting on you
          <Badge variant="secondary" className="font-medium">
            {items.length}
          </Badge>
        </CardTitle>
        <CardDescription>
          {agent
            ? `Paused by the ${agentById[agent].name.toLowerCase()}, oldest first.`
            : "Agents paused these until you decide, oldest first."}
        </CardDescription>
        <CardAction>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/preview/agent-cockpit/operations">
              All cases
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                strokeWidth={2}
                data-icon="inline-end"
              />
            </Link>
          </Button>
        </CardAction>
      </CardHeader>

      <CardContent className="px-0">
        {items.length === 0 ? (
          <Empty className="border-t border-border py-10">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <HugeiconsIcon icon={CheckmarkCircle01Icon} strokeWidth={2} />
              </EmptyMedia>
              <EmptyTitle>Nothing is waiting on you</EmptyTitle>
              <EmptyDescription>
                {agent
                  ? "This agent can finish everything on its own right now."
                  : "Every agent can carry on without you. New hand-offs land here."}
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="pl-6">Case</TableHead>
                <TableHead className="hidden @3xl/queue:table-cell">
                  Supplier
                </TableHead>
                <TableHead className="hidden @lg/queue:table-cell">
                  Why it stopped
                </TableHead>
                <TableHead className="hidden text-right @2xl/queue:table-cell">
                  Impact
                </TableHead>
                <TableHead className="pr-6 text-right">Waiting</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {visible.map((item) => {
                const isSelected = item.id === selectedId
                const overdue = item.hours >= OVERDUE_HOURS

                return (
                  <TableRow
                    key={item.id}
                    data-state={isSelected ? "selected" : undefined}
                    className="cursor-pointer data-[state=selected]:bg-muted"
                    onClick={() => onSelect(item.id)}
                  >
                    <TableCell className="w-full max-w-0 pl-6">
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation()
                          onSelect(item.id)
                        }}
                        aria-current={isSelected ? "true" : undefined}
                        className="flex w-full min-w-0 items-center gap-3 rounded-sm text-left outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        <AgentAvatar agent={item.agent} size="xs" />
                        <span className="flex min-w-0 flex-col">
                          <span className="truncate text-sm leading-5 font-medium">
                            {item.reference}
                          </span>
                          <span className="hidden truncate text-xs leading-4 text-muted-foreground @lg/queue:block">
                            {item.type}
                          </span>
                          <ReasonBadge
                            kind={item.reasonKind}
                            className="mt-1 w-fit @lg/queue:hidden"
                          />
                        </span>
                      </button>
                    </TableCell>
                    <TableCell className="hidden max-w-48 truncate text-muted-foreground @3xl/queue:table-cell">
                      {item.supplier}
                    </TableCell>
                    <TableCell className="hidden @lg/queue:table-cell">
                      <ReasonBadge kind={item.reasonKind} />
                    </TableCell>
                    <TableCell className="hidden text-right text-sm font-medium whitespace-nowrap @2xl/queue:table-cell">
                      {formatAmount(item.amount)}
                    </TableCell>
                    <TableCell
                      className={cn(
                        "pr-6 text-right text-sm whitespace-nowrap",
                        overdue
                          ? "font-medium text-destructive"
                          : "text-muted-foreground"
                      )}
                    >
                      {formatAge(item.hours)}
                      {overdue ? (
                        <span className="sr-only"> (overdue)</span>
                      ) : null}
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        )}
      </CardContent>

      {hidden > 0 ? (
        <CardFooter className="border-t py-3 text-sm leading-5 text-muted-foreground">
          <Link
            href="/preview/agent-cockpit/operations"
            className="rounded-sm underline-offset-4 hover:text-foreground hover:underline focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
          >
            {hidden} more in Operations
          </Link>
        </CardFooter>
      ) : (
        <div className="pb-2" />
      )}
    </Card>
  )
}
