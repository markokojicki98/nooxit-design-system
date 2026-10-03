"use client"

import * as React from "react"
import { cn } from "nooxit-design-system/lib/utils"
import { Checkbox as CheckboxPrimitive } from "radix-ui"
import { CheckIcon, MinusIcon } from "@phosphor-icons/react/ssr"

// Figma: Checkbox Base (#2744:7267). 16px box, 4px radius, 1px primary
// border; checked/indeterminate fill with primary. Pass
// checked="indeterminate" for the minus state.
function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer group/checkbox relative flex size-4 shrink-0 items-center justify-center rounded-sm border border-primary bg-transparent transition-colors outline-none group-has-disabled/field:opacity-disabled after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:bg-background focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:bg-background disabled:opacity-disabled data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none [&>svg]:size-3.5"
      >
        <CheckIcon className="group-data-[state=indeterminate]/checkbox:hidden" />
        <MinusIcon className="hidden group-data-[state=indeterminate]/checkbox:block" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
