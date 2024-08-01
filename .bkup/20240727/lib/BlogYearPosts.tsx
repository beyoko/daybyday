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

const BlogPostYear = ({ year, posts }: YearPostsProps) => (
  <li className="relative p-6">
    <span className="absolute right-5 top-2 text-8xl stroke-[2px] opacity-10">
      {year}
    </span>
    <ul className="list-none mt-10">
      {posts.slice(0, 6).map((post) => (
        <div className="mb-6 mt-2 " key={post.slug}>
          <a
            className="item block font-normal no-underline"
            href={`/post/${post.slug}`}
          >
            {post.data.title}
          </a>
          <span className="text-sm">
            {new Date(post.data.pubDate).toLocaleDateString('en-GB', {
              month: 'short', // 显示月份的英文缩写
              day: '2-digit', // 显示日期的两位数
            })}
          </span>
        </div>
      ))}
    </ul>
  </li>
)

export default BlogPostYear
