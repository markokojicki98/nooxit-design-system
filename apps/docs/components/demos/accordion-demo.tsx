import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'nooxit-design-system/components/accordion';

export default function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="materials">
        <AccordionTrigger>What is Nooxit built on?</AccordionTrigger>
        <AccordionContent>
          Radix primitives and Tailwind CSS v4, restyled with the Nooxit tokens.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="theming">
        <AccordionTrigger>Can I change the colors?</AccordionTrigger>
        <AccordionContent>
          Yes. Every color is a CSS variable, so you can override the tokens in
          your own stylesheet without touching the components.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="dark">
        <AccordionTrigger>Does it support dark mode?</AccordionTrigger>
        <AccordionContent>
          Yes. Add the <code>dark</code> class to the html element and every
          token switches to its dark value.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
