import type { Meta, StoryObj } from "@storybook/react";
import { FontVariant, Text } from "../components/Text";

const meta = {
  title: "Example/Text",
  component: Text,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: "Lorem ipsum",
  },
};

export const Title: Story = {
  args: {
    children: "Lorem ipsum",
    variant: FontVariant.TITLE,
  },
};

export const Bold: Story = {
  args: {
    children: "Lorem ipsum",
    bold: true,
  },
};

export const Italic: Story = {
  args: {
    children: "Lorem ipsum",
    italic: true,
  },
};
