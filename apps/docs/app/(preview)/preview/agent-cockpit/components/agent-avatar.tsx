import { Avatar, AvatarFallback } from "nooxit-design-system/components/avatar"
import { cn } from "nooxit-design-system/lib/utils"

import { agentById, type AgentId, type AgentState } from "./data"

const stateDot: Record<AgentState, string> = {
  working: "bg-descriptive-blue-brand",
  paused: "bg-warning",
  idle: "bg-muted-foreground",
}

const stateLabel: Record<AgentState, string> = {
  working: "Working",
  paused: "Paused, waiting on you",
  idle: "Idle",
}

// Agents are told apart by monogram, not by hue: color is reserved for state.
export function AgentAvatar({
  agent,
  size = "sm",
  state,
  className,
}: {
  agent: AgentId
  size?: "xs" | "sm"
  state?: AgentState
  className?: string
}) {
  const { monogram, name } = agentById[agent]

  return (
    <span className={cn("relative inline-flex shrink-0", className)}>
      <Avatar size={size} shape="rounded" aria-hidden>
        <AvatarFallback className="bg-secondary font-medium text-secondary-foreground group-data-[size=sm]/avatar:text-xs">
          {monogram}
        </AvatarFallback>
      </Avatar>
      <span className="sr-only">{name}</span>
      {state ? (
        <span
          className={cn(
            "absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full ring-2 ring-background",
            stateDot[state]
          )}
          aria-label={stateLabel[state]}
          role="img"
        />
      ) : null}
    </span>
  )
}
