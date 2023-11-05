<script setup lang="ts">
const sentinel = ref(null);
const isStuck = useIsStuck();

useIntersectionObserver(sentinel, ([{ isIntersecting }]) => {
  isStuck.value = !isIntersecting;
});
</script>

<template>
  <div class="relative mx-auto max-w-screen-2xl min-h-screen">
    <div ref="sentinel" class="h-px"></div>
    <SbHeader />
    <slot />
    <SbFooter />
  </div>
</template>
