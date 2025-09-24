import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";

export default defineConfig({
  integrations: [react(), sitemap()],
  output: "server",
  adapter: node({
    mode: "standalone", // Creates its own Node server
  }),
  server: {
    host: true,         // allow external connections
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000
  }
});
