import { Meta, StoryObj } from '@storybook/react';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/themeProvider';
import StateDecorator from 'shared/config/storybook/decorators/StateDecorator';
import Sidebar from './Sidebar';

const meta = {
  title: 'Widgets/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [StateDecorator({ user: { authData: {} } })],
};

export const Dark: Story = {
  decorators: [themeDecorator(Theme.DARK), StateDecorator({ user: { authData: {} } })],
};

export const NotAuth: Story = {
  decorators: [StateDecorator({ user: {} })],
};
