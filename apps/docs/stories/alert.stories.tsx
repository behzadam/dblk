import { Alert, AlertDescription, AlertTitle } from "@dblk/ui/components/alert";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Alert>;

// Helper Icons
const InfoIcon = () => (
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
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const AlertIcon = () => (
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
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </svg>
);

export const Default: Story = {
  render: (args) => (
    <Alert {...args}>
      <InfoIcon />
      <AlertTitle>اطلاعیه</AlertTitle>
      <AlertDescription>
        این یک پیام اطلاعیه است که مهم می‌باشد.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: (args) => (
    <Alert variant="destructive" {...args}>
      <AlertIcon />
      <AlertTitle>هشدار</AlertTitle>
      <AlertDescription>
        خطایی در سیستم رخ داده است. لطفاً دوباره تلاش کنید.
      </AlertDescription>
    </Alert>
  ),
};

export const WithoutTitle: Story = {
  render: (args) => (
    <Alert {...args}>
      <InfoIcon />
      <AlertDescription>این یک پیام اطلاعیه بدون عنوان است.</AlertDescription>
    </Alert>
  ),
};

export const WithoutIcon: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>بدون آیکون</AlertTitle>
      <AlertDescription>این یک پیام اطلاعیه بدون آیکون است.</AlertDescription>
    </Alert>
  ),
};

export const WithLink: Story = {
  render: (args) => (
    <Alert {...args}>
      <InfoIcon />
      <AlertTitle>به‌روزرسانی</AlertTitle>
      <AlertDescription>
        نسخه جدید در دسترس است.{" "}
        <a href="#" className="underline font-medium">
          اینجا کلیک کنید
        </a>{" "}
        تا به‌روزرسانی شود.
      </AlertDescription>
    </Alert>
  ),
};
