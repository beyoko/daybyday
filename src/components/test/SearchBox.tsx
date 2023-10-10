import React, { useState } from 'react'

interface SearchBoxProps {
  onSearch: (query: string) => void
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = () => {
    // 将搜索查询传递给父组件进行搜索
    onSearch(searchQuery)
  }

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="py-2 pr-8 pl-3 block w-full rounded-full border border-gray-300 shadow-sm focus:ring focus:ring-indigo-300 focus:outline-none"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <button
        className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  )
}

export default SearchBox
