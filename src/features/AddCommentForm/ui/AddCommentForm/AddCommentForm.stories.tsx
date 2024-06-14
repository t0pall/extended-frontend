import { Meta, StoryObj } from '@storybook/react';
import StateDecorator from 'shared/config/storybook/decorators/StateDecorator';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/themeProvider';
import AddCommentForm from './AddCommentForm';

const meta = {
  title: 'Features/AddCommentForm',
  component: AddCommentForm,
  tags: ['autodocs'],
} satisfies Meta<typeof AddCommentForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
  decorators: [themeDecorator(Theme.DARK), StateDecorator({})],
};
