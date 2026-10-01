"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { UserCheck01Icon } from "@hugeicons/core-free-icons"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "nooxit-design-system/components/card"
import { Marker, MarkerContent } from "nooxit-design-system/components/marker"

import { AgentAvatar } from "./agent-avatar"
import { useCockpit } from "./cockpit-store"
import { agentById } from "./data"

export function ActivityFeed() {
  const { activity } = useCockpit()

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle size="md">Activity</CardTitle>
        <CardDescription>Every step is logged and traceable.</CardDescription>
      </CardHeader>
      <CardContent>
        <Marker variant="separator">
          <MarkerContent>Today</MarkerContent>
        </Marker>
        <ol className="flex flex-col gap-4" aria-live="polite">
          {activity.slice(0, 7).map((event) => (
            <li key={event.id} className="flex items-start gap-3">
              {event.agent === "you" ? (
                <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <HugeiconsIcon
                    icon={UserCheck01Icon}
                    strokeWidth={2}
                    className="size-3.5"
                  />
                  <span className="sr-only">You</span>
                </span>
              ) : (
                <AgentAvatar agent={event.agent} size="xs" />
              )}
              <span className="min-w-0 flex-1 text-sm leading-5">
                <span className="font-medium">
                  {event.agent === "you" ? "You" : agentById[event.agent].short}
                </span>{" "}
                <span className="text-muted-foreground">{event.text}</span>
              </span>
              <time className="shrink-0 text-xs leading-5 font-medium text-muted-foreground">
                {event.time}
              </time>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  )
}
