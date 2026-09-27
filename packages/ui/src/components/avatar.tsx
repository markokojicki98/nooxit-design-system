"use client"

import * as React from "react"
import { cn } from "nooxit-design-system/lib/utils"
import { Avatar as AvatarPrimitive } from "radix-ui"

// Figma: Avatar (#8:297). Seven sizes (16–64px, md = 40px is the default),
// circle or rounded-square shape. The initials fallback uses the orange
// primitives (orange-100 / orange-950) in both color modes, as in Figma.
type AvatarSize = "xxs" | "xs" | "sm" | "default" | "md" | "lg" | "xl" | "2xl"
type AvatarShape = "circle" | "rounded"

function Avatar({
  className,
  size = "default",
  shape = "circle",
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root> & {
  /** xxs 16 · xs 24 · sm 32 · md/default 40 · lg 48 · xl 56 · 2xl 64 (px) */
  size?: AvatarSize
  shape?: AvatarShape
}) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size === "md" ? "default" : size}
      data-shape={shape}
      className={cn(
        "group/avatar relative flex size-10 shrink-0 rounded-full select-none",
        "data-[size=xxs]:size-4 data-[size=xs]:size-6 data-[size=sm]:size-8 data-[size=lg]:size-12 data-[size=xl]:size-14 data-[size=2xl]:size-16",
        "data-[shape=rounded]:rounded-lg data-[shape=rounded]:data-[size=xxs]:rounded-sm data-[shape=rounded]:data-[size=xs]:rounded-md data-[shape=rounded]:data-[size=lg]:rounded-xl data-[shape=rounded]:data-[size=xl]:rounded-xl data-[shape=rounded]:data-[size=2xl]:rounded-2xl",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full rounded-[inherit] object-cover", className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center rounded-[inherit] bg-orange-100 text-base leading-none font-normal text-orange-950",
        "group-data-[size=xxs]/avatar:text-[8px] group-data-[size=xxs]/avatar:font-medium group-data-[size=xs]/avatar:text-xs group-data-[size=sm]/avatar:text-sm group-data-[size=lg]/avatar:text-lg group-data-[size=xl]/avatar:text-xl group-data-[size=2xl]/avatar:text-2xl",
        className
      )}
      {...props}
    />
  )
}

function AvatarBadge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        "absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground ring-2 ring-background select-none",
        "group-data-[size=xxs]/avatar:size-1.5 group-data-[size=xs]/avatar:size-2 group-data-[size=xs]/avatar:[&>svg]:hidden group-data-[size=xxs]/avatar:[&>svg]:hidden",
        "group-data-[size=sm]/avatar:size-2.5 group-data-[size=sm]/avatar:[&>svg]:size-2",
        "group-data-[size=default]/avatar:size-3 group-data-[size=default]/avatar:[&>svg]:size-2",
        "group-data-[size=lg]/avatar:size-3.5 group-data-[size=xl]/avatar:size-4 group-data-[size=2xl]/avatar:size-4 [&>svg]:size-2.5",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        "group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroupCount({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        "relative flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-12 group-has-data-[size=sm]/avatar-group:size-8 group-has-data-[size=xs]/avatar-group:size-6 group-has-data-[size=xs]/avatar-group:text-xs [&>svg]:size-4",
        className
      )}
      {...props}
    />
  )
}

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarBadge,
}
