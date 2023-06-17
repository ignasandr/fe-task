import type { Meta, StoryObj } from '@storybook/react';
import Layout from '../../components/decorators/layout';
import styles from '../../components/storelinks/StoreLinks.module.scss';

import StoreLinkItem from '../../components/storelinks/StoreLinkItem';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof StoreLinkItem> = {
  title: 'Store Links/StoreLinkItem',
  component: StoreLinkItem,
  tags: ['autodocs'],
  decorators: [
    (Story) => 
    <Layout>
      <div className={styles.section}>
        <div className={styles.content}>
          <div className={styles.links}>
            <Story />
          </div>
        </div>
      </div>
    </Layout>
  ],
  argTypes: {
    store: {
        control: {
            type: 'select',
            options: [ 'chrome', 'apple' ]
        }
    }
  }
};

export default meta;
type Story = StoryObj<typeof StoreLinkItem>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    store: 'chrome',
  },
};
