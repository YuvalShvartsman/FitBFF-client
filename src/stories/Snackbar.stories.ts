import type { Meta, StoryObj } from "@storybook/react";
import Snackbar from "../components/shared/Snackbar";

type SnackbarProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  type: "success" | "warning" | "error";
  description: string;
  placement: "topRight" | "topLeft" | "bottomRight" | "bottomLeft" | "center";
  autoClose: boolean;
} & (
  | { autoClose: true; duration: number }
  | { autoClose?: false; duration?: never }
);

const meta = {
  title: "Example/Snackbar",
  component: Snackbar,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        height: "400px",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    open: { control: "boolean" },
    onClose: { action: "onClose" },
    type: { control: "radio", options: ["success", "warning", "error"] },
    placement: {
      control: "radio",
      options: ["topRight", "topLeft", "bottomRight", "bottomLeft", "center"],
    },
    autoClose: { control: "boolean" },
    description: { type: "string" },
    title: { type: "string" },
    duration: {
      type: "number",
      if: { arg: "autoClose", eq: true },
    },
  },
} satisfies Meta<typeof Snackbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AutoCloseSuccess: Story = {
  args: {
    open: true,
    onClose: () => {},
    title: "Auto-Close Success!",
    type: "success",
    description: "This snackbar will auto-close after 3 seconds.",
    placement: "topRight",
    autoClose: true,
    duration: 3000,
  } as SnackbarProps,
};

export const SuccessTopRight: Story = {
  args: {
    open: true,
    onClose: () => {},
    title: "Success!",
    type: "success",
    description: "Your action was completed successfully.",
    placement: "topRight",
    autoClose: false,
  } as SnackbarProps,
};

export const WarningBottomLeft: Story = {
  args: {
    open: true,
    onClose: () => {},
    title: "Warning!",
    type: "warning",
    description: "There might be an issue with your action.",
    placement: "bottomLeft",
    autoClose: false,
  } as SnackbarProps,
};

export const ErrorCenter: Story = {
  args: {
    open: true,
    onClose: () => {},
    title: "Error!",
    type: "error",
    description: "Something went wrong. Please try again.",
    placement: "center",
    autoClose: false,
  } as SnackbarProps,
};

export const ManualCloseWarning: Story = {
  args: {
    open: true,
    onClose: () => {},
    title: "Manual Close Warning!",
    type: "warning",
    description: "You can manually close this snackbar.",
    placement: "bottomLeft",
    autoClose: false,
  } as SnackbarProps,
};
