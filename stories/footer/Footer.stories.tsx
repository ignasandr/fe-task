import type { Meta, StoryObj } from '@storybook/react';
import Layout from '../../components/decorators/layout';

import Footer from '../../components/footer/Footer';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Footer> = {
  title: 'Footer/Footer',
  component: Footer,
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
type Story = StoryObj<typeof Footer>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};