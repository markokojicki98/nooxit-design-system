import { Badge } from 'nooxit-design-system/components/badge';

export default function BadgeDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge rounded={false}>Square</Badge>
    </div>
  );
}
