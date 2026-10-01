"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Add01Icon,
  FileAddIcon,
  Invoice02Icon,
  WarehouseIcon,
} from "@hugeicons/core-free-icons"

import { Button } from "nooxit-design-system/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "nooxit-design-system/components/dropdown-menu"

import { ActivityFeed } from "./activity-feed"
import { AgentRoster } from "./agent-roster"
import { CaseQueue } from "./case-queue"
import { useCockpit } from "./cockpit-store"
import type { AgentId } from "./data"
import { NextDecision } from "./next-decision"
import { PageHeader } from "./page-header"
import { ThroughputChart } from "./throughput-chart"

function greetingFor(hour: number) {
  if (hour < 5) return "Good evening"
  if (hour < 12) return "Good morning"
  if (hour < 18) return "Good afternoon"
  return "Good evening"
}

const subscribe = () => () => {}

function useGreeting() {
  return React.useSyncExternalStore(
    subscribe,
    () => greetingFor(new Date().getHours()),
    () => "Welcome back"
  )
}

function AddMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <HugeiconsIcon
            icon={Add01Icon}
            strokeWidth={2}
            data-icon="inline-start"
          />
          Add
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem>
          <HugeiconsIcon icon={FileAddIcon} strokeWidth={2} />
          Purchase requisition
        </DropdownMenuItem>
        <DropdownMenuItem>
          <HugeiconsIcon icon={Invoice02Icon} strokeWidth={2} />
          Upload an invoice
        </DropdownMenuItem>
        <DropdownMenuItem>
          <HugeiconsIcon icon={WarehouseIcon} strokeWidth={2} />
          Supplier
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function HomeView() {
  const greeting = useGreeting()
  const { waiting, closedByAgentsToday } = useCockpit()
  const [agent, setAgent] = React.useState<AgentId | null>(null)
  const [selectedId, setSelectedId] = React.useState<string | null>(null)

  const queue = agent ? waiting.filter((item) => item.agent === agent) : waiting
  // Falls back to the oldest case once the selected one is decided or filtered out.
  const selected = queue.find((item) => item.id === selectedId) ?? queue[0]

  return (
    <div className="flex flex-col gap-8 p-4 @3xl/main:p-6 @5xl/main:gap-10 @5xl/main:p-8">
      <PageHeader title={`${greeting}, Marko.`} actions={<AddMenu />}>
        We closed{" "}
        <strong className="font-medium text-foreground">
          {closedByAgentsToday} {closedByAgentsToday === 1 ? "case" : "cases"}
        </strong>{" "}
        on our own today.{" "}
        {waiting.length > 0 ? (
          <>
            <strong className="font-medium text-foreground">
              {waiting.length}
            </strong>{" "}
            can’t move forward without you.
          </>
        ) : (
          "Nothing is waiting on you."
        )}
      </PageHeader>

      <AgentRoster
        selected={agent}
        onSelect={(next) => {
          setAgent(next)
          setSelectedId(null)
        }}
      />

      <div className="grid gap-6 @5xl/main:grid-cols-3">
        <div className="min-w-0 @5xl/main:col-span-2">
          <CaseQueue
            items={queue}
            agent={agent}
            selectedId={selected?.id ?? null}
            onSelect={setSelectedId}
          />
        </div>
        <NextDecision item={selected} />
      </div>

      <div className="grid gap-6 @5xl/main:grid-cols-3">
        <div className="min-w-0 @5xl/main:col-span-2">
          <ThroughputChart />
        </div>
        <ActivityFeed />
      </div>
    </div>
  )
}
