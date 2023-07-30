import { Meta, StoryObj } from '@storybook/react';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/themeProvider';
import LoginModal from './LoginModal';

const meta = {
  title: 'features/LoginModal',
  component: LoginModal,
  args: {
    isOpen: true,
  },
} satisfies Meta<typeof LoginModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
  decorators: [themeDecorator(Theme.DARK)],
};
