import '@/styles/prism.css'

interface YearDate {
  data: {
    pubDate: string
  }
}

interface PostYearProps {
  yearDate: YearDate
}

export default ({ yearDate }: PostYearProps) => {
  const date = new Date(yearDate.data.pubDate)
  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
  })

  return <span className="secColor text-sm ml-3">{formattedDate}</span>
}
