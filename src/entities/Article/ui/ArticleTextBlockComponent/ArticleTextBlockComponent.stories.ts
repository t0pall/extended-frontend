import { Meta, StoryObj } from '@storybook/react';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/themeProvider';
import ArticleTextBlockComponent from './ArticleTextBlockComponent';

const meta = {
  title: '/ArticleTextBlockComponent',
  component: ArticleTextBlockComponent,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof ArticleTextBlockComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
  decorators: [themeDecorator(Theme.DARK)],
};
