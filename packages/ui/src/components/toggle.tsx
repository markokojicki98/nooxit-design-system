"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "nooxit-design-system/lib/utils"
import { Toggle as TogglePrimitive } from "radix-ui"

// Figma: Toggle (#2768:28168). 6px radius, text-sm/leading-5/medium labels,
// 16px foreground icons, 8px gap. Hover: muted surface and muted label;
// pressed: muted surface, foreground label; focus: card surface with the 2px
// primary ring. Sizes: sm 36px, default (Figma md) 40px, lg 44px.
const toggleVariants = cva(
  "group/toggle inline-flex items-center justify-center gap-2 rounded-md text-sm leading-5 font-medium whitespace-nowrap text-foreground transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:not-aria-pressed:bg-card disabled:pointer-events-none disabled:opacity-disabled aria-invalid:focus-visible:ring-destructive aria-pressed:bg-muted aria-pressed:text-foreground aria-pressed:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:text-foreground [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-muted",
      },
      size: {
        default: "h-10 min-w-10 px-3 py-2",
        sm: "h-9 min-w-9 px-2.5 py-2",
        lg: "h-11 min-w-11 px-5 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({
  className,
  variant = "default",
  size = "default",
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
