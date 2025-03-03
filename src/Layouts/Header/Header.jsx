import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import './Header.css'
import { ItemNavbar } from '../../components/UI/ItemNavbar/ItemNavbar'

export const Header = () => {
  return (
    <header className='header'>
        
    <h1 class="text-white mt-2 text-4xl font-bold m-4 ">Introduccion a React 2025</h1>
    <Navbar>
      <ul class = "flex space-x-4">
        <ItemNavbar route='/' contentItem='Inicio'/>
        <ItemNavbar route='/class1' contentItem='Clase 1'/>
        <ItemNavbar route='/class2' contentItem='Clase 2'/>
        <ItemNavbar route='/class3' contentItem='Clase 3'/>
      </ul>
    </Navbar>  
  </header>
  )
}