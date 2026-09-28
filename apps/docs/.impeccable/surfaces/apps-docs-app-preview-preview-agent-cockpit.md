---
version: 1
slug: "apps-docs-app-preview-preview-agent-cockpit"
primary_target: "apps/docs/app/(preview)/preview/agent-cockpit"
related_targets: ["apps/docs/app/(preview)/preview/agent-cockpit/operations"]
---

# Agent cockpit (docs block)

Scope: full-page example block in the docs site, two routes: Home and Operations. Mode: Operate.
Audience: procurement and AP specialists clearing handed-over cases; an ops lead watching agent health.
Task: see what needs me, decide it, see that the workforce is healthy.
Content: the current product's five agents (order confirmation AB, purchase requisition BANF, invoice, goods receipt, guided buying), 25 handed-over cases, fictional suppliers and amounts only. English.
Constraints: shell follows the user's draft (logo tile + "Nooxit / AI Workforce", Platform and System nav groups, user footer; top bar outside the content panel with org switcher, "All agents operational" status, Inbox; panel with greeting and Add). Built on dashboard-01's structure (inset sidebar, @container main, interactive chart, TanStack v9 data table). Neutral monogram avatars; color only for state. Nooxit components only; no DESIGN.md change.
Unresolved: other nav items are visual only.

## Direction contract

THESIS: The cockpit is a hand-off desk, not a KPI wall. It refuses dashboard-01's four stat tiles over a chart; every number sits next to the thing a person does about it.

OWN-WORLD: The incumbent Nooxit world unchanged: warm neutral chrome on sidebar-gray, one off-white panel, 1px borders, pill buttons, DM Sans with DM Mono only for case numbers, amounts and times. Color appears only as state: warning for deviations, descriptive blue for work in progress, destructive for overdue, success for cleared.

STORY: Spot (agent roster shows who is waiting on you) → intervene (the next decision, answered in place) → trust (throughput and the activity log show the rest ran on its own).

FIRST VIEWPORT: Greeting "Good afternoon, Marko." at 36px with a one-line summary carrying the two numbers that matter; Add at right. Below it a single bordered roster strip of the five agents with their waiting counts. Then two columns: the "Waiting on you" queue (2/3) and the next-decision card with Accept and Reject (1/3).

FORM: Structure 1 of 1 (brief-pinned composition; no concept roll for a precisely specified surface). Seed key: none, pinned by the user's brief. Signature interaction: choosing an agent in the roster filters the queue and the next-decision card; deciding a case removes it, decrements the agent's count and the summary, and logs it in the activity feed.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
