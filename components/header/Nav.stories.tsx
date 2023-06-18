import type { Meta, StoryObj } from "@storybook/react";
import Layout from "../../components/decorators/layout";

import Nav from "./Nav";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Nav> = {
  title: "Header/Nav/Nav",
  component: Nav,
  decorators: [
    (Story) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Nav>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};
