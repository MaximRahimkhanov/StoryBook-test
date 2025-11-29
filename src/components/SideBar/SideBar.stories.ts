import type { Meta, StoryObj } from '@storybook/react';
// import { MemoryRouter } from 'react-router-dom';
import SidebarMenu from './SideBar';

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
// import React from 'react';
// import type { Meta, StoryObj } from '@storybook/react';
// import { MemoryRouter } from 'react-router-dom';
// import SidebarMenu from './SideBar';

// const meta = {
//   title: 'Components/Sidebar',
//   component: SidebarMenu,
//   tags: ['autodocs'],
//   decorators: [
//     (Story) => (
//       <MemoryRouter>
//         <Story />
//       </MemoryRouter>
//     ),
//   ],
// } satisfies Meta<typeof SidebarMenu>;

// export default meta;
// type Story = StoryObj<typeof SidebarMenu>;

// export const Open: Story = {
//   args: {
//     isOpen: true,
//     onClose: () => {}, // обов'язково передай, щоб не було undefined
//   },
// };

// export const Closed: Story = {
//   args: {
//     isOpen: false,
//     onClose: () => {},
//   },
// };
