import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  output: "static",
  prefetch: true,
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  integrations: [tailwind(), markdoc()],
});
