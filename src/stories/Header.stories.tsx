import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { langs } from "../i18n";
import { LanguageSelector } from "../components/LanguageSelector";

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
    languageSelector: false,
  },
};

export const WithMenuAndLanguageSelector: Story = {
  args: {
    title: "Vitor.",
    menu: <Menu />,
    languageSelector: true,
  },
};
