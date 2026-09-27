import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "nooxit-design-system/lib/utils"
import { Slot } from "radix-ui"

// Figma: Button (#2718:8237) and Icon Button (#2718:8839).
// Pill shape, text-sm/leading-6/medium, 16px icons, solid hover tokens and
// a 2px focus ring offset by 2px. Every variant has a destructive version,
// set with `destructive` (or the shadcn-compatible `variant="destructive"`).
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm leading-6 font-medium whitespace-nowrap transition-colors outline-none select-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-disabled aria-invalid:ring-2 aria-invalid:ring-destructive aria-invalid:ring-offset-2 aria-invalid:ring-offset-background [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-hover-primary aria-expanded:bg-hover-primary",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-hover-secondary aria-expanded:bg-hover-secondary",
        outline:
          "border-border bg-background text-foreground hover:bg-hover-secondary aria-expanded:bg-hover-secondary",
        ghost:
          "text-foreground hover:bg-hover-secondary aria-expanded:bg-hover-secondary",
        link: "text-foreground underline-offset-4 hover:underline",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-hover-destructive aria-expanded:bg-hover-destructive",
      },
      destructive: {
        true: "focus-visible:ring-destructive disabled:opacity-40",
        false: "",
      },
      size: {
        default:
          "h-9 gap-1 px-3 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 px-2.5 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
        lg: "h-10 gap-2 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        icon: "size-10 disabled:opacity-40",
        "icon-lg": "size-10 disabled:opacity-40",
        "icon-sm": "size-8 disabled:opacity-40",
        "icon-xs": "size-7 disabled:opacity-40",
        "icon-xss": "size-5 disabled:opacity-40",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        destructive: true,
        class:
          "bg-destructive text-destructive-foreground hover:bg-hover-destructive aria-expanded:bg-hover-destructive",
      },
      {
        variant: "destructive",
        class: "focus-visible:ring-destructive disabled:opacity-40",
      },
      {
        variant: "secondary",
        destructive: true,
        class:
          "bg-destructive-10 text-destructive-muted-foreground shadow-xs hover:bg-hover-destructive-20 aria-expanded:bg-hover-destructive-20 disabled:shadow-none",
      },
      {
        variant: "outline",
        destructive: true,
        class:
          "border-destructive-50 text-destructive-muted-foreground hover:bg-destructive-10 aria-expanded:bg-destructive-10",
      },
      {
        variant: "ghost",
        destructive: true,
        class:
          "text-destructive-muted-foreground hover:bg-destructive-10 aria-expanded:bg-destructive-10",
      },
      {
        variant: "link",
        destructive: true,
        class: "text-destructive-muted-foreground",
      },
      {
        variant: "link",
        class:
          "h-6 border-0 px-0 has-data-[icon=inline-end]:pr-0 has-data-[icon=inline-start]:pl-0",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      destructive: false,
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  destructive = false,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      data-destructive={destructive || variant === "destructive" || undefined}
      className={cn(buttonVariants({ variant, size, destructive, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
