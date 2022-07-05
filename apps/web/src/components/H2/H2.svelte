<script lang="ts">
  type Variants = "primary" | "secondary";

  export let variant: Variants = "primary";
  const rest = { ...$$props };

  let textColor: string = "dark-white";
  if (variant === "secondary") {
    textColor = "dark-blue";
  }
</script>

<h2 {...rest} class={`font-medium text-${textColor}`}>
  <slot />
</h2>

<style>
  h2 {
    font-size: 32px;
    line-height: 42px;
    letter-spacing: 1px;
  }
</style>
