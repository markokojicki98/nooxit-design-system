"use client"

import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Add01Icon,
  ArrowUpDownIcon,
  InboxIcon,
  Tick01Icon,
} from "@hugeicons/core-free-icons"

import { Badge } from "nooxit-design-system/components/badge"
import { Button } from "nooxit-design-system/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "nooxit-design-system/components/dropdown-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "nooxit-design-system/components/popover"
import {
  SidebarTrigger,
  useSidebar,
} from "nooxit-design-system/components/sidebar"
import { cn } from "nooxit-design-system/lib/utils"

import { AgentAvatar } from "./agent-avatar"
import { useCockpit } from "./cockpit-store"
import { formatAge } from "./data"

const organizations = [
  { id: "mine", name: "My organization" },
  { id: "sandbox", name: "Sandbox" },
]

function OrgMark({ name }: { name: string }) {
  return (
    <span
      aria-hidden
      className="flex size-5 shrink-0 items-center justify-center rounded-sm bg-primary text-xs font-medium text-primary-foreground"
    >
      {name.slice(0, 1)}
    </span>
  )
}

function OrgSwitcher() {
  const current = organizations[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="flex h-9 w-56 max-w-full items-center gap-2 rounded-md border border-input bg-background px-2.5 text-sm leading-5 text-foreground transition-[color,border-color] outline-none hover:bg-hover-secondary focus-visible:border-primary data-[state=open]:border-primary"
        >
          <OrgMark name={current.name} />
          <span className="min-w-0 flex-1 truncate text-left">
            {current.name}
          </span>
          <HugeiconsIcon
            icon={ArrowUpDownIcon}
            strokeWidth={2}
            className="size-4 shrink-0"
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuLabel>Organizations</DropdownMenuLabel>
        {organizations.map((org) => (
          <DropdownMenuItem key={org.id}>
            <OrgMark name={org.name} />
            {org.name}
            {org.id === current.id ? (
              <HugeiconsIcon
                icon={Tick01Icon}
                strokeWidth={2}
                className="ml-auto"
              />
            ) : null}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <HugeiconsIcon icon={Add01Icon} strokeWidth={2} />
          Add organization
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function WorkforceStatus() {
  return (
    <div
      className="hidden items-center gap-2 text-xs leading-4 font-medium tracking-wide text-muted-foreground uppercase lg:flex"
      role="status"
    >
      <span aria-hidden className="size-2 rounded-full bg-success" />
      All agents operational
    </div>
  )
}

function Inbox() {
  const { waiting } = useCockpit()
  const latest = waiting.slice(-3).reverse()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          <HugeiconsIcon
            icon={InboxIcon}
            strokeWidth={2}
            data-icon="inline-start"
          />
          Inbox
          <Badge variant="secondary" className="font-medium">
            {latest.length}
          </Badge>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80 p-0">
        <div className="border-b px-4 py-3">
          <p className="text-sm leading-5 font-medium">Newest hand-offs</p>
          <p className="text-xs leading-4 text-muted-foreground">
            Agents paused these in the last hours.
          </p>
        </div>
        <ul className="flex flex-col py-1">
          {latest.map((item) => (
            <li key={item.id} className="flex items-start gap-3 px-4 py-2.5">
              <AgentAvatar agent={item.agent} size="xs" className="mt-0.5" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm leading-5">{item.title}</p>
                <p className="truncate text-xs leading-4 font-medium text-muted-foreground">
                  {item.reference} · {formatAge(item.hours)}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="border-t p-2">
          <Button variant="ghost" size="sm" className="w-full" asChild>
            <Link href="/preview/agent-cockpit/operations">Open the queue</Link>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function TopBar({ className }: { className?: string }) {
  const { isMobile, state } = useSidebar()

  return (
    <header
      className={cn(
        "flex h-14 shrink-0 items-center gap-3 px-4 md:pr-2 md:pl-0",
        className
      )}
    >
      {isMobile || state === "collapsed" ? (
        <SidebarTrigger className="-ml-1" />
      ) : null}
      <OrgSwitcher />
      <div className="ml-auto flex items-center gap-4">
        <WorkforceStatus />
        <Inbox />
      </div>
    </header>
  )
}
