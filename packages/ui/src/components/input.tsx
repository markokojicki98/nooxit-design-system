import * as React from "react"
import { cn } from "nooxit-design-system/lib/utils"

// Figma: Input (#2732:15509). md = 40px (default), sm = 36px; 6px radius,
// 1px input-colored border, text-sm/leading-5, border that turns primary on
// focus (destructive when invalid) instead of an outer ring.
function Input({
  className,
  type,
  size = "default",
  ...props
}: Omit<React.ComponentProps<"input">, "size"> & {
  size?: "default" | "sm"
}) {
  return (
    <input
      type={type}
      data-slot="input"
      data-size={size}
      className={cn(
        "h-10 w-full min-w-0 rounded-md border border-input bg-background px-3 py-2.5 text-sm leading-5 text-foreground transition-[color,border-color] outline-none file:mr-2 file:inline-flex file:h-5 file:border-0 file:bg-transparent file:text-sm file:leading-5 file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-primary disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-disabled aria-invalid:focus-visible:border-destructive data-[size=sm]:h-9 data-[size=sm]:py-2",
        className
      )}
      {...props}
    />
  )
}

export { Input }
