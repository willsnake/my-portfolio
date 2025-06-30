import type { Meta, StoryObj } from '@storybook/preact-vite';
import { Link } from './Link';

const meta: Meta<typeof Link> = {
  title: 'Design System/Link',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    to: {
      control: 'text',
    },
    text: {
      control: 'text',
    },
    target: {
      control: 'select',
      options: ['_blank', '_self', '_parent', '_top'],
    },
    rel: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "I'm a Link",
    to: '/',
  },
};

export const External: Story = {
  args: {
    text: 'Visit GitHub',
    to: 'https://github.com',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
};

export const WithCustomText: Story = {
  args: {
    text: 'Go to Portfolio',
    to: '/portfolio',
  },
};

export const WithChildren: Story = {
  args: {
    to: '/contact',
    children: 'Contact Me →',
  },
};

export const WithCustomClass: Story = {
  args: {
    text: 'Custom Styled Link',
    to: '/custom',
    className: 'text-lg font-bold',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className='flex flex-col gap-4 p-4'>
      <Link text='Default Link' to='/' />
      <Link text='External Link' to='https://example.com' target='_blank' rel='noopener noreferrer' />
      <Link to='/portfolio'>Link with children →</Link>
      <Link text='Custom Class' to='/custom' className='text-lg font-bold' />
    </div>
  ),
};
