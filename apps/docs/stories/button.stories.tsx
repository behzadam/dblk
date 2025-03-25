import { Button } from "@dblk/ui/components/button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <Button>Hello</Button>,
};

export const Default: Story = {
  render: (args) => <Button {...args}>دکمه</Button>,
};

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="default" {...args}>
        پیش‌فرض
      </Button>
      <Button variant="destructive" {...args}>
        حذف
      </Button>
      <Button variant="outline" {...args}>
        خطی
      </Button>
      <Button variant="secondary" {...args}>
        ثانویه
      </Button>
      <Button variant="ghost" {...args}>
        شبح
      </Button>
      <Button variant="link" {...args}>
        پیوند
      </Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <Button size="sm" {...args}>
        کوچک
      </Button>
      <Button size="default" {...args}>
        پیش‌فرض
      </Button>
      <Button size="lg" {...args}>
        بزرگ
      </Button>
      <Button size="icon" {...args}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
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
      </Button>
    </div>
  ),
};

export const WithIcon: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <Button {...args}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
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
        افزودن
      </Button>
      <Button variant="outline" {...args}>
        ویرایش
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
        </svg>
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <Button disabled {...args}>
        غیرفعال
      </Button>
      <Button variant="outline" disabled {...args}>
        غیرفعال خطی
      </Button>
      <Button variant="secondary" disabled {...args}>
        غیرفعال ثانویه
      </Button>
    </div>
  ),
};
