import { Label } from "@dblk/ui/components/label";
import { Switch } from "@dblk/ui/components/switch";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: (args) => <Switch {...args} />,
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" {...args} />
      <Label htmlFor="airplane-mode">حالت پرواز</Label>
    </div>
  ),
};

export const Checked: Story = {
  render: (args) => <Switch defaultChecked {...args} />,
};

export const WithLabelChecked: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch id="notifications" defaultChecked {...args} />
      <Label htmlFor="notifications">اعلان‌ها</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: (args) => <Switch disabled {...args} />,
};

export const DisabledChecked: Story = {
  render: (args) => <Switch disabled defaultChecked {...args} />,
};
