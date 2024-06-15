import { Meta, StoryObj } from '@storybook/react';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/themeProvider';
import ArticleList from './ArticleList';

const meta = {
  title: '/ArticleList',
  component: ArticleList,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof ArticleList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
  decorators: [themeDecorator(Theme.DARK)],
};

export const PrimaryContrast: Story = {
  args: {},
  decorators: [themeDecorator(Theme.CONTRAST)],
};
