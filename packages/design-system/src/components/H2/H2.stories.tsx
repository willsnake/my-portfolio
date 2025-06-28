import type { Meta, StoryObj } from '@storybook/preact-vite';
import { H2 } from './H2';
import type { H2Props } from './types';

const meta: Meta<H2Props> = {
  title: 'Design System/H2',
  component: H2,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: 'H2 variant style',
    },
    children: {
      control: 'text',
      description: 'H2 content',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<H2Props>;

// Primary variant (default)
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Heading',
  },
};

// Secondary variant
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Heading',
  },
};

// Long heading
export const LongHeading: Story = {
  args: {
    variant: 'primary',
    children: 'This is a longer secondary heading that demonstrates text wrapping behavior',
  },
  parameters: {
    layout: 'padded',
  },
};

// With custom classes
export const WithCustomClass: Story = {
  args: {
    variant: 'primary',
    children: 'Styled Heading',
    className: 'underline hover:no-underline',
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-600 mb-2">Primary (Dark White)</h3>
        <H2 variant="primary">About My Experience</H2>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-600 mb-2">Secondary (Dark Blue)</h3>
        <H2 variant="secondary">Featured Projects</H2>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-600 mb-2">With Custom Styling</h3>
        <H2 variant="primary" className="text-center border-b border-gray-200 pb-2">
          Skills & Technologies
        </H2>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
