import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import node from "@astrojs/node";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sitemap()],
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  server: {port: 80}
});