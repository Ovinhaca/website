import { pt } from "@formkit/i18n";
import { defineFormKitConfig } from "@formkit/vue";

import { rootClasses } from "./formkit.theme";

export default defineFormKitConfig({
  locales: { pt },
  locale: "pt",
  config: {
    rootClasses,
  },
});
