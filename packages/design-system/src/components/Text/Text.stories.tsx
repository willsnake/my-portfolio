import type { Meta, StoryObj } from '@storybook/preact-vite';
import { Text } from './Text';
import type { TextProps } from './types';

const meta: Meta<TextProps> = {
  title: 'Design System/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: 'Text variant style',
    },
    children: {
      control: 'text',
      description: 'Text content',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<TextProps>;

// Primary variant (default)
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'This is primary text content',
  },
};

// Secondary variant
export const Secondary: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    variant: 'secondary',
    children: 'This is secondary text content',
  },
};

// Long text example
export const LongText: Story = {
  args: {
    variant: 'primary',
    children:
      'This is a longer text example to demonstrate how the Text component handles multiple lines of content. It should wrap naturally and maintain proper styling throughout.',
  },
  parameters: {
    layout: 'padded',
  },
};

// Custom className
export const WithCustomClass: Story = {
  args: {
    variant: 'primary',
    children: 'Text with custom styling',
    className: 'font-bold text-lg',
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <h3 className='text-sm font-medium text-gray-900 mb-2'>Primary</h3>
        <Text variant='primary'>Primary text variant - default styling for regular content</Text>
      </div>
      <div>
        <h3 className='text-sm font-medium text-gray-900 mb-2'>Secondary</h3>
        <Text variant='secondary'>Secondary text variant - lighter styling for secondary content</Text>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// Interactive example
export const Interactive: Story = {
  args: {
    variant: 'primary',
    children: 'Click to interact with this text',
    onClick: () => alert('Text clicked!'),
    style: { cursor: 'pointer' },
  },
};
