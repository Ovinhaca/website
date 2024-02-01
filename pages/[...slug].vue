<script setup lang="ts">
const { slug } = useRoute().params as { slug: string[] };

const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? slug.join("/") : "inicio",
  { version: "draft" },
);
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
