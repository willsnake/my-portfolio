<script lang="ts">
  import type { LinkProps } from "./types";

  type $$Props = LinkProps;

  export let to = "/";
  export let text = "I'm a Link";
</script>

<a href={to} class="font-medium text-sm underline text-dark-blue hover:text-blue">
  {text}
</a>
