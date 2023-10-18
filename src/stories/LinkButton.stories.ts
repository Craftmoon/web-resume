import type { Meta, StoryObj } from "@storybook/react";
import { LinkButton } from "../components/LinkButton";

const meta = {
  title: "Example/LinkButton",
  component: LinkButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    label: "Button",
  },
};
