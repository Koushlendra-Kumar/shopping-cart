import { defineConfig } from "vite";
import React from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS({
      configFile: '/uno.config.ts'
    }), 
    React()
  ],
});
