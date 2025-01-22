import { getCollection, type CollectionEntry } from 'astro:content'
import { dateSortDesc } from '@/lib/utils/dateSortDesc'

const allPosts = await getCollection('blog')

const getPosts = async (): Promise<CollectionEntry<'blog'>[]> => {
  return (await getCollection('blog')).sort((a, b) =>
    dateSortDesc(a.data.date, b.data.date),
  )
}

export { allPosts, getPosts }
