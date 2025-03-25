import { Input } from "@dblk/ui/components/input";
import { Label } from "@dblk/ui/components/label";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => <Input placeholder="نام کاربری" {...args} />,
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">آدرس ایمیل</Label>
      <Input
        type="email"
        id="email"
        placeholder="ایمیل خود را وارد کنید"
        {...args}
      />
    </div>
  ),
};

export const Disabled: Story = {
  render: (args) => <Input disabled placeholder="غیرفعال" {...args} />,
};

export const WithDefaultValue: Story = {
  render: (args) => <Input defaultValue="محمد امینی" {...args} />,
};

export const Password: Story = {
  render: (args) => <Input type="password" placeholder="رمز عبور" {...args} />,
};

export const Number: Story = {
  render: (args) => <Input type="number" placeholder="شماره تلفن" {...args} />,
};
