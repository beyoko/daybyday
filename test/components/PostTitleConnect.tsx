import { MDXProvider } from '@mdx-js/react'
import { useRouteData } from 'react-static'
import { parse } from '@astrojs/mdx'
import { h } from 'preact'
import { useEffect } from 'preact/hooks'

const Navigation = () => {
  const { contents } = useRouteData()

  const headings = []

  useEffect(() => {
    const headerElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
    headerElements.forEach(header => {
      headings.push({
        id: header.id,
        text: header.innerText
      })
    })
  }, [])

  return (
    <nav>
      <ul>
        {headings.map(heading => (
          <li key={heading.id}>
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const MarkdownWrapper = ({ children }) => {
  const { contents } = useRouteData()

  const components = {
    nav: Navigation
  }

  const mdxContent = parse(contents)

  return (
    <MDXProvider components={components}>
      <div>{mdxContent}</div>
    </MDXProvider>
  )
}

export default MarkdownWrapper
