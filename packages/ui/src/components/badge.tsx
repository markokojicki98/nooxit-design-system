import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "nooxit-design-system/lib/utils"
import { Slot } from "radix-ui"

// Figma: Badge (#136:1178). text-xs/leading-4/semibold, 20px tall, pill by
// default (`rounded={false}` gives the 6px radius variant).
const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden border border-transparent px-2.5 py-0.5 text-xs leading-4 font-semibold whitespace-nowrap transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive-50 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-hover-primary",
        secondary:
          "bg-secondary text-secondary-foreground [a]:hover:bg-hover-secondary",
        destructive:
          "bg-destructive text-destructive-foreground focus-visible:ring-destructive [a]:hover:opacity-hover",
        outline:
          "border-border text-foreground focus-visible:bg-background [a]:hover:bg-hover-secondary",
        ghost: "text-foreground hover:bg-hover-secondary",
        link: "text-foreground underline-offset-4 hover:underline",
      },
      rounded: {
        true: "rounded-full",
        false: "rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      rounded: true,
    },
  }
)

function Badge({
  className,
  variant = "default",
  rounded = true,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant, rounded }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
