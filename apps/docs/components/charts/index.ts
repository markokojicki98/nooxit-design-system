// Chart gallery, ported from shadcn/ui's charts onto Nooxit components.

import { ChartAreaAxes } from "./chart-area-axes"
import { ChartAreaDefault } from "./chart-area-default"
import { ChartAreaGradient } from "./chart-area-gradient"
import { ChartAreaIcons } from "./chart-area-icons"
import { ChartAreaInteractive } from "./chart-area-interactive"
import { ChartAreaLegend } from "./chart-area-legend"
import { ChartAreaLinear } from "./chart-area-linear"
import { ChartAreaStackedExpand } from "./chart-area-stacked-expand"
import { ChartAreaStacked } from "./chart-area-stacked"
import { ChartAreaStep } from "./chart-area-step"
import { ChartBarActive } from "./chart-bar-active"
import { ChartBarDefault } from "./chart-bar-default"
import { ChartBarHorizontal } from "./chart-bar-horizontal"
import { ChartBarInteractive } from "./chart-bar-interactive"
import { ChartBarLabelCustom } from "./chart-bar-label-custom"
import { ChartBarLabel } from "./chart-bar-label"
import { ChartBarMixed } from "./chart-bar-mixed"
import { ChartBarMultiple } from "./chart-bar-multiple"
import { ChartBarNegative } from "./chart-bar-negative"
import { ChartBarStacked } from "./chart-bar-stacked"
import { ChartLineDefault } from "./chart-line-default"
import { ChartLineDotsColors } from "./chart-line-dots-colors"
import { ChartLineDotsCustom } from "./chart-line-dots-custom"
import { ChartLineDots } from "./chart-line-dots"
import { ChartLineInteractive } from "./chart-line-interactive"
import { ChartLineLabelCustom } from "./chart-line-label-custom"
import { ChartLineLabel } from "./chart-line-label"
import { ChartLineLinear } from "./chart-line-linear"
import { ChartLineMultiple } from "./chart-line-multiple"
import { ChartLineStep } from "./chart-line-step"
import { ChartPieDonutActive } from "./chart-pie-donut-active"
import { ChartPieDonutText } from "./chart-pie-donut-text"
import { ChartPieDonut } from "./chart-pie-donut"
import { ChartPieInteractive } from "./chart-pie-interactive"
import { ChartPieLabelCustom } from "./chart-pie-label-custom"
import { ChartPieLabelList } from "./chart-pie-label-list"
import { ChartPieLabel } from "./chart-pie-label"
import { ChartPieLegend } from "./chart-pie-legend"
import { ChartPieSeparatorNone } from "./chart-pie-separator-none"
import { ChartPieSimple } from "./chart-pie-simple"
import { ChartPieStacked } from "./chart-pie-stacked"
import { ChartRadarDefault } from "./chart-radar-default"
import { ChartRadarDots } from "./chart-radar-dots"
import { ChartRadarGridCircleFill } from "./chart-radar-grid-circle-fill"
import { ChartRadarGridCircleNoLines } from "./chart-radar-grid-circle-no-lines"
import { ChartRadarGridCircle } from "./chart-radar-grid-circle"
import { ChartRadarGridCustom } from "./chart-radar-grid-custom"
import { ChartRadarGridFill } from "./chart-radar-grid-fill"
import { ChartRadarGridNone } from "./chart-radar-grid-none"
import { ChartRadarIcons } from "./chart-radar-icons"
import { ChartRadarLabelCustom } from "./chart-radar-label-custom"
import { ChartRadarLegend } from "./chart-radar-legend"
import { ChartRadarLinesOnly } from "./chart-radar-lines-only"
import { ChartRadarMultiple } from "./chart-radar-multiple"
import { ChartRadarRadius } from "./chart-radar-radius"
import { ChartRadialGrid } from "./chart-radial-grid"
import { ChartRadialLabel } from "./chart-radial-label"
import { ChartRadialShape } from "./chart-radial-shape"
import { ChartRadialSimple } from "./chart-radial-simple"
import { ChartRadialStacked } from "./chart-radial-stacked"
import { ChartRadialText } from "./chart-radial-text"
import { ChartTooltipDefault } from "./chart-tooltip-default"
import { ChartTooltipIndicatorLine } from "./chart-tooltip-indicator-line"
import { ChartTooltipIndicatorNone } from "./chart-tooltip-indicator-none"
import { ChartTooltipLabelNone } from "./chart-tooltip-label-none"
import { ChartTooltipLabelCustom } from "./chart-tooltip-label-custom"
import { ChartTooltipLabelFormatter } from "./chart-tooltip-label-formatter"
import { ChartTooltipFormatter } from "./chart-tooltip-formatter"
import { ChartTooltipIcons } from "./chart-tooltip-icons"
import { ChartTooltipAdvanced } from "./chart-tooltip-advanced"

