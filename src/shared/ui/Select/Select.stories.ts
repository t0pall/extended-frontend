import { Meta, StoryObj } from '@storybook/react';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/themeProvider';
import Select from './Select';

const meta = {
  title: 'Shared/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    label: 'Плейсхолдер',
    options: [
      { content: '123', value: '321' },
      { content: '123', value: '321' },
      { content: '123', value: '321' },
      { content: '123', value: '321' },
    ],
    value: 'Значение',
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
  decorators: [themeDecorator(Theme.DARK)],
};
