import { allPosts } from '@/lib/utils/post'

// version 0.3
// 使用Set时进行类型断言
const allTags = new Set<string>(
  allPosts.flatMap((post) =>
    (post.data.tags ?? []).map((t) => t.toLowerCase()),
  ),
)

export { allTags }
