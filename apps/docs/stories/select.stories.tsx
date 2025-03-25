import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@dblk/ui/components/select";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="یک میوه انتخاب کنید" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="سیب">سیب</SelectItem>
          <SelectItem value="موز">موز</SelectItem>
          <SelectItem value="پرتقال">پرتقال</SelectItem>
          <SelectItem value="انار">انار</SelectItem>
          <SelectItem value="هلو">هلو</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const WithLabel: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="یک شهر انتخاب کنید" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>شهرهای ایران</SelectLabel>
          <SelectItem value="تهران">تهران</SelectItem>
          <SelectItem value="اصفهان">اصفهان</SelectItem>
          <SelectItem value="شیراز">شیراز</SelectItem>
          <SelectItem value="مشهد">مشهد</SelectItem>
          <SelectItem value="تبریز">تبریز</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <Select disabled {...args}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="غیرفعال" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="option1">گزینه ۱</SelectItem>
          <SelectItem value="option2">گزینه ۲</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const WithDisabledItems: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="گزینه‌های غیرفعال" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="option1">گزینه فعال</SelectItem>
          <SelectItem value="option2" disabled>
            گزینه غیرفعال
          </SelectItem>
          <SelectItem value="option3">گزینه فعال</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};
