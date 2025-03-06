import React from 'react'
import NF4040 from '../../../assets/Images/notFound.png'

export const NotFound = () => {
  return (
   <>
   <h1 className='text-5xl font-bold'>Página No Encontrada</h1>
   <img className="size-100 mt-5" src={ NF4040 } alt="" />
   
   </>
  
  )
}
