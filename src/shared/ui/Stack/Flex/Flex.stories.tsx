import { Meta, StoryObj } from '@storybook/react';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/themeProvider';
import Flex from './Flex';

const meta = {
  title: 'shared/Flex',
  component: Flex,
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
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    justyfy: 'start',
    align: 'center',
    direction: 'row',
    gap: '8',
  },
};

export const StartColumn: Story = {
  args: {
    justyfy: 'start',
    align: 'start',
    direction: 'column',
  },
};

export const StartColumnDark: Story = {
  args: {
    justyfy: 'start',
    align: 'start',
    direction: 'column',
  },
  decorators: [themeDecorator(Theme.DARK)],
};

export const StartRow: Story = {
  args: {
    justyfy: 'start',
    align: 'start',
    direction: 'row',
  },
};

export const StartRowContrast: Story = {
  args: {
    justyfy: 'start',
    align: 'start',
    direction: 'row',
  },
  decorators: [themeDecorator(Theme.CONTRAST)],
};

export const CenterColumn: Story = {
  args: {
    justyfy: 'center',
    align: 'center',
    direction: 'column',
  },
};

export const CenterColumnDark: Story = {
  args: {
    justyfy: 'center',
    align: 'center',
    direction: 'column',
  },
  decorators: [themeDecorator(Theme.DARK)],
};

export const CenterRow: Story = {
  args: {
    justyfy: 'center',
    align: 'center',
    direction: 'row',
  },
};

export const CenterRowContrast: Story = {
  args: {
    justyfy: 'center',
    align: 'center',
    direction: 'row',
  },
  decorators: [themeDecorator(Theme.CONTRAST)],
};

export const EndColumn: Story = {
  args: {
    justyfy: 'end',
    align: 'end',
    direction: 'column',
  },
};

export const EndColumnDark: Story = {
  args: {
    justyfy: 'end',
    align: 'end',
    direction: 'column',
  },
  decorators: [themeDecorator(Theme.DARK)],
};

export const EndRow: Story = {
  args: {
    justyfy: 'end',
    align: 'end',
    direction: 'row',
  },
};

export const EndRowContrast: Story = {
  args: {
    justyfy: 'end',
    align: 'end',
    direction: 'row',
  },
  decorators: [themeDecorator(Theme.CONTRAST)],
};

export const BetweenRow: Story = {
  args: {
    justyfy: 'between',
    align: 'center',
    direction: 'column',
  },
};

export const BetweenRowDark: Story = {
  args: {
    justyfy: 'between',
    align: 'center',
    direction: 'column',
  },
  decorators: [themeDecorator(Theme.DARK)],
};

export const Gap4: Story = {
  args: {
    gap: '4',
  },
};
export const Gap8: Story = {
  args: {
    gap: '8',
  },
};
export const Gap16: Story = {
  args: {
    gap: '16',
  },
};
export const Gap32: Story = {
  args: {
    gap: '32',
  },
};
export const Gap64: Story = {
  args: {
    gap: '64',
  },
};
