<script setup lang="ts">
import type { TeaserStoryblok } from "../component-types-sb";

type Props = {
  blok: TeaserStoryblok;
};

const props = defineProps<Props>();
</script>

<template>
  <SbSection v-editable="props.blok" class="text-neutral-800">
    <div
      class="container mx-auto grid md:grid-cols-2 gap-12 place-items-center"
    >
      <div>
        <span class="text-3xl text-amber-600 leading-tight">
          {{ props.blok.subheadline }}
        </span>
        <h3 class="text-6xl font-bold uppercase tracking-wide mb-6">
          {{ props.blok.headline }}
        </h3>
        <p class="prose text-neutral-500 max-w-[60ch]">
          {{ props.blok.copy }}
        </p>
      </div>
      <div>
        <img
          :src="`${props.blok.image?.filename}/m/500x0`"
          :alt="props.blok.background_image?.alt"
          class="w-full rounded-md h-48 xl:h-96 object-cover shadow-md border-2 border-neutral-200"
        />
      </div>
    </div>
  </SbSection>
</template>
