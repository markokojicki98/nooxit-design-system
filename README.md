# Nooxit design system

The Nooxit design system as code: every [shadcn/ui](https://ui.shadcn.com)
component (Radix primitives, Tailwind CSS v4), restyled with the Nooxit design
tokens from the Nooxit Figma UI kit, plus a [Fumadocs](https://fumadocs.dev)
site that documents the foundations and every component.

| Path                          | What it is                                                     |
| ----------------------------- | -------------------------------------------------------------- |
| `packages/ui`                 | `nooxit-design-system`, the component package                  |
| `apps/docs`                   | Documentation site (foundations, components, shadcn registry)  |
| `packages/typescript-config`  | Shared TypeScript configs (internal)                           |
| `packages/eslint-config`      | Shared ESLint configs (internal)                               |
| `assets`                      | Brand assets (logo)                                            |

## Requirements

- Node.js 22 or newer
- pnpm 11 (`corepack enable` or `npm i -g pnpm`)

## Commands

```bash
pnpm install     # install all workspaces
pnpm dev         # run the docs site on http://localhost:3000
pnpm build       # build the registry, the package and the docs site
pnpm typecheck   # type-check every workspace
```

Workspace-specific:

```bash
pnpm --filter nooxit-design-system tokens     # tokens.json -> tokens.css + tokens.ts
pnpm --filter nooxit-design-system registry   # registry.json + apps/docs/public/r
pnpm --filter nooxit-design-system build      # dist/ (tsdown)
pnpm --filter docs demos                      # regenerate the demo registry
```

## Editing tokens

`packages/ui/tokens/nooxit.tokens.json` is the single source of truth for
colors and text styles. Edit it, then run the `tokens` script — it regenerates
`src/styles/tokens.css` (the CSS variables and the Tailwind theme) and
`src/tokens.ts` (the typed exports the docs site reads). Never edit either
generated file by hand.

## Packaging

The package is private and is not published to the public npm registry. To hand
it to someone, build a tarball:

```bash
pnpm --filter nooxit-design-system pack
```

`prepack` runs the build first, so the tarball always contains a fresh `dist`.
`publishConfig.exports` points the packed package at `dist`, while the
workspace itself resolves to `src` — so the docs site and the registry always
read the real source.

`"private": true` stays in `package.json` as a safety latch: `npm publish`
refuses to publish it until that is deliberately removed.

## License

Proprietary. See [LICENSE](./LICENSE). Components derived from shadcn/ui are
MIT-licensed; see [THIRD-PARTY-NOTICES.md](./THIRD-PARTY-NOTICES.md).
