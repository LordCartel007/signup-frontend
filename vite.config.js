import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path"; // <-- add this line

export default defineConfig({
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // <-- this adds the "@" alias
    },
  },
});
