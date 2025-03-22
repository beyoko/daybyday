import { Menu, Transition } from '@headlessui/react'
import { Bars3Icon, ListBulletIcon } from '@heroicons/react/24/solid'

interface DropdownMenuProps {
  children: React.ReactNode
  iconName: 'menu' | 'toc'
}

const ICONS = {
  menu: Bars3Icon,
  toc: ListBulletIcon,
}

export default function DropdownMenu({
  children,
  iconName,
}: DropdownMenuProps) {
  const Icon = ICONS[iconName]

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button
        className="inline-flex items-center justify-center p-2 text-sm focus:outline-none"
        aria-label="menu"
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </Menu.Button>

      <Transition
        enter="transition ease-out duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-50"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 max-h-96 overflow-y-auto rounded-lg backdrop-blur-sm shadow-lg focus:outline-none bg-gray-50 dark:bg-gray-950 border border-gray-300 dark:border-gray-700">
          {children}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
