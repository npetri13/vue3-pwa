import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
    proxy: {
      "/agtoken": {
        target: "http://rest.arbeitsagentur.de/oauth/gettoken_cc",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/agtoken/, ""),
      },
    },
    cors: {
      origin: '*',
      methods: ['GET', 'HEAD', 'PUT' ,'PATCH' , 'POST', 'DELETE'],
      preflightContinue: false,
      optionsSuccessStatus: 204
    },
  },
  preview: { port: 8081 },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
