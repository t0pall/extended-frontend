import { Meta, StoryObj } from '@storybook/react';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from 'entities/Article/model/types/article';
import ArticlesSortSelector from './ArticlesSortSelector';

const emptyMethod = () => undefined;

const meta = {
  title: '/ArticlesSortSelector',
  component: ArticlesSortSelector,
  tags: ['autodocs'],
  args: {
    onOrderChange: emptyMethod, onSortChange: emptyMethod, order: SortOrder.ASC, sort: ArticleSortField.CREATED,
  },
} satisfies Meta<typeof ArticlesSortSelector>;

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
