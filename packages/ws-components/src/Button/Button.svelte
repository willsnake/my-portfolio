<script lang="ts">
  import { createEventDispatcher } from "svelte"
  import type { ButtonProps } from "./types"

  const dispatch = createEventDispatcher();

  type $$Props = ButtonProps;

  export let type = "button";
  export let disabled = false;
  export let text = "Click Me!";
  export let variant = "primary";

  /**
   * Optional click handler
   */
  const onClick = (event) => {
    dispatch("click", event);
  }

</script>

<button
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
