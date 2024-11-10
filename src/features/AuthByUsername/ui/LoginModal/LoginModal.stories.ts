import { Meta, StoryObj } from '@storybook/react';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/themeProvider';
import StateDecorator from 'shared/config/storybook/decorators/StateDecorator';
import { LoginSchema } from '../../model/types/loginSchema';
import LoginModal from './LoginModal';

const userWithError: Omit<LoginSchema, 'isLoading'> = {
  username: 'bvbsis',
  password: '911',
  error: 'error',
};

const user: Omit<LoginSchema, 'isLoading'> = {
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
  decorators: [StateDecorator({ login: user })],
};

export const PrimaryDark: Story = {
  decorators: [
    themeDecorator(Theme.DARK),
    StateDecorator({ login: user }),
  ],
};

export const PrimaryError: Story = {
  decorators: [StateDecorator({ login: userWithError })],
};

export const PrimaryDarkError: Story = {
  decorators: [
    themeDecorator(Theme.DARK),
    StateDecorator({ login: userWithError }),
  ],
};
