import { Meta, StoryObj } from '@storybook/preact-vite';
import { Card } from './Card';
import type { CardProps } from './types';

const meta: Meta<CardProps> = {
  title: 'Design System/Card',
  component: Card,
  globals: {
    backgrounds: { value: 'light' },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the card',
    },
    date: {
      control: 'text',
      description: 'Date or time information',
    },
    description: {
      control: 'text',
      description: 'Description or content of the card',
    },
    row: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Grid row position',
    },
    isOdd: {
      control: 'boolean',
      description: 'Whether the card is in an odd position (affects styling)',
    },
  },
};

export default meta;
type Story = StoryObj<CardProps>;

export const Default: Story = {
  args: {
    title: 'Default Card',
    date: 'May 2025',
    description: 'This is a default card with a description.',
    row: 1,
    isOdd: true,
  },
  render: (args) => (
    <div
      style={{
        display: 'grid',
        maxHeight: '800px',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <Card {...args} />
    </div>
  ),
};

export const EvenPosition: Story = {
  args: {
    title: 'Even Position Card',
    date: 'June 2025',
    description: 'This card is in an even position.',
    row: 1,
    isOdd: false,
  },
  render: (args) => (
    <div style={{ display: 'grid', maxWidth: '800px', margin: '0 auto' }}>
      <Card {...args} />
    </div>
  ),
};

export const WithChildren: Story = {
  args: {
    title: 'Card with Children',
    date: 'July 2025',
    row: 1,
    isOdd: true,
  },
  render: (args) => (
    <div style={{ display: 'grid', maxWidth: '800px', margin: '0 auto' }}>
      <Card {...args}>
        <p>This is a card with children elements instead of a description prop.</p>
        <p>You can add multiple elements as children.</p>
      </Card>
    </div>
  ),
};

export const Timeline: Story = {
  render: () => (
    <div style={{ display: 'grid', maxWidth: '800px', margin: '0 auto' }}>
      <Card
        title='First Event'
        date='January 2025'
        description='This is the first event in our timeline.'
        row={1}
        isOdd={true}
      />
      <Card
        title='Second Event'
        date='February 2025'
        description='This is the second event in our timeline.'
        row={2}
        isOdd={false}
      />
      <Card
        title='Third Event'
        date='March 2025'
        description='This is the third event in our timeline.'
        row={3}
        isOdd={true}
      />
    </div>
  ),
};
