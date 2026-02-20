import { resolve } from "node:path";

import { defineConfig } from "astro/config";
import unocss from "unocss/astro";

import { FileSystemIconLoader } from "unplugin-icons/loaders";
import icons from "unplugin-icons/vite";

export default defineConfig({
  integrations: [unocss()],
  vite: {
    plugins: [
      icons({
        compiler: "astro",
        customCollections: {
          internal: FileSystemIconLoader(resolve("icons")),
        },
      }),
    ],
  },
});
