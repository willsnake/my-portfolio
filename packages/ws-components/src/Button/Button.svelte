<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { ButtonProps } from "./types";

  const dispatch = createEventDispatcher();

  // type $$Props = ButtonProps;
  interface $$Props extends ButtonProps {}

  export let type = "button";
  export let disabled = false;
  export let text = "Click Me!";
  export let variant = "primary";

  /**
   * Optional click handler
   */
  const onClick = (event) => {
    dispatch("click", event);
  };
</script>

<button
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
