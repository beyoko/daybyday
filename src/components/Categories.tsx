import { useState, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

interface CategoriesMenuProps {
  tags: string[]
}
function CategoriesMenu({ tags }: string) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return(

  )
}
