import { getCollection, type CollectionEntry } from 'astro:content'

type Acc = {
  [year: string]: CollectionEntry<'blog'>[]
}

const allPosts = await getCollection('blog')

const allTags = new Set<string>()
allPosts.map((post) => {
  post.data.tags && post.data.tags.map((tag: string) => allTags.add(tag))
})

//const postList = ({ sortedPost }: string) => {
//  sortedPost.reduce((acc: Acc, post) => {
//    const year = post.data.pubDate.getFullYear() // 提取年份
//
//    if (!acc[year]) {
//      acc[year] = []
//    }
//    acc[year].push(post)
//    return acc
//  }, {})
//}

//const dateRange = (startDate: Date, endDate?: Date | string): string => {
//  const startMonth = startDate.toLocaleString('default', { month: 'short' })
//  const startYear = startDate.getFullYear().toString()
//  let endMonth
//  let endYear
//
//  if (endDate) {
//    if (typeof endDate === 'string') {
//      endMonth = ''
//      endYear = endDate
//    } else {
//      endMonth = endDate.toLocaleString('default', { month: 'short' })
//      endYear = endDate.getFullYear().toString()
//    }
//  }
//
//  return `${startMonth}${startYear} - ${endMonth}${endYear}`
//}

// 文章按年份分组，每年最多展示6篇
//const postsByYear = allPosts.reduce((acc, post) => {
//  const year = new Date(post.data.pubDate).getFullYear()
//  if (!acc[year]) acc[year] = []
//  if (acc[year].length < 6) acc[year].push(post)
//  return acc
//}, {})

export { allPosts, allTags }
