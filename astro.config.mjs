import { defineConfig, sharpImageService } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  site: 'http://127.0.0.1',
  prefetch: {
    defaultStrategy: 'viewport',
  },
  integrations: [sitemap(), tailwind(), react()],
  image: {
    service: sharpImageService(),
  },
  markdown: {
    drafts: true,
  },
})
