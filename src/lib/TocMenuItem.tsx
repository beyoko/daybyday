import { Menu } from '@headlessui/react'
import React from 'react'
import type { ReactNode } from 'react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type Props = {
  href: string
  children: ReactNode
}

export default function TocMenuItem({ href, children }) {
  return (
    <li key={heading.slug} className="flex">
      <a
        className={`${heading.depth < 3 && 'font-semibold'} p-1 opacity-50 hover:opacity-100`}
        href={`#${heading.slug}`}
      >
        {heading.text}
      </a>
    </li>
  )
}
