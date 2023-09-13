import { Meta, StoryObj } from '@storybook/react';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/themeProvider';
import StateDecorator from 'shared/config/storybook/decorators/StateDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import image from 'shared/assets/tests/avatar.jpg';
import ProfilePage from './ProfilePage';

const meta = {
  title: 'Pages/ProfilePage',
  component: ProfilePage,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof ProfilePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  decorators: [
    StateDecorator({
      profile: {
        readonly: true,
        formData: {
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
    }),
  ],
};

export const PrimaryDark: Story = {
  args: {},
  decorators: [
    themeDecorator(Theme.DARK),
    StateDecorator({
      profile: {
        readonly: true,
        formData: {
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
    }),
  ],
};

export const Edit: Story = {
  args: {},
  decorators: [
    StateDecorator({
      profile: {
        formData: {
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
    }),
  ],
};

export const EditDark: Story = {
  args: {},
  decorators: [
    themeDecorator(Theme.DARK),
    StateDecorator({
      profile: {
        formData: {
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
    }),
  ],
};
