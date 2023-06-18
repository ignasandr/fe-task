import type { Meta, StoryObj } from "@storybook/react";
import Layout from "../decorators/layout";
import styles from "./Referrals.module.scss";

import ReferralsInput from "./ReferralsInput";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ReferralsInput> = {
  title: "Referals/ReferalsInput",
  component: ReferralsInput,
  decorators: [
    (Story) => (
      <Layout>
        <div className={styles.form}>
          <div className={styles.container}>
            <div className={styles.content}>
              <Story />
            </div>
          </div>
        </div>
      </Layout>
    ),
  ],
  // argTypes: {
  // }
};

export default meta;
type Story = StoryObj<typeof ReferralsInput>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};