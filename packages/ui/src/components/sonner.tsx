"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import {
  CheckCircleIcon,
  CircleNotchIcon,
  InfoIcon,
  WarningIcon,
  XCircleIcon,
} from "@phosphor-icons/react/ssr"

// Figma: "Sooner" (#540:5281) and Sooner Base / Button (#2785:11531).
// 356px toast, 16px padding and gap, 6px radius, 1px border, shadow-lg,
// 12px between stacked toasts. Title text-sm/leading-5/medium, description
// text-sm/leading-5 muted at 90%. The action is a 24px primary button in
// text-xs. Error toasts use the destructive colors of the Figma Toast
// component (#164:1459).
//
// Sonner injects its own unlayered CSS, so the overrides below carry
// Tailwind's important modifier (!) to win over it.
const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      gap={12}
      icons={{
        success: (
          <CheckCircleIcon className="size-4" />
        ),
        info: (
          <InfoIcon className="size-4" />
        ),
        warning: (
          <WarningIcon className="size-4" />
        ),
        error: (
          <XCircleIcon className="size-4" />
        ),
        loading: (
          <CircleNotchIcon className="size-4 animate-spin" />
        ),
      }}
      style={
        {
          "--normal-bg": "var(--background)",
          "--normal-text": "var(--foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius-md)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "cn-toast gap-4! p-4! font-sans shadow-lg!",
          title: "text-sm! leading-5! font-medium!",
          description:
            "text-sm! leading-5! font-normal! text-muted-foreground! opacity-90",
          actionButton:
            "h-6! rounded-md! bg-primary! px-2! py-1! text-xs! leading-4! font-normal! text-primary-foreground! focus-visible:ring-2! focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-disabled",
          cancelButton:
            "h-6! rounded-md! bg-secondary! px-2! py-1! text-xs! leading-4! font-normal! text-secondary-foreground! focus-visible:ring-2! focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          closeButton:
            "border-border! bg-background! text-foreground! hover:bg-secondary!",
          error:
            "border-destructive! bg-destructive! text-destructive-foreground! [&_[data-description]]:text-destructive-foreground! [&_[data-button]]:border! [&_[data-button]]:border-muted-40! [&_[data-button]]:bg-destructive! [&_[data-button]]:text-destructive-foreground! [&_[data-button]]:focus-visible:ring-destructive",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
