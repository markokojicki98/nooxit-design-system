'use client';

import * as React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from 'nooxit-design-system/components/card';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from 'nooxit-design-system/components/field';
import { Input } from 'nooxit-design-system/components/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'nooxit-design-system/components/select';
import { Switch } from 'nooxit-design-system/components/switch';

export function Guardrails() {
  const [autoApprove, setAutoApprove] = React.useState(false);

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle size="sm">Guardrails</CardTitle>
        <CardDescription>When the agent may act without asking.</CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="showcase-threshold">Approval threshold</FieldLabel>
            <Input
              id="showcase-threshold"
              defaultValue="€5,000"
            />
            <FieldDescription>
              Anything above this waits for a human.
            </FieldDescription>
          </Field>

          <Field>
            <FieldLabel htmlFor="showcase-escalation">Escalate to</FieldLabel>
            <Select defaultValue="owner">
              <SelectTrigger id="showcase-escalation" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="owner">Queue owner</SelectItem>
                <SelectItem value="finance">Finance review</SelectItem>
                <SelectItem value="oncall">On-call engineer</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Field orientation="horizontal">
            <Switch
              id="showcase-auto"
              checked={autoApprove}
              onCheckedChange={setAutoApprove}
            />
            <FieldLabel htmlFor="showcase-auto">
              Auto-approve repeat suppliers
            </FieldLabel>
          </Field>

          <Field orientation="horizontal" data-disabled>
            <Switch id="showcase-weekend" disabled />
            <FieldLabel htmlFor="showcase-weekend">
              Run on weekends
            </FieldLabel>
          </Field>
        </FieldGroup>
      </CardContent>
    </Card>
  );
}
