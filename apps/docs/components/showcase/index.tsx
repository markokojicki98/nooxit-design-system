import { cn } from 'nooxit-design-system/lib/utils';

import { AgentRuns } from './agent-runs';
import { AuditTrail } from './audit-trail';
import { CommandPalette } from './command-palette';
import { Guardrails } from './guardrails';
import { Intervention } from './intervention';
import { Reviewers } from './reviewers';
import { Throughput } from './throughput';

/**
 * The blocks read left to right as the product's own loop — spot a status,
 * intervene, then set the rule that prevents the next interruption. Spans are
 * deliberately uneven: a grid of equal cards would say nothing about which
 * component carries weight.
 */
const blocks = [
  { id: 'agent-runs', Block: AgentRuns, span: 'lg:col-span-4' },
  { id: 'intervention', Block: Intervention, span: 'lg:col-span-2' },
  { id: 'throughput', Block: Throughput, span: 'lg:col-span-3' },
  { id: 'guardrails', Block: Guardrails, span: 'lg:col-span-3' },
  { id: 'command-palette', Block: CommandPalette, span: 'lg:col-span-2' },
  { id: 'audit-trail', Block: AuditTrail, span: 'lg:col-span-2' },
  { id: 'reviewers', Block: Reviewers, span: 'lg:col-span-2' },
];

export function Showcase({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6',
        className,
      )}
    >
      {blocks.map(({ id, Block, span }, index) => (
        <div
          key={id}
          // The settle is additive: the final state is the CSS default, so the
          // grid is correct and readable before the animation ever runs.
          className={cn('animate-settle', span)}
          style={{ animationDelay: `${index * 70}ms` }}
        >
          <Block />
        </div>
      ))}
    </div>
  );
}
