import type { Meta, StoryObj } from '@storybook/react';
import Layout from '../../components/decorators/layout';
import styles from '../../components/footer/Footer.module.scss';

import FooterSection from '../../components/footer/FooterSection';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof FooterSection> = {
  title: 'Footer/FooterSection',
  component: FooterSection,
  tags: ['autodocs'],
  decorators: [
    (Story) => 
    <Layout>
      <div className={styles.footer}>
        <div className={styles.content}>
          <Story />
        </div>
      </div>
    </Layout>
  ],
};

export default meta;
type Story = StoryObj<typeof FooterSection>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    title: 'footer section',
    children: [
      <p>Child1</p>,
      <p>Child2</p>,
      <p>Child3</p>
    ]
  },
};
