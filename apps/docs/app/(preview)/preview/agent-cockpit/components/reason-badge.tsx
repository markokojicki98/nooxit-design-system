import { Badge } from "nooxit-design-system/components/badge"
import { cn } from "nooxit-design-system/lib/utils"

import type { CaseStatus, ReasonKind } from "./data"

const reason: Record<ReasonKind, { label: string; className: string }> = {
  deviation: {
    label: "Deviation",
    className: "bg-warning-muted text-warning-muted-foreground",
  },
  approval: {
    label: "Approval",
    className: "bg-descriptive-blue text-descriptive-blue-foreground",
  },
  question: { label: "Question", className: "" },
}

export function ReasonBadge({
  kind,
  className,
}: {
  kind: ReasonKind
  className?: string
}) {
  const { label, className: tone } = reason[kind]
  return (
    <Badge
      variant={kind === "question" ? "secondary" : "default"}
      rounded={false}
      className={cn("shrink-0", tone, className)}
    >
      {label}
    </Badge>
  )
}

const status: Record<CaseStatus, { label: string; className: string }> = {
  // Neutral on purpose: accent means selection here, and overdue rows already
  // carry the urgency in their age.
  waiting: {
    label: "Waiting on you",
    className: "bg-secondary text-secondary-foreground",
  },
  "in-progress": {
    label: "In progress",
    className: "bg-descriptive-blue text-descriptive-blue-foreground",
  },
  done: {
    label: "Done",
    className: "bg-success-muted text-success-muted-foreground",
  },
  rejected: {
    label: "Rejected",
    className: "bg-destructive-muted text-destructive-muted-foreground",
  },
}

export const statusLabel = Object.fromEntries(
  Object.entries(status).map(([key, value]) => [key, value.label])
) as Record<CaseStatus, string>

export function StatusBadge({ value }: { value: CaseStatus }) {
  return (
    <Badge className={cn("shrink-0", status[value].className)}>
      {status[value].label}
    </Badge>
  )
}
