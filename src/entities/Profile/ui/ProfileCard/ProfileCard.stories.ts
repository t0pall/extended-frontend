import { Meta, StoryObj } from '@storybook/react';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import image from 'shared/assets/tests/avatar.jpg';
import ProfileCard from './ProfileCard';

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  tags: ['autodocs'],
  args: {
    data: {
      firstname: 'Игорь',
      lastname: 'Топал',
      age: '24',
      currency: Currency.RUB,
      country: Country.Kazakhstan,
      city: 'Москва',
      username: 'bvbsis',
      avatar: image,
    },
  },
} satisfies Meta<typeof ProfileCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
  decorators: [themeDecorator(Theme.DARK)],
};

export const Loading: Story = {
  args: { isLoading: true },
};

export const LoadingDark: Story = {
  args: { isLoading: true },
  decorators: [themeDecorator(Theme.DARK)],
};

export const Error: Story = {
  args: { error: 'Ошибка' },
};

export const ErrorDark: Story = {
  args: { error: 'Ошибка' },
  decorators: [themeDecorator(Theme.DARK)],
};
