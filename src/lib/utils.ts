import { getCollection, type CollectionEntry } from 'astro:content'

type Acc = {
  [year: string]: CollectionEntry<'blog'>[]
}

const allPosts = await getCollection('blog')

const data = (sortedData): string[] =>
  sortedData
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())

const allTags = new Set<string>()
allPosts.map((post) => {
  post.data.tags && post.data.tags.map((tag: string) => allTags.add(tag))
})

const dateRange = (startDate: Date, endDate?: Date | string): string => {
  const startMonth = startDate.toLocaleString('default', { month: 'short' })
  const startYear = startDate.getFullYear().toString()
  let endMonth
  let endYear

  if (endDate) {
    if (typeof endDate === 'string') {
      endMonth = ''
      endYear = endDate
    } else {
      endMonth = endDate.toLocaleString('default', { month: 'short' })
      endYear = endDate.getFullYear().toString()
    }
  }

  return `${startMonth}${startYear} - ${endMonth}${endYear}`
}

// 文章按年份分组，每年最多展示6篇
//const postsByYear = allPosts.reduce((acc, post) => {
//  const year = new Date(post.data.pubDate).getFullYear()
//  if (!acc[year]) acc[year] = []
//  if (acc[year].length < 6) acc[year].push(post)
//  return acc
//}, {})

export { allPosts, allTags, data }
