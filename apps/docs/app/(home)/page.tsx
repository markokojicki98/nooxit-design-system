import Link from 'next/link';

import { NooxitLogo } from '@/components/nooxit-logo';
import { Showcase } from '@/components/showcase';
import { Badge } from 'nooxit-design-system/components/badge';
import { Button } from 'nooxit-design-system/components/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 'nooxit-design-system/components/card';
import { Separator } from 'nooxit-design-system/components/separator';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01Icon } from '@hugeicons/core-free-icons';

const entries = [
  {
    href: '/docs/installation',
    title: 'Installation',
    description: 'Add the package to a Next.js app, load the fonts and the stylesheet.',
  },
  {
    href: '/docs/foundations/colors',
    title: 'Foundations',
    description: 'Colors, typography, spacing, radius, elevation, states and icons.',
  },
  {
    href: '/docs/components/button',
    title: 'Components',
    description: 'Every component with a live demo, its source and its Figma node.',
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-screen-lg flex-1 flex-col gap-16 px-6 py-20">
      <section className="flex flex-col items-start gap-6">
        <Badge variant="secondary">v0.1.0 · private</Badge>
        <div className="flex items-center gap-4">
          <NooxitLogo className="size-10" />
          <h1 className="font-heading text-5xl leading-none font-semibold tracking-tight">
            Nooxit
          </h1>
        </div>
        <p className="max-w-2xl text-xl leading-7 text-muted-foreground">
          A design system for Next.js. Every shadcn/ui component, rebuilt on
          Radix and Tailwind CSS v4 and restyled to the Nooxit Figma UI kit.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button size="lg" asChild>
            <Link href="/docs">
              Get started
              <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} data-icon="inline-end" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/docs/components/button">Browse components</Link>
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <Showcase />
      </section>

      <Separator />

      <section className="flex flex-col gap-6">
        <h2 className="font-heading text-xl leading-7 font-semibold tracking-tight">
          Explore the library
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {entries.map((entry) => (
            <Link key={entry.href} href={entry.href} className="group/entry">
              <Card className="h-full transition-colors group-hover/entry:bg-muted-50">
                <CardHeader>
                  <CardTitle size="sm">{entry.title}</CardTitle>
                  <CardDescription>{entry.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <span className="inline-flex items-center gap-1 text-sm leading-5 font-medium">
                    Read
                    <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4 transition-transform group-hover/entry:translate-x-0.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
