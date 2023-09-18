<script setup lang="ts">
import type { TeaserStoryblok } from "../component-types-sb";

type Props = {
  blok: TeaserStoryblok;
};

const props = defineProps<Props>();
</script>

<template>
  <div
    v-editable="props.blok"
    class="py-32 text-6xl text-[#50b0ae] font-bold text-center"
  >
    {{ props.blok.headline }}
  </div>
</template>
