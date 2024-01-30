import React from 'react'
import marked from 'marked'

interface TitleBarProps {
  markdownContent: string
}

const TitleBar: React.FC<TitleBarProps> = ({ markdownContent }) => {
  const headings = extractHeadings(markdownContent)

  return (
    <nav>
      <ul>
        {headings.map((heading, index) => (
          <li key={index}>
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

interface Heading {
  id: string
  text: string
}

function extractHeadings(markdownContent: string): Heading[] {
  const headings: Heading[] = []

  const renderer = new marked.Renderer()
  renderer.heading = (text: string, level: number): string => {
    const id = text.toLowerCase().replace(/[^\w]+/g, '-')
    headings.push({ id, text })
    return `<h${level} id="${id}">${text}</h${level}>`
  }

  marked(markdownContent, { renderer })

  return headings
}

export default TitleBar
