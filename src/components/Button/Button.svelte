<script lang="ts">
// biome-ignore-all lint/correctness/noUndeclaredVariables: svelte is partially supported by Biome
import { createEventDispatcher } from 'svelte';
import type { ButtonProps } from './types';

const dispatch = createEventDispatcher();

type $$Props = ButtonProps;

export let type = 'button';
export let disabled = false;
export let text = 'Click Me!';
export let variant = 'primary';
const _rest = { ...$$props };

/**
 * Optional click handler
 */
const _onClick = (event) => {
  dispatch('click', event);
};
</script>

<button
  {...rest}
  class="rounded cursor-pointer text-sm font-medium py-3 px-4"
  {type}
  aria-disabled={disabled}
  data-variant={variant}
  on:click={onClick}
>
  {text}
</button>

<style lang="scss">
  @import "./styles.scss";
</style>
