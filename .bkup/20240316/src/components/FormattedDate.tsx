// export const formattedDate = (date: string): string => {
// export const formattedDate = (date: number): string => {
//   return new Date(date).toLocaleDateString('en-US', {
//     year: 'numeric',
//     month: 'short',
//     day: 'numeric'
//   })
// }

// Handles both timestamps and date strings
export const formattedDate = (date: string | number): string | null => {
  if (typeof date === 'number') {
    // Date is a Unix timestamp
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  } else if (typeof date === 'string') {
    // Try parsing date string (assuming YYYY-MM-DD format)
    try {
      const dateObj = new Date(date)
      if (!isNaN(dateObj.getTime())) {
        // Valid date string, format it
        return dateObj.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })
      }
    } catch (error) {
      console.error('Error parsing date string:', error)
    }
  }

  // If date is invalid or unparsable, return null or an error message
  return null // Or display an error message in JSX
}
