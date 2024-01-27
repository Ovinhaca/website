<script setup lang="ts">
import type { TeaserStoryblok } from "../component-types-sb";

type Props = {
  blok: TeaserStoryblok;
};

const props = defineProps<Props>();

const resolvedCopyRichText = computed(() => renderRichText(props.blok.copy));
</script>

<template>
  <SbSection v-editable="props.blok" maxw="5xl" class="text-neutral-800">
    <div
      class="container mx-auto grid gap-12 place-items-center"
      :class="[
        props.blok.image?.filename ? 'md:grid-cols-2' : 'md:grid-cols-1',
      ]"
    >
      <div
        class="flex flex-col"
        :class="[
          props.blok.image?.filename
            ? 'items-start text-left'
            : 'items-center text-center',
        ]"
      >
        <span
          v-if="props.blok.subheadline"
          class="text-3xl text-amber-600 leading-tight max-w-[35ch]"
        >
          {{ props.blok.subheadline }}
        </span>
        <h3
          class="text-6xl font-bold uppercase tracking-wide mb-6 max-w-[35ch]"
        >
          {{ props.blok.headline }}
        </h3>
        <div class="prose" v-html="resolvedCopyRichText"></div>
      </div>
      <div v-if="props.blok.image?.filename" class="self-start">
        <img
          :src="`${props.blok.image?.filename}/m/500x0`"
          :alt="props.blok.background_image?.alt"
          class="w-full rounded-md h-48 xl:h-96 object-cover shadow-md border-2 border-neutral-200"
        />
      </div>
    </div>
  </SbSection>
</template>
