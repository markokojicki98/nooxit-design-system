"use client"

import { RobotIcon } from "@phosphor-icons/react/ssr"

import { Alert, AlertDescription } from "nooxit-design-system/components/alert"
import { Button } from "nooxit-design-system/components/button"
import { Separator } from "nooxit-design-system/components/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "nooxit-design-system/components/sheet"

import { AgentAvatar } from "./agent-avatar"
import { useCockpit } from "./cockpit-store"
import { agentById, formatAge, formatAmount, type Case } from "./data"
import { CaseComparison } from "./next-decision"
import { ReasonBadge, StatusBadge } from "./reason-badge"

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1">
      <dt className="text-xs leading-4 text-muted-foreground">{label}</dt>
      <dd className="text-sm leading-5">{children}</dd>
    </div>
  )
}

export function CaseSheet({
  item,
  onOpenChange,
}: {
  item: Case | null
  onOpenChange: (open: boolean) => void
}) {
  const { decide } = useCockpit()

  return (
    <Sheet open={item !== null} onOpenChange={onOpenChange}>
      <SheetContent className="data-[side=right]:w-full data-[side=right]:sm:max-w-md">
        {item ? (
          <>
            <SheetHeader className="gap-2 border-b pr-12">
              <SheetTitle className="leading-7">{item.title}</SheetTitle>
              <SheetDescription>
                <span className="font-medium">{item.reference}</span>
                {" · "}
                {item.type}
              </SheetDescription>
            </SheetHeader>

            <div className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto p-6">
              <dl className="grid grid-cols-2 gap-4">
                <Field label="Status">
                  <StatusBadge value={item.status} />
                </Field>
                <Field label="Agent">
                  <span className="flex items-center gap-2">
                    <AgentAvatar agent={item.agent} size="xs" />
                    {agentById[item.agent].short}
                  </span>
                </Field>
                <Field label="Supplier">{item.supplier}</Field>
                <Field label="Impact">
                  <span className="font-medium">
                    {formatAmount(item.amount)}
                  </span>
                </Field>
                <Field
                  label={item.status === "waiting" ? "Waiting" : "Updated"}
                >
                  <span className="font-medium">
                    {item.hours === 0
                      ? "just now"
                      : `${formatAge(item.hours)} ago`}
                  </span>
                </Field>
              </dl>

              <Separator />

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm leading-5 font-medium">
                    Why it stopped
                  </h3>
                  <ReasonBadge kind={item.reasonKind} />
                </div>
                <CaseComparison item={item} />
                <Alert className="border-transparent bg-muted">
                  <RobotIcon />
                  <AlertDescription className="text-sm leading-5 text-foreground">
                    {item.note}
                  </AlertDescription>
                </Alert>
              </div>
            </div>

            {item.status === "waiting" ? (
              <SheetFooter className="border-t pt-4">
                <Button
                  variant="outline"
                  destructive
                  onClick={() => {
                    decide(item.id, "rejected")
                    onOpenChange(false)
                  }}
                >
                  Reject
                </Button>
                <Button
                  onClick={() => {
                    decide(item.id, "accepted")
                    onOpenChange(false)
                  }}
                >
                  {item.reasonKind === "approval"
                    ? "Approve"
                    : "Accept changes"}
                </Button>
              </SheetFooter>
            ) : null}
          </>
        ) : null}
      </SheetContent>
    </Sheet>
  )
}
