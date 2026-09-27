'use client';

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import { Badge } from 'nooxit-design-system/components/badge';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from 'nooxit-design-system/components/card';
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from 'nooxit-design-system/components/chart';
import { TrendingUpIcon } from 'lucide-react';

const data = [
  { day: 'Mon', automated: 186, escalated: 34 },
  { day: 'Tue', automated: 246, escalated: 28 },
  { day: 'Wed', automated: 221, escalated: 41 },
  { day: 'Thu', automated: 298, escalated: 22 },
  { day: 'Fri', automated: 342, escalated: 19 },
  { day: 'Sat', automated: 128, escalated: 8 },
  { day: 'Sun', automated: 96, escalated: 5 },
];

const config = {
  automated: { label: 'Automated', color: 'var(--chart-1)' },
  escalated: { label: 'Escalated', color: 'var(--chart-2)' },
} satisfies ChartConfig;

export function Throughput() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle size="sm">Throughput</CardTitle>
        <CardDescription>Tasks closed without a human, last 7 days.</CardDescription>
        <CardAction>
          <Badge className="bg-success-muted text-success-muted-foreground">
            <TrendingUpIcon />
            +18.2%
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="flex-1">
        <ChartContainer config={config} className="h-full min-h-[200px] w-full">
          <AreaChart data={data} margin={{ left: 12, right: 12, top: 4 }}>
            <defs>
              <linearGradient id="fillAutomated" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-automated)" stopOpacity={0.7} />
                <stop offset="100%" stopColor="var(--color-automated)" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="fillEscalated" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-escalated)" stopOpacity={0.7} />
                <stop offset="100%" stopColor="var(--color-escalated)" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              // Recharts drops a tick it thinks would clip; every day must show.
              interval={0}
            />
            <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Area
              dataKey="escalated"
              type="natural"
              stackId="a"
              fill="url(#fillEscalated)"
              stroke="var(--color-escalated)"
              strokeWidth={2}
            />
            <Area
              dataKey="automated"
              type="natural"
              stackId="a"
              fill="url(#fillAutomated)"
              stroke="var(--color-automated)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
