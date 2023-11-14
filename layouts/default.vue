<script setup lang="ts">
const sentinel = ref(null);
const isStuck = useIsStuck();

useIntersectionObserver(sentinel, ([{ isIntersecting }]) => {
  isStuck.value = !isIntersecting;
});
</script>

<template>
  <div
    class="bg-white ring-1 ring-neutral-100 relative mx-auto max-w-screen-2xl min-h-screen grid grid-rows-[1px_auto_1fr_auto]"
  >
    <div ref="sentinel" class="h-px"></div>
    <SbHeader />
    <slot />
    <SbFooter />
  </div>
</template>
