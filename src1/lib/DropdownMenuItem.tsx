interface DropdownMenuItemProps {
  href: string
  children: React.ReactNode
}

function DropdownMenuItemClassNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function DropdownMenuItem({ href, children }: DropdownMenuItemProps) {
  return (
    <Menu.Item>
      {({ active }: { active: boolean }) => (
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
