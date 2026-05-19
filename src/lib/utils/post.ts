import { getCollection, type CollectionEntry } from 'astro:content'

let allPosts: CollectionEntry<'blog'>[] = []
try {
  allPosts = await getCollection('blog')
} catch (e) {
  console.error('[post.ts] Failed to load blog collection:', e)
}

let cachedPosts: CollectionEntry<'blog'>[] | null = null
export const getProcessedPosts = () => {
  if (!cachedPosts) {
    cachedPosts = allPosts
      .filter((post) => !post.data.draft)
      .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
      .map((post) => ({
        ...post,
        data: {
          ...post.data,
          tags: post.data.tags?.map((t) => t.toLowerCase()) || [],
        },
      }))
  }
  return cachedPosts
}

// 添加内存清理策略
if (import.meta.hot) {
  import.meta.hot.on('vite:beforeFullReload', () => {
    cachedPosts = null
  })
}

export { allPosts }
