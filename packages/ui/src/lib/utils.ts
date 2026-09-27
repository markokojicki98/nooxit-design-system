import type { CnFunction } from "cn"
import { createCn } from "cn/config"

export type { ClassValue } from "cn"

/**
 * Class-name joiner and Tailwind conflict resolver (clsx + tailwind-merge
 * semantics), taught the Nooxit-specific utilities so that, for example,
 * `cn("opacity-disabled", "opacity-40")` keeps only the last one.
 */
export const cn: CnFunction = createCn({
  extend: {
    classGroups: {
      opacity: [{ opacity: ["disabled", "hover"] }],
    },
  },
})
