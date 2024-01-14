<script setup lang="ts">
import type { MapStoryblok } from "../component-types-sb";

type Props = {
  blok: MapStoryblok;
};

const props = defineProps<Props>();
const zoom = ref(18);

const latLng = computed(() => {
  return [parseFloat(props.blok.latitude), parseFloat(props.blok.longitude)];
});
</script>

<template>
  <SbSection maxw="5xl">
    <component
      :is="props.blok.headline_rank"
      v-if="props.blok.headline"
      class="text-2xl leading-tight font-medium uppercase text-neutral-800 tracking-wide mb-6"
    >
      {{ props.blok.headline }}
    </component>
    <div class="w-full h-96 rounded-md shadow-md border-neutral-200 border-2">
      <LMap
        ref="map"
        :zoom="zoom"
        :center="latLng as [number, number]"
        class="z-10"
      >
        <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          layer-type="base"
          name="OpenStreetMap"
        />
        <LMarker :lat-lng="latLng as [number, number]" />
      </LMap>
    </div>
  </SbSection>
</template>
