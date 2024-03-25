// export const formattedDate = (date: string): string => {
export const formattedDate = (date: number): string => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
