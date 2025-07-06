import { Meta, StoryObj } from '@storybook/preact-vite';
import { fn } from 'storybook/test';
import { Button } from './Button';
import { VARIANTS_MAP } from './types';

const meta = {
  title: 'Design System/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: Object.keys(VARIANTS_MAP),
      description: 'Visual variant of button',
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      description: 'Type of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Is the button currently disabled',
    },
    text: {
      control: 'text',
      description: 'Text of the button',
    },
    width: {
      control: 'text',
      description: 'Manually defined width',
    },
    onClick: { action: 'clicked' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    text: 'Primary Button',
  },
};

export const Secondary: Story = {
  globals: {
    backgrounds: { value: 'light' },
  },
  args: {
    variant: 'secondary',
    text: 'Secondary Button',
  },
};

export const WithCustomWidth: Story = {
  args: {
    variant: 'primary',
    text: 'Custom Width Button',
    width: '300px',
  },
  render: (args) => <Button {...args} style={{ width: args.width }} />,
};

export const AllVariants: Story = {
  globals: {
    backgrounds: { value: 'light' },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {Object.keys(VARIANTS_MAP).map((variant) => (
        <Button
          key={variant}
          variant={variant as keyof typeof VARIANTS_MAP}
          text={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Button`}
        />
      ))}
    </div>
  ),
};
