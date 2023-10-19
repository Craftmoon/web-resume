import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";

const meta = {
  title: "Example/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    title: "Vitor.",
  },
};

export const WithMenu: Story = {
  args: {
    title: "Vitor.",
    menu: <Menu />,
  },
};
