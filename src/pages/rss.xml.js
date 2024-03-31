import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { siteMeta } from '@/consts'

export async function GET(context) {
  const posts = await getCollection('post')
  return rss({
    title: siteMeta.title,
    description: siteMeta.description,
    site: context.site,
    items: posts.map(post => ({
      ...post.data,
      link: `/post/${post.slug}/`
    }))
  })
}
