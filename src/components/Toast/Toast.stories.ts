// import type { Meta, StoryObj } from '@storybook/react';
// import Toast from './Toast';

// const meta: Meta<typeof Toast> = {
//   title: 'Components/Toast',
//   component: Toast,
//   // argTypes: {
//   //   type: {
//   //     control: { type: 'select' },
//   //     options: ['success', 'error', 'info'],
//   //   },
//   //   message: { control: 'text' },
//   // },
// };
// export default meta;

// type Story = StoryObj<typeof Toast>;

// export const Success: Story = {
//   args: {
//     message: 'Action completed successfully!',
//     type: 'success',
//     onClose: () => alert('Closed!'),
//   },
// };

// export const Error: Story = {
//   args: {
//     message: 'Something went wrong.',
//     type: 'error',
//     onClose: () => alert('Closed!'),
//   },
// };

// export const Info: Story = {
//   args: {
//     message: 'Something went wrong.',
//     type: 'info',
//     onClose: () => alert('Closed!'),
//   },
// };
import type { Meta, StoryObj } from '@storybook/react';
import Toast from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['success', 'error', 'info'],
    },
    message: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof Toast>;

export const Success: Story = {
  args: {
    type: 'success',
    onClose: () => console.log('Toast closed'),
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    onClose: () => console.log('Toast closed'),
  },
};

export const Info: Story = {
  args: {
    type: 'info',
    onClose: () => console.log('Toast closed'),
  },
};
