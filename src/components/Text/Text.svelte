<script lang="ts">
  type Variants = "primary" | "secondary";

  export let variant: Variants = "primary";
  const rest = { ...$$props };

  let textColor: string = "base-gray";
  if (variant === "secondary") {
    textColor = "lightest-gray";
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
