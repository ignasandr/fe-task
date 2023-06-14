import type { Meta, StoryObj } from '@storybook/react';
import Layout from '../decorators/layout';

import SocIcon from './SocIcon';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof SocIcon> = {
  title: 'Footer/Socials/SocIcon',
  component: SocIcon,
  tags: ['autodocs'],
  decorators: [
    (Story) => 
    <Layout>
      <Story />
    </Layout>
  ],
  argTypes: {
    sn: {
        control: {
            type:'select',
            options: [ 'ig', 'fb', 'li', 'tw', 'tt' ]
        }
    }
  }
};

export default meta;
type Story = StoryObj<typeof SocIcon>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    sn: 'ig'
  },
};
