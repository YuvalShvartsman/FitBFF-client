import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/shared/Button";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    text: { control: "text" },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Enabled: Story = {
  args: {
    text: "Click Me",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    text: "Disabled Button",
    disabled: true,
  },
};

export const CustomText: Story = {
  args: {
    text: "Custom Label",
    disabled: false,
  },
};
