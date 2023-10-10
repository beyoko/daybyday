// SearchBar.tsx

import { useState, ChangeEvent } from 'react'
import fs from 'fs'
import path from 'path'

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<string[]>([])

  const searchMarkdownFiles = (query: string) => {
    const files = fs.readdirSync('../../pages/posts/*.md')
    const results = files.filter(file => {
      const fileName = path.parse(file).name.toLowerCase()
      return fileName.includes(query.toLowerCase())
    })
    setSearchResults(results)
  }

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchTerm(query)
    searchMarkdownFiles(query)
  }

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
      />
      <ul>
        {searchResults.map(result => (
          <li key={result}>{result}</li>
        ))}
      </ul>
    </div>
  )
}
