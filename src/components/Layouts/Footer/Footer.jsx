import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { ItemNavbar } from '../../UI/ItemNavbar/ItemNavbar'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"


export const Footer = () => {
  return (
    <>
      <footer className=' p-4 text-1xl '>
        <div className="flex items-center gap-4 justify-center">
          <p>Desarrollado por: <strong>MARIANA OCAMPO</strong></p>
          <Navbar>
            <ul className="flex space-x-3">
              <ItemNavbar contentItem={<FaFacebook />} />
              <ItemNavbar contentItem={<FaTwitter />} />
              <ItemNavbar contentItem={<FaInstagram />} />
            </ul>
          </Navbar>
        </div>
      </footer>
    </>
  )
}
