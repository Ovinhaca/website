<script setup lang="ts">
interface Props {
  status: string;
}

const props = withDefaults(defineProps<Props>(), {
  status: "dark",
});

const whatsappSrc = computed(() => {
  return props.status === "dark"
    ? "https://a.storyblok.com/f/252441/24x24/0071ceb0ca/whatsapp-dark.svg"
    : "https://a.storyblok.com/f/252441/24x24/d0ef24a933/whatsapp-light.svg";
});

const googleSrc = computed(() => {
  return props.status === "dark"
    ? "https://a.storyblok.com/f/252441/24x24/b31a3a114c/google-dark.svg"
    : "https://a.storyblok.com/f/252441/24x24/10dc2e3436/google-light.svg";
});

const instagramSrc = computed(() => {
  return props.status === "dark"
    ? "https://a.storyblok.com/f/252441/24x24/d45808a42f/instagram-dark.svg"
    : "https://a.storyblok.com/f/252441/24x24/521fb65ba3/instagram-light.svg";
});

const tripadvisorSrc = computed(() => {
  return props.status === "dark"
    ? "https://a.storyblok.com/f/252441/86x54/85ba295227/tripadvisor-dark.svg"
    : "https://a.storyblok.com/f/252441/86x54/7b92b603ff/tripadvisor-light.svg";
});
</script>

<template>
  <NuxtLink
    to="https://wa.me/+351915725435"
    class="-m-1.5 p-1.5"
    target="_blank"
  >
    <span class="sr-only">WhatsApp</span>
    <img class="h-4 w-auto" :src="whatsappSrc" alt="" />
  </NuxtLink>
  <NuxtLink
    to="https://www.google.com/search?q=o+vinha%C3%A7a&rlz=1C1FCXM_pt-PTPT1072PT1072&oq=o+vinha%C3%A7a&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg7MgYIAhBFGDzSAQg0MzEzajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
    class="-m-1.5 p-1.5"
    target="_blank"
  >
    <span class="sr-only">Google</span>
    <img class="h-4 w-auto" :src="googleSrc" alt="" />
  </NuxtLink>
  <NuxtLink
    to="https://www.instagram.com/ovinhaca/"
    class="-m-1.5 p-1.5"
    target="_blank"
  >
    <span class="sr-only">Instagram</span>
    <img class="h-4 w-auto" :src="instagramSrc" alt="" />
  </NuxtLink>
  <NuxtLink
    to="https://www.tripadvisor.com/Restaurant_Review-g189158-d8317381-Reviews-O_Vinhaca_Tapas_Vinhos-Lisbon_Lisbon_District_Central_Portugal.html"
    class="-m-1.5 p-1.5"
    target="_blank"
  >
    <span class="sr-only">Tripadvisor</span>
    <img class="h-4 w-auto" :src="tripadvisorSrc" alt="" />
  </NuxtLink>
</template>
