"use client"

import * as React from "react"
import { cn } from "nooxit-design-system/lib/utils"
import { Progress as ProgressPrimitive } from "radix-ui"

// Figma: Progress. Secondary track, primary indicator, fully rounded.
// Heights: xs 4px, sm 8px, md 12px, lg 16px (Figma's default).
function Progress({
  className,
  value,
  size = "lg",
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & {
  size?: "xs" | "sm" | "md" | "lg"
}) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      data-size={size}
      className={cn(
        "relative flex w-full items-center overflow-x-hidden rounded-full bg-secondary data-[size=lg]:h-4 data-[size=md]:h-3 data-[size=sm]:h-2 data-[size=xs]:h-1",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="size-full flex-1 rounded-full bg-primary transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
