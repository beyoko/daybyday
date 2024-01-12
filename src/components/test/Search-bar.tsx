// SearchBar.tsx

import React, { useState } from 'react'
import { IoSearch } from 'react-icons/io5'

interface SearchResult {
  id: string
  title: string
  // Add more properties as needed
}

interface SearchBarProps {
  onSearch: (keyword: string) => Promise<SearchResult[]>
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [showDropdown, setShowDropdown] = useState(false)
  const [searchKeyword, setSearchKeyword] = useState('')

  const handleSearch = async () => {
    const results = await onSearch(searchKeyword.toLowerCase())
    setSearchResults(results)
    setShowDropdown(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value)
    setShowDropdown(false)
  }

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className="border border-gray-300 px-2 py-1 rounded"
        value={searchKeyword}
        onChange={handleInputChange}
      />
      <button
        className="ml-2 bg-blue-500 text-white px-2 py-1 rounded"
        onClick={handleSearch}
      >
        <IoSearch />
      </button>

      {showDropdown && (
        <div className="absolute mt-1 w-64 bg-white border border-gray-300 rounded shadow">
          {searchResults.map(result => (
            <div
              key={result.id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {result.title}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchBar
