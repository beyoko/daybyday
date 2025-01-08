import type { CollectionEntry } from 'astro:content'

type Acc = {
  [year: string]: CollectionEntry<'blog'>[]
}

// 文章按年份分组，展示全部文章
const PostList = ({ sortedPost }) => {
  sortedPost.reduce((acc: Acc, post) => {
    const year = post.data.pubDate.getFullYear() // 提取年份

    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(post)
    return acc
  }, {})
}
