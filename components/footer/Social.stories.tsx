import type { Meta, StoryObj } from '@storybook/react';
import Layout from '../decorators/layout';

import Social from './Social';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Social> = {
  title: 'Footer/Social/Social',
  component: Social,
  tags: ['autodocs'],
  decorators: [
    (Story) => 
    <Layout>
      <Story />
    </Layout>
  ],
  // argTypes: {
  // }
};

export default meta;
type Story = StoryObj<typeof Social>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};
