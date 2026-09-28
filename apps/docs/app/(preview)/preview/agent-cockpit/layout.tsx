import { CockpitShell } from "./components/cockpit-shell"

export default function AgentCockpitLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <CockpitShell>{children}</CockpitShell>
}
