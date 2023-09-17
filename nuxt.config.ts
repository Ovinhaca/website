// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: "JHeQvrlRMcoCjUWXqfe2Pgtt",
        apiOptions: {
          region: "eu",
        },
      },
    ],
  ],
  devtools: { enabled: true },
});
