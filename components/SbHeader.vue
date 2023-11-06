<script setup lang="ts">
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

import type { MenuLinkStoryblok } from "../component-types-sb";

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories/config", {
  version: "draft",
  resolve_links: "url",
});

const headerMenu = ref<MenuLinkStoryblok[]>();
headerMenu.value = data.story.content.header_menu;

const isStuck = useIsStuck();

const logoSrc = computed(() => {
  return isStuck.value
    ? "https://a.storyblok.com/f/252441/110x54/f59e61f1d9/logo-dark.svg"
    : "https://a.storyblok.com/f/252441/110x54/9501e479c7/logo-light.svg";
});

const tripadvisorSrc = computed(() => {
  return isStuck.value
    ? "https://a.storyblok.com/f/252441/86x54/85ba295227/tripadvisor-dark.svg"
    : "https://a.storyblok.com/f/252441/86x54/7b92b603ff/tripadvisor-light.svg";
});

const mobileMenuOpen = ref(false);
</script>

<template>
  <header
    class="-mt-px sticky inset-x-0 top-0 z-50 border-t-4 border-amber-600 h-[92px]"
  >
    <nav
      class="transition-colors"
      :class="{ 'bg-white/95 shadow-md': isStuck }"
      aria-label="Global"
    >
      <SbSection as="div" class="flex items-center justify-between p-6 lg:px-8">
        <div class="flex lg:flex-1">
          <NuxtLink to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">O VINHAÇA: Tapas & Vinhos</span>
            <img class="h-10 w-auto" :src="logoSrc" alt="" />
          </NuxtLink>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            :class="[isStuck ? 'text-neutral-800' : 'text-white']"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <ul v-if="headerMenu" class="hidden lg:flex lg:gap-x-12">
          <li v-for="blok in headerMenu" :key="blok._uid">
            <NuxtLink
              :to="`/${blok.link?.cached_url}`"
              class="text-sm font-semibold leading-6 hover:text-amber-500"
              :class="[isStuck ? 'text-neutral-800' : 'text-white']"
            >
              {{ blok.link?.story.name }}
            </NuxtLink>
          </li>
        </ul>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <NuxtLink
            to="https://www.tripadvisor.com/Restaurant_Review-g189158-d8317381-Reviews-O_Vinhaca_Tapas_Vinhos-Lisbon_Lisbon_District_Central_Portugal.html"
            class="-m-1.5 p-1.5"
          >
            <span class="sr-only">Tripadvisor</span>
            <img class="h-4 w-auto" :src="tripadvisorSrc" alt="" />
          </NuxtLink>
        </div>
        <Dialog
          as="div"
          class="lg:hidden"
          :open="mobileMenuOpen"
          @close="mobileMenuOpen = false"
        >
          <div class="fixed inset-0 z-50" />
          <DialogPanel
            class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-800/10 border-t-4 border-amber-700"
          >
            <div class="flex items-center justify-between">
              <NuxtLink to="/" class="-m-1.5 p-1.5">
                <span class="sr-only">O VINHAÇA: Tapas & Vinhos</span>
                <img
                  class="h-10 w-auto"
                  src="https://a.storyblok.com/f/252441/110x54/f59e61f1d9/logo-dark.svg"
                  alt=""
                />
              </NuxtLink>
              <button
                type="button"
                class="-m-2.5 rounded-md p-2.5 text-gray-800"
                @click="mobileMenuOpen = false"
              >
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <ul v-if="headerMenu" class="space-y-2 py-6">
                  <li v-for="blok in headerMenu" :key="blok._uid">
                    <NuxtLink
                      :to="`/${blok.link?.cached_url}`"
                      class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-800 hover:bg-neutral-50"
                    >
                      {{ blok.link?.story.name }}
                    </NuxtLink>
                  </li>
                </ul>
                <div class="py-6">
                  <NuxtLink
                    to="https://www.tripadvisor.com/Restaurant_Review-g189158-d8317381-Reviews-O_Vinhaca_Tapas_Vinhos-Lisbon_Lisbon_District_Central_Portugal.html"
                    class="-m-1.5 p-1.5"
                  >
                    <span class="sr-only">Tripadvisor</span>
                    <img
                      class="h-6 w-auto"
                      src="https://a.storyblok.com/f/252441/86x54/85ba295227/tripadvisor-dark.svg"
                      alt=""
                    />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </SbSection>
    </nav>
  </header>
</template>

<style scoped>
nav a.router-link-active {
  @apply underline underline-offset-4 decoration-4 decoration-amber-500;
}
</style>
