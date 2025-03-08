import { getCollection, type CollectionEntry } from 'astro:content'

interface ProcessedPost extends CollectionEntry<'blog'> {
  year: string
}

const dateSortDesc = (a: string, b: string) => {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

const allPosts = await getCollection('blog')

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
    processedCache = null
  })
}

export { allPosts }
