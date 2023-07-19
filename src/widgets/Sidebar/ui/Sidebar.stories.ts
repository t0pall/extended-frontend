import { Meta, StoryObj } from '@storybook/react';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator';
import { Theme } from 'app/providers/themeProvider';
import Sidebar from './Sidebar';

const meta = {
  title: 'Widgets/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Dark: Story = {
  decorators: [themeDecorator(Theme.DARK)],
};
