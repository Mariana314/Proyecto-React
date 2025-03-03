import React from 'react'
import { ItemNavbar } from '../../components/UI/ItemNavbar/ItemNavbar'

export const Navbar = ( {children} ) => {
  return (
    <>
    <nav>
      { children }
    </nav>
    </>
  )
}
