import { Button } from 'nooxit-design-system/components/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from 'nooxit-design-system/components/tooltip';

export default function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>Add to library</TooltipContent>
    </Tooltip>
  );
}
