<script setup lang="ts">
import type { GridStoryblok } from "../component-types-sb";

type Props = {
  blok: GridStoryblok;
};

const props = defineProps<Props>();

const maxw = computed(() => {
  let maxw = "7xl";

  if (props.blok.columns && props.blok.columns.length < 3) {
    maxw = "5xl";
  }

  return maxw;
});
</script>

<template>
  <SbSection :maxw="maxw">
    <component
      :is="props.blok.headline_rank"
      v-if="props.blok.headline"
      class="text-2xl leading-tight font-medium uppercase text-neutral-800 tracking-wide mb-6"
    >
      {{ props.blok.headline }}
    </component>
    <div
      v-editable="props.blok"
      class="grid md:grid-cols-[repeat(auto-fit,_minmax(min(100%,_15rem),_1fr))] gap-12"
    >
      <StoryblokComponent
        v-for="column in props.blok.columns"
        :key="column._uid"
        :blok="column"
      />
    </div>
  </SbSection>
</template>
