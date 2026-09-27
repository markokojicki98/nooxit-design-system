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
pnpm build       # build the package and the docs site
pnpm typecheck   # type-check every workspace
```

## License

Proprietary. See [LICENSE](./LICENSE). Components derived from shadcn/ui are
MIT-licensed; see [THIRD-PARTY-NOTICES.md](./THIRD-PARTY-NOTICES.md).
