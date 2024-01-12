import { useCallback, useRef, useState } from 'react'

const MiniSearch = () => {
  const searchRef = useRef(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)
  const [results, setResults] = useState([])

  const searchEndPoint = query => `../pages/posts/search?q=${query}`

  const onChange = useCallback(event => {
    const query = event.target.value
    setQuery(query)
    if (query.length > 2) {
      fetch(searchEndPoint(query))
        .then(res => res.json())
        .then(res => setResults(res))
    } else {
      setResults([])
    }
  }, [])

  const onFocus = useCallback(() => {
    setActive(true)
    window.addEventListener('click', onClick)
  }, [])

  const onClick = useCallback(event => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false)
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <div ref={searchRef}>
      <input type="text" value={query} onChange={onChange} onFocus={onFocus} />
      {active && results.length > 0 && (
        <ul>
          {results.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default MiniSearch
