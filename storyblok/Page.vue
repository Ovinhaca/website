<script setup lang="ts">
import type { PageStoryblok } from "../component-types-sb";

type Props = {
  blok: PageStoryblok;
};

const props = defineProps<Props>();
</script>

<template>
  <main
    v-editable="props.blok"
    class="flex -mt-[92px] flex-col gap-20 sm:gap-28"
  >
    <StoryblokComponent
      v-for="section in props.blok?.body"
      :key="section._uid"
      :blok="section"
    />
  </main>
</template>
