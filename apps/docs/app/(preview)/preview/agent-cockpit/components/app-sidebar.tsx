"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ChartColumnIcon,
  ChevronsUpDownIcon,
  CircleUserRoundIcon,
  HandshakeIcon,
  HouseIcon,
  LanguagesIcon,
  ListChecksIcon,
  LogOutIcon,
  NetworkIcon,
  SettingsIcon,
  BellIcon,
  WarehouseIcon,
} from "lucide-react"

import { NooxitLogo } from "@/components/nooxit-logo"
import { Avatar, AvatarFallback } from "nooxit-design-system/components/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "nooxit-design-system/components/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "nooxit-design-system/components/sidebar"

import { useCockpit } from "./cockpit-store"

const base = "/preview/agent-cockpit"

const platform = [
  { id: "home", title: "Home", icon: HouseIcon, href: base },
  {
    id: "operations",
    title: "Operations",
    icon: ListChecksIcon,
    href: `${base}/operations`,
  },
  { id: "transactions", title: "Transactions", icon: HandshakeIcon },
  { id: "suppliers", title: "Suppliers", icon: WarehouseIcon },
  { id: "digital-twin", title: "Digital twin", icon: NetworkIcon },
] as const

const system = [
  { id: "analytics", title: "Analytics", icon: ChartColumnIcon },
  { id: "settings", title: "Settings", icon: SettingsIcon },
] as const

type NavItem = {
  id: string
  title: string
  icon: React.ComponentType
  href?: string
}

function NavGroup({
  label,
  items,
}: {
  label: string
  items: readonly NavItem[]
}) {
  const pathname = usePathname()
  const { waiting } = useCockpit()

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{label}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.id}>
              {item.href ? (
                <SidebarMenuButton asChild isActive={pathname === item.href}>
                  <Link href={item.href}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              ) : (
                <SidebarMenuButton>
                  <item.icon />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              )}
              {item.id === "operations" && waiting.length > 0 ? (
                <SidebarMenuBadge className="font-mono font-medium tabular-nums">
                  {waiting.length}
                </SidebarMenuBadge>
              ) : null}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

function NavUser() {
  const { isMobile } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar size="sm" shape="rounded">
                <AvatarFallback className="bg-secondary text-xs font-medium text-secondary-foreground">
                  MK
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left leading-tight">
                <span className="truncate text-sm font-medium">
                  Marko Kojicki
                </span>
                <span className="truncate text-xs text-sidebar-foreground-70">
                  m@example.com
                </span>
              </div>
              <ChevronsUpDownIcon className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="font-normal">
              <span className="block text-sm font-medium">Marko Kojicki</span>
              <span className="block text-xs text-muted-foreground">
                Procurement · My organization
              </span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <CircleUserRoundIcon />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BellIcon />
                Notifications
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <LanguagesIcon />
                  Language
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuRadioGroup value="en">
                    <DropdownMenuRadioItem value="en">
                      English
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="de">
                      Deutsch
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOutIcon />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" variant="inset" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2 p-1">
          <NooxitLogo className="size-8 shrink-0" />
          <div className="grid flex-1 leading-tight">
            <span className="truncate text-sm font-semibold">Nooxit</span>
            <span className="truncate text-xs text-sidebar-foreground-70">
              AI Workforce
            </span>
          </div>
          <SidebarTrigger className="hidden md:inline-flex" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavGroup label="Platform" items={platform} />
        <NavGroup label="System" items={system} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  )
}
