import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from 'nooxit-design-system/components/input-group';
import { SearchIcon } from 'lucide-react';

export default function InputGroupDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <InputGroup>
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search components..." />
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="nooxit" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
