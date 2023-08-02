import type { Meta, StoryObj } from '@storybook/react';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/themeProvider';
import Button, { ButtonSize, ButtonTheme } from './Button';

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
      options: ButtonTheme,
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
    theme: ButtonTheme.CLEAR,
    children: 'Кнопка',
  },
};

export const Disabled: Story = {
  args: {
    type: 'button',
    disabled: true,
    theme: ButtonTheme.OUTLINE,
    children: 'Кнопка',
  },
};

export const ClearInverted: Story = {
  args: {
    type: 'button',
    theme: ButtonTheme.CLEAR_INVERTED,
    children: 'Кнопка',
  },
};

export const ClearDark: Story = {
  args: {
    type: 'button',
    theme: ButtonTheme.CLEAR,
    children: 'Кнопка',
  },
  decorators: [themeDecorator(Theme.DARK)],
};

export const ClearDarkInverted: Story = {
  args: {
    type: 'button',
    theme: ButtonTheme.CLEAR_INVERTED,
    children: 'Кнопка',
  },
  decorators: [themeDecorator(Theme.DARK)],
};

export const Outlined: Story = {
  args: {
    type: 'button',
    theme: ButtonTheme.OUTLINE,
    children: 'Кнопка',
  },
};

export const OutlinedInverted: Story = {
  args: {
    type: 'button',
    theme: ButtonTheme.OUTLINE_INVERTED,
    children: 'Кнопка',
  },
};

export const OutlinedDark: Story = {
  args: {
    type: 'button',
    theme: ButtonTheme.OUTLINE,
    children: 'Кнопка',
  },
  decorators: [themeDecorator(Theme.DARK)],
};

export const OutlinedDarkInverted: Story = {
  args: {
    type: 'button',
    theme: ButtonTheme.OUTLINE_INVERTED,
    children: 'Кнопка',
  },
  decorators: [themeDecorator(Theme.DARK)],
};

export const Background: Story = {
  args: {
    type: 'button',
    theme: ButtonTheme.BACKGROUND,
    children: 'Кнопка',
  },
};

export const BackgroundInverted: Story = {
  args: {
    type: 'button',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: 'Кнопка',
  },
};

export const BackgroundDark: Story = {
  args: {
    type: 'button',
    theme: ButtonTheme.BACKGROUND,
    children: 'Кнопка',
  },
  decorators: [themeDecorator(Theme.DARK)],
};

export const BackgroundDarkInverted: Story = {
  args: {
    type: 'button',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: 'Кнопка',
  },
  decorators: [themeDecorator(Theme.DARK)],
};

export const SquareM: Story = {
  args: {
    type: 'button',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
    children: '>',
  },
};

export const SquareMDark: Story = {
  args: {
    type: 'button',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
    children: '>',
  },
  decorators: [themeDecorator(Theme.DARK)],
};

export const SquareL: Story = {
  args: {
    type: 'button',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
    children: '>',
  },
};

export const SquareLDark: Story = {
  args: {
    type: 'button',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
    children: '>',
  },
  decorators: [themeDecorator(Theme.DARK)],
};

export const SquareXL: Story = {
  args: {
    type: 'button',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
    children: '>',
  },
};

export const SquareXLDark: Story = {
  args: {
    type: 'button',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
    children: '>',
  },
  decorators: [themeDecorator(Theme.DARK)],
};
