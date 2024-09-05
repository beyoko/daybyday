import { readingTime } from '@/lib/post'

export default function ReadTime({ time }) {
  const content = time.body
  const readTime = readingTime(content)
  return <span className="secColor text-sm ml-3">{readTime}Min</span>
}
