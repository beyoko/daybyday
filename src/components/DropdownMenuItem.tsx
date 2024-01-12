import React from 'react'
import { Menu } from '@headlessui/react'
import type { DropdownMenuItemProps } from '../types/interface'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function DropdownMenuItem({
  href,
  children
}: DropdownMenuItemProps) {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href={href}
          className={classNames(
            active ? 'bg-gray-950 text-gray-50 dark:bg-zinc-700 ' : '',
            'block px-4 py-2 text-sm'
          )}
        >
          {children}
        </a>
      )}
    </Menu.Item>
  )
}
