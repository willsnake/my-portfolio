<script lang="ts">
// biome-ignore-all lint/correctness/noUndeclaredVariables: svelte is partially supported by Biome
type Variants = 'primary' | 'secondary';

export let variant: Variants = 'primary';
const _rest = { ...$$props };

let _textColor = 'base-gray';
if (variant === 'secondary') {
  _textColor = 'lightest-gray';
}
</script>

<p {...rest} class={`font-normal text-base ${textColor}`}>
  <slot />
</p>

<style lang="scss">
  p {
    font-family: "IBM Plex Sans";

    &.base-gray {
      color: var(--c-gray);
    }

    &.lightest-gray {
      color: var(--c-lightest-gray);
    }
  }
</style>
