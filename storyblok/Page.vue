<script setup lang="ts">
import type { PageStoryblok } from "../component-types-sb";

type Props = {
  blok: PageStoryblok;
};

const props = defineProps<Props>();
</script>

<template>
  <div v-editable="props.blok" class="px-4">
    <StoryblokComponent
      v-for="section in props.blok?.body"
      :key="section._uid"
      :blok="section"
    />
  </div>
</template>
