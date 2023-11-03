import { Meta, StoryObj } from '@storybook/react';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/themeProvider';
import ArticleImageBlockComponent from './ArticleImageBlockComponent';

const meta = {
  title: '/ArticleImageBlockComponent',
  component: ArticleImageBlockComponent,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof ArticleImageBlockComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
  decorators: [themeDecorator(Theme.DARK)],
};