export const charts = {
  area: [
    { name: "chart-area-interactive", component: ChartAreaInteractive },
    { name: "chart-area-axes", component: ChartAreaAxes },
    { name: "chart-area-default", component: ChartAreaDefault },
    { name: "chart-area-gradient", component: ChartAreaGradient },
    { name: "chart-area-icons", component: ChartAreaIcons },
    { name: "chart-area-legend", component: ChartAreaLegend },
    { name: "chart-area-linear", component: ChartAreaLinear },
    { name: "chart-area-stacked-expand", component: ChartAreaStackedExpand },
    { name: "chart-area-stacked", component: ChartAreaStacked },
    { name: "chart-area-step", component: ChartAreaStep },
  ],
  bar: [
    { name: "chart-bar-interactive", component: ChartBarInteractive },
    { name: "chart-bar-active", component: ChartBarActive },
    { name: "chart-bar-default", component: ChartBarDefault },
    { name: "chart-bar-horizontal", component: ChartBarHorizontal },
    { name: "chart-bar-label-custom", component: ChartBarLabelCustom },
    { name: "chart-bar-label", component: ChartBarLabel },
    { name: "chart-bar-mixed", component: ChartBarMixed },
    { name: "chart-bar-multiple", component: ChartBarMultiple },
    { name: "chart-bar-negative", component: ChartBarNegative },
    { name: "chart-bar-stacked", component: ChartBarStacked },
  ],
  line: [
    { name: "chart-line-interactive", component: ChartLineInteractive },
    { name: "chart-line-default", component: ChartLineDefault },
    { name: "chart-line-dots-colors", component: ChartLineDotsColors },
    { name: "chart-line-dots-custom", component: ChartLineDotsCustom },
    { name: "chart-line-dots", component: ChartLineDots },
    { name: "chart-line-label-custom", component: ChartLineLabelCustom },
    { name: "chart-line-label", component: ChartLineLabel },
    { name: "chart-line-linear", component: ChartLineLinear },
    { name: "chart-line-multiple", component: ChartLineMultiple },
    { name: "chart-line-step", component: ChartLineStep },
  ],
  pie: [
    { name: "chart-pie-interactive", component: ChartPieInteractive },
    { name: "chart-pie-donut-active", component: ChartPieDonutActive },
    { name: "chart-pie-donut-text", component: ChartPieDonutText },
    { name: "chart-pie-donut", component: ChartPieDonut },
    { name: "chart-pie-label-custom", component: ChartPieLabelCustom },
    { name: "chart-pie-label-list", component: ChartPieLabelList },
    { name: "chart-pie-label", component: ChartPieLabel },
    { name: "chart-pie-legend", component: ChartPieLegend },
    { name: "chart-pie-separator-none", component: ChartPieSeparatorNone },
    { name: "chart-pie-simple", component: ChartPieSimple },
    { name: "chart-pie-stacked", component: ChartPieStacked },
  ],
  radar: [
    { name: "chart-radar-default", component: ChartRadarDefault },
    { name: "chart-radar-dots", component: ChartRadarDots },
    {
      name: "chart-radar-grid-circle-fill",
      component: ChartRadarGridCircleFill,
    },
    {
      name: "chart-radar-grid-circle-no-lines",
      component: ChartRadarGridCircleNoLines,
    },
    { name: "chart-radar-grid-circle", component: ChartRadarGridCircle },
    { name: "chart-radar-grid-custom", component: ChartRadarGridCustom },
    { name: "chart-radar-grid-fill", component: ChartRadarGridFill },
    { name: "chart-radar-grid-none", component: ChartRadarGridNone },
    { name: "chart-radar-icons", component: ChartRadarIcons },
    { name: "chart-radar-label-custom", component: ChartRadarLabelCustom },
    { name: "chart-radar-legend", component: ChartRadarLegend },
    { name: "chart-radar-lines-only", component: ChartRadarLinesOnly },
    { name: "chart-radar-multiple", component: ChartRadarMultiple },
    { name: "chart-radar-radius", component: ChartRadarRadius },
  ],
  radial: [
    { name: "chart-radial-grid", component: ChartRadialGrid },
    { name: "chart-radial-label", component: ChartRadialLabel },
    { name: "chart-radial-shape", component: ChartRadialShape },
    { name: "chart-radial-simple", component: ChartRadialSimple },
    { name: "chart-radial-stacked", component: ChartRadialStacked },
    { name: "chart-radial-text", component: ChartRadialText },
  ],
  tooltip: [
    { name: "chart-tooltip-default", component: ChartTooltipDefault },
    {
      name: "chart-tooltip-indicator-line",
      component: ChartTooltipIndicatorLine,
    },
    {
      name: "chart-tooltip-indicator-none",
      component: ChartTooltipIndicatorNone,
    },
    { name: "chart-tooltip-label-none", component: ChartTooltipLabelNone },
    { name: "chart-tooltip-label-custom", component: ChartTooltipLabelCustom },
    {
      name: "chart-tooltip-label-formatter",
      component: ChartTooltipLabelFormatter,
    },
    { name: "chart-tooltip-formatter", component: ChartTooltipFormatter },
    { name: "chart-tooltip-icons", component: ChartTooltipIcons },
    { name: "chart-tooltip-advanced", component: ChartTooltipAdvanced },
  ],
} as const

export type ChartType = keyof typeof charts
