import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      base: "/Drilldo/",
      manifest: {
        name: "Drilldo",
        short_name: "Drilldo",
        description: "Question set drill app",
        display: "standalone",
        background_color: "#012A4A",
        start_url: ".",
        theme_color: "#012A4A",
        icons: [
          {
            src: "/Drilldo/icon-x512.png",
            type: "image/png",
            sizes: "512x512",
          },
          {
            src: "/Drilldo/icon-x384.png",
            type: "image/png",
            sizes: "384x384",
          },
          {
            src: "/Drilldo/icon-x192.png",
            type: "image/png",
            sizes: "192x192",
          },
          {
            src: "/Drilldo/icon-x128.png",
            type: "image/png",
            sizes: "128x128",
          },
          {
            src: "/Drilldo/icon-x96.png",
            type: "image/png",
            sizes: "96x96",
          },
          {
            src: "/Drilldo/icon-x72.png",
            type: "image/png",
            sizes: "72x72",
          },
          {
            src: "/Drilldo/icon-x48.png",
            type: "image/png",
            sizes: "48x48",
          },
        ],
      },
      includeAssets: "data/*.json",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
    }),
  ],
  base: "/Drilldo/",
  build: {
    emptyOutDir: true,
    outDir: "../docs",
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
