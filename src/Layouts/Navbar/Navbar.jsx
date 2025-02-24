import React from 'react'
import { ItemNavbar } from '../../components/ItemNavbar/ItemNavbar'

export const Navbar = () => {
  return (
    <>
      {/* <nav class="p-4">
        <ul class="flex space-x-4" >
          <li>
            <a href="#" class="text-green-400 text-xl font-bold">Clase 1</a>
          </li>
          <li>
            <a href="#" class="text-green-400 text-xl font-bold">Clase 2</a>
          </li>
          <li>
            <a href="#" class="text-green-400 text-xl font-bold">Clase 3</a>
          </li>
        </ul>
      </nav> */}
      <nav>
        <ul className='w-full flex justify-between'>
         <ItemNavbar 
         myStyles='text-white font-bold m-2 hover:text-sky400 hover:underline'
         contentItem="Home" 
         />
        <ItemNavbar 
         myStyles='text-white font-bold m-2 hover:text-sky400 hover:underline'
         contentItem="Clase 1" 
         />
         <ItemNavbar 
         myStyles='text-white font-bold m-2 hover:text-sky400 hover:underline'
         contentItem="Clase 2" 
         />

         
        </ul>
      </nav>
    </>
  )
}
