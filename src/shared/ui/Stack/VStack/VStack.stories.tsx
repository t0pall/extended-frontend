import { Meta, StoryObj } from '@storybook/react';
import { VStack } from './VStack';

const meta = {
  title: 'shared/Flex/VStack',
  component: VStack,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <div>dirst</div>
        <div>second</div>
        <div>third</div>
        <div>fourth</div>
        <div>fifth</div>
      </>
    ),
  },
} satisfies Meta<typeof VStack>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary8: Story = {
  args: {
    gap: '8',
  },
};

export const Primary16: Story = {
  args: {
    gap: '16',
  },
};

export const Primary32: Story = {
  args: {
    gap: '32',
  },
};

export const Primary64: Story = {
  args: {
    gap: '64',
  },
};
