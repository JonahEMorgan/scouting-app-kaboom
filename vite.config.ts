import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import prismjsPlugin from 'vite-plugin-prismjs'

export default defineConfig({
  base: "./",
  plugins: [preact(), prismjsPlugin({
    languages: ["json"],
    theme: "dark",
    css: true
  })],
})
