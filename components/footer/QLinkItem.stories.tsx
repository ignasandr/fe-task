import type { Meta, StoryObj } from '@storybook/react';
import Layout from '../decorators/layout';
import styles from './Footer.module.scss'


import QLinkItem from './QLinkItem';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof QLinkItem> = {
  title: 'Footer/QLinks/QLinkItem',
  component: QLinkItem,
  decorators: [
    (Story) => 
    <Layout>
      <div className={styles.footer}>
        <div className={styles.content}>
          <div className={styles.qlinks}>
            <Story />
          </div>
        </div>
      </div>
    </Layout>
  ],
  args: {
    accent: false
  }
  // argTypes: {
  // }
};

export default meta;
type Story = StoryObj<typeof QLinkItem>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    label: "default item"
  },
};
