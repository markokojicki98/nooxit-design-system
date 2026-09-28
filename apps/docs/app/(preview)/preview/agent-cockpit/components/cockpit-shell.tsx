"use client"

import {
  SidebarInset,
  SidebarProvider,
  useSidebar,
} from "nooxit-design-system/components/sidebar"
import { cn } from "nooxit-design-system/lib/utils"

import { AppSidebar } from "./app-sidebar"
import { CockpitProvider } from "./cockpit-store"
import { TopBar } from "./top-bar"

// The top bar sits on the sidebar surface, outside the content panel, so the
// panel reads as the one working area. SidebarInset's own inset card is
// flattened and the panel is drawn here instead.
function Frame({ children }: { children: React.ReactNode }) {
  const { state } = useSidebar()
  const collapsed = state === "collapsed"

  return (
    <SidebarInset className="bg-transparent md:peer-data-[variant=inset]:m-0 md:peer-data-[variant=inset]:rounded-none md:peer-data-[variant=inset]:shadow-none md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-0">
      <TopBar className={cn(collapsed && "md:pl-4")} />
      <div
        className={cn(
          "@container/main flex min-w-0 flex-1 flex-col bg-background md:mr-2 md:mb-2 md:rounded-xl md:border md:border-sidebar-border",
          collapsed && "md:ml-2"
        )}
      >
        {children}
      </div>
    </SidebarInset>
  )
}

export function CockpitShell({ children }: { children: React.ReactNode }) {
  return (
    <CockpitProvider>
      <SidebarProvider>
        <AppSidebar />
        <Frame>{children}</Frame>
      </SidebarProvider>
    </CockpitProvider>
  )
}
