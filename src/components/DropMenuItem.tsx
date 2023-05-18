import thing from 'module';
import React, { ReactNode } from 'react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type Props = {
  href: string
  children: ReactNode
}

export default function DropMenuItem({href, children }: Props) {
  return(

  )}
