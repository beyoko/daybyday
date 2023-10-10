import React from 'react'
import type { TagsLinkItemProps } from '../types/interface'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join('')
}

export default function TagsLinkItem({ href, children }: TagsLinkItemProps) {
  return (
    <div>
      <a href={href}>{children}</a>
    </div>
  )
}
