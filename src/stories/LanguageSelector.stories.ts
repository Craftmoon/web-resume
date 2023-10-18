import type { Meta, StoryObj } from "@storybook/react";
import { LanguageSelector } from "./LanguageSelector";
import { langs } from "../i18n";

const meta = {
  title: "Example/LanguageSelector",
  component: LanguageSelector,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof LanguageSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    langs,
  },
};
