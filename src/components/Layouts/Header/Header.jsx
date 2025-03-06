import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { ItemNavbar } from '../../UI/ItemNavbar/ItemNavbar'

export const Header = () => {
  return (
    <header className='w-full bg-rose-100 flex justify-between p-4 list-none'>
        
    <h1 className="mt-2 text-4xl font-bold m-4 ">Introduccion a React 2025</h1>
    <Navbar>
      <ul className = "flex space-x-4 mt-2 m-4 font-bold">
        <ItemNavbar route='/' contentItem='Inicio'/>
        <ItemNavbar route='/class1' contentItem='Clase 1'/>
        <ItemNavbar route='/class2' contentItem='Clase 2'/>
        <ItemNavbar route='/class3' contentItem='Clase 3'/>
      </ul>
    </Navbar>  
  </header>
  )
}