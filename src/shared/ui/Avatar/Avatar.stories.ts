import { Meta, StoryObj } from '@storybook/react';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/themeProvider';
import Avatar from './Avatar';
import image from './avatar.jpg';

const meta = {
  title: 'Shared/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    size: 200,
    src: image,
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
  decorators: [themeDecorator(Theme.DARK)],
};

export const Small: Story = {
  args: {
    size: 50,
  },
};

export const SmallDark: Story = {
  args: {
    size: 50,
  },
  decorators: [themeDecorator(Theme.DARK)],
};
