import '@/styles/prism.css'

interface Post {
  slug: string
  data: {
    title: string
    pubDate: string
  }
}

interface YearPostsProps {
  year: number
  posts: Post[]
}

const BlogYearPosts = ({ year, posts }: YearPostsProps) => {
  return (
    <li className="relative p-6">
      <span className="absolute right-5 top-2 text-8xl stroke-[2px] opacity-10">
        {year}
      </span>
      <ul className="list-none mt-10">
        {posts.slice(0, 6).map((post) => {
          const date = new Date(post.data.pubDate)
          const options = { month: 'short', day: '2-digit' } as const
          const formattedDate = date.toLocaleDateString('en-GB', options)

          return (
            <div className="mb-6" key={post.slug}>
              <a
                className="linkColor item block font-normal mb-6 mt-2 no-underline"
                href={`/post/${post.slug}`}
              >
                {post.data.title}
              </a>
            </div>
          )
        })}
      </ul>
    </li>
  )
}

export default BlogYearPosts
