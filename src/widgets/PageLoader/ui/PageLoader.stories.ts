import { Meta, StoryObj } from '@storybook/react';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator';
import { Theme } from 'app/providers/themeProvider';
import PageLoader from './PageLoader';

const meta = {
  title: 'Widgets/PageLoader',
  component: PageLoader,
  tags: ['autodocs'],
} satisfies Meta<typeof PageLoader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Dark: Story = {
  decorators: [themeDecorator(Theme.DARK)],
};
