"use client"

import * as React from "react"
import { Direction } from "radix-ui"

// Accepts `direction` as an alias for Radix's `dir`, so either name works.
function DirectionProvider({
  dir,
  direction,
  children,
}: Omit<React.ComponentProps<typeof Direction.DirectionProvider>, "dir"> & {
  dir?: React.ComponentProps<typeof Direction.DirectionProvider>["dir"]
  direction?: React.ComponentProps<typeof Direction.DirectionProvider>["dir"]
}) {
  return (
    <Direction.DirectionProvider dir={direction ?? dir ?? "ltr"}>
      {children}
    </Direction.DirectionProvider>
  )
}

const useDirection = Direction.useDirection

export { DirectionProvider, useDirection }
