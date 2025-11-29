import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    error: { control: 'text' },
    placeholder: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    name: 'text',
    label: 'Text',
    type: 'text',
    placeholder: 'Enter text...',
    clearable: true,
  },
};

export const Password: Story = {
  args: {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password...',
    clearable: true,
  },
};

export const Number: Story = {
  args: {
    name: 'nubber',
    label: 'Number',
    type: 'number',
    placeholder: 'Enter number...',
    clearable: true,
  },
};

export const ErrorState: Story = {
  args: {
    name: 'error',
    type: 'error',
    placeholder: 'Enter text...',
    error: 'This field is required',
    clearable: true,
  },
};
