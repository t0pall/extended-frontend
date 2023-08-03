import { Meta, StoryObj } from '@storybook/react';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/themeProvider';
import StateDecorator from 'shared/config/storybook/decorators/StateDecorator';
import { AuthByUsernameSchema } from 'features/AuthByUsername/model/types/AuthByUsernameSchema';
import LoginModal from './LoginModal';

const userWithError: Omit<AuthByUsernameSchema, 'isLoading'> = {
  username: 'bvbsis',
  password: '911',
  error: 'error',
};

const user: Omit<AuthByUsernameSchema, 'isLoading'> = {
  username: 'bvbsis',
  password: '911',
};

const meta = {
  title: 'features/LoginModal',
  component: LoginModal,
  parameters: {
    loki: {
      skip: true,
    },
  },
  args: {
    isOpen: true,
  },
} satisfies Meta<typeof LoginModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [StateDecorator({ authByUsername: user })],
};

export const PrimaryDark: Story = {
  decorators: [
    themeDecorator(Theme.DARK),
    StateDecorator({ authByUsername: user }),
  ],
};

export const PrimaryError: Story = {
  decorators: [StateDecorator({ authByUsername: userWithError })],
};

export const PrimaryDarkError: Story = {
  decorators: [
    themeDecorator(Theme.DARK),
    StateDecorator({ authByUsername: userWithError }),
  ],
};
