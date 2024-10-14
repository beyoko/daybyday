import { readingTime } from '@/lib/post'
import { BlogLinkProps } from '@/lib/types'
import '@/styles/prism.css'

const BlogLink = ({ years, posts }: BlogLinkProps) => {
  const sortedPosts = posts.sort((a, b) => {
    return (
      new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
    )
  })

  return sortedPosts.map((post) => (
    <li className="flex flex-col md:flex-row mb-6 mt-2">
      <a
        className="linkColor block font-normal no-underline md:mr-3 z-10"
        href={`/post/${post.slug}`}
      >
        {post.data.title}
      </a>
      <div className="secColor flex flex-row mt-2 md:mt-0">
        <span>
          {new Date(post.data.pubDate).toLocaleDateString('en-US', {
            month: 'short',
            day: '2-digit',
          })}
        </span>
        <span> ·{readingTime(post.body)} Min</span>
      </div>
    </li>
  ))
}
export default BlogLink
