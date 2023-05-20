import React, { ReactNode } from 'react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join('')
}

type Props = {
  href: string
  children: ReactNode
}

export default function TagsLinkItem({ href, children }: Props) {
  return (
    <div>
      <a href={href}>{children}</a>
    </div>
  )
}
