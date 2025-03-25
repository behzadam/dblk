import { Checkbox } from "@dblk/ui/components/checkbox";
import { Label } from "@dblk/ui/components/label";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: (args) => <Checkbox {...args} />,
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" {...args} />
      <Label htmlFor="terms">قوانین و شرایط را می‌پذیرم</Label>
    </div>
  ),
};

export const Checked: Story = {
  render: (args) => <Checkbox defaultChecked {...args} />,
};

export const WithLabelChecked: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="marketing" defaultChecked {...args} />
      <Label htmlFor="marketing">خبرنامه را دریافت کنم</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: (args) => <Checkbox disabled {...args} />,
};

export const DisabledChecked: Story = {
  render: (args) => <Checkbox disabled defaultChecked {...args} />,
};
