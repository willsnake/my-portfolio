<script lang="ts">
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Button from './Button.svelte'
  import { VARIANTS_MAP } from './types'
</script>

<Meta
  title="ButtonSvelte"
  component={Button}
  argTypes={{
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
  }}
/>

<Template let:args>
  <Button {...args } on:click={args.onClick} />
</Template>

<Story
  name='Primary'
  args={{
    variant: 'primary',
  text: 'Primary',
  }}
/>

<Story
  name='Secondary'
  args={{
    variant: 'secondary',
    text: 'Secondary',
  }}
/>