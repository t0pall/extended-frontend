import { Meta, StoryObj } from '@storybook/react';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/themeProvider';
import LangSwitcher from './LangSwitcher';

const meta = {
  title: 'Widgets/LangSwitcher',
  component: LangSwitcher,
  tags: ['autodocs'],
} satisfies Meta<typeof LangSwitcher>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Dark: Story = {
  decorators: [themeDecorator(Theme.DARK)],
};
