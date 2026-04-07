import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  server: {
    proxy: {
      "/api/newsletter": {
        target: "https://neubox.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/newsletter/, "/newsletter"),
      },
    },
  },
  build: {
    lib: {
      entry: "src/widgetConfig/widgetConfig.tsx",
      name: "NewsletterTechReactRaulAcostaDeveloper",
      fileName: () => "NewsletterTechReactRaulAcostaDeveloper.js",
      formats: ["iife"],
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
});
