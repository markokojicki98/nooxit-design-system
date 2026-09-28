"use client"

import * as React from "react"
import { toast } from "sonner"

import {
  activity as initialActivity,
  agentById,
  cases as initialCases,
  type ActivityEvent,
  type Case,
} from "./data"

export type Decision = "accepted" | "rejected"

type CockpitStore = {
  cases: Case[]
  waiting: Case[]
  activity: ActivityEvent[]
  closedByAgentsToday: number
  decide: (ids: string | string[], decision: Decision) => void
}

const CockpitContext = React.createContext<CockpitStore | null>(null)

export function useCockpit() {
  const context = React.useContext(CockpitContext)
  if (!context)
    throw new Error("useCockpit must be used inside CockpitProvider")
  return context
}

function clock() {
  return new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  })
}

const outcome: Record<Decision, { verb: string; next: string }> = {
  accepted: { verb: "Accepted", next: "is carrying it out in SAP" },
  rejected: { verb: "Rejected", next: "is telling the supplier" },
}

// Lives in the route layout so a decision on Home is still reflected after
// navigating to Operations and back.
export function CockpitProvider({ children }: { children: React.ReactNode }) {
  const [cases, setCases] = React.useState(initialCases)
  const [activity, setActivity] = React.useState(initialActivity)

  const decide = React.useCallback(
    (ids: string | string[], decision: Decision) => {
      const list = Array.isArray(ids) ? ids : [ids]
      const items = initialCases.filter((c) => list.includes(c.id))
      if (items.length === 0) return
      const status = decision === "accepted" ? "in-progress" : "rejected"
      const stamp = Date.now()
      const events: ActivityEvent[] = items.map((item) => ({
        id: `you-${item.id}-${stamp}`,
        agent: "you",
        text: `${outcome[decision].verb.toLowerCase()} ${item.reference}`,
        time: clock(),
      }))
      const eventIds = new Set(events.map((e) => e.id))

      setCases((current) =>
        current.map((c) =>
          list.includes(c.id) ? { ...c, status, hours: 0 } : c
        )
      )
      setActivity((current) => [...events, ...current])

      const [first] = items
      const title =
        items.length === 1
          ? `${outcome[decision].verb} ${first.reference}`
          : `${outcome[decision].verb} ${items.length} cases`
      const description =
        items.length === 1
          ? `The ${agentById[first.agent].name.toLowerCase()} ${outcome[decision].next}.`
          : `Each agent ${outcome[decision].next}.`

      toast(title, {
        description,
        // Bottom-center keeps the Undo toast off the case sheet's actions.
        position: "bottom-center",
        action: {
          label: "Undo",
          onClick: () => {
            const original = new Map(items.map((item) => [item.id, item]))
            setCases((current) => current.map((c) => original.get(c.id) ?? c))
            setActivity((current) => current.filter((e) => !eventIds.has(e.id)))
          },
        },
      })
    },
    []
  )

  const value = React.useMemo<CockpitStore>(() => {
    const waiting = cases
      .filter((c) => c.status === "waiting")
      .sort((a, b) => b.hours - a.hours)
    const closedByAgentsToday = activity.filter((event) => event.closed).length
    return { cases, waiting, activity, closedByAgentsToday, decide }
  }, [cases, activity, decide])

  return (
    <CockpitContext.Provider value={value}>{children}</CockpitContext.Provider>
  )
}
