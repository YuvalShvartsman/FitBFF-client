import type { Meta, StoryObj } from "@storybook/react";

import Tooltip from "../components/shared/Tooltip";

import { FaInfoCircle } from "react-icons/fa";

const meta: Meta<typeof Tooltip> = {
  title: "Example/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    content: { control: "text" },
    position: {
      control: {
        type: "select",
        options: ["top", "bottom", "left", "right"],
      },
    },
    children: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Top: Story = {
  args: {
    content: "This is a tooltip displayed on top.",
    position: "top",
    children: (
      <button className="relative px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Hover Me
      </button>
    ),
  },
};

export const Bottom: Story = {
  args: {
    content: "This is a tooltip displayed at the bottom.",
    position: "bottom",
    children: (
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Hover Me
      </button>
    ),
  },
};

export const Left: Story = {
  args: {
    content: "This is a tooltip displayed on the left.",
    position: "left",
    children: (
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Hover Me
      </button>
    ),
  },
};

export const Right: Story = {
  args: {
    content: "This is a tooltip displayed on the right.",
    position: "right",
    children: (
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Hover Me
      </button>
    ),
  },
};

export const IconTooltip: Story = {
  args: {
    content: "This is a tooltip with an icon trigger.",
    position: "top",
    children: (
      <FaInfoCircle className="text-blue-500 text-2xl cursor-pointer" />
    ),
  },
};
