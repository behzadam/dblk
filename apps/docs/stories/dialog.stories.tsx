import { Button } from "@dblk/ui/components/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@dblk/ui/components/dialog";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Basic: Story = {
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button>باز کردن دیالوگ</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>عنوان دیالوگ</DialogTitle>
          <DialogDescription>
            این یک توضیح برای دیالوگ است. می‌توانید اطلاعات بیشتری در اینجا قرار
            دهید.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">انصراف</Button>
          </DialogClose>
          <Button>تأیید</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const WithForm: Story = {
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button>ویرایش پروفایل</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>ویرایش پروفایل</DialogTitle>
          <DialogDescription>
            تغییرات را در فرم زیر اعمال کنید. پس از پایان، دکمه ذخیره را فشار
            دهید.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
              نام
            </label>
            <input
              id="name"
              defaultValue="محمد امینی"
              className="col-span-3 px-3 py-2 border rounded-md"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="username" className="text-right">
              نام کاربری
            </label>
            <input
              id="username"
              defaultValue="mohammad_amini"
              className="col-span-3 px-3 py-2 border rounded-md"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">انصراف</Button>
          </DialogClose>
          <Button>ذخیره تغییرات</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const WithConfirmation: Story = {
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button variant="destructive">حذف حساب کاربری</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>آیا مطمئن هستید؟</DialogTitle>
          <DialogDescription>
            این عمل قابل بازگشت نیست. این کار باعث حذف دائمی حساب کاربری شما و
            حذف داده‌های شما از سرورهای ما می‌شود.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">انصراف</Button>
          </DialogClose>
          <Button variant="destructive">بله، حساب کاربری من را حذف کن</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
