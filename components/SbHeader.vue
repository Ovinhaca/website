<script setup lang="ts">
import type { MenuLinkStoryblok } from "../component-types-sb";

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories/config", {
  version: "draft",
  resolve_links: "url",
});

const headerMenu = ref<MenuLinkStoryblok[]>();
headerMenu.value = data.story.content.header_menu;
</script>

<template>
  <header
    class="h-24 bg-white/25 sticky z-50 top-0 left-0 w-full px-4 shadow-md border-t-4 border-orange-600"
  >
    <div class="container h-full mx-auto flex items-center justify-between">
      <NuxtLink to="/">
        <img
          src="https://a.storyblok.com/f/252441/127x64/7d293e6df3/logo.png/m/"
          alt=""
        />
      </NuxtLink>
      <nav v-if="headerMenu">
        <ul class="flex space-x-8 text-lg font-bold">
          <li v-for="blok in headerMenu" :key="blok._uid">
            <NuxtLink
              :to="`/${blok.link?.cached_url}`"
              class="hover:text-orange-600"
            >
              {{ blok.link?.story.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
nav a.router-link-active {
  @apply underline underline-offset-4 decoration-4 decoration-orange-600;
}
</style>
