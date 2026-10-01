"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "nooxit-design-system/components/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "nooxit-design-system/components/chart"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "nooxit-design-system/components/toggle-group"

import { throughput } from "./data"

const config = {
  agents: { label: "Closed by agents", color: "var(--chart-1)" },
  handed: { label: "Handed to you", color: "var(--chart-2)" },
} satisfies ChartConfig

const ranges = { "90d": 90, "30d": 30, "7d": 7 } as const
type Range = keyof typeof ranges

function day(value: string) {
  return new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  })
}

export function ThroughputChart() {
  const [range, setRange] = React.useState<Range>("30d")
  const data = throughput.slice(-ranges[range])

  const totals = data.reduce(
    (sum, point) => ({
      agents: sum.agents + point.agents,
      handed: sum.handed + point.handed,
    }),
    { agents: 0, handed: 0 }
  )
  const rate = (totals.handed / (totals.agents + totals.handed)) * 100

  return (
    <Card className="h-full gap-0">
      <CardHeader className="flex flex-col gap-4 @3xl/main:flex-row @3xl/main:items-start @3xl/main:justify-between">
        <div className="flex flex-col gap-1.5">
          <CardTitle size="md">Throughput</CardTitle>
          <CardDescription>
            Agents handed{" "}
            <span className="font-medium text-foreground">
              {rate.toFixed(1)}%
            </span>{" "}
            of their cases to a person in the last {ranges[range]} days.
          </CardDescription>
        </div>
        <ToggleGroup
          type="single"
          value={range}
          onValueChange={(value) => value && setRange(value as Range)}
          variant="outline"
          size="sm"
          aria-label="Time range"
        >
          <ToggleGroupItem value="7d">7 days</ToggleGroupItem>
          <ToggleGroupItem value="30d">30 days</ToggleGroupItem>
          <ToggleGroupItem value="90d">90 days</ToggleGroupItem>
        </ToggleGroup>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-4 px-2 pt-6 @3xl/main:px-6">
        <ChartContainer
          config={config}
          className="aspect-auto min-h-60 w-full flex-1"
        >
          <AreaChart data={data} margin={{ left: 8, right: 8 }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={day}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => day(String(value))}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="handed"
              type="monotone"
              fill="var(--color-handed)"
              fillOpacity={0.35}
              stroke="var(--color-handed)"
              stackId="a"
            />
            <Area
              dataKey="agents"
              type="monotone"
              fill="var(--color-agents)"
              fillOpacity={0.2}
              stroke="var(--color-agents)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm leading-5">
          {(["agents", "handed"] as const).map((key) => (
            <li key={key} className="flex items-center gap-2">
              <span
                aria-hidden
                className="size-2.5 rounded-[2px]"
                style={{ backgroundColor: config[key].color }}
              />
              <span className="text-muted-foreground">{config[key].label}</span>
              <span className="text-sm font-medium">
                {totals[key].toLocaleString("en-US")}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
