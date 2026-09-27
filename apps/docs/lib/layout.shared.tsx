import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { NooxitLogo } from '@/components/nooxit-logo';
import { gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="inline-flex items-center gap-2 font-semibold">
          <NooxitLogo className="size-6" />
          Nooxit
        </span>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
