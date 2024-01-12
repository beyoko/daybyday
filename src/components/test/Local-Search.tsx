// LogoWithSearch.astro

import { useState } from 'react'

export default function LogoWithSearch() {
  const [showSearch, setShowSearch] = useState(false)
  const [searchResults, setSearchResults] = useState([])

  function handleMouseEnter() {
    setShowSearch(true)
  }

  function handleMouseLeave() {
    setShowSearch(false)
  }

  async function handleSearch(e) {
    const keyword = e.target.value.toLowerCase()
    const response = await fetch(`../../pages/posts/?search=${keyword}`)
    const data = await response.json()
    setSearchResults(data.results)
  }

  return (
    <div className="relative">
      <a
        href="/"
        className="group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h1>logo</h1>
      </a>

      {showSearch && (
        <div className="absolute top-0 right-0 flex items-center bg-white px-2 py-1">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 px-2 py-1 rounded"
            onMouseEnter={e => e.stopPropagation()}
          />
          <button className="ml-2 bg-blue-500 text-white px-2 py-1 rounded">
            Search
          </button>
        </div>
      )}

      {searchResults.length > 0 && (
        <ul className="absolute top-8 right-0 bg-white border border-gray-300 p-2 rounded">
          {searchResults.map(result => (
            <li key={result.id}>{result.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
