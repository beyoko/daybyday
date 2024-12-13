import { Menu } from '@headlessui/react'

interface DropdownMenuItemProps {
  href: string
  children: React.ReactNode
}

//function DropdownMenuItemClassNames(...classes: string[]) {
//  return classes.filter(Boolean).join(' ')
//}

function DropdownMenuItem({ href, children }: DropdownMenuItemProps) {
  return (
    <Menu.Item key={children}>
      {({ active }) => (
        <a
          href={href}
          className={`${active ? 'bg-gray-100 dark:bg-gray-700' : ''} block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white`}
        >
          {tag}
        </a>
      )}
    </Menu.Item>
  )
}

export default DropdownMenuItem
