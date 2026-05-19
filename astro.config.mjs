import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // TODO: Change this to your real domain before deployment
  site: 'https://yourdomain.com',
  //prefetch: {
  //  defaultStrategy: 'viewport',
  //},
  integrations: [sitemap(), react()],
  markdown: { drafts: true },
  vite: {
    plugins: [tailwindcss()],
  },
})
