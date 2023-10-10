import React, { useState, useEffect } from 'react'

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<string[]>([])

  const allPosts = [
    // 你的Markdown文章数组，例如 [{ title: '文章1' }, { title: '文章2' }, ...]
  ]

  useEffect(() => {
    const filteredResults = allPosts
      .filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map(post => post.title)
    setSearchResults(filteredResults)
  }, [searchTerm, allPosts])

  return (
    <div className="w-64 mx-auto mt-8">
      <input
        type="text"
        className="w-full p-2 border rounded"
        placeholder="搜索相关词..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ul className="mt-2">
        {searchResults.map(result => (
          <li key={result} className="text-blue-500 cursor-pointer">
            {result}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchBar
