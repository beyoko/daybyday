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

export default function TocMenuItem({ href, children, onClick }) {
  return (
    <>
      {({ active }) => (
        <a
          href={href}
          className={classNames(
            active ? 'bg-orange-200 dark:bg-zinc-700' : '',
            'block px-4 py-2 text-sm',
          )}
          onClick={onClick}
        >
          {children}
        </a>
      )}
    </>
  )
}
