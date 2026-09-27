import { Label } from 'nooxit-design-system/components/label';
import { Textarea } from 'nooxit-design-system/components/textarea';

export default function TextareaDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Label htmlFor="textarea-demo">Message</Label>
      <Textarea id="textarea-demo" placeholder="Type your message here." />
      <p className="text-sm leading-5 text-muted-foreground">
        Your message will be copied to the support team.
      </p>
    </div>
  );
}
