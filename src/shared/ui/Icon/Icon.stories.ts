import { Meta, StoryObj } from '@storybook/react';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/themeProvider';
import EyeIcon from 'shared/assets/icons/eye-icon.svg';
import Icon from './Icon';

const meta = {
  title: 'Shared/Icon',
  component: Icon,
  tags: ['autodocs'],
  args: {
    Svg: EyeIcon,
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
  decorators: [themeDecorator(Theme.DARK)],
};
