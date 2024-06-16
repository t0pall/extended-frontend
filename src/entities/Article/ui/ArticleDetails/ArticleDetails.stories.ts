import { Meta, StoryObj } from '@storybook/react';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator/themeDecorator';
import StateDecorator from 'shared/config/storybook/decorators/StateDecorator';
import { Theme } from 'app/providers/themeProvider';
import { mockArticle } from 'shared/assets/tests/mocks/mockArticle';
import { ArticleDetails } from './ArticleDetails';

const meta = {
  title: 'Entities/ArticleDetails',
  component: ArticleDetails,
  tags: ['autodocs'],
  args: { id: '1' },
  decorators: [StateDecorator({ articleDetails: { data: mockArticle } })],
} satisfies Meta<typeof ArticleDetails>;

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

export const Loading: Story = {
  args: {},
  decorators: [StateDecorator({ articleDetails: { isLoading: true } })],
};

export const Error: Story = {
  args: {},
  decorators: [StateDecorator({ articleDetails: { error: 'error' } })],
};
