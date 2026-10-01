import { RootProvider } from 'fumadocs-ui/provider/next';
import localFont from 'next/font/local';
import type { Metadata } from 'next';

import { baseUrl } from '@/lib/shared';
import { TooltipProvider } from 'nooxit-design-system/components/tooltip';
import { Toaster } from 'nooxit-design-system/components/sonner';
import './global.css';

// Nooxit typography: Aspekta, self-hosted from public/fonts. Only the weights
// the type scale uses are loaded (and preloaded); Aspekta has no italics.
// Paths must be literals: next/font resolves them at build time.
const brandFont = localFont({
  src: [
    { path: '../public/fonts/aspekta/Aspekta-400.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/aspekta/Aspekta-500.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/aspekta/Aspekta-600.woff2', weight: '600', style: 'normal' },
    { path: '../public/fonts/aspekta/Aspekta-700.woff2', weight: '700', style: 'normal' },
    { path: '../public/fonts/aspekta/Aspekta-800.woff2', weight: '800', style: 'normal' },
  ],
  variable: '--font-brand',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: {
    template: '%s | Nooxit Design System',
    default: 'Nooxit Design System',
  },
  description:
    'Foundations, components and guidelines of the Nooxit design system.',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={brandFont.variable}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col">
        <RootProvider>
          <TooltipProvider>{children}</TooltipProvider>
          <Toaster />
        </RootProvider>
      </body>
    </html>
  );
}
