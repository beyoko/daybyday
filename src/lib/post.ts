import { getCollection, type CollectionEntry } from 'astro:content'

const allPosts = await getCollection('post')

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

const postsByYear = allPosts.reduce((acc, post) => {
  const year = new Date(post.data.pubDate).getFullYear() // 提取年份

  // 如果该年份不存在，则初始化为空数组
  if (!acc[year]) acc[year] = []

  // 将文章添加到相应年份的数组中
  acc[year].push(post)

  return acc // 返回累积器
}, {})

const sortedAllYears = Object.keys(postsByYear).sort(
  (a, b) => parseInt(b) - parseInt(a),
)

const sortedPosts = allPosts.reduce((acc, post) => {
  const year = new Date(post.data.pubDate).getFullYear() // 提取年份

  // 如果该年份不存在，则初始化为空数组
  if (!acc[year]) acc[year] = []

  // 将文章添加到相应年份的数组中
  acc[year].push(post)

  return acc // 返回累积器
}, {})

export { allPosts, allTags, sortedPosts, sortedAllYears, postsByYear }
