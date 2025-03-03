import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { ItemNavbar } from '../../components/UI/ItemNavbar/ItemNavbar'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"


export const Footer = () => {
  return (
    <>
    <footer class='text-white p-4'>
        <p class="">Desarrollado por: <strong>MARIANA OCAMPO</strong>
        </p>
        <Navbar>
          <ul class="flex space-x-4">
            <ItemNavbar contentItem= {<FaFacebook />} />
            <ItemNavbar contentItem= {<FaTwitter />}/>
            <ItemNavbar contentItem= {<FaInstagram />} />
          </ul>
        </Navbar>
    </footer>
    </>
  )
}
