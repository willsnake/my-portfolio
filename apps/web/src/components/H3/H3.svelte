<script lang="ts">
  type Variants = "primary" | "secondary" | "tertiary";

  export let variant: Variants = "primary";
  const rest = { ...$$props };

  let textColor: string = "";
  switch (variant) {
    case "secondary":
      textColor = "dark-blue";
      break;
    case "tertiary":
      textColor = "dark-gray";
      break;
    default:
      textColor = "dark-white";
      break;
  }
</script>

<h3 {...rest} class={`font-medium text-xl text-${textColor}`}>
  <slot />
</h3>
