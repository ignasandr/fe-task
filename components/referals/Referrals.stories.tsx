import type { Meta, StoryObj } from "@storybook/react";
import Layout from "../decorators/layout";

import Referrals from "./Referrals";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Referrals> = {
  title: "Referals/Referrals",
  component: Referrals,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Referrals>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};
