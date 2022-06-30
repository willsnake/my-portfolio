import Button from './Button.svelte'
import { VARIANTS_MAP } from './types'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    text: { control: 'text' },
    onClick: { action: 'onClick' },
    disabled: { control: 'boolean' },
    variant: {
      control: { type: 'select' },
      options: [...Object.keys(VARIANTS_MAP)],
    },
    type: {
      control: { type: 'select' },
      options: ['button','submit','reset'],
    },
  },
};


const Template = (args) => ({
  Component: Button,
  props: args,
  on: {
    click: args.onClick,
  },
});


export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  text: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  text: 'Secondary',
};