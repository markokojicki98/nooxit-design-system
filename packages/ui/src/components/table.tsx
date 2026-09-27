"use client"

import * as React from "react"
import { cn } from "nooxit-design-system/lib/utils"

// Figma: Table Example (#2807:10070), Table Base / Header (#2768:27447) and
// Table Base / Cell (#2770:31005). 48px header cells in medium muted text;
// body cells 16px side padding, text-sm/leading-5. Row height comes from
// `size`: sm 56px (default), md 76px, lg 96px. Rows hover to bg-muted-50;
// the footer sits on bg-muted-50 and hovers to bg-muted.
function Table({
  className,
  size = "sm",
  ...props
}: React.ComponentProps<"table"> & { size?: "sm" | "md" | "lg" }) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        data-size={size}
        className={cn(
          "group/table w-full caption-bottom text-sm text-foreground",
          className
        )}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b [&_tr]:border-border", className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "border-t border-border bg-muted-50 font-medium [&>tr]:last:border-b-0 [&>tr]:hover:bg-muted",
        className
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "border-b border-border transition-colors hover:bg-muted-50 has-aria-expanded:bg-muted-50 data-[state=selected]:bg-muted",
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "h-12 px-4 py-3 text-left align-middle text-sm leading-6 font-medium whitespace-nowrap text-muted-foreground [&:has([role=checkbox])]:w-12",
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "px-4 py-2 align-middle text-sm leading-5 whitespace-nowrap group-data-[size=lg]/table:h-24 group-data-[size=md]/table:h-19 group-data-[size=sm]/table:h-14 [&:has([role=checkbox])]:w-12",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn(
        "px-3.5 py-4 text-sm leading-5 text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
