"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { Cancel01Icon } from "@hugeicons/core-free-icons"

import { Button } from "nooxit-design-system/components/button"
import { Spinner } from "nooxit-design-system/components/spinner"
import { cn } from "nooxit-design-system/lib/utils"

import { AgentAvatar } from "./agent-avatar"
import { useCockpit } from "./cockpit-store"
import { agents, agentStatus, type AgentId } from "./data"

export function AgentRoster({
  selected,
  onSelect,
}: {
  selected: AgentId | null
  onSelect: (agent: AgentId | null) => void
}) {
  const { waiting } = useCockpit()
  const working = agents.filter((agent) => agent.task).length

  return (
    <section aria-labelledby="roster-heading" className="flex flex-col gap-3">
      <div className="flex min-h-8 items-center justify-between gap-4">
        <h2 id="roster-heading" className="text-sm leading-5 font-medium">
          On duty
          <span className="ml-2 font-normal text-muted-foreground">
            {agents.length} agents · {working} working now
          </span>
        </h2>
        {selected ? (
          <Button variant="ghost" size="sm" onClick={() => onSelect(null)}>
            <HugeiconsIcon
              icon={Cancel01Icon}
              strokeWidth={2}
              data-icon="inline-start"
            />
            Show all agents
          </Button>
        ) : null}
      </div>

      {/* Compact rows until there is room for five columns, so the decision
          card stays within reach on a phone. */}
      <div className="grid overflow-hidden rounded-lg border border-border @xl/main:grid-cols-2 @5xl/main:grid-cols-5">
        {agents.map((agent) => {
          const count = waiting.filter((item) => item.agent === agent.id).length
          const status = agentStatus(agent, count)
          const isSelected = selected === agent.id

          return (
            <button
              key={agent.id}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onSelect(isSelected ? null : agent.id)}
              className={cn(
                "relative grid min-w-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-3 gap-y-3 border-b border-border px-4 py-3 text-left transition-colors outline-none [grid-template-areas:'avatar_text_count'] last:border-b-0 hover:bg-muted-50 focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset",
                "@xl/main:odd:border-r @5xl/main:grid-cols-[auto_minmax(0,1fr)] @5xl/main:items-start @5xl/main:border-r @5xl/main:border-b-0 @5xl/main:p-4 @5xl/main:[grid-template-areas:'avatar_count''text_text'] @5xl/main:last:border-r-0",
                isSelected && "bg-accent text-accent-foreground hover:bg-accent"
              )}
            >
              <AgentAvatar
                agent={agent.id}
                state={status.state}
                className="[grid-area:avatar]"
              />
              <span className="flex min-w-0 flex-col gap-0.5 [grid-area:text]">
                <span className="truncate text-sm leading-5 font-medium">
                  {agent.short}
                </span>
                <span
                  className={cn(
                    "truncate text-xs leading-4 text-muted-foreground @5xl/main:line-clamp-2 @5xl/main:min-h-8 @5xl/main:whitespace-normal",
                    isSelected && "text-accent-foreground"
                  )}
                >
                  {status.state === "working" ? (
                    <Spinner className="mr-1.5 inline size-3 align-[-2px]" />
                  ) : null}
                  {status.line}
                </span>
              </span>
              <span className="flex items-baseline gap-1.5 justify-self-end [grid-area:count]">
                <span
                  className={cn(
                    "text-xl leading-7 font-medium @5xl/main:text-2xl @5xl/main:leading-8",
                    count === 0 && "text-muted-foreground"
                  )}
                >
                  {count}
                </span>
                <span
                  className={cn(
                    "text-xs leading-4 text-muted-foreground",
                    isSelected && "text-accent-foreground"
                  )}
                >
                  for you
                </span>
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
