import { getCollection, type CollectionEntry } from 'astro:content'

type Acc = {
  [year: string]: CollectionEntry<'blog'>[]
}

const allPosts = await getCollection('blog')

const allTags = new Set<string>()
allPosts.map((post) => {
  post.data.tags && post.data.tags.map((tag: string) => allTags.add(tag))
})

// 文章按年份分组，每年最多展示6篇
//const postsByYear = allPosts.reduce((acc, post) => {
//  const year = new Date(post.data.pubDate).getFullYear()
//  if (!acc[year]) acc[year] = []
//  if (acc[year].length < 6) acc[year].push(post)
//  return acc
//}, {})

export { allPosts, allTags }
