import { getCollection, type CollectionEntry } from 'astro:content'

const dateSortDesc = (a: string, b: string) => {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

// get `/content/post/*.md`
const getPosts = async (): Promise<CollectionEntry<'post'>[]> => {
  return (await getCollection('post')).sort((a, b) =>
    dateSortDesc(a.data.date, b.data.date),
  )
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

const capitalize = (str: string): string => {
  if (typeof str !== 'string' || str.length === 0) {
    return str
  }
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const excludeDrafts = ({ data }: CollectionEntry<'post'>): boolean => {
  // Usually this should be like this - import.meta.env.PROD ? !data.draft : true; but for the purpose of the demo, we are displaying drafts as well
  return import.meta.env.PROD ? true : true
}

const sortBlogPosts = (
  posts: CollectionEntry<'post'>[] | null,
): CollectionEntry<'post'>[] => {
  if (!posts) return []
  return posts.sort((a, b) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  })
}

const buildHierarchy = (headings: any) => {
  const toc: any[] = []
  const parentHeadings = new Map()

  if (!headings) return toc

  headings.forEach((h: any) => {
    const heading = { ...h, subheadings: [] }
    parentHeadings.set(heading.depth, heading)
    // Change 2 to 1 if your markdown includes your <h1>
    if (heading.depth === 2) {
      toc.push(heading)
    } else {
      parentHeadings.get(heading.depth - 1).subheadings.push(heading)
    }
  })
  return toc
}

export { getPosts, getTags, capitalize, excludeDrafts, buildHierarchy }
