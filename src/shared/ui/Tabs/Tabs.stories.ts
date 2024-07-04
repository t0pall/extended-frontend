import { Meta, StoryObj } from '@storybook/react';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { action } from '@storybook/addon-actions';
import Tabs from './Tabs';

const meta = {
  title: 'shared/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  args: {
    tabs: [
      { value: 'tab value', content: 'tab content' },
      { value: 'tab 2 value', content: 'tab 2 content' },
      { value: 'tab 3 value', content: 'tab 3 content' },
      { value: 'tab 4 value', content: 'tab 4 content' },
      { value: 'tab 5 value', content: 'tab 5 content' },
    ],
    value: 'tab 2 value',
    onTabClick: action('onTabClick'),
  },
} satisfies Meta<typeof Tabs>;

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
