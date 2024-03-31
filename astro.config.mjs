import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'http://127.0.0.1',
  prefetch: {
    defaultStrategy: 'viewport'
  },
  integrations: [sitemap(), tailwind(), react()],
  markdown: {
    drafts: true
  }
})
