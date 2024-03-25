import { getCollection, type CollectionEntry } from 'astro:content'

const dateSortDesc = (a: string, b: string) => {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export const getPosts = async (): Promise<CollectionEntry<'post'>[]> => {
  return (await getCollection('post')).sort((a, b) =>
    dateSortDesc(a.data.date, b.data.date)
  )
}
