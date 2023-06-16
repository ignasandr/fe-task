import type { Meta, StoryObj } from '@storybook/react';
import Layout from '../decorators/layout';

import ReferralsForm from './ReferralsForm';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ReferralsForm> = {
  title: 'Referals/ReferralsForm',
  component: ReferralsForm,
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
type Story = StoryObj<typeof ReferralsForm>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};