<script setup lang="ts">
import type { HeroStoryblok } from "../component-types-sb";

type Props = {
  blok: HeroStoryblok;
};

const props = defineProps<Props>();
</script>

<template>
  <section
    v-editable="props.blok"
    class="flex flex-col justify-center relative isolate overflow-hidden bg-neutral-900 pb-16 pt-14 sm:pb-20"
    :class="[props.blok.layout === 'full-height' ? 'min-h-screen' : 'h-96']"
  >
    <img
      :src="`${props.blok.background_image?.filename}/m/1536x0`"
      :alt="props.blok.background_image?.alt"
      class="absolute inset-0 -z-10 h-full w-full object-cover object-top"
    />
    <SbSection as="div">
      <div
        v-if="props.blok.layout === 'full-height'"
        class="mx-auto max-w-2xl py-32"
      >
        <div
          v-if="props.blok.teaser_link"
          class="hidden sm:mb-8 sm:flex sm:justify-center"
        >
          <div
            class="relative rounded-full px-3 py-1 text-sm leading-6 text-neutral-400 ring-1 ring-white/10 hover:ring-white/20"
          >
            {{ props.blok.teaser }}
            <NuxtLink
              :to="`/${props.blok.teaser_link?.cached_url}`"
              class="font-semibold text-white lowercase"
            >
              <span class="absolute inset-0" aria-hidden="true" />
              {{ props.blok.teaser_link?.cached_url }}
              <span aria-hidden="true">&rarr;</span>
            </NuxtLink>
          </div>
        </div>
        <div class="flex flex-col gap-y-10 items-center text-white">
          <div class="flex flex-col items-center">
            <span
              class="text-4xl font-medium text-amber-500 leading-tight sm:text-6xl"
            >
              {{ props.blok.subheadline }}
            </span>
            <h1
              class="text-6xl font-bold leading-tight tracking-tight sm:text-8xl"
            >
              {{ props.blok.headline }}
            </h1>
          </div>
          <NuxtLink
            v-if="props.blok.booking_link"
            :to="`${props.blok.booking_link?.cached_url}`"
            :target="`${props.blok.booking_link?.target}`"
            class="rounded-md bg-amber-600 uppercase px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
          >
            {{ props.blok.booking_label }}
          </NuxtLink>
        </div>
      </div>
      <div v-else class="mx-auto max-w-2xl">
        <div class="flex flex-col gap-y-10 items-center text-white">
          <div class="flex flex-col items-center">
            <h1
              class="text-4xl font-bold leading-tight tracking-tight sm:text-6xl"
            >
              {{ props.blok.headline }}
            </h1>
          </div>
        </div>
      </div>
    </SbSection>
    <div
      class="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-neutral-600/70 via-neutral-600/50 to-transparent"
    ></div>
  </section>
</template>
