import type { Meta, StoryObj } from '@storybook/preact-vite';
import { H3 } from './H3';
import type { H3Props } from './types';

const meta: Meta<H3Props> = {
  title: 'Design System/H3',
  component: H3,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
      description: 'H3 variant style',
    },
    children: {
      control: 'text',
      description: 'H3 content',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<H3Props>;

// Primary variant (default)
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Section',
  },
};

// Secondary variant
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Section',
  },
};

// Tertiary variant
export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Tertiary Section',
  },
};

// Long heading
export const LongHeading: Story = {
  args: {
    variant: 'primary',
    children: 'This is a longer section heading that demonstrates text behavior',
  },
  parameters: {
    layout: 'padded',
  },
};

// With custom classes
export const WithCustomClass: Story = {
  args: {
    variant: 'primary',
    children: 'Styled Section',
    className: 'border-l-4 border-blue pl-4',
  },
};

// All variants showcase
export const AllVariants: Story = {
  globals: {
    backgrounds: { value: 'grey' },
  },
  render: () => (
    <div className='space-y-6'>
      <div>
        <h4 className='text-sm font-medium text-gray-600 mb-2'>Primary (Dark White)</h4>
        <H3 variant='primary'>Project Overview</H3>
      </div>
      <div>
        <h4 className='text-sm font-medium text-gray-600 mb-2'>Secondary (Dark Blue)</h4>
        <H3 variant='secondary'>Technical Details</H3>
      </div>
      <div>
        <h4 className='text-sm font-medium text-gray-600 mb-2'>Tertiary (Dark Gray)</h4>
        <H3 variant='tertiary'>Additional Notes</H3>
      </div>
      <div>
        <h4 className='text-sm font-medium text-gray-600 mb-2'>With Custom Styling</h4>
        <H3 variant='primary' className='text-center bg-black p-4 rounded'>
          Featured Highlight
        </H3>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
