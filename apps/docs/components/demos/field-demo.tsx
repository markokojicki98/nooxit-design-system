import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from 'nooxit-design-system/components/field';
import { Input } from 'nooxit-design-system/components/input';

export default function FieldDemo() {
  return (
    <FieldGroup className="w-full max-w-sm">
      <Field>
        <FieldLabel htmlFor="field-email">Email</FieldLabel>
        <Input id="field-email" type="email" placeholder="you@example.com" />
        <FieldDescription>We will never share your email.</FieldDescription>
      </Field>
      <Field data-invalid>
        <FieldLabel htmlFor="field-otp">One-time password</FieldLabel>
        <Input id="field-otp" aria-invalid defaultValue="123" />
        <FieldError>Your one-time password must be 6 characters.</FieldError>
      </Field>
    </FieldGroup>
  );
}
