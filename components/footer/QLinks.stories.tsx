import type { Meta, StoryObj } from '@storybook/react';
import Layout from '../decorators/layout';

import QLinks from './QLinks';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof QLinks> = {
  title: 'Footer/QLinks/QLinks',
  component: QLinks,
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
type Story = StoryObj<typeof QLinks>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};
