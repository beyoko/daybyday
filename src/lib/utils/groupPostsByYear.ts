// 文章按年份分组，展示全部文章
export const groupPostsByYear = (
  posts: BlogEntry[],
): Record<string, BlogEntry[]> => {
  return posts.reduce((acc: Record<string, BlogEntry[]>, post) => {
    const year = post.data.pubDate
      .getFullYear()
      .toString()(
        // 转换为字符串键

        // 使用 Optional Chaining 和 Nullish Coalescing Operator 简化代码
        (acc[year] ??= []),
      )
      .push(post)

    return acc
  }, {})
}
