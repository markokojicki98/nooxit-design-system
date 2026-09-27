import * as React from "react"
import { cn } from "nooxit-design-system/lib/utils"

// Figma: Card (#149:2500), Card Base / Header (#2761:23510) and
// Card Base / Footer (#149:2866). 8px radius, 1px border, no shadow.
// size="default" uses 24px padding (Figma p-6), size="sm" 16px (Figma p-4).
function Card({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm" }) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-lg border border-border bg-card py-(--card-spacing) text-sm text-card-foreground [--card-spacing:--spacing(6)] has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(4)] *:[img:first-child]:rounded-t-lg *:[img:last-child]:rounded-b-lg",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({
  className,
  align = "left",
  ...props
}: React.ComponentProps<"div"> & { align?: "left" | "center" }) {
  return (
    <div
      data-slot="card-header"
      data-align={align}
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1.5 rounded-t-lg px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] data-[align=center]:text-center [.border-b]:pb-(--card-spacing)",
        className
      )}
      {...props}
    />
  )
}

// Figma Card Base / Header sizes: lg text-2xl semibold (default),
// md text-lg semibold, sm text-base medium; all leading-none.
function CardTitle({
  className,
  size = "lg",
  ...props
}: React.ComponentProps<"div"> & { size?: "lg" | "md" | "sm" }) {
  return (
    <div
      data-slot="card-title"
      data-size={size}
      className={cn(
        "font-heading text-2xl leading-none font-semibold tracking-tight data-[size=md]:text-lg data-[size=sm]:text-base data-[size=sm]:font-medium data-[size=sm]:tracking-normal",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm leading-5 text-muted-foreground", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("flex flex-col gap-4 px-(--card-spacing)", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center gap-2 rounded-b-lg px-(--card-spacing) [.border-t]:pt-(--card-spacing)",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
