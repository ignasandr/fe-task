import type { Meta, StoryObj } from '@storybook/react';
import Layout from '../decorators/layout';

import Steps from './Steps';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Steps> = {
  title: 'Referals/Steps',
  component: Steps,
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
type Story = StoryObj<typeof Steps>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};