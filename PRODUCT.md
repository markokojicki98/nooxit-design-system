# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Nooxit's engineers and designers, and the AI coding agents they work with,
building Nooxit's product interfaces. They install the `nooxit-design-system`
package or pull components from its shadcn registry, and read the docs site
to learn the components, tokens and composition patterns.

## Product Purpose

A shadcn/ui-based component library, token set and documentation site that
turns the Nooxit Figma UI kit into production React. It exists so every Nooxit
surface is built from the same parts and reads as one product. Success means a
new screen can be assembled from the package without inventing values, and
that it matches the kit.

## Positioning

The system is built for one kind of product: operational software where AI
agents do back-office work and people step in on exceptions. Its defaults (a
quiet neutral scaffold, color that only speaks for status and risk, a
"spot a status → intervene → complete a manual process" loop) come from that
job, not from a generic SaaS kit.

## Operating Context

The interfaces built with it serve Nooxit's AI workforce for source-to-pay
(nooxit.com): agents that run procurement, customs, accounting and tax work
inside customers' existing systems such as SAP, Oracle, Dynamics 365 and
Coupa. The end users of those interfaces are:

- procurement and accounts-payable specialists who clear the cases agents hand
  over: order confirmations, invoices, purchase requisitions, goods receipts;
- an operations lead who watches agent health and throughput.

The current product ("Agent cockpit") lists the agents on duty, how many cases
each is waiting on a person for, and a queue of cases handed over to the user.
Its agents are the order confirmation (AB), purchase requisition (BANF),
invoice, goods receipt and guided buying agents.

Delivery: a pnpm/turbo monorepo with the package in `packages/ui` and a
Fumadocs site in `apps/docs`, which also hosts full-page example blocks.

## Capabilities and Constraints

- 61 components on shadcn/ui's API with documented deviations; see DESIGN.md.
- Figma is the source of truth for tokens and component styling. The tokens
  JSON transcribes it and generates the CSS; generated files are never edited
  by hand.
- Some tokens deliberately differ from Figma (`origin: adjusted`, `proposed`),
  and text-entry fields use a border-color focus instead of the kit's ring.
  These are recorded decisions, not bugs.
- Contrast shortfalls are accepted for now.
- Distribution is a private npm package; the channel (tarball, GitHub
  Packages, paid npm) is undecided.

## Brand Commitments

The Nooxit name and logo (`assets/nooxit-logo.svg`), and the brand colors
Blaze orange, Dark spruce, Silver, lime and blue as defined in DESIGN.md.

## Evidence on Hand

Demo and example content uses fictional data only: made-up suppliers such as
"Nooxit Showcase Supplier DE", order and invoice numbers, and amounts.
nooxit.com's claims (named customers such as REWE Group, ZF Friedrichshafen
and Schneider Gruppe, the ~95% process-cost reduction, 40+ countries) are
context only and must not appear in demos. No testimonials, benchmarks or
pricing exist in this repo, and none may be invented.

## Product Principles

1. The interface stays quiet until the system has something consequential to
   say; color is spent on status, risk and agent work.
2. Every screen should make "what needs me now" the first thing a person sees.
3. Match the Figma kit; when a value is not in it, derive it from existing
   tokens and say so.
4. Keep shadcn/ui's API so existing knowledge transfers; document every
   deviation.
