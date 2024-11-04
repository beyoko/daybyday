import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { siteMeta } from '@/consts'

interface Context {
  site: string
}

type Post = {
  slug: string
  data: {
    title: string
    pubDate: string
    description?: string
    tags?: string[]
  }
}

export async function GET(context: Context): Promise<Response> {
  const posts: Post[] = await getCollection('post')
  return rss({
    title: siteMeta.title,
    description: siteMeta.description,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/post/${post.slug}/`,
    })),
  })
}
