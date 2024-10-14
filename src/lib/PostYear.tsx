import { PostYearProps } from '@/lib/types'
import '@/styles/prism.css'

const PostYear = ({ postYear }: PostYearProps) => (
  <ul className="relative p-6">
    <span className="secColor absolute right-5 top-2 text-8xl stroke-[2px]">
      {postYear}
    </span>
  </ul>
)
export default PostYear
