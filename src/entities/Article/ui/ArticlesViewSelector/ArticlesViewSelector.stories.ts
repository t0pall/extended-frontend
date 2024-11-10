import { Meta, StoryObj } from '@storybook/react';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { ArticleView } from '../../model/types/article';
import ArticlesViewSelector from './ArticlesViewSelector';

const meta = {
  title: '/ArticlesViewSelector',
  component: ArticlesViewSelector,
  tags: ['autodocs'],
  args: { handleViewChange: (_) => _ },
} satisfies Meta<typeof ArticlesViewSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { view: ArticleView.SMALL },
};

export const PrimaryDark: Story = {
  args: { view: ArticleView.SMALL },
  decorators: [themeDecorator(Theme.DARK)],
};

export const PrimaryContrast: Story = {
  args: { view: ArticleView.SMALL },
  decorators: [themeDecorator(Theme.CONTRAST)],
};

export const PrimaryBig: Story = {
  args: { view: ArticleView.BIG },
};

export const PrimaryBigDark: Story = {
  args: { view: ArticleView.BIG },
  decorators: [themeDecorator(Theme.DARK)],
};

export const PrimaryBigContrast: Story = {
  args: { view: ArticleView.BIG },
  decorators: [themeDecorator(Theme.CONTRAST)],
};
