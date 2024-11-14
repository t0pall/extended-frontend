import { Meta, StoryObj } from '@storybook/react';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/themeProvider';
import ListBox, { ListBoxItem } from './ListBox';

enum names {
  Настя = '1',
  Сеня = '2',
  Мася = '3',
  Чернышевский = '4',
  Белышевский = '5',
}

const items: ListBoxItem<names>[] = [
  { name: 'Настя', value: names.Настя },
  { name: 'Сеня', value: names.Сеня },
  { name: 'Мася', value: names.Мася },
  { name: 'Чернышевский', value: names.Чернышевский, disabled: true },
  { name: 'Белышевский', value: names.Белышевский },
];

const meta = {
  title: 'shared/ListBox',
  component: ListBox,
  tags: ['autodocs'],
  args: {
    options: items,
    placeholder: 'Listbox placeholder',
  },
} satisfies Meta<typeof ListBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
  decorators: [themeDecorator(Theme.DARK)],
};

export const PrimaryContrast: Story = {
  decorators: [themeDecorator(Theme.CONTRAST)],
};
