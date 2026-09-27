// Generates the shadcn registry: a staging copy of every source file with the
// imports rewritten to the aliases the CLI understands, plus the registry.json
// that describes them. Dependencies are read from the imports in each file, so
// the registry cannot drift from the code.
//
// Run with `pnpm --filter nooxit-design-system registry`.
import { cpSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const pkg = JSON.parse(readFileSync(resolve(root, "package.json"), "utf8"))

const NAMESPACE = "nooxit"
const HOMEPAGE = "https://github.com/markokojicki98/nooxit-design-system"

// Packages every consumer already has.
const IGNORED_DEPENDENCIES = new Set(["react", "react-dom", "next"])

/**
 * Inside the package, components import each other through the package name.
 * The registry ships standalone source files, so those imports are rewritten
 * to the default shadcn aliases — which the CLI then maps onto whatever the
 * consuming project has configured in its own components.json.
 */
function rewriteImports(source) {
  return source
    .replaceAll("nooxit-design-system/components/", "@/components/ui/")
    .replaceAll("nooxit-design-system/lib/utils", "@/lib/utils")
    .replaceAll("nooxit-design-system/hooks/", "@/hooks/")
    .replaceAll("nooxit-design-system/tokens", "@/lib/nooxit-tokens")
}

/** Reads the import sources out of a TypeScript file. */
function imports(source) {
  return [...source.matchAll(/from\s+["']([^"']+)["']/g)].map((match) => match[1])
}

/** "radix-ui/react-slot" -> "radix-ui"; "@base-ui/react/x" -> "@base-ui/react" */
function packageName(specifier) {
  const parts = specifier.split("/")
  return specifier.startsWith("@") ? parts.slice(0, 2).join("/") : parts[0]
}

// ---------------------------------------------------------------------------
// Staging directory
// ---------------------------------------------------------------------------
const registryDir = resolve(root, "registry")
rmSync(registryDir, { recursive: true, force: true })
for (const sub of ["ui", "lib", "hooks", "styles"]) {
  mkdirSync(resolve(registryDir, sub), { recursive: true })
}

const stage = (from, to) =>
  writeFileSync(
    resolve(registryDir, to),
    rewriteImports(readFileSync(resolve(root, from), "utf8")),
  )

const componentFiles = readdirSync(resolve(root, "src/components"))
  .filter((file) => file.endsWith(".tsx"))
  .sort()

for (const file of componentFiles) stage(`src/components/${file}`, `ui/${file}`)
stage("src/lib/utils.ts", "lib/utils.ts")
stage("src/tokens.ts", "lib/nooxit-tokens.ts")
for (const file of readdirSync(resolve(root, "src/hooks"))) {
  stage(`src/hooks/${file}`, `hooks/${file}`)
}
for (const file of ["tokens.css", "theme.css", "shadcn.css", "fonts.css"]) {
  // The theme imports its siblings by relative path, so it needs no rewriting.
  cpSync(resolve(root, "src/styles", file), resolve(registryDir, "styles", file))
}

// ---------------------------------------------------------------------------
// registry.json
// ---------------------------------------------------------------------------
const items = []

// The theme carries the tokens, the Tailwind theme and the fonts, no components.
items.push({
  name: "nooxit-theme",
  type: "registry:theme",
  title: "Nooxit theme",
  description:
    "The Nooxit design tokens: color primitives, semantic tokens for both modes, the type scale, radii and state values.",
  dependencies: ["tw-animate-css"],
  files: [
    { path: "registry/styles/tokens.css", type: "registry:file", target: "styles/nooxit/tokens.css" },
    { path: "registry/styles/theme.css", type: "registry:file", target: "styles/nooxit/theme.css" },
    { path: "registry/styles/shadcn.css", type: "registry:file", target: "styles/nooxit/shadcn.css" },
    { path: "registry/styles/fonts.css", type: "registry:file", target: "styles/nooxit/fonts.css" },
    { path: "registry/lib/nooxit-tokens.ts", type: "registry:lib" },
  ],
  docs: 'Import styles/nooxit/theme.css after `@import "tailwindcss"`. The theme resets Tailwind\'s color palette, so it must load before any other theme. Load DM Sans and DM Mono as --font-dm-sans and --font-dm-mono, or import styles/nooxit/fonts.css.',
})

items.push({
  name: "utils",
  type: "registry:lib",
  title: "cn",
  description:
    "The class merger, extended so it understands the Nooxit opacity utilities.",
  dependencies: ["cn"],
  files: [{ path: "registry/lib/utils.ts", type: "registry:lib" }],
})

items.push({
  name: "use-mobile",
  type: "registry:hook",
  title: "useIsMobile",
  description: "Tracks whether the viewport is below the mobile breakpoint.",
  files: [{ path: "registry/hooks/use-mobile.ts", type: "registry:hook" }],
})

for (const file of componentFiles) {
  const name = file.replace(/\.tsx$/, "")
  const source = readFileSync(resolve(root, "src/components", file), "utf8")

  const dependencies = new Set()
  const registryDependencies = new Set()

  for (const specifier of imports(source)) {
    if (specifier.startsWith("nooxit-design-system/components/")) {
      registryDependencies.add(
        `@${NAMESPACE}/${specifier.replace("nooxit-design-system/components/", "")}`,
      )
    } else if (specifier === "nooxit-design-system/lib/utils") {
      registryDependencies.add(`@${NAMESPACE}/utils`)
    } else if (specifier.startsWith("nooxit-design-system/hooks/")) {
      registryDependencies.add(
        `@${NAMESPACE}/${specifier.replace("nooxit-design-system/hooks/", "")}`,
      )
    } else if (!specifier.startsWith(".")) {
      const dependency = packageName(specifier)
      if (!IGNORED_DEPENDENCIES.has(dependency)) dependencies.add(dependency)
    }
  }

  // Every component is styled by the tokens, so they all depend on the theme.
  registryDependencies.add(`@${NAMESPACE}/nooxit-theme`)

  const title = name
    .split("-")
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(" ")

  items.push({
    name,
    type: "registry:ui",
    title,
    description: `${title}, styled to the Nooxit Figma UI kit.`,
    ...(dependencies.size ? { dependencies: [...dependencies].sort() } : {}),
    registryDependencies: [...registryDependencies].sort(),
    files: [{ path: `registry/ui/${file}`, type: "registry:ui" }],
  })
}

writeFileSync(
  resolve(root, "registry.json"),
  JSON.stringify(
    {
      $schema: "https://ui.shadcn.com/schema/registry.json",
      name: NAMESPACE,
      homepage: HOMEPAGE,
      items,
    },
    null,
    2,
  ) + "\n",
)

const missing = items
  .flatMap((item) => item.dependencies ?? [])
  .filter(
    (dependency) =>
      !pkg.dependencies?.[dependency] && !pkg.peerDependencies?.[dependency],
  )

if (missing.length) {
  throw new Error(
    `Registry items depend on packages the package.json does not list: ${[...new Set(missing)].join(", ")}`,
  )
}

console.log(`registry: ${items.length} items -> registry.json`)
