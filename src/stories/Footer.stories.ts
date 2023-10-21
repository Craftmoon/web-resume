import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const meta = {
  title: "Example/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {};
