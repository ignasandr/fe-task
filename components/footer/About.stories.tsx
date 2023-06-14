import type { Meta, StoryObj } from '@storybook/react';
import Layout from '../decorators/layout';

import About from './About';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof About> = {
  title: 'Footer/About/About',
  component: About,
  decorators: [
    (Story) => 
    <Layout>
      <div style={{ height: 226, width: 544 }}>
        <Story />
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
