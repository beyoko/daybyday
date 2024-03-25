export const SITE_TITLE = 'C.I.C'
export const SITE_DESCRIPTION = 'inside...d'
export const SITE_404 = '404'

export interface DropdownMenuProps {
  tags: string[]
}

export interface DropdownMenuItemProps {
  href: string
  children: React.ReactNode
}

interface SiteMeta {
  title: string
  description: string
  author: string
}

export const siteMeta: SiteMeta = {
  title: 'C.I.C',
  description: 'inside...d',
  author: 'me'
}
