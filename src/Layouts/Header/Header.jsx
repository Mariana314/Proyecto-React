import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import './Header.css'

export const Header = () => {
  return (
    <header className='header'>
        
    <h1 class="text-green-400 mt-2 text-4xl font-bold m-4 ">Introduccion a React 2025</h1>
    <Navbar />  
  </header>
  )
}