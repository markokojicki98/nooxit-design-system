import { Bubble, BubbleContent, BubbleGroup } from 'nooxit-design-system/components/bubble';

export default function BubbleDemo() {
  return (
    <BubbleGroup className="w-full max-w-md">
      <Bubble variant="muted">
        <BubbleContent>How do I install the design system?</BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>
          Add the package to your app, then import the stylesheet.
        </BubbleContent>
      </Bubble>
      <Bubble variant="tinted">
        <BubbleContent>Thanks!</BubbleContent>
      </Bubble>
    </BubbleGroup>
  );
}
