import { Meta, StoryObj } from '@storybook/react';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/themeProvider';
import StateDecorator from 'shared/config/storybook/decorators/StateDecorator';
import Navbar from './Navbar';

const userData = { user: { authData: { id: '1', username: 'bvbsis' } } };

const meta = {
  title: 'Widgets/Navbar',
  component: Navbar,
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Dark: Story = {
  decorators: [themeDecorator(Theme.DARK)],
};

export const PrimaryAuthed: Story = {
  decorators: [StateDecorator(userData)],
};

export const DarkAuthed: Story = {
  decorators: [themeDecorator(Theme.DARK), StateDecorator(userData)],
};
