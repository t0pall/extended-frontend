import { Meta, StoryObj } from '@storybook/react';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/themeProvider';
import CommentCard from './CommentCard';

const meta = {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  tags: ['autodocs'],
  args: {
    comment: {
      id: '1',
      text: 'HELLO< world!!!HELLO< world!!!HELLO< world!!!HELLO< world!!!HELLO< world!!!HELLO< world!!!HELLO< world!!!HELLO< world!!!HELLO< world!!!HELLO< world!!!HELLO< world!!!HELLO< world!!!HELLO< world!!!HELLO< world!!!HELLO< world!!!HELLO< world!!!HELLO< world!!!HELLO< world!!!HELLO< world!!!HELLO< world!!!HELLO< world!!!HELLO< world!!!HELLO< world!!!HELLO< world!!!HELLO< world!!!',
      user: {
        id: '1',
        username: 'bvbsis',
      },
    },
  },
} satisfies Meta<typeof CommentCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const PrimaryLoading: Story = {
  args: { isLoading: true },
};

export const PrimaryDark: Story = {
  args: {},
  decorators: [themeDecorator(Theme.DARK)],
};

export const PrimaryContrast: Story = {
  args: {},
  decorators: [themeDecorator(Theme.CONTRAST)],
};
