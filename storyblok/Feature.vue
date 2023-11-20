<script setup lang="ts">
import type { FeatureStoryblok } from "../component-types-sb";

type Props = {
  blok: FeatureStoryblok;
};

const props = defineProps<Props>();
</script>

<template>
  <div
    v-editable="props.blok"
    class="w-full bg-neutral-100 rounded-md overflow-hidden"
  >
    <img
      :src="`${props.blok.image?.filename}/m/500x0/`"
      :alt="props.blok.image?.alt"
      class="w-full h-48 xl:h-72 object-cover rounded-t-md"
    />
    <div class="px-12 py-6 rounded-b-md">
      <h3
        class="text-2xl text-neutral-800 uppercase mb-4 tracking-wide font-medium"
      >
        {{ props.blok.name }}
      </h3>
      <p class="prose text-neutral-500 max-w-[60ch]">
        {{ props.blok.copy }}
      </p>
    </div>
  </div>
</template>
