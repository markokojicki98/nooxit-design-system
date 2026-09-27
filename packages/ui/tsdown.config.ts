import { defineConfig } from "tsdown"

/**
 * Builds the publishable package. The output mirrors src/ one file per module
 * (`unbundled`) rather than rolling everything into one chunk, so consumers
 * can deep-import a single component and bundlers can tree-shake the rest.
 *
 * "use client" directives are preserved — most components need them in a
 * React Server Components app.
 */
export default defineConfig({
  entry: [
    "src/index.ts",
    "src/components/*.tsx",
    "src/hooks/*.ts",
    "src/lib/*.ts",
    "src/tokens.ts",
  ],
  outDir: "dist",
  format: "esm",
  platform: "neutral",
  unbundle: true,
  dts: true,
  sourcemap: true,
  clean: true,
  // The stylesheets are copied as-is; they are not JavaScript.
  copy: [{ from: "src/styles", to: "dist" }],
  // React and every runtime dependency stay external.
  external: [/^react($|\/)/, /^react-dom($|\/)/, "next-themes"],
})
