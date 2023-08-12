import { Meta, StoryObj } from '@storybook/react';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/themeProvider';
import ProfilePage from './ProfilePage';

const meta = {
  title: 'Pages/ProfilePage',
  component: ProfilePage,
  tags: ['autodocs'],
  args: {

  },
} satisfies Meta<typeof ProfilePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {

  },
};

export const PrimaryDark: Story = {
  args: {

  },
  decorators: [themeDecorator(Theme.DARK)],
};
