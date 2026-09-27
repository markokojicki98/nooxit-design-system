'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from 'nooxit-design-system/components/sidebar';
import { CalendarIcon, HomeIcon, InboxIcon, SearchIcon, SettingsIcon } from 'lucide-react';

const items = [
  { title: 'Home', icon: HomeIcon },
  { title: 'Inbox', icon: InboxIcon },
  { title: 'Calendar', icon: CalendarIcon },
  { title: 'Search', icon: SearchIcon },
  { title: 'Settings', icon: SettingsIcon },
];

export default function SidebarDemo() {
  return (
    <SidebarProvider className="min-h-[360px] w-full overflow-hidden rounded-lg border border-border">
      <Sidebar collapsible="icon" className="absolute">
        <SidebarHeader className="px-2 py-3 text-sm leading-none font-semibold">
          Nooxit
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton isActive={item.title === 'Home'}>
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="p-4">
        <SidebarTrigger />
      </SidebarInset>
    </SidebarProvider>
  );
}
