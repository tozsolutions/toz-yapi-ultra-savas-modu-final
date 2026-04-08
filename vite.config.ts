import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          if (
            id.includes("react-hook-form") ||
            id.includes("@hookform/resolvers") ||
            id.includes("zod")
          ) {
            return "form-vendor";
          }

          if (
            id.includes("i18next") ||
            id.includes("react-i18next") ||
            id.includes("i18next-browser-languagedetector") ||
            id.includes("i18next-http-backend")
          ) {
            return "i18n-vendor";
          }

          if (id.includes("framer-motion")) {
            return "motion-vendor";
          }

          if (id.includes("react-ga4")) {
            return "analytics-vendor";
          }

          if (
            id.includes("@radix-ui") ||
            id.includes("embla-carousel-react") ||
            id.includes("lucide-react") ||
            id.includes("sonner") ||
            id.includes("vaul") ||
            id.includes("cmdk")
          ) {
            return "ui-vendor";
          }

          if (
            id.includes("@tanstack/react-query") ||
            id.includes("react-router-dom")
          ) {
            return "core-vendor";
          }

          if (id.includes("react") || id.includes("react-dom")) {
            return "react-vendor";
          }
        },
      },
    },
  },
});