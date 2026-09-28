// All demo content is fictional: suppliers, references, people and amounts.

export type AgentId =
  | "order-confirmation"
  | "requisition"
  | "invoice"
  | "goods-receipt"
  | "guided-buying"

export type AgentState = "working" | "paused" | "idle"

export type Agent = {
  id: AgentId
  name: string
  short: string
  monogram: string
  // What the agent is doing right now, when it is running.
  task?: string
}

export const agents: Agent[] = [
  {
    id: "order-confirmation",
    name: "Order confirmation agent",
    short: "Order confirmation",
    monogram: "OC",
  },
  {
    id: "requisition",
    name: "Requisition agent",
    short: "Requisition",
    monogram: "RQ",
  },
  {
    id: "invoice",
    name: "Invoice agent",
    short: "Invoice",
    monogram: "IN",
    task: "Matching 3 invoices to purchase orders",
  },
  {
    id: "goods-receipt",
    name: "Goods receipt agent",
    short: "Goods receipt",
    monogram: "GR",
  },
  {
    id: "guided-buying",
    name: "Guided buying agent",
    short: "Guided buying",
    monogram: "GB",
  },
]

export const agentById = Object.fromEntries(
  agents.map((agent) => [agent.id, agent])
) as Record<AgentId, Agent>

// State follows the hand-off: an agent holding cases for you is paused on
// them, whatever else it is doing.
export function agentStatus(agent: Agent, waiting: number) {
  if (agent.task) return { state: "working" as const, line: agent.task }
  if (waiting > 0)
    return { state: "paused" as const, line: "Paused until you decide" }
  return { state: "idle" as const, line: "Nothing to do" }
}

export type CaseStatus = "waiting" | "in-progress" | "done" | "rejected"
export type ReasonKind = "deviation" | "approval" | "question"

export type Comparison = { label: string; expected: string; actual: string }

export type Case = {
  id: string
  reference: string
  agent: AgentId
  type: string
  supplier: string
  title: string
  reason: string
  reasonKind: ReasonKind
  amount: number | null
  // Hours since the agent handed the case over, or since the last update.
  hours: number
  status: CaseStatus
  note: string
  comparison: Comparison[]
}

const suppliers = [
  "Nooxit Showcase Supplier DE",
  "Showcase Metals GmbH",
  "Demo Packaging AG",
  "Sample Office Supply Ltd",
  "Example Logistics BV",
  "Showcase Electronics s.r.o.",
]

const typeByAgent: Record<AgentId, string> = {
  "order-confirmation": "Order confirmation",
  requisition: "Purchase requisition",
  invoice: "Invoice",
  "goods-receipt": "Goods receipt",
  "guided-buying": "Guided buying request",
}

