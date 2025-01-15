import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import node from "@astrojs/node";

import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sitemap()],
  output: "server",
  adapter: cloudflare({
    imageService: 'cloudflare'
  }),
  output: 'server'
});