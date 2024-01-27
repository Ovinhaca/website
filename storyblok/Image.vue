<script setup lang="ts">
import type { ImageStoryblok } from "../component-types-sb";

type Props = {
  blok: ImageStoryblok;
};

const props = defineProps<Props>();
</script>

<template>
  <SbSection maxw="5xl">
    <img
      :src="`${props.blok.image?.filename}/m/500x0`"
      :alt="props.blok.background_image?.alt"
      class="w-full rounded-md h-48 xl:h-96 object-cover shadow-md border-2 border-neutral-200"
    />
  </SbSection>
</template>
