import { Label } from "@dblk/ui/components/label";
import { RadioGroup, RadioGroupItem } from "@dblk/ui/components/radio-group";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: (args) => (
    <RadioGroup defaultValue="option-1" {...args}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-1" id="option-1" />
        <Label htmlFor="option-1">گزینه اول</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-2" id="option-2" />
        <Label htmlFor="option-2">گزینه دوم</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-3" id="option-3" />
        <Label htmlFor="option-3">گزینه سوم</Label>
      </div>
    </RadioGroup>
  ),
};

export const WithDisabled: Story = {
  render: (args) => (
    <RadioGroup defaultValue="option-1" {...args}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-1" id="r-option-1" />
        <Label htmlFor="r-option-1">فعال</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-2" id="r-option-2" disabled />
        <Label htmlFor="r-option-2">غیرفعال</Label>
      </div>
    </RadioGroup>
  ),
};

export const FoodChoices: Story = {
  render: (args) => (
    <RadioGroup defaultValue="pizza" {...args}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="pizza" id="food-1" />
        <Label htmlFor="food-1">پیتزا</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="burger" id="food-2" />
        <Label htmlFor="food-2">همبرگر</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="kebab" id="food-3" />
        <Label htmlFor="food-3">کباب</Label>
      </div>
    </RadioGroup>
  ),
};
