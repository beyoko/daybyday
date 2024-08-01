import '@/styles/prism.css'

export default ({ year }) => {
  const date = new Date(year.data.pubDate)
  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
  })

  return <span className="secColor text-sm ml-3">{formattedDate}</span>
}
