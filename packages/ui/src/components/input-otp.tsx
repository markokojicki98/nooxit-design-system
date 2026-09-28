"use client"

import * as React from "react"
import { cn } from "nooxit-design-system/lib/utils"
import { OTPInput, OTPInputContext } from "input-otp"
import { DotIcon } from "lucide-react"

// Figma: Input OPT (#2737:7152). 40px slots joined into groups with 6px
// outer corners, text-sm/leading-6/medium values, dot separators. Slots share
// borders, so the active slot's left line (its neighbour's) is a 1px shadow.
function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "cn-input-otp flex items-center gap-2 has-disabled:opacity-disabled",
        containerClassName
      )}
      spellCheck={false}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  )
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("flex items-center rounded-md", className)}
      {...props}
    />
  )
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number
}) {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "relative flex size-10 items-center justify-center border-y border-r border-border bg-background text-sm leading-6 font-medium text-foreground transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:border-primary not-first:data-[active=true]:shadow-[-1px_0_0_0_var(--primary)] data-[active=true]:aria-invalid:border-destructive not-first:data-[active=true]:aria-invalid:shadow-[-1px_0_0_0_var(--destructive)]",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-5 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  )
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-separator"
      className="flex items-center text-foreground [&_svg:not([class*='size-'])]:size-6"
      role="separator"
      {...props}
    >
      <DotIcon />
    </div>
  )
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
