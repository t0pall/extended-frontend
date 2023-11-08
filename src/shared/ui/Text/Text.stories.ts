import { Meta, StoryObj } from '@storybook/react';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/themeProvider';
import Text, { TextSize, TextTheme } from './Text';

const meta = {
  title: 'Shared/Text',
  component: Text,
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    paragraph: 'paragraph paragraph paragraph paragraph',
    title: 'title title title title title title title',
  },
};

export const PrimaryDark: Story = {
  args: {
    paragraph: 'paragraph paragraph paragraph paragraph',
    title: 'title title title title title title title',
  },
  decorators: [themeDecorator(Theme.DARK)],
};

export const Title: Story = {
  args: {
    title: 'title title title title title title title',
  },
};

export const TitleDark: Story = {
  args: {
    title: 'title title title title title title title',
  },
  decorators: [themeDecorator(Theme.DARK)],
};

export const Paragraph: Story = {
  args: {
    paragraph: 'paragraph paragraph paragraph paragraph',
  },
};

export const ParagraphDark: Story = {
  args: {
    paragraph: 'paragraph paragraph paragraph paragraph',
  },
  decorators: [themeDecorator(Theme.DARK)],
};

export const PrimaryError: Story = {
  args: {
    paragraph: 'paragraph paragraph paragraph paragraph',
    title: 'title title title title title title title',
    theme: TextTheme.ERROR,
  },
};

export const PrimaryErrorDark: Story = {
  args: {
    paragraph: 'paragraph paragraph paragraph paragraph',
    title: 'title title title title title title title',
    theme: TextTheme.ERROR,
  },
  decorators: [themeDecorator(Theme.DARK)],
};

export const PrimarySizeL: Story = {
  args: {
    paragraph: 'paragraph paragraph paragraph paragraph',
    title: 'title title title title title title title',
    size: TextSize.L,
  },
};

export const PrimaryDarkSizeL: Story = {
  args: {
    paragraph: 'paragraph paragraph paragraph paragraph',
    title: 'title title title title title title title',
    size: TextSize.L,
  },
  decorators: [themeDecorator(Theme.DARK)],
};

export const PrimarySizeM: Story = {
  args: {
    paragraph: 'paragraph paragraph paragraph paragraph',
    title: 'title title title title title title title',
    size: TextSize.M,
  },
};

export const PrimaryDarkSizeM: Story = {
  args: {
    paragraph: 'paragraph paragraph paragraph paragraph',
    title: 'title title title title title title title',
    size: TextSize.M,
  },
  decorators: [themeDecorator(Theme.DARK)],
};
