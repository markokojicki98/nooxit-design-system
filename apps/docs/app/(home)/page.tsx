import { Badge } from 'nooxit-design-system/components/badge';
import { Button } from 'nooxit-design-system/components/button';
import { Input } from 'nooxit-design-system/components/input';

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Nooxit smoke test</h1>
      <p className="text-muted-foreground">DM Sans body text. <code className="font-mono">DM Mono 500</code></p>
      <div className="flex flex-wrap gap-2">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="flex gap-2">
        <Badge>Badge</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
      <Input placeholder="Email" />
      <div className="grid grid-cols-5 gap-2">
        {['bg-chart-1', 'bg-chart-2', 'bg-chart-3', 'bg-chart-4', 'bg-chart-5'].map((c) => (
          <div key={c} className={`${c} h-10 rounded-md`} />
        ))}
        <div className="h-10 rounded-md bg-muted-40 border" />
        <div className="h-10 rounded-md bg-destructive-10 border border-destructive-50" />
        <div className="h-10 rounded-md bg-accent" />
        <div className="h-10 rounded-md bg-descriptive-lime-brand" />
        <div className="h-10 rounded-md bg-hover-primary" />
      </div>
    </main>
  );
}
