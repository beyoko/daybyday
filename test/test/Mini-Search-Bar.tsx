import React, { useState } from 'react'

const MiniSearchBar = ({ posts }) => {
  const [query, setQuery] = useState('')
  const [filteredPosts, setFilteredPosts] = useState(posts)

  const handleSearch = () => {
    const lowercaseQuery = query.toLowerCase()
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(lowercaseQuery)
    )
    setFilteredPosts(filtered)
  }

  return (
    <div>
      <h1>Markdown Posts</h1>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {filteredPosts.map(post => (
          <li key={post.title}>
            <h2>{post.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MiniSearchBar
