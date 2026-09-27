import { Progress } from 'nooxit-design-system/components/progress';

export default function ProgressDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Progress value={66} size="xs" />
      <Progress value={66} size="sm" />
      <Progress value={66} size="md" />
      <Progress value={66} />
    </div>
  );
}
