import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import image from '@astrojs/image'

export default defineConfig({
  site: 'http://127.0.0.1',
  integrations: [
    sitemap(),
    tailwind(),
    react(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    })
  ],
  markdown: {
    drafts: true
  }
})
