import { defineConfig } from "astro/config";
import icons from "unplugin-icons/vite";
import unocss from "unocss/astro";

export default defineConfig({
  integrations: [unocss()],
  vite: { plugins: [icons({ compiler: "astro" })] },
});
