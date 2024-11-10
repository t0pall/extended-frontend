import { Meta, StoryObj } from '@storybook/react';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/themeProvider';
import Card, { CardTheme } from './Card';
import Text from '../Text/Text';

const meta = {
  title: 'shared/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    children: <Text title="TEXT text text Hello" paragraph="Hello world Hello world Hello world Hello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello world" />,
  },
} satisfies Meta<typeof Card>;

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

export const Outlined: Story = {
  args: { theme: CardTheme.OUTLINED },
};

export const OutlinedDark: Story = {
  args: { theme: CardTheme.OUTLINED },
  decorators: [themeDecorator(Theme.DARK)],
};

export const OutlinedContrast: Story = {
  args: { theme: CardTheme.OUTLINED },
  decorators: [themeDecorator(Theme.CONTRAST)],
};
