<script setup lang="ts">
import type { HeroStoryblok } from "../component-types-sb";

type Props = {
  blok: HeroStoryblok;
};

const props = defineProps<Props>();

const heroClasses = computed(() => {
  return props.blok.layout === "constrained" ? "container mx-auto" : "";
});
</script>

<template>
  <section
    v-editable="props.blok"
    class="min-h-screen -mt-24 relative flex items-end justify-center -mx-4 overflow-hidden"
    :class="heroClasses"
  >
    <div
      class="relative z-10 w-full text-center bg-gradient-to-t from-black/70 via-black/50 to-transparent py-6"
    >
      <h2 class="text-4xl text-white font-light">
        {{ props.blok.subheadline }}
      </h2>
      <h1 class="text-6xl text-white font-bold mb-3">
        {{ props.blok.headline }}
      </h1>
    </div>
    <img
      :src="`${props.blok.background_image?.filename}/m/1900x0`"
      :alt="props.blok.background_image?.alt"
      class="absolute top-0 left-0 z-0 w-full h-full object-cover"
    />
  </section>
</template>
