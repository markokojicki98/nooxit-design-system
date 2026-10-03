import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from 'nooxit-design-system/components/input-group';
import { MagnifyingGlassIcon } from '@phosphor-icons/react/ssr';

export default function InputGroupDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <InputGroup>
        <InputGroupAddon>
          <MagnifyingGlassIcon />
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
