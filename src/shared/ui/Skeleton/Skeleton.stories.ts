import { Meta, StoryObj } from '@storybook/react';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/themeProvider';
import Skeleton from './Skeleton';

const meta = {
  title: 'Shared/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Skeleton>;

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

export const Circle: Story = {
  args: { borderRadius: 100, height: 100, width: 100 },
};

export const CircleDark: Story = {
  args: { borderRadius: 100, height: 100, width: 100 },
  decorators: [themeDecorator(Theme.DARK)],
};

export const CircleContrast: Story = {
  args: { borderRadius: 100, height: 100, width: 100 },
  decorators: [themeDecorator(Theme.CONTRAST)],
};
