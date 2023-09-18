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
    class="w-full p-12 bg-[#f7f6fd] rounded-[5px] text-center"
  >
    <h3 class="text-2xl text-[#1d243d] font-bold">
      {{ props.blok.name }}
    </h3>
  </div>
</template>
