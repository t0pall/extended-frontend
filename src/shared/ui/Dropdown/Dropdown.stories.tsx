import { Meta, StoryObj } from '@storybook/react';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/themeProvider';
import Dropdown from './Dropdown';

// eslint-disable-next-line no-console
const onClick = () => console.log('onClick');

const meta = {
  title: 'shared/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  args: {
    trigger: 'TRIGGER',
    items: [
      { label: 'FIRST', onClick },
      { label: 'Second', onClick },
      {
        label: 'Link',
        to: { pathname: 'https://www.example.com/' },
        target: '_blank',
      },
      { label: 'Fourth', onClick },
      { label: 'Fifth', onClick },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 100 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const PrimaryContrast: Story = {
  args: {},
  decorators: [themeDecorator(Theme.CONTRAST)],
};

export const PrimaryDark: Story = {
  args: {},
  decorators: [themeDecorator(Theme.DARK)],
};

export const BottomLeft: Story = {
  args: { position: 'bottom left' },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const BottomRight: Story = {
  args: { position: 'bottom right' },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const TopLeft: Story = {
  args: { position: 'top left' },
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const TopRight: Story = {
  args: { position: 'top right' },
  decorators: [themeDecorator(Theme.LIGHT)],
};
