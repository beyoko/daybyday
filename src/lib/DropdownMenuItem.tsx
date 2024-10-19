import { DropdownMenuItemProps } from '@/lib/types'

function DropdownMenuItemClassNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function DropdownMenuItem({ href, children }: DropdownMenuItemProps) {
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

export default DropdownMenuItem
