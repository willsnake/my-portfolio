import type { Meta, StoryObj } from '@storybook/preact-vite';
import { Footer } from './Footer';
import type { FooterProps } from './types';

const meta: Meta<FooterProps> = {
  title: 'Design System/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    brandText: {
      control: 'text',
      description: 'Brand text to display',
    },
    designerName: {
      control: 'text',
      description: 'Designer name for attribution',
    },
    designerUrl: {
      control: 'text',
      description: 'Designer URL for attribution link',
    },
    showAttribution: {
      control: 'boolean',
      description: 'Show/hide designer attribution',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<FooterProps>;

// Default footer
export const Default: Story = {
  args: {
    brandText: '/ W I L L S N A K E',
    designerName: '@lilycaulfield',
    designerUrl: '/',
    showAttribution: true,
  },
};

// Without attribution
export const WithoutAttribution: Story = {
  args: {
    brandText: '/ W I L L S N A K E',
    showAttribution: false,
  },
};

// Custom brand text
export const CustomBrand: Story = {
  args: {
    brandText: '/ M Y   P O R T F O L I O',
    designerName: '@designer',
    designerUrl: 'https://example.com',
    showAttribution: true,
  },
};

// Custom designer
export const CustomDesigner: Story = {
  args: {
    brandText: '/ W I L L S N A K E',
    designerName: '@custom_designer',
    designerUrl: 'https://customdesigner.com',
    showAttribution: true,
  },
};

// With custom styling
export const WithCustomStyling: Story = {
  args: {
    brandText: '/ W I L L S N A K E',
    designerName: '@lilycaulfield',
    designerUrl: '/',
    showAttribution: true,
    className: 'border-t-2 border-blue',
  },
};

// In context (simulated page)
export const InContext: Story = {
  render: () => (
    <div className='min-h-screen flex flex-col bg-black'>
      {/* Simulated page content */}
      <div className='flex-1 bg-black p-8'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-3xl font-bold text-gray-900 mb-6'>Page Content</h1>
          <p className='text-gray-600 mb-4'>This is a simulated page to show how the footer appears in context.</p>
          <p className='text-gray-600 mb-4'>The footer will stick to the bottom of the page layout.</p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
            <div className='bg-white p-6 rounded shadow'>
              <h3 className='font-semibold text-gray-900 mb-2'>Section 1</h3>
              <p className='text-gray-600'>Some content here...</p>
            </div>
            <div className='bg-white p-6 rounded shadow'>
              <h3 className='font-semibold text-gray-900 mb-2'>Section 2</h3>
              <p className='text-gray-600'>More content here...</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer at bottom */}
      <Footer brandText='/ W I L L S N A K E' designerName='@lilycaulfield' designerUrl='/' showAttribution={true} />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
