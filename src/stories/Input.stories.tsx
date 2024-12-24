import type { Meta, StoryObj } from "@storybook/react";
import Input from "../components/shared/Input";
import { Search, Mail, Lock, User, AlertCircle } from "lucide-react";

const meta: Meta<typeof Input> = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    type: {
      control: "select",
      options: ["text", "password", "email", "number"],
    },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    error: { control: "text" },
    clearable: { control: "boolean" },
    value: { control: "text" },
    onChange: { action: "changed" },
    onClear: { action: "cleared" },
  },
  decorators: [
    (Story) => (
      <div className="w-[320px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Email Address",
    placeholder: "Enter your email",
    type: "email",
    required: true,
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    type: "email",
    value: "invalid-email",
    error: "Please enter a valid email address",
  },
};

export const WithStartIcon: Story = {
  args: {
    startIcon: Search,
    placeholder: "Search...",
    clearable: true,
  },
};

export const WithEndIcon: Story = {
  args: {
    label: "Status",
    endIcon: AlertCircle,
    value: "Active",
  },
};

export const WithBothIcons: Story = {
  args: {
    label: "Email",
    startIcon: Mail,
    endIcon: AlertCircle,
    type: "email",
    placeholder: "Enter your email",
  },
};

export const Clearable: Story = {
  args: {
    label: "Search",
    placeholder: "Type to search...",
    clearable: true,
    value: "Search term",
  },
};

export const Disabled: Story = {
  args: {
    label: "Username",
    value: "johndoe",
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    label: "Full Name",
    value: "John Doe",
    startIcon: User,
    clearable: true,
  },
};

export const Required: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    required: true,
    startIcon: Lock,
  },
};

// Dark mode story
export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
  decorators: [
    (Story) => (
      <div className="w-[320px] dark">
        <Story />
      </div>
    ),
  ],
  args: {
    label: "Username",
    placeholder: "Enter your username",
    startIcon: User,
    clearable: true,
  },
};

export const AllStates: Story = {
  decorators: [
    () => (
      <div className="w-[320px] space-y-4">
        <Input label="Default" placeholder="Default input" />
        <Input label="With Icon" startIcon={Search} placeholder="Search..." />
        <Input
          label="With Error"
          error="This field is required"
          value="Invalid value"
        />
        <Input label="Disabled" value="Disabled input" disabled />
        <Input label="Password" type="password" placeholder="Enter password" />
        <Input label="Clearable" value="Clear me" clearable />
      </div>
    ),
  ],
};
