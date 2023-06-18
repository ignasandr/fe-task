import type { Meta, StoryObj } from "@storybook/react";
import Layout from "../../components/decorators/layout";

import NavItem from "../../components/header/NavItem";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof NavItem> = {
  title: "Header/Nav/NavItem",
  component: NavItem,
  decorators: [
    (Story) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
  args: {
    accent: false,
  },
  // argTypes: {
  // }
};

export default meta;
type Story = StoryObj<typeof NavItem>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Regular: Story = {
  args: {
    label: "default item",
    href: "#",
  },
};

export const Accented: Story = {
  args: {
    label: "accented item",
    href: "#",
    accent: true,
  },
};
