import React, { useState, useEffect } from 'react'
import type { MarkdownHeading } from 'astro'
import { unescape } from '../../types/html-escaper'

interface Props {
  toc: TocItem[]
  labels: {
    onThisPage: string
  }
  isMobile?: boolean
}
interface TocItem extends MarkdownHeading {
  children: TocItem[]
}

const TableOfContents = ({ toc = [], labels, isMobile }: Props) => {
  const [currentHeading, setCurrentHeading] = useState({
    slug: toc[0].slug,
    text: toc[0].text
  })
  const [open, setOpen] = useState(!isMobile)
  const onThisPageID = 'on-this-page-heading'

  const Container = ({ children }: { children: React.ReactNode }) => {
    return isMobile ? (
      <details
        open={open}
        onToggle={(e: React.ChangeEvent<HTMLDetailsElement>) =>
          setOpen(e.target.open)
        }
        className="toc-mobile-container"
      >
        {children}
      </details>
    ) : (
      <>{children}</>
    )
  }

  const HeadingContainer = ({ children }: { children: React.ReactElement }) => {
    return isMobile ? (
      <summary className="toc-mobile-header">
        <div className="toc-mobile-header-content">
          <div className="toc-toggle">{children}</div>
          {!open && currentHeading?.slug !== 'overview' && (
            <span className="toc-current-heading">
              {unescape(currentHeading?.text || '')}
            </span>
          )}
        </div>
      </summary>
    ) : (
      children
    )
  }

  useEffect(() => {
    const setCurrent: IntersectionObserverCallback = entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const { id } = entry.target
          if (id === onThisPageID) continue
          setCurrentHeading({
            slug: entry.target.id,
            text: entry.target.textContent || ''
          })
          break
        }
      }
    }

    const observerOptions: IntersectionObserverInit = {
      rootMargin: '-100px 0% -66%',
      threshold: 1
    }

    const headingsObserver = new IntersectionObserver(
      setCurrent,
      observerOptions
    )
    document
      .querySelectorAll('article :is(h1,h2,h3)')
      .forEach(h => headingsObserver.observe(h))
    return () => headingsObserver.disconnect()
  }, [])

  const onLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!isMobile) return
    setOpen(false)
    setCurrentHeading({
      slug: e.currentTarget.getAttribute('href')!.replace('#', ''),
      text: e.currentTarget.textContent || ''
    })
  }

  const TableOfContentsItem = ({ heading }: { heading: TocItem }) => {
    const { depth, slug, text, children } = heading
    return (
      <li>
        <a
          className={`header-link depth-${depth} ${
            currentHeading.slug === slug ? 'current-header-link' : ''
          }`.trim()}
          href={`#${slug}`}
          onClick={onLinkClick}
        >
          {unescape(text)}
        </a>
        {children.length > 0 ? (
          <ul>
            {children.map(heading => (
              <TableOfContentsItem key={heading.slug} heading={heading} />
            ))}
          </ul>
        ) : null}
      </li>
    )
  }

  return (
    <Container>
      <HeadingContainer>
        <h2 className="heading" id={onThisPageID}>
          {labels.onThisPage}
        </h2>
      </HeadingContainer>
      <ul className="toc-root">
        {toc.map(heading2 => (
          <TableOfContentsItem key={heading2.slug} heading={heading2} />
        ))}
      </ul>
    </Container>
  )
}

export default TableOfContents