function money(value: number) {
  return `€${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

// The first five mirror the current product; the rest are generated so the
// queue and the operations table have realistic volume.
const seeded: Case[] = [
  {
    id: "c-001",
    reference: "Request 7715",
    agent: "guided-buying",
    type: typeByAgent["guided-buying"],
    supplier: "—",
    title: "Needs a product choice",
    reason: "Choose a product or answer a question",
    reasonKind: "question",
    amount: null,
    hours: 76,
    status: "waiting",
    note: "J. Weber asked for “a monitor arm for two screens”. Three catalog items fit; the agent will not pick one on price alone.",
    comparison: [
      {
        label: "Requested",
        expected: "Monitor arm, dual",
        actual: "3 matches",
      },
      { label: "Budget", expected: "€250.00", actual: "€189.00 – €242.00" },
    ],
  },
  {
    id: "c-002",
    reference: "PO 4500000767",
    agent: "order-confirmation",
    type: typeByAgent["order-confirmation"],
    supplier: suppliers[0],
    title: "Confirmation differs from the order",
    reason: "Quantity −20%, delivery date moved",
    reasonKind: "deviation",
    amount: -4.6,
    hours: 74,
    status: "waiting",
    note: "The supplier confirmed 80 of 100 units and a delivery two weeks later, citing a raw-material shortage. The two previous orders were confirmed in full.",
    comparison: [
      { label: "Quantity", expected: "100 pcs", actual: "80 pcs" },
      { label: "Delivery", expected: "14 Oct 2026", actual: "28 Oct 2026" },
      { label: "Unit price", expected: "€23.00", actual: "€22.94" },
    ],
  },
  {
    id: "c-003",
    reference: "Invoice RE-2026-5583",
    agent: "invoice",
    type: typeByAgent.invoice,
    supplier: suppliers[0],
    title: "Invoice total above the order",
    reason: "Decision needed",
    reasonKind: "deviation",
    amount: 312.4,
    hours: 73,
    status: "waiting",
    note: "Freight of €312.40 is billed but was not part of PO 4500000741. The supplier's contract allows freight only below 50 units.",
    comparison: [
      { label: "Net total", expected: "€4,180.00", actual: "€4,492.40" },
      { label: "Freight", expected: "€0.00", actual: "€312.40" },
    ],
  },
  {
    id: "c-004",
    reference: "Invoice RE-2026-5571",
    agent: "invoice",
    type: typeByAgent.invoice,
    supplier: suppliers[0],
    title: "Invoice without a purchase order",
    reason: "Non-PO invoice needs approval",
    reasonKind: "approval",
    amount: 1240,
    hours: 72,
    status: "waiting",
    note: "No PO matches this invoice. The cost center (4100, Facilities) has approved this supplier twice this year.",
    comparison: [
      { label: "PO", expected: "Required", actual: "None found" },
      { label: "Cost center", expected: "—", actual: "4100 Facilities" },
    ],
  },
  {
    id: "c-005",
    reference: "Invoice RE-2026-5548",
    agent: "invoice",
    type: typeByAgent.invoice,
    supplier: suppliers[0],
    title: "Price differs from the contract",
    reason: "Decision needed",
    reasonKind: "deviation",
    amount: 86.2,
    hours: 98,
    status: "waiting",
    note: "Unit price is €0.43 above the framework contract on 200 units. The contract price is valid until 31 Dec 2026.",
    comparison: [
      { label: "Unit price", expected: "€12.10", actual: "€12.53" },
      { label: "Quantity", expected: "200 pcs", actual: "200 pcs" },
    ],
  },
]

const templates: Record<
  AgentId,
  {
    title: string
    reason: string
    kind: ReasonKind
    ref: (n: number) => string
    note: string
    comparison: (n: number) => Comparison[]
  }
> = {
  "order-confirmation": {
    title: "Confirmation differs from the order",
    reason: "Delivery date moved",
    kind: "deviation",
    ref: (n) => `PO 45000007${String(40 + n).padStart(2, "0")}`,
    note: "The supplier confirmed all items but moved the delivery date. The agent will not accept a later date without you.",
    comparison: (n) => [
      {
        label: "Delivery",
        expected: `${6 + (n % 20)} Oct 2026`,
        actual: `${13 + (n % 15)} Oct 2026`,
      },
      {
        label: "Quantity",
        expected: `${20 + n * 5} pcs`,
        actual: `${20 + n * 5} pcs`,
      },
    ],
  },
  requisition: {
    title: "Requisition over the approval limit",
    reason: "Approval needed",
    kind: "approval",
    ref: (n) => `PR 1000${3400 + n}`,
    note: "The requisition exceeds the €5,000 limit for this cost center, so it needs a person to approve it.",
    comparison: () => [
      { label: "Limit", expected: "€5,000.00", actual: "€6,420.00" },
    ],
  },
  invoice: {
    title: "Quantity on the invoice differs",
    reason: "Decision needed",
    kind: "deviation",
    ref: (n) => `Invoice RE-2026-${5500 + n * 7}`,
    note: "The invoice bills more units than the goods receipt records.",
    comparison: (n) => [
      { label: "Quantity", expected: `${40 + n} pcs`, actual: `${44 + n} pcs` },
    ],
  },
  "goods-receipt": {
    title: "Delivery note does not match",
    reason: "Short delivery",
    kind: "deviation",
    ref: (n) => `GR 5000${1200 + n}`,
    note: "The delivery note lists fewer units than the order. The agent needs to know whether to book a partial receipt.",
    comparison: (n) => [
      {
        label: "Delivered",
        expected: `${60 + n} pcs`,
        actual: `${52 + n} pcs`,
      },
    ],
  },
  "guided-buying": {
    title: "Needs a product choice",
    reason: "Choose a product or answer a question",
    kind: "question",
    ref: (n) => `Request ${7700 + n}`,
    note: "Several catalog items fit the request; the agent will not choose on price alone.",
    comparison: () => [{ label: "Matches", expected: "1", actual: "3" }],
  },
}

// Deterministic so the prerendered page and the client agree.
function generate(
  agent: AgentId,
  count: number,
  status: CaseStatus,
  offset: number
): Case[] {
  const t = templates[agent]
  return Array.from({ length: count }, (_, i) => {
    const n = offset + i
    return {
      id: `c-${agent}-${status}-${i}`,
      reference: t.ref(n),
      agent,
      type: typeByAgent[agent],
      supplier: suppliers[(n * 7 + 3) % suppliers.length],
      title: t.title,
      reason: t.reason,
      reasonKind: t.kind,
      amount:
        agent === "guided-buying"
          ? null
          : Math.round(((n * 137) % 900) * (n % 3 === 0 ? -1 : 1) * 10) / 10,
      hours: status === "waiting" ? 4 + ((n * 11) % 60) : 1 + ((n * 5) % 40),
      status,
      note: t.note,
      comparison: t.comparison(n),
    }
  })
}

export const cases: Case[] = [
  ...seeded,
  ...generate("order-confirmation", 14, "waiting", 1),
  ...generate("invoice", 4, "waiting", 3),
  ...generate("requisition", 1, "waiting", 2),
  ...generate("goods-receipt", 1, "waiting", 4),
  ...generate("order-confirmation", 3, "in-progress", 20),
  ...generate("invoice", 4, "in-progress", 12),
  ...generate("goods-receipt", 2, "in-progress", 9),
  ...generate("invoice", 6, "done", 30),
  ...generate("order-confirmation", 4, "done", 30),
  ...generate("requisition", 2, "done", 30),
  ...generate("goods-receipt", 1, "done", 30),
  ...generate("invoice", 1, "rejected", 40),
]

export function formatAmount(amount: number | null) {
  if (amount === null) return "—"
  const sign = amount < 0 ? "−" : amount > 0 ? "+" : ""
  return `${sign}${money(Math.abs(amount))}`
}

export function formatAge(hours: number) {
  if (hours < 1) return "just now"
  if (hours < 24) return `${hours} h`
  const days = Math.floor(hours / 24)
  return `${days} ${days === 1 ? "day" : "days"}`
}

// Past this, a waiting case is overdue against the internal 3-day target.
export const OVERDUE_HOURS = 72

export type ActivityEvent = {
  id: string
  agent: AgentId | "you"
  text: string
  time: string
  // True when the agent finished the case without a person.
  closed?: boolean
}

const newestHandOff = cases
  .filter((item) => item.status === "waiting")
  .reduce((a, b) => (b.hours < a.hours ? b : a))

export const activity: ActivityEvent[] = [
  {
    id: "a-1",
    agent: "invoice",
    text: "posted RE-2026-5590 to SAP after a 3-way match",
    time: "14:02",
    closed: true,
  },
  {
    id: "a-2",
    agent: "order-confirmation",
    text: "accepted the confirmation for PO 4500000781",
    time: "13:47",
    closed: true,
  },
  {
    id: "a-3",
    agent: "goods-receipt",
    text: "booked receipt GR 50001219 in full",
    time: "13:15",
    closed: true,
  },
  {
    id: "a-4",
    agent: newestHandOff.agent,
    text: `handed ${newestHandOff.reference} to you: ${newestHandOff.reason.toLowerCase()}`,
    time: "11:30",
  },
  {
    id: "a-5",
    agent: "requisition",
    text: "turned PR 10003402 into PO 4500000790",
    time: "10:58",
    closed: true,
  },
  {
    id: "a-6",
    agent: "order-confirmation",
    text: "asked Showcase Metals GmbH to confirm PO 4500000788",
    time: "09:21",
  },
]

export type ThroughputPoint = { date: string; agents: number; handed: number }

// 90 days ending 28 Sep 2026, deterministic.
export const throughput: ThroughputPoint[] = Array.from(
  { length: 90 },
  (_, i) => {
    const date = new Date(Date.UTC(2026, 8, 28 - (89 - i)))
    const weekday = date.getUTCDay()
    const weekend = weekday === 0 || weekday === 6
    const base = 34 + Math.round(12 * Math.sin(i / 6)) + Math.round(i / 6)
    const agentsCount = weekend
      ? Math.round(base * 0.25)
      : base + ((i * 13) % 9)
    const handed = weekend ? i % 2 : 3 + ((i * 7) % 6)
    return {
      date: date.toISOString().slice(0, 10),
      agents: agentsCount,
      handed,
    }
  }
)
