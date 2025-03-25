import { Badge } from "@dblk/ui/components/badge";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: (args) => <Badge {...args}>جدید</Badge>,
};

export const Secondary: Story = {
  render: (args) => (
    <Badge variant="secondary" {...args}>
      در انتظار
    </Badge>
  ),
};

export const Destructive: Story = {
  render: (args) => (
    <Badge variant="destructive" {...args}>
      حذف شده
    </Badge>
  ),
};

export const Outline: Story = {
  render: (args) => (
    <Badge variant="outline" {...args}>
      آرشیو
    </Badge>
  ),
};

export const WithIcon: Story = {
  render: (args) => (
    <Badge {...args}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
      جدید
    </Badge>
  ),
};
