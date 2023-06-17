import type { Meta, StoryObj } from '@storybook/react';
import Layout from '../../components/decorators/layout';
import styles from '../../components/footer/Footer.module.scss';

import ContactItem from '../../components/footer/ContactItem';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ContactItem> = {
  title: 'Footer/Contacts/ContactItem',
  component: ContactItem,
  decorators: [
    (Story) => 
    <Layout>
      <div className={styles.footer}>
        <div className={styles.content}>
          <div className={styles.contact}>
            <Story />
          </div>
        </div>
      </div>
    </Layout>
  ],
  // argTypes: {
  // }
};

export default meta;
type Story = StoryObj<typeof ContactItem>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};
