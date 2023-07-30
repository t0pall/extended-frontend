import { Meta, StoryObj } from '@storybook/react';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/themeProvider';
import AppLink, { AppLinkTheme } from './AppLink';

const meta = {
  title: 'Shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  args: {
    to: '/',
    children: 'Ссылка',
  },
} satisfies Meta<typeof AppLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    theme: AppLinkTheme.NORMAL,
  },
};

export const NormalDark: Story = {
  args: {
    theme: AppLinkTheme.NORMAL,
  },
  decorators: [themeDecorator(Theme.DARK)],
};

export const Inverted: Story = {
  args: {
    theme: AppLinkTheme.INVERTED,
  },
};

export const InvertedDark: Story = {
  args: {
    theme: AppLinkTheme.INVERTED,
  },
  decorators: [themeDecorator(Theme.DARK)],
};
