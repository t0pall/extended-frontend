import { Meta, StoryObj } from '@storybook/react';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/themeProvider';
import NotFoundPage from './notFoundPage';

const meta = {
  title: 'Pages/NotFoundPage',
  component: NotFoundPage,
  tags: ['autodocs'],
} satisfies Meta<typeof NotFoundPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
  decorators: [themeDecorator(Theme.DARK)],
};
