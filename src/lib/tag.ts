import { allPosts } from '@/lib/post'

// version 0.1
const allTags = new Set<string>()
allPosts.map((post) => {
  post.data.tags && post.data.tags.map((tag: string) => allTags.add(tag))
})

// version 0.2
//const allTags = new Set<string>()
//allPosts.forEach((post) => {
//  post.data.tags?.forEach((tag: string) => allTags.add(tag)) // 使用 Optional Chaining 避免空指针错误
//})
//

const tagList = async () => {
  // 筛选符合指定类别的文章
  const tagPosts = allPosts
    .filter((item) => item.data.tags && item.data.tags.includes(tagName))
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())

  return groupPostsByYear(tagPosts)
}

const getTags = async () => {
  const tagsCount: Record<string, number> = {}
  const blogs = await getPosts()
  if (blogs.length) {
    for (const blog of blogs) {
      const tags = blog.data.tags

      for (const tag of tags) {
        if (tag in tagsCount) {
          tagsCount[tag] += 1
        } else {
          tagsCount[tag] = 1
        }
      }
    }
  }
  return tagsCount
}

export { allTags, tagList, getTgas }
