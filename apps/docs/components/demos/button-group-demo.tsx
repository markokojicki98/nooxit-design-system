import { Button } from 'nooxit-design-system/components/button';
import { ButtonGroup } from 'nooxit-design-system/components/button-group';
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from 'lucide-react';

export default function ButtonGroupDemo() {
  return (
    <ButtonGroup>
      <Button variant="outline" aria-label="Align left">
        <AlignLeftIcon />
      </Button>
      <Button variant="outline" aria-label="Align center">
        <AlignCenterIcon />
      </Button>
      <Button variant="outline" aria-label="Align right">
        <AlignRightIcon />
      </Button>
    </ButtonGroup>
  );
}
