<script setup lang="ts">
type TProps = {
  as?: string;
};

const props = withDefaults(defineProps<TProps>(), {
  as: "section",
});
</script>

<template>
  <component :is="props.as" class="mx-auto max-w-7xl px-6 lg:px-8">
    <slot />
  </component>
</template>
