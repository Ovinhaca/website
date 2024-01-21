<script setup lang="ts">
import { MapPinIcon, PhoneIcon, ClockIcon } from "@heroicons/vue/20/solid";

import type { ContactBlockStoryblok } from "../component-types-sb";

type Props = {
  blok: ContactBlockStoryblok;
};

const props = defineProps<Props>();

const resolvedLocationBodyRichText = computed(() =>
  renderRichText(props.blok.location_body),
);

const resolvedContactBodyRichText = computed(() =>
  renderRichText(props.blok.contact_body),
);

const resolvedOpeningBodyRichText = computed(() =>
  renderRichText(props.blok.opening_body),
);
</script>

<template>
  <SbSection maxw="5xl">
    <div class="grid md:grid-cols-3 gap-4 mb-4">
      <div class="flex flex-col">
        <component
          :is="props.blok.head_rank"
          class="flex gap-4 items-center text-2xl leading-tight font-medium uppercase text-neutral-800 tracking-wide mb-6"
        >
          <MapPinIcon aria-hidden="true" class="h-6 w-6" />
          {{ props.blok.location_head }}
        </component>
        <div class="prose" v-html="resolvedLocationBodyRichText"></div>
      </div>
      <div class="flex flex-col">
        <component
          :is="props.blok.head_rank"
          class="flex gap-4 text-2xl leading-tight font-medium uppercase text-neutral-800 tracking-wide mb-6"
        >
          <PhoneIcon aria-hidden="true" class="h-6 w-6" />
          {{ props.blok.contact_head }}
        </component>
        <div class="prose" v-html="resolvedContactBodyRichText"></div>
      </div>
      <div class="flex flex-col">
        <component
          :is="props.blok.head_rank"
          class="flex gap-4 text-2xl leading-tight font-medium uppercase text-neutral-800 tracking-wide mb-6"
        >
          <ClockIcon aria-hidden="true" class="h-6 w-6" />
          {{ props.blok.opening_head }}
        </component>
        <div class="prose" v-html="resolvedOpeningBodyRichText"></div>
      </div>
    </div>
  </SbSection>
</template>
