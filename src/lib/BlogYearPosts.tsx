import PostYear from '@/lib/PostYear'
import ReadTime from '@/lib/ReadTime'

interface Post {
  slug: string
  data: {
    title: string
    pubDate: string
  }
}

interface YearPostsProps {
  year: string
  posts: Post[]
}

export default ({ year, posts }: YearPostsProps) => (
  <li className="relative p-6">
    <span className="secColor absolute right-5 top-2 text-8xl stroke-[2px]">
      {year}
    </span>
    <ul className="list-none mt-10">
      {posts.map((post) => (
        <span className="flex mb-6 mt-2" key={post.slug}>
          <a
            className="linkColor block font-normal no-underline" // Assuming this is a valid class
            href={`/post/${post.slug}`}
          >
            {post.data.title}
          </a>
          <PostYear year={post} />
          <ReadTime time={post} />
        </span>
      ))}
    </ul>
  </li>
)
