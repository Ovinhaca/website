import type { Config } from "tailwindcss";

export default {
  content: [
    "storyblok/**/*.{vue,ts}",
    "components/**/*.{vue,ts}",
    "pages/**/*.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
