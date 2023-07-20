import type { Meta, StoryObj } from '@storybook/react';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator';
import { Theme } from 'app/providers/themeProvider';
import Button, { ThemeButton } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

const meta = {
  title: 'Shared/Button',

  component: Button,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout

    layout: 'fullscreen',
  },

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs

  tags: ['autodocs'],

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

  argTypes: {
    theme: {
      options: ThemeButton,
      control: 'select',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Clear: Story = {
  args: {
    type: 'button',
    theme: ThemeButton.CLEAR,
    children: 'Кнопка',
  },
};

export const ClearDark: Story = {
  args: {
    type: 'button',
    theme: ThemeButton.CLEAR,
    children: 'Кнопка',
  },
  decorators: [themeDecorator(Theme.DARK)],
};

export const Outlined: Story = {
  args: {
    type: 'button',
    theme: ThemeButton.OUTLINE,
    children: 'Кнопка',
  },
};

export const OutlinedDark: Story = {
  args: {
    type: 'button',
    theme: ThemeButton.OUTLINE,
    children: 'Кнопка',
  },
  decorators: [themeDecorator(Theme.DARK)],
};