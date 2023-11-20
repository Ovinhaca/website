<script setup lang="ts">
import type { MenuStoryblok } from "../component-types-sb";

type Props = {
  blok: MenuStoryblok;
};

const props = defineProps<Props>();

function formatPrice(value: string | undefined) {
  if (!value) return;

  const formatter = new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  });

  return formatter.format(Number(value));
}
</script>

<template>
  <div v-editable="props.blok" class="w-full">
    <component
      :is="props.blok.headline_rank"
      v-if="props.blok.headline"
      class="text-2xl leading-tight font-medium uppercase text-neutral-800 tracking-wide mb-6"
    >
      {{ props.blok.headline }}
    </component>
    <ul class="flex flex-col gap-8">
      <li
        v-for="item in props.blok.menu_items"
        :key="item._uid"
        class="flex flex-col gap-2"
      >
        <div class="bg-pattern flex justify-between text-neutral-600">
          <h4
            class="text-lg pe-2 uppercase leading-snug tracking-wide bg-white"
          >
            {{ item.name }}
          </h4>
          <div class="text-lg ps-2 font-medium leading-snug bg-white">
            {{ formatPrice(item.price) }}
          </div>
        </div>
        <p class="text-sm leading-relaxed text-neutral-500">
          {{ item.description }}
        </p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.bg-pattern {
  background-image: radial-gradient(
    circle at center,
    hsl(0deg 0% 32%) 0,
    hsl(0deg 0% 32%) 1px,
    white 1px,
    white 100%
  );
  background-position: left bottom;
  background-repeat: repeat-x;
  background-size: 1.125rem 1.125rem;
}
</style>
