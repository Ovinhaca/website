<script setup lang="ts">
import type { GridStoryblok } from "../component-types-sb";

type Props = {
  blok: GridStoryblok;
};

const props = defineProps<Props>();
</script>

<template>
  <div
    v-editable="props.blok"
    class="container mx-auto grid md:grid-cols-3 gap-12 my-12 place-items-center"
  >
    <StoryblokComponent
      v-for="column in props.blok.columns"
      :key="column._uid"
      :blok="column"
    />
  </div>
</template>
