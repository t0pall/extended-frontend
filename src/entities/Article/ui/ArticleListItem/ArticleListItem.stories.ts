import { Meta, StoryObj } from '@storybook/react';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { mockArticle } from 'shared/assets/tests/mocks/mockArticle';
import { ArticleView } from '../../model/types/article';
import ArticleListItem from './ArticleListItem';

const meta = {
  title: '/ArticleListItem',
  component: ArticleListItem,
  tags: ['autodocs'],
  args: { article: mockArticle },
} satisfies Meta<typeof ArticleListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { view: ArticleView.BIG },
};

export const PrimaryDark: Story = {
  args: { view: ArticleView.BIG },
  decorators: [themeDecorator(Theme.DARK)],
};

export const PrimaryContrast: Story = {
  args: { view: ArticleView.BIG },
  decorators: [themeDecorator(Theme.CONTRAST)],
};

export const PrimarySmall: Story = {
  args: { view: ArticleView.SMALL },
};

export const PrimarySmallDark: Story = {
  args: { view: ArticleView.SMALL },
  decorators: [themeDecorator(Theme.DARK)],
};

export const PrimarySmallContrast: Story = {
  args: { view: ArticleView.SMALL },
  decorators: [themeDecorator(Theme.CONTRAST)],
};
