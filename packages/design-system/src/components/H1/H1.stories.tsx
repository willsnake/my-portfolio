import type { Meta, StoryObj } from '@storybook/preact';
import { H1 } from './H1';
import type { H1Props } from './types';

const meta: Meta<H1Props> = {
  title: 'Design System/H1',
  component: H1,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'H1 content',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<H1Props>;

// Default H1
export const Default: Story = {
  args: {
    children: 'Main Heading',
  },
};

// Long heading
export const LongHeading: Story = {
  args: {
    children: 'This is a longer main heading that demonstrates text wrapping',
  },
  parameters: {
    layout: 'padded',
  },
};

// With custom classes
export const WithCustomClass: Story = {
  args: {
    children: 'Styled Heading',
    className: 'text-blue underline',
  },
};

// Multiple examples
export const Examples: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-600 mb-2">Default</h3>
        <H1>Welcome to the Portfolio</H1>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-600 mb-2">With Custom Styling</h3>
        <H1 className="text-blue">Featured Project</H1>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-600 mb-2">Long Text</h3>
        <H1>A Very Long Heading That Demonstrates How Text Wraps Naturally</H1>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
