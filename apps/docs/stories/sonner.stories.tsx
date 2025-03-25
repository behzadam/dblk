import { Button } from "@dblk/ui/components/button";
import { Toaster, toast } from "@dblk/ui/components/sonner";
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
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          onClick={() =>
            toast("پیام", {
              description: "این یک پیام ساده است.",
            })
          }
        >
          نمایش پیام
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.success("موفقیت", {
              description: "عملیات با موفقیت انجام شد.",
            })
          }
        >
          موفقیت
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.error("خطا", {
              description: "خطایی در عملیات رخ داده است.",
            })
          }
        >
          خطا
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.info("اطلاعیه", {
              description: "این یک پیام اطلاع‌رسانی است.",
            })
          }
        >
          اطلاعیه
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.warning("هشدار", {
              description: "این یک پیام هشدار است.",
            })
          }
        >
          هشدار
        </Button>
      </div>
    </div>
  ),
};

export const WithActions: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <Toaster {...args} />
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() =>
            toast("عملیات حذف", {
              description: "آیا می‌خواهید این آیتم را حذف کنید؟",
              action: {
                label: "لغو",
                onClick: () => console.log("Cancelled"),
              },
            })
          }
        >
          با دکمه عمل
        </Button>
        <Button
          onClick={() =>
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
            })
          }
        >
          با دو دکمه عمل
        </Button>
      </div>
    </div>
  ),
};

export const WithPromise: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <Toaster {...args} />
      <Button
        onClick={() => {
          const promise = new Promise<{ name: string }>((resolve, reject) => {
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
            success: (data: { name: string }) => {
              return `اطلاعات برای ${data.name} ذخیره شد`;
            },
            error: "خطایی رخ داده است",
          });
        }}
      >
        با Promise
      </Button>
    </div>
  ),
};
