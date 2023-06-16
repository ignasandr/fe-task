import type { Meta, StoryObj } from '@storybook/react';
import Layout from '../decorators/layout';

import StoreLinks from './StoreLinks';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof StoreLinks> = {
  title: 'Store Links/StoreLinks',
  component: StoreLinks,
  tags: ['autodocs'],
  decorators: [
    (Story) => 
    <Layout>
        <Story />
    </Layout>
  ],
};

export default meta;
type Story = StoryObj<typeof StoreLinks>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};
