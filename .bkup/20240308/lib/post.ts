import { getCollection, type CollectionEntry } from 'astro:content'
import { dateSortDesc } from '@/lib/utils/dateSortDesc'

export const getPosts = async (): Promise<CollectionEntry<'post'>[]> => {
  return (await getCollection('post')).sort((a, b) =>
    dateSortDesc(a.data.date, b.data.date)
  )
}

export const getTags = async () => {
  const tagsCount: Record<string, number> = {}
  const posts = await getPost()
  if (posts.length) {
    for (const posts of posts) {
      const tags = post.data.tags

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

export const formattedDate = (date: number): string => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
