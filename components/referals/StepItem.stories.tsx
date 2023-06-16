import type { Meta, StoryObj } from '@storybook/react';
import Layout from '../decorators/layout';

import StepItem from './StepItem';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof StepItem> = {
  title: 'Referals/StepItem',
  component: StepItem,
  parameters: {
    layout: 'fullscreen'
  },
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
type Story = StoryObj<typeof StepItem>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    step: '1',
    right: false
  },
};