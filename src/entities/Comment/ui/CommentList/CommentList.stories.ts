import { Meta, StoryObj } from '@storybook/react';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/themeProvider';
import CommentList from './CommentList';

const meta = {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  tags: ['autodocs'],
  args: {
    comments: [
      {
        id: '1',
        text: 'hello world',
        user: {
          id: '1',
          username: 'bvbsis',
          avatar: '',
        },
      },

      {
        id: '2',
        text: 'HELLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!',
        user: {
          id: '2',
          username: 'user2',
          avatar: '',
        },
      },
    ],
  },
} satisfies Meta<typeof CommentList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const PrimaryLoading: Story = {
  args: { isLoading: true, comments: undefined },
};

export const PrimaryEmpty: Story = {
  args: { comments: [] },
};

export const PrimaryDark: Story = {
  args: {},
  decorators: [themeDecorator(Theme.DARK)],
};

export const PrimaryContrast: Story = {
  args: {},
  decorators: [themeDecorator(Theme.CONTRAST)],
};
