import { Button } from "@dblk/ui/components/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@dblk/ui/components/card";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>عنوان کارت</CardTitle>
        <CardDescription>توضیحات کارت در اینجا قرار می‌گیرد</CardDescription>
      </CardHeader>
      <CardContent>
        <p>محتوای کارت با متن نمونه.</p>
      </CardContent>
    </Card>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>کارت با دکمه عملیات</CardTitle>
        <CardDescription>کارت با یک دکمه عملیات</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">
            عملیات
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>محتوای کارت با متن نمونه.</p>
      </CardContent>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>کارت با پاورقی</CardTitle>
        <CardDescription>این کارت شامل بخش پاورقی است</CardDescription>
      </CardHeader>
      <CardContent>
        <p>محتوای کارت با متن نمونه.</p>
      </CardContent>
      <CardFooter>
        <Button>ذخیره تغییرات</Button>
      </CardFooter>
    </Card>
  ),
};

export const FullExample: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>کارت کامل</CardTitle>
        <CardDescription>نمایش تمام اجزای کارت با هم</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">
            ویرایش
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>
          این مثال یک کارت کامل را با تمام اجزای موجود شامل سربرگ با دکمه
          عملیات، محتوا و پاورقی نشان می‌دهد.
        </p>
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="outline">لغو</Button>
        <Button>ثبت</Button>
      </CardFooter>
    </Card>
  ),
};
