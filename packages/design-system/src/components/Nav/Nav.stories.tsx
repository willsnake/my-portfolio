import type { Meta, StoryObj } from '@storybook/preact-vite';
import { Nav } from './Nav';
import type { NavLink } from './types';

const meta: Meta<typeof Nav> = {
  title: 'Design System/Nav',
  component: Nav,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    brandText: {
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
    brandText: '/ W I L L S N A K E',
  },
};

const customLinks: NavLink[] = [
  {
    disabled: false,
    order: 1,
    text: 'Inicio',
    url: '#inicio',
  },
  {
    disabled: false,
    order: 2,
    text: 'Servicios',
    url: '#servicios',
  },
  {
    disabled: false,
    order: 3,
    text: 'Portafolio',
    url: '#portafolio',
  },
  {
    disabled: false,
    order: 4,
    text: 'Contacto',
    url: '#contacto',
  },
];

export const WithCustomLinks: Story = {
  args: {
    brandText: 'ACME Corp',
    links: customLinks,
  },
};

export const WithCustomClass: Story = {
  args: {
    brandText: '/ W I L L S N A K E',
    className: 'border-b border-gray-200',
  },
};

export const WithDisabledLinks: Story = {
  args: {
    brandText: 'Test Site',
    links: [...customLinks.slice(0, 2), { ...customLinks[2], disabled: true }, customLinks[3]],
  },
};
