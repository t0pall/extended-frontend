import { Meta, StoryObj } from '@storybook/react';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { AppRoutes } from 'shared/config/routeConfig/routeConfig';
import MainPageIcon from 'shared/assets/icons/main-page-icon.svg';
import SidebarItem from './SidebarItem';

const meta = {
  title: 'Widgets/SidebarItem',
  component: SidebarItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    item: {
      Icon: MainPageIcon,
      path: AppRoutes.MAIN,
      text: 'Main',
    },
    collapsed: false,
  },
} satisfies Meta<typeof SidebarItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
  decorators: [themeDecorator(Theme.DARK)],
};

export const PrimaryCollapsed: Story = {
  args: {
    collapsed: true,
  },
};

export const PrimaryDarkCollapsed: Story = {
  args: {
    collapsed: true,
  },
  decorators: [themeDecorator(Theme.DARK)],
};
