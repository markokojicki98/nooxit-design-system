import { cn } from "nooxit-design-system/lib/utils"

// Figma: Skeleton. Muted blocks with a 6px radius (avatars rounded-full,
// cards rounded-xl); the second Figma state (50% opacity) is the pulse.
function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
