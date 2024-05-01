import type { Meta, StoryObj } from "@storybook/react";
import { Dashboard } from "./dashboard";
import { fn } from "@storybook/test";

const meta = {
  title: "Button",
  component: Dashboard,
  parameters: {
    layout: "centered",
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Dashboard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {};
