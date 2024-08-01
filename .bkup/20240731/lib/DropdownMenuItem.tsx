import { Menu } from '@headlessui/react'
import '@/styles/prism.css'

interface DropdownMenuItemProps {
  href: string
  children: React.ReactNode
}

const DropdownMenuItemClassNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

export const DropdownMenuItem = ({ href, children }: DropdownMenuItemProps) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href={href}
          className={DropdownMenuItemClassNames(
            active ? 'borderLeftColor' : '',
            'block px-4 py-2 text-sm',
          )}
        >
          {children}
        </a>
      )}
    </Menu.Item>
  )
}
