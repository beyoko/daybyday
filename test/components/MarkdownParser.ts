export interface NavLinksProps {
  level: number
  text: string
}

function parseMarkdown(content: string): NavLinksProps[] {
  const headings = content.match(/^(#{2,})\s+(.*)/gm)
  if (!headings) {
    return []
  }

  const navLinks: NavLinksProps[] = headings.map(heading => ({
    level: heading.split(' ')[0].length - 1,
    text: heading.split(' ').slice(1).join(' ')
  }))

  return navLinks
}

export default parseMarkdown
