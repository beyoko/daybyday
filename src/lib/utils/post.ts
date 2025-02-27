import { getCollection, type CollectionEntry } from 'astro:content'

const dateSortDesc = (a: string, b: string) => {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

const allPosts = await getCollection('blog')

const getPosts = async (): Promise<CollectionEntry<'blog'>[]> => {
  return (await getCollection('blog')).sort((a, b) =>
    dateSortDesc(a.data.date, b.data.date),
  )
}

export { allPosts, getPosts }
