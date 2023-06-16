import type { Meta, StoryObj } from '@storybook/react';
import Layout from '../decorators/layout';

import StoreReviews from './StoreReviews';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof StoreReviews> = {
  title: 'Store Links/StoreReviews',
  component: StoreReviews,
  tags: ['autodocs'],
  decorators: [
    (Story) => 
    <Layout>
      <div style={{ width: 'fit-content', padding: 50, background: '#45565E' }}>
        <Story />
      </div>
    </Layout>
  ],
};

export default meta;
type Story = StoryObj<typeof StoreReviews>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};
