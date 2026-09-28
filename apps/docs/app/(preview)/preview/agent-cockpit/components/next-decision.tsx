"use client"

import { BotIcon, CircleCheckIcon } from "lucide-react"

import { Alert, AlertDescription } from "nooxit-design-system/components/alert"
import { Button } from "nooxit-design-system/components/button"
import {
  Card,
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
import { Separator } from "nooxit-design-system/components/separator"

import { AgentAvatar } from "./agent-avatar"
import { useCockpit } from "./cockpit-store"
import {
  agentById,
  formatAge,
  formatAmount,
  OVERDUE_HOURS,
  type Case,
} from "./data"
import { ReasonBadge } from "./reason-badge"

export function CaseComparison({ item }: { item: Case }) {
  return (
    <table className="w-full text-sm leading-5">
      <thead>
        <tr className="text-xs leading-4 text-muted-foreground">
          <th scope="col" className="pb-2 text-left font-normal">
            <span className="sr-only">Field</span>
          </th>
          <th scope="col" className="pb-2 text-right font-normal">
            Expected
          </th>
          <th scope="col" className="pb-2 pl-4 text-right font-normal">
            Received
          </th>
        </tr>
      </thead>
      <tbody>
        {item.comparison.map((row) => {
          const differs = row.expected !== row.actual
          return (
            <tr key={row.label}>
              <th
                scope="row"
                className="py-1 text-left font-normal text-muted-foreground"
              >
                {row.label}
              </th>
              <td className="py-1 text-right font-mono text-xs font-medium tabular-nums">
                {row.expected}
              </td>
              <td className="py-1 pl-4 text-right font-mono text-xs font-medium tabular-nums">
                {differs ? (
                  <mark className="rounded-xs bg-warning-muted px-1 font-medium text-warning-muted-foreground">
                    {row.actual}
                  </mark>
                ) : (
                  row.actual
                )}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export function NextDecision({ item }: { item: Case | undefined }) {
  const { decide } = useCockpit()

  if (!item) {
    return (
      <Card className="h-full">
        <Empty className="flex-1">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <CircleCheckIcon />
            </EmptyMedia>
            <EmptyTitle>No decisions left</EmptyTitle>
            <EmptyDescription>
              When an agent pauses on something it cannot settle alone, it shows
              up here.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      </Card>
    )
  }

  const agent = agentById[item.agent]
  const overdue = item.hours >= OVERDUE_HOURS

  return (
    <Card className="h-full" aria-labelledby="decision-title">
      <CardHeader>
        <CardTitle size="md" id="decision-title" className="leading-7">
          {item.title}
        </CardTitle>
        <CardDescription>
          <span className="font-mono text-xs font-medium tabular-nums">
            {item.reference}
          </span>
          {" · "}
          {item.supplier === "—" ? item.type : item.supplier}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="text-sm leading-5 font-medium">Why it stopped</h3>
          <ReasonBadge kind={item.reasonKind} />
        </div>
        <CaseComparison item={item} />

        {item.amount !== null ? (
          <div className="flex items-baseline justify-between border-t border-border pt-3 text-sm leading-5">
            <span className="text-muted-foreground">Impact</span>
            <span className="font-mono text-sm font-medium tabular-nums">
              {formatAmount(item.amount)}
            </span>
          </div>
        ) : null}

        <Alert className="border-transparent bg-muted">
          <BotIcon />
          <AlertDescription className="text-sm leading-5 text-foreground">
            {item.note}
          </AlertDescription>
        </Alert>

        <Separator />

        <div className="flex items-center gap-3">
          <AgentAvatar agent={item.agent} />
          <div className="flex min-w-0 flex-col">
            <span className="truncate text-sm leading-5 font-medium">
              {agent.name}
            </span>
            <span className="text-sm leading-5 text-muted-foreground">
              Handed to you {formatAge(item.hours)} ago
              {overdue ? (
                <span className="text-destructive"> · overdue</span>
              ) : null}
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="gap-2">
        <Button
          variant="outline"
          destructive
          onClick={() => decide(item.id, "rejected")}
        >
          Reject
        </Button>
        <Button className="flex-1" onClick={() => decide(item.id, "accepted")}>
          {item.reasonKind === "approval"
            ? "Approve"
            : item.reasonKind === "question"
              ? "Choose for the agent"
              : "Accept changes"}
        </Button>
      </CardFooter>
    </Card>
  )
}
