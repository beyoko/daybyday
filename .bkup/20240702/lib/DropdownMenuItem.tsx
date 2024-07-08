import { Menu } from '@headlessui/react'

interface DropdownMenuItemProps {
  href: string
  children: React.ReactNode
}

const DropdownMenuItemClassNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

export function DropdownMenuItem({ href, children }: DropdownMenuItemProps) {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href={href}
          className={DropdownMenuItemClassNames(
            active ? 'bg-zinc-950 text-white dark:bg-zinc-700 ' : '',
            'block px-4 py-2 text-sm',
          )}
        >
          {children}
        </a>
      )}
    </Menu.Item>
  )
}
