import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "storyblok/**/*.{vue,ts}",
    "components/**/*.{vue,ts}",
    "pages/**/*.vue",
    "formkit.theme.ts",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [typography],
} satisfies Config;
