import { defineConfig, sharpImageService } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'http://127.0.0.1',
  //prefetch: {
  //  defaultStrategy: 'viewport',
  //},
  integrations: [sitemap(), react()],
  markdown: { drafts: true },
  vite: {
    plugins: [tailwindcss()],
  },
})
