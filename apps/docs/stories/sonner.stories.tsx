import { Button } from "@dblk/ui/components/button";
import { Toaster } from "@dblk/ui/components/sonner";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Toaster> = {
  title: "Components/Sonner",
  component: Toaster,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <Toaster {...args} />
      <p className="text-muted-foreground mb-2">
        نکته: کتابخانه sonner در استوری‌بوک قابل استفاده نیست، اما می‌توانید از
        این مثال‌ها در کد خود استفاده کنید.
      </p>
      <div className="flex flex-wrap gap-2">
        <Button variant="outline">نمایش پیام</Button>
        <Button variant="outline">موفقیت</Button>
        <Button variant="outline">خطا</Button>
        <Button variant="outline">اطلاعیه</Button>
        <Button variant="outline">هشدار</Button>
      </div>
      <div className="mt-4 p-4 border rounded-md">
        <pre className="text-xs">
          {`
// نمونه کد استفاده از toast

// معمولی
toast("پیام", {
  description: "این یک پیام ساده است.",
});

// موفقیت
toast.success("موفقیت", {
  description: "عملیات با موفقیت انجام شد.",
});

// خطا
toast.error("خطا", {
  description: "خطایی در عملیات رخ داده است.",
});

// اطلاعیه
toast.info("اطلاعیه", {
  description: "این یک پیام اطلاع‌رسانی است."
});

// هشدار
toast.warning("هشدار", {
  description: "این یک پیام هشدار است.",
});
          `}
        </pre>
      </div>
    </div>
  ),
};

export const WithActions: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <Toaster {...args} />
      <p className="text-muted-foreground mb-2">
        نکته: کتابخانه sonner در استوری‌بوک قابل استفاده نیست، اما می‌توانید از
        این مثال‌ها در کد خود استفاده کنید.
      </p>
      <div className="flex flex-wrap gap-2">
        <Button>با دکمه عمل</Button>
        <Button>با دو دکمه عمل</Button>
      </div>
      <div className="mt-4 p-4 border rounded-md">
        <pre className="text-xs">
          {`
// با یک دکمه عمل
toast("عملیات حذف", {
  description: "آیا می‌خواهید این آیتم را حذف کنید؟",
  action: {
    label: "لغو",
    onClick: () => console.log("Cancelled"),
  },
});

// با دو دکمه عمل
toast("عملیات حذف", {
  description: "آیا می‌خواهید این آیتم را حذف کنید؟",
  action: {
    label: "لغو",
    onClick: () => console.log("Cancelled"),
  },
  cancel: {
    label: "حذف",
    onClick: () => console.log("Deleted"),
  },
});
          `}
        </pre>
      </div>
    </div>
  ),
};

export const WithPromise: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <Toaster {...args} />
      <p className="text-muted-foreground mb-2">
        نکته: کتابخانه sonner در استوری‌بوک قابل استفاده نیست، اما می‌توانید از
        این مثال‌ها در کد خود استفاده کنید.
      </p>
      <Button>با Promise</Button>
      <div className="mt-4 p-4 border rounded-md">
        <pre className="text-xs">
          {`
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve({ name: "محمد" });
    } else {
      reject(new Error("خطایی رخ داده است"));
    }
  }, 2000);
});

toast.promise(promise, {
  loading: "در حال ذخیره‌سازی...",
  success: (data) => {
    return \`اطلاعات برای \${data.name} ذخیره شد\`;
  },
  error: "خطایی رخ داده است",
});
          `}
        </pre>
      </div>
    </div>
  ),
};
