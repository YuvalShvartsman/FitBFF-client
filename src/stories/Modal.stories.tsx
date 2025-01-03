import type { Meta, StoryObj } from "@storybook/react";
import Modal from "../components/shared/Modal";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    open: { control: "boolean" },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
    },
    allowClickOutside: { control: "boolean" },
    title: { control: "text" },
    showCloseButton: { control: "boolean" },
    handleClose: { action: "closed" },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    open: true,
    size: "medium",
    allowClickOutside: true,
    title: "Example Modal",
    showCloseButton: true,
    children: (
      <div className="space-y-4">
        <p>This is an example modal with default settings.</p>
        <p>You can customize the content here.</p>
      </div>
    ),
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: "small",
    title: "Small Modal",
    children: <p>This is a small modal with minimal content.</p>,
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: "large",
    title: "Large Modal",
    children: (
      <div className="space-y-6">
        <p>This is a large modal with more content.</p>
        <p>It can accommodate longer content and more complex layouts.</p>
        <p>Perfect for forms, detailed information, or rich media content.</p>
      </div>
    ),
  },
};

export const NoTitle: Story = {
  args: {
    ...Default.args,
    title: undefined,
    children: <p>A modal without a title, showing only the content area.</p>,
  },
};

export const NoCloseButton: Story = {
  args: {
    ...Default.args,
    showCloseButton: false,
    title: "No Close Button",
    children: (
      <div className="space-y-4">
        <p>This modal has no close button in the header.</p>
        <p>Useful for required interactions or confirmations.</p>
      </div>
    ),
  },
};

export const DisabledClickOutside: Story = {
  args: {
    ...Default.args,
    allowClickOutside: false,
    title: "Cannot Click Outside",
    children: (
      <div className="space-y-4">
        <p>This modal cannot be closed by clicking outside.</p>
        <p>You must use the close button or handle it programmatically.</p>
      </div>
    ),
  },
};

export const WithCustomContent: Story = {
  args: {
    ...Default.args,
    title: "Custom Content Example",
    children: (
      <div className="space-y-6">
        <p>Modals can contain any custom content:</p>
        <div className="rounded-lg bg-gray-100 p-4">
          <h4 className="mb-2 font-semibold">Form Example</h4>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter text..."
              className="w-full rounded border p-2"
            />
            <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
              Submit
            </button>
          </div>
        </div>
      </div>
    ),
  },
};
