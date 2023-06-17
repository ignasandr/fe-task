import type { Meta, StoryObj } from '@storybook/react';
import Layout from '../../components/decorators/layout';
import styles from '../../components/footer/Footer.module.scss';

import About from '../../components/footer/About';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof About> = {
  title: 'Footer/About/About',
  component: About,
  decorators: [
    (Story) => 
    <Layout>
      <div className={styles.footer}>
        <div className={styles.content}>
          <Story />
        </div>
      </div>
    </Layout>
  ],
  // argTypes: {
  // }
};

export default meta;
type Story = StoryObj<typeof About>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};
