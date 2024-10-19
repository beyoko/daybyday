import { getCollection, type CollectionEntry } from 'astro:content'

const allPosts = await getCollection('post')

const allTags = new Set<string>()
allPosts.map((post) => {
  post.data.tags && post.data.tags.map((tag: string) => allTags.add(tag))
})

export { allPosts, allTags }
