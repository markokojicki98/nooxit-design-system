import { createCn } from "cn/config"

/**
 * Class-name joiner and Tailwind conflict resolver (clsx + tailwind-merge
 * semantics), taught the Nooxit-specific utilities so that, for example,
 * `cn("opacity-disabled", "opacity-40")` keeps only the last one.
 */
export const cn = createCn({
  extend: {
    classGroups: {
      opacity: [{ opacity: ["disabled", "hover"] }],
    },
  },
})
