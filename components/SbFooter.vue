<script setup lang="ts">
const currentYear = useDateFormat(useNow(), "YYYY");
</script>

<template>
  <footer class="mt-20 sm:mt-28 bg-neutral-800 text-white">
    <SbSection as="div">
      <div class="py-6 font-bold">© {{ currentYear }} O Vinhaça</div>
    </SbSection>
  </footer>
</template>
