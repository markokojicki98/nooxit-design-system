import { RootProvider } from 'fumadocs-ui/provider/next';
import { DM_Mono, DM_Sans } from 'next/font/google';
import type { Metadata } from 'next';
import { TooltipProvider } from 'nooxit-design-system/components/tooltip';
import { Toaster } from 'nooxit-design-system/components/sonner';
import './global.css';

// Nooxit typography: DM Sans (all weights, variable) and DM Mono (500 only).
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: '500',
  variable: '--font-dm-mono',
  display: 'swap',
});

export const metadata: Metadata = {
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
      className={`${dmSans.variable} ${dmMono.variable}`}
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
