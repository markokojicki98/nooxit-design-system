import { Badge } from 'nooxit-design-system/components/badge';

// Descriptive and semantic tones are not Badge variants — they are the
// existing color-token pairs applied through className. Filled tones use the
// solid pair, muted tones the -muted / descriptive pair.
const descriptive = {
  filled: [
    { label: 'Neutral', className: '' },
    {
      label: 'Orange',
      className:
        'bg-descriptive-orange-brand text-descriptive-orange-brand-foreground',
    },
    {
      label: 'Lime',
      className:
        'bg-descriptive-lime-brand text-descriptive-lime-brand-foreground',
    },
    {
      label: 'Blue',
      className:
        'bg-descriptive-blue-brand text-descriptive-blue-brand-foreground',
    },
  ],
  muted: [
    { label: 'Neutral', className: '' },
    { label: 'Orange', className: 'bg-accent text-accent-foreground' },
    {
      label: 'Lime',
      className: 'bg-descriptive-lime text-descriptive-lime-foreground',
    },
    {
      label: 'Blue',
      className: 'bg-descriptive-blue text-descriptive-blue-foreground',
    },
  ],
};

const semantic = {
  filled: [
    { label: 'Error', className: 'bg-destructive text-destructive-foreground' },
    { label: 'Success', className: 'bg-success text-success-foreground' },
    { label: 'Warning', className: 'bg-warning text-warning-foreground' },
  ],
  muted: [
    {
      label: 'Error',
      className: 'bg-destructive-muted text-destructive-muted-foreground',
    },
    {
      label: 'Success',
      className: 'bg-success-muted text-success-muted-foreground',
    },
    {
      label: 'Warning',
      className: 'bg-warning-muted text-warning-muted-foreground',
    },
  ],
};

function Row({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm leading-5 text-muted-foreground">{title}</span>
      <div className="flex flex-wrap items-center gap-2">{children}</div>
    </div>
  );
}

export default function BadgeTones() {
  return (
    <div className="flex flex-col gap-6">
      <Row title="default / descriptive">
        {descriptive.filled.map((tone) => (
          <Badge key={tone.label} className={tone.className}>
            {tone.label}
          </Badge>
        ))}
      </Row>

      <Row title="secondary / descriptive">
        {descriptive.muted.map((tone) => (
          <Badge key={tone.label} variant="secondary" className={tone.className}>
            {tone.label}
          </Badge>
        ))}
      </Row>

      <Row title="outline / descriptive">
        <Badge variant="outline">Neutral</Badge>
      </Row>

      <Row title="default / semantic">
        {semantic.filled.map((tone) => (
          <Badge key={tone.label} className={tone.className}>
            {tone.label}
          </Badge>
        ))}
      </Row>

      <Row title="secondary / semantic">
        {semantic.muted.map((tone) => (
          <Badge key={tone.label} variant="secondary" className={tone.className}>
            {tone.label}
          </Badge>
        ))}
      </Row>
    </div>
  );
}
