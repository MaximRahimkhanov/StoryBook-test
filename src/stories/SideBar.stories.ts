import type { Meta, StoryObj } from '@storybook/react';
import SidebarMenu from '../components/SideBar/SideBar';

const meta: Meta<typeof SidebarMenu> = {
  title: 'Components/Sidebar',
  component: SidebarMenu,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof SidebarMenu>;

export const Open: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
  },
};

export const Closed: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
  },
};

export const NestedMenu: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
  },
};
