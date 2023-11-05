import type { Meta, StoryObj } from '@storybook/react';
import { HeartIcon } from '.';

const meta = {
  title: 'Atoms/HeartIcon',
  component: HeartIcon,
  argTypes: {
    state: {
      options: ['hover', 'default', 'active']
    }
  }
} satisfies Meta<typeof HeartIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: 'default'
  }
};

export const Hover: Story = {
  args: {
    state: 'hover'
  }
};

export const Active: Story = {
  args: {
    state: 'active'
  }
};
