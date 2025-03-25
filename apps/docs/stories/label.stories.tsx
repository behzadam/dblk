import { Checkbox } from "@dblk/ui/components/checkbox";
import { Label } from "@dblk/ui/components/label";
import { Switch } from "@dblk/ui/components/switch";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: (args) => <Label {...args}>نام کاربری</Label>,
};

export const WithCheckbox: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms1" />
      <Label htmlFor="terms1" {...args}>
        موافقت با قوانین
      </Label>
    </div>
  ),
};

export const WithSwitch: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch id="notifications1" />
      <Label htmlFor="notifications1" {...args}>
        دریافت اعلان‌ها
      </Label>
    </div>
  ),
};

export const Required: Story = {
  render: (args) => (
    <Label {...args}>
      نام کاربری
      <span className="text-destructive">*</span>
    </Label>
  ),
};
