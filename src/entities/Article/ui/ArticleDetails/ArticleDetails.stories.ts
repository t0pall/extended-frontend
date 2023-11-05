import { Meta, StoryObj } from '@storybook/react';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { ArticleDetails } from './ArticleDetails';

const meta = {
  title: 'Entities/ArticleDetails',
  component: ArticleDetails,
  tags: ['autodocs'],
  args: { id: '1' },
} satisfies Meta<typeof ArticleDetails>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { id: '1' },
};

export const PrimaryDark: Story = {
  args: { id: '1' },
  decorators: [themeDecorator(Theme.DARK)],
};
