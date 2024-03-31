import { getCollection, type CollectionEntry } from 'astro:content'

const dateSortDesc = (a: string, b: string) => {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

// get `/content/post/*.md`
export const getPosts = async (): Promise<CollectionEntry<'post'>[]> => {
  return (await getCollection('post')).sort((a, b) =>
    dateSortDesc(a.data.date, b.data.date)
  )
}

export const getTags = async () => {
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
