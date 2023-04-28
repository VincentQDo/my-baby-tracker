"use client";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";

export function SelectItem(props: { value: string; label: string }) {
  return (
    <Select.Item value={props.value}>
      <Select.ItemText>{props.label}</Select.ItemText>
      <Select.ItemIndicator className="SelectItemIndicator">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
}

export default function SelectMenu(props: {}) {
  return (
    <Select.Root>
      <Select.Trigger>
        <Select.Value placeholder="Type of feed" />
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content>
          <Select.ScrollUpButton />
          <Select.Viewport>
            <SelectItem value="test val" label="Test label here" />

            <Select.Group>
              <Select.Label>group label here</Select.Label>
              <SelectItem value="test val" label="Test label here" />
            </Select.Group>

            <Select.Separator />
          </Select.Viewport>
          <Select.ScrollDownButton />
          <Select.Arrow />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
