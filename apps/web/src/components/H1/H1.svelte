<script lang="ts">
  const rest = { ...$$props };
</script>

<h1 {...rest} class={`font-medium text-dark-white`}>
  <slot />
</h1>

<style>
  h1 {
    font-size: 40px;
    line-height: 52px;
  }
</style>
