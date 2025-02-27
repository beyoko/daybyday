// 阅读时间计算
const readingTime = (html: string) => {
  const words = html
    .replace(/<[^>]+>/g, '')
    .split(/\s+/)
    .filter(Boolean).length
  const minutes = Math.ceil(words / 200)
  return `· ${minutes} Min`
}

export { readingTime }
