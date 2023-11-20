<script setup lang="ts">
type TProps = {
  as?: string;
  maxw?: string;
};

const props = withDefaults(defineProps<TProps>(), {
  as: "section",
  maxw: "7xl",
});
</script>

<template>
  <component
    :is="props.as"
    class="mx-auto px-6 lg:px-8 w-full"
    :class="[props.maxw === '7xl' ? 'max-w-7xl' : 'max-w-5xl']"
  >
    <slot />
  </component>
</template>
