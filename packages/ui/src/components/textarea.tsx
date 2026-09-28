import * as React from "react"
import { cn } from "nooxit-design-system/lib/utils"

// Figma: Textarea (#2807:10440). 80px minimum height, 6px radius,
// input-colored border, text-sm/leading-5, muted placeholder. Focus turns
// the border primary, or destructive when the textarea is invalid.
function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-20 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm leading-5 text-foreground transition-[color,border-color] outline-none placeholder:text-muted-foreground focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-disabled aria-invalid:focus-visible:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
