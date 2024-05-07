import { defineConfig, sharpImageService } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import partytown from '@astrojs/partytown'
import rehypeSlug from 'rehype-slug'

const partytownConfig = {
  config: { forward: ['dataLayer.push'] },
}

export default defineConfig({
  site: 'http://127.0.0.1',
  prefetch: {
    defaultStrategy: 'viewport',
  },
  integrations: [sitemap(), tailwind(), react(), partytown(partytownConfig)],
  image: {
    service: sharpImageService(),
  },
  markdown: {
    rehypePlugins: [rehypeSlug],
    drafts: true,
  },
})
