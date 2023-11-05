<script setup lang="ts">
import type { GridStoryblok } from "../component-types-sb";

type Props = {
  blok: GridStoryblok;
};

const props = defineProps<Props>();
</script>

<template>
  <SbSection>
    <div
      v-editable="props.blok"
      class="grid md:grid-cols-3 gap-12 place-items-center"
    >
      <StoryblokComponent
        v-for="column in props.blok.columns"
        :key="column._uid"
        :blok="column"
      />
    </div>
  </SbSection>
</template>
